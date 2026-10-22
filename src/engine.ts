import { randomUUID } from 'node:crypto';
import { z } from 'zod';
import type { ModelAdapter, ModelFailure } from './adapter.js';
import type { Repository } from './persistence.js';
import { defaults, encodedImageSchema, settingsSchema, starterPresets, validateRun, type EncodedImage, type ImageRef, type FollowUp, type DebateMessage, type DebateSession, type ModelInfo, type Participant, type Preferences, type Settings, type Snapshot, type Task, type TaskStatus, type Usage } from './state.js';
import { exportSession, hasReviewSections, makePrompt, publish, updateIssues } from './content.js';
import { Cancelled, RequestGate, realClock, sleep, type Clock } from './scheduler.js';
import { noImages, validateImageModels, ImageInputError, type ImageGateway } from './images.js';

export interface RepositoryLike { list(): DebateSession[]; get(id: string): DebateSession | undefined; save(s: DebateSession): Promise<void>; remove(id: string): Promise<void>; getPreferences(): Preferences | undefined; savePreferences(p: Preferences): Promise<void>; recover(): Promise<void>; }
interface Running { session: DebateSession; abort: AbortController; gate: RequestGate; done: Promise<void>; reservedTokens: number; saveChain: Promise<void>; }
interface Options { providerLimits?: Record<string, number>; providerSpacingMs?: Record<string, number>; maxConcurrentRuns?: number; clock?: Clock; images?: ImageGateway; }
const actionSchema = z.object({ action: z.enum(['snapshot', 'get', 'settings', 'start', 'stop', 'review', 'rename', 'delete', 'select', 'rerun', 'preset-save', 'preset-delete', 'preset-apply', 'export', 'image', 'followup']), message: z.string().trim().min(1).max(30000).optional(), images: z.array(encodedImageSchema).max(4).optional(), imageIndex: z.number().int().min(0).max(19).optional(), id: z.string().max(100).nullable().optional(), question: z.string().trim().min(1).max(30000).optional(), settings: settingsSchema.optional(), name: z.string().trim().min(1).max(100).optional(), title: z.string().trim().min(1).max(160).optional(), format: z.enum(['json', 'markdown']).optional() }).strict();
const ACTIVE: TaskStatus[] = ['queued', 'waiting for cooldown', 'responding'];
const TRANSIENT = ['RATE_LIMIT', 'SERVER', 'TIMEOUT', 'TRANSPORT', 'EMPTY_RESPONSE'];

export class FollowUpError extends Error { constructor(message: string) { super(message); this.name = 'FollowUpError'; } }
/** No agents or tools are given to debate participants: only bounded text/image calls. */
export class DebateService {
  private preferences!: Preferences;
  private runs = new Map<string, Running>();
  private models: ModelInfo[] = [];
  private diagnostics: string[] = [];
  private localOnly = false;
  private clock: Clock;
  private mutation: Promise<unknown> = Promise.resolve();
  private images: ImageGateway;
  constructor(private adapter: ModelAdapter, private repository: RepositoryLike | Repository, private options: Options = {}) { this.clock = options.clock ?? realClock; this.images = options.images ?? noImages; }
  async initialize(): Promise<void> {
    await this.repository.recover(); await this.refreshCatalog();
    this.preferences = this.repository.getPreferences() ?? { settings: defaults(this.models), presets: starterPresets(defaults(this.models)), activeId: null };
    await this.repository.savePreferences(this.preferences);
  }
  private async refreshCatalog(): Promise<void> { const c = await this.adapter.catalog(); this.models = c.models; this.diagnostics = c.diagnostics; this.localOnly = c.localOnly; }
  private savePreferences(): Promise<void> { return this.repository.savePreferences(structuredClone(this.preferences)); }
  async operation(input: unknown): Promise<unknown> {
    const q = actionSchema.parse(input);
    if (q.message !== undefined && q.action !== 'followup') throw new FollowUpError('New conversation messages are accepted only with the followup action.');
    if (q.images?.length && q.action !== 'start') throw new ImageInputError('Image uploads are accepted only when starting a new debate.');
    if (q.action === 'snapshot') { if (!this.runs.size) await this.refreshCatalog(); return this.snapshot(); }
    if (q.action === 'get') return this.get(requireField(q.id, 'id'));
    if (q.action === 'export') return exportSession(this.get(requireField(q.id, 'id')), requireField(q.format, 'format'));
    if (q.action === 'image') { const s = this.get(requireField(q.id, 'id')), image = s.images[requireField(q.imageIndex, 'imageIndex')]; if (!image) throw new ImageInputError('Image not found in this debate session.'); return this.images.read(image); }
    // Mutations serialize across GUI + tool callers; running inference never holds this lock.
    const result = this.mutation.catch(() => {}).then(async () => {
      switch (q.action) {
        case 'settings': this.preferences.settings = settingsSchema.parse(requireField(q.settings, 'settings')); await this.savePreferences(); return { saved: true, applies: 'future runs' };
        case 'start': return this.start(requireField(q.question, 'question'), q.settings ?? this.preferences.settings, q.images);
        case 'rerun': { const s = this.get(requireField(q.id, 'id')); return this.start(s.question, s.settings, undefined, s.images, s.followUps); }
        case 'followup': {
          if (q.settings !== undefined || q.images !== undefined) throw new FollowUpError('Follow-up uses the saved participants, settings and original images. Start a new debate to change them.');
          return this.followUp(requireField(q.id, 'id'), requireField(q.message, 'message'));
        }
        case 'stop': { const run = this.runs.get(requireField(q.id, 'id')); if (!run) throw new Error('This discussion is not executing.'); await this.stop(run, 'stopped', 'User pressed Stop. No review was started.'); return { stopped: true }; }
        case 'review': return this.reviewAvailable(requireField(q.id, 'id'));
        case 'select': { if (q.id) this.get(q.id); this.preferences.activeId = q.id ?? null; await this.savePreferences(); return { selected: this.preferences.activeId }; }
        case 'rename': { const s = this.get(requireField(q.id, 'id')); if (this.runs.has(s.id)) throw new Error('Stop this run before renaming it.'); s.title = requireField(q.title, 'title'); s.updatedAt = this.clock.now(); await this.repository.save(s); return { renamed: true }; }
        case 'delete': { const id = requireField(q.id, 'id'); if (this.runs.has(id)) throw new Error('Stop this run before deleting it.'); await this.repository.remove(id); if (this.preferences.activeId === id) this.preferences.activeId = null; await this.savePreferences(); return { deleted: true }; }
        case 'preset-save': {
          const settings = settingsSchema.parse(requireField(q.settings, 'settings')), name = requireField(q.name, 'name');
          const preset = { id: q.id ?? randomUUID(), name, settings }; const i = this.preferences.presets.findIndex(p => p.id === preset.id);
          if (i < 0) { if (this.preferences.presets.length >= 100) throw new Error('Preset limit reached (100).'); this.preferences.presets.push(preset); } else this.preferences.presets[i] = preset;
          await this.savePreferences(); return preset;
        }
        case 'preset-delete': this.preferences.presets = this.preferences.presets.filter(p => p.id !== requireField(q.id, 'id')); await this.savePreferences(); return { deleted: true };
        case 'preset-apply': { const p = this.preferences.presets.find(p => p.id === q.id); if (!p) throw new Error('Preset not found.'); this.preferences.settings = structuredClone(p.settings); await this.savePreferences(); return { applied: true, applies: 'future runs' }; }
        default: throw new Error('Unsupported action');
      }
    });
    this.mutation = result; return result;
  }
  private snapshot(): Snapshot {
    const sessions = this.repository.list().map(s => this.runs.has(s.id) ? structuredClone(this.runs.get(s.id)!.session) : s);
    return { imagePolicy: this.images.policy(), models: structuredClone(this.models), diagnostics: [...this.diagnostics], localOnly: this.localOnly, settings: structuredClone(this.preferences.settings), presets: structuredClone(this.preferences.presets), sessions: sessions.sort((a, b) => b.createdAt - a.createdAt), activeId: this.preferences.activeId };
  }
  private get(id: string): DebateSession { const s = this.runs.get(id)?.session ?? this.repository.get(id); if (!s) throw new Error('Debate session not found.'); return structuredClone(s); }
  private effectiveSettings(settings: Settings): Settings {
    const s = structuredClone(settings);
    for (const [provider, limit] of Object.entries(this.options.providerLimits ?? {})) s.providerLimits[provider] = Math.min(s.providerLimits[provider] ?? s.concurrency, limit);
    for (const [provider, delay] of Object.entries(this.options.providerSpacingMs ?? {})) s.providerSpacingMs[provider] = Math.max(s.providerSpacingMs[provider] ?? 0, delay);
    return s;
  }
  private ensureCapacity(): void { if (this.runs.size >= (this.options.maxConcurrentRuns ?? 1)) throw new Error('Another debate is active. Stop it or wait before starting another.'); }
  private async start(question: string, settings: Settings, uploads: EncodedImage[] = [], saved: ImageRef[] = [], priorFollowUps: FollowUp[] = []): Promise<{ id: string }> {
    this.ensureCapacity(); await this.refreshCatalog();
    const effective = validateRun(this.effectiveSettings(settings), this.models);
    validateImageModels(effective, this.models, uploads.length || saved.length);
    const images = saved.length ? structuredClone(saved) : await this.images.admit(uploads);
    if (saved.length) await this.images.verify(images);
    const now = this.clock.now();
    const s: DebateSession = { schemaVersion: 1, id: randomUUID(), title: question.slice(0, 100), question, images, createdAt: now, updatedAt: now, status: 'running', settings: effective, messages: [], tasks: [], issues: [], followUps: priorFollowUps.map(turn => ({ ...turn, id: randomUUID(), startRound: 1, budgetStart: 0 })), reviews: [], requests: [], usage: { inputTokens: 0, outputTokens: 0, totalTokens: 0 }, usageUnavailable: false, budgetUsed: 0, budgetEstimated: false, round: 0, stage: 'Queued', stageDeadline: now + effective.roundMs, deadline: now + effective.overallMs, startedAt: now, final: null, reviewError: null, stopReason: null, compression: [] };
    await this.repository.save(s); this.preferences.activeId = s.id; this.preferences.settings = structuredClone(settings); await this.savePreferences();
    const run = this.createRun(s); run.done = this.execute(run).finally(() => { run.gate.dispose(); this.runs.delete(s.id); });
    return { id: s.id };
  }
  private async followUp(id: string, message: string): Promise<{ id: string; followUpId: string }> {
    this.ensureCapacity(); const s = this.get(id);
    if (s.status === 'running' || s.status === 'reviewing') throw new FollowUpError('Wait for this discussion to finish, or stop it before sending a follow-up.');
    if (s.followUps.length >= 30) throw new FollowUpError('This debate has reached the limit of 30 follow-up messages. Start a new debate to continue.');
    await this.refreshCatalog();
    s.settings = validateRun(this.effectiveSettings(s.settings), this.models);
    validateImageModels(s.settings, this.models, s.images.length);
    await this.images.verify(s.images);
    this.archiveFinal(s);
    const now = this.clock.now(), startRound = Math.max(s.round, this.cycleStart(s), ...s.messages.map(m => m.round), ...s.tasks.map(t => t.round)) + 1;
    const turn: FollowUp = { id: randomUUID(), text: message, timestamp: now, startRound, budgetStart: s.budgetUsed };
    s.followUps.push(turn); s.final = null; s.reviewError = null; s.stopReason = null; s.endedAt = undefined;
    s.status = 'running'; s.stage = 'Follow-up discussion'; s.deadline = now + s.settings.overallMs;
    s.stageDeadline = now + s.settings.roundMs; s.updatedAt = now;
    try { makePrompt(s, s.settings.participants.find(p => p.enabled)!, s.messages, s.stage, [], false); }
    catch { throw new FollowUpError('Follow-up context exceeds the saved context budget. No message was added. Start a new debate with a larger context budget.'); }
    // Commit the complete user turn and archived review before admitting any provider call.
    // A failed write leaves the previously completed conversation untouched.
    await this.repository.save(s);
    const run = this.createRun(s); run.done = this.execute(run).finally(() => { run.gate.dispose(); this.runs.delete(s.id); });
    return { id: s.id, followUpId: turn.id };
  }
  private archiveFinal(s: DebateSession): void {
    if (s.final) s.reviews.push({ ...structuredClone(s.final), afterRound: s.round });
  }
  private cycleStart(s: DebateSession): number { return s.followUps.at(-1)?.startRound ?? 1; }
  private cycleBudgetUsed(s: DebateSession): number { return Math.max(0, s.budgetUsed - (s.followUps.at(-1)?.budgetStart ?? 0)); }
  private createRun(s: DebateSession): Running { const run: Running = { session: s, abort: new AbortController(), gate: new RequestGate(s.settings, this.clock), done: Promise.resolve(), reservedTokens: 0, saveChain: Promise.resolve() }; this.runs.set(s.id, run); return run; }
  private persist(run: Running): Promise<void> {
    run.session.updatedAt = this.clock.now(); const copy = structuredClone(run.session);
    run.saveChain = run.saveChain.then(() => this.repository.save(copy)); return run.saveChain;
  }
  private async execute(run: Running): Promise<void> {
    const s = run.session, settings = s.settings, on = settings.participants.filter(p => p.enabled), debateDeadline = s.deadline - settings.reserveReviewMs;
    try {
      const startRound = this.cycleStart(s);
      for (let cycleRound = 1; cycleRound <= settings.rounds; cycleRound++) {
        if (!this.canSchedule(run, debateDeadline)) break;
        const round = startRound + cycleRound - 1; s.round = round;
        const independent = cycleRound === 1 && settings.mode !== 'sequential' && !s.messages.length;
        s.stage = independent ? 'Independent proposals' : s.followUps.length && cycleRound === 1 ? 'Follow-up discussion' : settings.mode === 'sequential' ? 'Sequential discussion (later turns have additional context)' : settings.mode === 'hybrid' ? 'Targeted replies (fair queue)' : round % 2 === 0 ? 'Focused challenges' : 'Defenses and corrections';
        s.stageDeadline = Math.min(this.clock.now() + settings.roundMs, debateDeadline);
        await this.persist(run);
        const ordered = settings.speakingOrder === 'rotating' || (settings.mode === 'hybrid' && !independent) ? rotate(on, round - 1) : on;
        if (settings.mode === 'parallel' || independent) {
          const snapshot = structuredClone(s.messages); // Once per stage, never arrival-dependent.
          let next = 0;
          const workers = Array.from({ length: Math.min(settings.queueLimit, ordered.length) }, async () => {
            while (next < ordered.length && this.canSchedule(run, s.stageDeadline)) {
              const p = ordered[next++]; if (!this.canSpeak(s, p)) continue;
              await this.request(run, p, snapshot, this.targets(snapshot, p, settings), false);
            }
          });
          await Promise.all(workers);
        } else {
          // At most one queued reply per participant in each cycle: no pair can monopolize.
          const queue = ordered.filter(p => this.canSpeak(s, p));
          for (let i = 0; i < queue.length && this.canSchedule(run, s.stageDeadline); i++) {
            const p = queue[i], snapshot = structuredClone(s.messages);
            await this.request(run, p, snapshot, this.targets(snapshot, p, settings), false);
            if (settings.turnDelayMs && i + 1 < queue.length) await sleep(settings.turnDelayMs, run.abort.signal, s.stageDeadline, this.clock);
          }
        }
        if (run.abort.signal.aborted) break;
        if (settings.earlyStop && s.issues.length > 0 && s.issues.every(i => i.resolved) && on.every(p => { const latest = [...s.messages].reverse().find(m => m.participantId === p.id); return !!latest && latest.round > startRound && !latest.incomplete && !latest.parseWarning && latest.unresolved.length === 0; })) { s.stopReason = 'All recorded issues have owner revisions and objector evidence-based acknowledgments. This is participant-reported resolution, not independent verification.'; break; }
        if (settings.roundCooldownMs && cycleRound < settings.rounds) await sleep(settings.roundCooldownMs, run.abort.signal, debateDeadline, this.clock);
      }
      if (run.abort.signal.aborted) return;
      if (!s.stopReason) s.stopReason = this.clock.now() >= debateDeadline ? 'Debate window ended; review reservation protected.' : this.limitReached(s) ? 'Configured reply or resource limit reached.' : 'Maximum rounds reached.';
      await this.review(run);
      if (!run.abort.signal.aborted) { s.status = this.completeDebate(s) && s.final && !s.final.incomplete ? 'completed' : 'partial'; s.endedAt = this.clock.now(); await this.persist(run); }
    } catch (error) {
      if (run.abort.signal.aborted) return;
      if (error instanceof Cancelled && error.code === 'DEADLINE') {
        s.stopReason = 'Stage/debate deadline reached, including queued work and cooldowns.';
        try { await this.review(run); } catch { s.reviewError = 'Final review could not complete within the remaining deadline.'; }
      } else { s.stopReason = error instanceof Error ? error.message : 'Orchestration failed.'; s.reviewError = 'No final review completed after orchestration failure.'; }
      if (!run.abort.signal.aborted) { s.status = this.completeDebate(s) && s.final && !s.final.incomplete ? 'completed' : 'partial'; s.endedAt = this.clock.now(); await this.persist(run); }
    }
  }
  private completeDebate(s: DebateSession): boolean {
    const current = s.messages.filter(m => m.round >= this.cycleStart(s));
    const contributors = new Set(current.filter(m => !m.incomplete).map(m => m.participantId));
    return contributors.size >= 2 && current.some(m => !m.incomplete && m.replyTo.length > 0);
  }
  private canSpeak(s: DebateSession, p: Participant): boolean { return s.tasks.filter(t => t.round >= this.cycleStart(s) && t.participantId === p.id).length < s.settings.maxRepliesPerParticipant && s.tasks.filter(t => t.round >= this.cycleStart(s) && t.participantId !== 'reviewer').length < s.settings.maxReplies; }
  private limitReached(s: DebateSession): boolean { return s.tasks.filter(t => t.round >= this.cycleStart(s) && t.participantId !== 'reviewer').length >= s.settings.maxReplies || (s.settings.tokenBudget !== null && this.cycleBudgetUsed(s) >= s.settings.tokenBudget); }
  private canSchedule(run: Running, deadline: number): boolean { return !run.abort.signal.aborted && this.clock.now() < deadline && !this.limitReached(run.session); }
  private targets(snapshot: DebateMessage[], p: Participant, settings: Settings): string[] {
    if (!settings.directReplies) return [];
    return [...snapshot].reverse().filter(m => m.participantId !== p.id).filter((m, i, all) => all.findIndex(x => x.participantId === m.participantId) === i).slice(0, settings.addressCount).map(m => m.id);
  }
  private async review(run: Running): Promise<void> {
    const s = run.session;
    if (run.abort.signal.aborted) return;
    if (!s.messages.length) { s.reviewError = 'No responses were published; no final review requested.'; return; }
    if (this.clock.now() >= s.deadline) { s.reviewError = 'Overall deadline reached before final review.'; return; }
    const reviewer = s.settings.reviewer ?? s.settings.participants.find(p => p.enabled)!;
    s.status = 'reviewing'; s.stage = 'Final review'; s.stageDeadline = Math.min(this.clock.now() + s.settings.reviewMs, s.deadline); await this.persist(run);
    const p: Participant = { ...reviewer, id: 'reviewer', enabled: true, role: 'final reviewer', instructions: '', options: {} };
    const result = await this.request(run, p, structuredClone(s.messages), [], true);
    if (!result && !run.abort.signal.aborted) s.reviewError = s.reviewError ?? 'Final review failed or timed out. No final verdict completed.';
  }
  private async reviewAvailable(id: string): Promise<{ id: string }> {
    this.ensureCapacity(); const s = this.get(id);
    if (!s.messages.length) throw new Error('No available discussion to review.');
    await this.refreshCatalog(); const who = s.settings.reviewer ?? s.settings.participants.find(p => p.enabled)!;
    if (!this.models.some(m => m.provider === who.provider && m.model === who.model)) throw new Error(`Reviewer unavailable: ${who.provider}/${who.model}. No substitution made.`);
    // Explicit review is a separately timed operation retained in the same transcript.
    if (s.images.length) {
      if (this.models.find(m => m.provider === who.provider && m.model === who.model)?.imageSupport !== 'supported') throw new ImageInputError('The selected reviewer does not have confirmed image support. No image was omitted.');
      await this.images.verify(s.images);
    }
    this.archiveFinal(s);
    s.status = 'reviewing'; s.deadline = this.clock.now() + s.settings.reviewMs; s.final = null; s.reviewError = null; s.endedAt = undefined;
    const run = this.createRun(s); await this.persist(run);
    run.done = (async () => { try { await this.review(run); if (!run.abort.signal.aborted) { s.status = this.completeDebate(s) && s.final && !s.final.incomplete ? 'completed' : 'partial'; s.endedAt = this.clock.now(); await this.persist(run); } } catch (e) { if (!run.abort.signal.aborted) { s.status = 'partial'; s.reviewError = e instanceof Error ? e.message : 'Review failed.'; await this.persist(run); } } })().finally(() => { run.gate.dispose(); this.runs.delete(id); });
    return { id };
  }
  private async request(run: Running, p: Participant, snapshot: DebateMessage[], targets: string[], review: boolean): Promise<boolean> {
    const s = run.session, settings = s.settings;
    const task: Task = { id: randomUUID(), participantId: p.id, round: s.round, status: 'queued', attempt: 0, queuedAt: this.clock.now() };
    s.tasks.push(task); await this.persist(run);
    let content: ReturnType<typeof makePrompt>;
    try { content = makePrompt(s, p, snapshot, s.stage, targets, review); }
    catch (e) { task.status = 'failed'; task.error = e instanceof Error ? e.message : 'Context construction failed'; task.endedAt = this.clock.now(); await this.persist(run); return false; }
    if (content.context.compressed) s.compression.push({ timestamp: this.clock.now(), before: content.context.before, after: content.context.after, messageIds: content.context.ids });
    const policy = this.adapter.retryPolicy(p.provider), attempts = Math.min(settings.retries, policy.maxRetries ?? settings.retries) + 1;
    let readyAt = 0;
    for (let attempt = 1; attempt <= attempts; attempt++) {
      let release: (() => void) | undefined, reservation = 0, accepted = false;
      const controller = new AbortController(), abort = () => controller.abort();
      run.abort.signal.addEventListener('abort', abort, { once: true });
      let timer: unknown, alive = true;
      try {
        task.attempt = attempt;
        release = await run.gate.acquire(p.provider, run.abort.signal, s.stageDeadline, status => { if (task.status !== status && !run.abort.signal.aborted) task.status = status; }, readyAt);
        if (run.abort.signal.aborted || this.clock.now() >= s.stageDeadline) throw new Cancelled(run.abort.signal.aborted ? 'STOPPED' : 'DEADLINE');
        const inputEstimate = Buffer.byteLength(content.system + content.prompt, 'utf8');
        const available = settings.tokenBudget === null ? Infinity : settings.tokenBudget - this.cycleBudgetUsed(s) - run.reservedTokens - (review ? 0 : Math.min(4096, Math.ceil(settings.tokenBudget * 0.15)));
        const maxTokens = Math.floor(Math.min(p.options.maxTokens ?? Math.ceil(settings.responseChars / 2), available - inputEstimate));
        if (maxTokens < 64) { task.status = 'cancelled'; task.error = 'Token budget cannot admit this request (conservative input/output reservation, including final-review token reserve).'; s.stopReason = 'Configured resource budget reached.'; await this.persist(run); return false; }
        reservation = inputEstimate + maxTokens; run.reservedTokens += reservation;
        const deadline = Math.min(this.clock.now() + (review ? settings.reviewMs : settings.requestMs), s.stageDeadline, s.deadline);
        task.status = 'responding'; task.startedAt = this.clock.now(); delete task.partial;
        let rejectCancellation!: (reason: Error) => void;
        const cancelled = new Promise<never>((_, reject) => { rejectCancellation = reject; });
        const onAbort = () => rejectCancellation(new Cancelled(run.abort.signal.aborted ? 'STOPPED' : 'DEADLINE'));
        controller.signal.addEventListener('abort', onAbort, { once: true });
        timer = this.clock.setTimeout(() => controller.abort(), deadline - this.clock.now());
        const result = await Promise.race([this.adapter.call({ participant: p, system: content.system, prompt: content.prompt, images: s.images, signal: controller.signal, maxTokens,
          onPrepared: async config => { if (!alive || controller.signal.aborted) throw new Cancelled(); s.requests.push({ taskId: task.id, attempt, timestamp: this.clock.now(), system: content.system, prompt: content.prompt, config, contextIds: content.context.ids, images: structuredClone(s.images), compressed: content.context.compressed }); await this.persist(run); accepted = true; },
          onText: text => { if (alive && !controller.signal.aborted && !run.abort.signal.aborted && this.clock.now() < deadline) task.partial = text.slice(0, 100000); },
        }), cancelled]).finally(() => controller.signal.removeEventListener('abort', onAbort));
        if (controller.signal.aborted || run.abort.signal.aborted || this.clock.now() >= deadline) throw new Cancelled(run.abort.signal.aborted ? 'STOPPED' : 'DEADLINE');
        this.account(run, result.usage, reservation, accepted); reservation = 0;
        const trimmed = result.text, incomplete = result.incomplete || result.text.length > settings.responseChars || (review && !hasReviewSections(result.text));
        task.status = 'completed'; if (incomplete) task.error = 'Response incomplete: provider output/token limit, missing successful finish, or configured response-length limit exceeded.'; task.endedAt = this.clock.now(); delete task.partial;
        if (review) {
          if (!trimmed) throw new Error('Empty final review');
          s.final = { text: trimmed, provider: p.provider, model: p.model, timestamp: this.clock.now(), incomplete };
          if (incomplete) s.reviewError = 'Reviewer output was truncated, incomplete, or missing one of the five required numbered sections; no final review completed.';
        } else if (trimmed) {
          const message = publish(trimmed, p, snapshot, { id: `m${s.messages.length + 1}`, round: s.round, turn: s.messages.length + 1, stage: s.stage, timestamp: this.clock.now(), incomplete, targets }); s.messages.push(message); updateIssues(s, message);
        }
        await this.persist(run); return true;
      } catch (error) {
        const e = error as Partial<ModelFailure> & { code?: string; message?: string };
        if (reservation) { this.account(run, e.usage, reservation, accepted); reservation = 0; }
        const stopped = run.abort.signal.aborted;
        task.status = stopped ? s.status === 'interrupted' ? 'interrupted' : 'cancelled' : error instanceof Cancelled || e.code === 'TIMEOUT' ? 'timed out' : e.code === 'RATE_LIMIT' ? 'rate limited' : 'failed';
        task.error = stopped ? 'Run stopped.' : error instanceof Error ? error.message : 'Request failed.'; task.endedAt = this.clock.now();
        const partial = e.partial ?? task.partial;
        if (partial && !stopped) {
          if (review) { s.final = { text: partial, provider: p.provider, model: p.model, timestamp: this.clock.now(), incomplete: true }; }
          else s.messages.push(publish(partial, p, snapshot, { id: `m${s.messages.length + 1}`, round: s.round, turn: s.messages.length + 1, stage: s.stage, timestamp: this.clock.now(), incomplete: true, targets }));
          delete task.partial; // Partial is published with an immutable incomplete label; never retry it.
        }
        if (!stopped) await this.persist(run);
        const retryable = TRANSIENT.includes(e.code ?? '') && (!policy.retryableCodes || policy.retryableCodes.includes(e.code!));
        if (stopped || partial || !retryable || attempt >= attempts || this.clock.now() >= s.stageDeadline) { if (review && !stopped) s.reviewError = task.error ?? 'Review failed.'; return false; }
        const delay = Math.max(e.retryAfterMs ?? 0, Math.min(settings.backoffMaxMs, Math.max(settings.backoffMs, policy.initialDelayMs ?? 0) * 2 ** (attempt - 1)));
        readyAt = this.clock.now() + delay;
        task.status = 'waiting for cooldown';
      } finally {
        alive = false; this.clock.clearTimeout(timer); run.abort.signal.removeEventListener('abort', abort); controller.abort(); release?.();
      }
    }
    return false;
  }
  private account(run: Running, usage: Usage | undefined, reservation: number, dispatched: boolean): void {
    run.reservedTokens = Math.max(0, run.reservedTokens - reservation);
    if (usage) { run.session.usage.inputTokens += usage.inputTokens; run.session.usage.outputTokens += usage.outputTokens; run.session.usage.totalTokens = (run.session.usage.totalTokens ?? 0) + (usage.totalTokens ?? usage.inputTokens + usage.outputTokens); run.session.budgetUsed += usage.totalTokens ?? usage.inputTokens + usage.outputTokens; }
    else if (dispatched) { run.session.usageUnavailable = true; run.session.budgetEstimated = true; run.session.budgetUsed += reservation; }
  }
  private async stop(run: Running, status: 'stopped' | 'interrupted', reason: string): Promise<void> {
    const s = run.session;
    s.status = status; s.stopReason = reason; s.endedAt = this.clock.now(); run.abort.abort(); run.gate.dispose();
    for (const task of s.tasks) if (ACTIVE.includes(task.status)) {
      if (task.partial) {
        const p = s.settings.participants.find(p => p.id === task.participantId);
        if (p) s.messages.push(publish(task.partial, p, s.messages, { id: `m${s.messages.length + 1}`, round: task.round, turn: s.messages.length + 1, stage: s.stage, timestamp: this.clock.now(), incomplete: true, targets: [] }));
        else if (task.participantId === 'reviewer') { const reviewer = s.settings.reviewer ?? s.settings.participants.find(p => p.enabled)!; s.final = { text: task.partial, provider: reviewer.provider, model: reviewer.model, timestamp: this.clock.now(), incomplete: true }; s.reviewError = 'Review stopped before completion.'; }
        delete task.partial;
      }
      task.status = status; task.endedAt = this.clock.now();
    }
    await this.persist(run);
    await run.done;
    await this.persist(run);
  }
  async waitForIdle(id?: string): Promise<void> { if (id) await this.runs.get(id)?.done; else await Promise.all([...this.runs.values()].map(r => r.done)); }
  async dispose(): Promise<void> { for (const run of this.runs.values()) await this.stop(run, 'interrupted', 'Plugin unloaded; no automatic continuation.'); await this.waitForIdle(); }
}
function requireField<T>(value: T | undefined | null, name: string): T { if (value === undefined || value === null) throw new Error(`Missing ${name}`); return value; }
function rotate<T>(items: T[], offset: number): T[] { const n = offset % items.length; return [...items.slice(n), ...items.slice(0, n)]; }

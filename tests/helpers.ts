import { defaults, restoreSession, type DebateSession, type ModelInfo, type Participant, type Preferences, type Settings, type Usage, type ImageRef } from '../src/state.js';
import { DebateService, type RepositoryLike } from '../src/engine.js';
import type { Clock } from '../src/scheduler.js';
import type { ModelAdapter } from '../src/adapter.js';
export class TestClock implements Clock {
  time = 10000; serial = 0; timers = new Map<number, { at: number; fn: () => void }>();
  now = () => this.time;
  setTimeout = (fn: () => void, ms: number) => { const id = ++this.serial; this.timers.set(id, { at: this.time + Math.max(0, ms), fn }); return id; };
  clearTimeout = (id: unknown) => { this.timers.delete(id as number); };
  advance(ms: number): void { const end = this.time + ms; for (;;) { const next = [...this.timers].filter(([, t]) => t.at <= end).sort((a, b) => a[1].at - b[1].at || a[0] - b[0])[0]; if (!next) break; this.time = next[1].at; this.timers.delete(next[0]); next[1].fn(); } this.time = end; }
  next(): boolean { const at = Math.min(...[...this.timers.values()].map(t => t.at)); if (!Number.isFinite(at)) return false; this.advance(Math.max(0, at - this.time)); return true; }
}
export class MemoryRepository implements RepositoryLike {
  records = new Map<string, DebateSession>(); preferences?: Preferences;
  list() { return structuredClone([...this.records.values()]); }
  get(id: string) { const v = this.records.get(id); return v ? structuredClone(v) : undefined; }
  async save(s: DebateSession) { this.records.set(s.id, structuredClone(s)); }
  async remove(id: string) { this.records.delete(id); }
  getPreferences() { return this.preferences ? structuredClone(this.preferences) : undefined; }
  async savePreferences(p: Preferences) { this.preferences = structuredClone(p); }
  async recover() { for (const [id, s] of this.records) this.records.set(id, restoreSession(s)); }
}
export const models: ModelInfo[] = Array.from({ length: 4 }, (_, i) => ({ provider: i < 2 ? 'alpha' : 'beta', model: `model-${i + 1}`, name: `Model ${i + 1}`, providerName: i < 2 ? 'Alpha' : 'Beta', reasoningEfforts: ['off', 'low'], local: true }));
export interface CallRecord { participant: Participant; system: string; prompt: string; images: ImageRef[]; start: number; end?: number; aborted: boolean; }
export interface Behavior { delay?: number; error?: string; retryAfterMs?: number; partial?: string; ignoreAbort?: boolean; malformed?: boolean; incomplete?: boolean; noUsage?: boolean; text?: string; }
export class MockAdapter implements ModelAdapter {
  calls: CallRecord[] = []; active = 0; maxActive = 0; byProvider: Record<string, number> = {}; maxByProvider: Record<string, number> = {};
  behavior: (call: CallRecord, index: number) => Behavior = () => ({});
  offered = models;
  constructor(public clock: TestClock) {}
  async catalog() { return { models: this.offered, diagnostics: [], localOnly: false }; }
  retryPolicy(_provider: string) { return { maxRetries: 3, retryableCodes: ['RATE_LIMIT', 'SERVER', 'TIMEOUT', 'TRANSPORT', 'EMPTY_RESPONSE'], initialDelayMs: 0, maxDelayMs: 1000 }; }
  async call(input: Parameters<ModelAdapter['call']>[0]): Promise<{ text: string; incomplete: boolean; usage?: Usage }> {
    const call: CallRecord = { participant: input.participant, system: input.system, prompt: input.prompt, images: structuredClone([...(input.images ?? [])]), start: this.clock.now(), aborted: false }; const index = this.calls.length; this.calls.push(call);
    await input.onPrepared?.({ provider: input.participant.provider, model: input.participant.model, maxTokens: input.maxTokens });
    this.active++; this.maxActive = Math.max(this.maxActive, this.active); const provider = call.participant.provider;
    this.byProvider[provider] = (this.byProvider[provider] ?? 0) + 1; this.maxByProvider[provider] = Math.max(this.maxByProvider[provider] ?? 0, this.byProvider[provider]);
    const b = this.behavior(call, index);
    return new Promise((resolve, reject) => {
      let done = false;
      const settle = (fn: () => void) => { if (done) return; done = true; this.active--; this.byProvider[provider]--; call.end = this.clock.now(); input.signal.removeEventListener('abort', abort); fn(); };
      const abort = () => { call.aborted = true; if (!b.ignoreAbort) { this.clock.clearTimeout(timer); settle(() => reject(Object.assign(new Error('Mock aborted'), { code: 'TIMEOUT', partial: b.partial }))); } };
      input.signal.addEventListener('abort', abort, { once: true });
      if (b.partial) input.onText(b.partial);
      const timer = this.clock.setTimeout(() => settle(() => {
        if (b.error) return reject(Object.assign(new Error(`Mock ${b.error}`), { code: b.error, retryAfterMs: b.retryAfterMs, partial: b.partial }));
        const context = JSON.parse(call.prompt); const published = JSON.parse(context.publishedDiscussion) as { id: string; participant: string; claims: { id: string }[] }[];
        const opponent = published.find(m => m.participant !== call.participant.id);
        const body = { text: `Argument by ${call.participant.id}; ${opponent ? `objection to ${opponent.participant}` : 'independent proposal'}`, claims: ['A falsifiable claim'], replyTo: opponent ? [opponent.id] : [], objections: opponent?.claims.length ? [{ claimId: opponent.claims[0].id, text: 'Counterexample', evidence: 'Concrete example', verification: 'Recompute the expression' }] : [], revisions: [], evidence: ['Unverified example, check independently'], resolved: [], unresolved: ['Check assumptions'], agreement: false };
        const text = b.text ?? (call.participant.id === 'reviewer' ? '1. Best supported answer\nSupported conclusion\n2. Reasons\nEvidence\n3. Corrections\nNone\n4. Disagreements\nUnverified claims remain\n5. Participation\nSee transcript' : b.malformed ? '{"text":' : JSON.stringify(body));
        input.onText(text); resolve({ text, incomplete: !!b.incomplete, usage: b.noUsage ? undefined : { inputTokens: 20, outputTokens: 30, totalTokens: 50 } });
      }), b.delay ?? 10);
    });
  }
}
export async function flush() { await new Promise<void>(resolve => setImmediate(resolve)); }
export async function finish(service: DebateService, clock: TestClock) { let done = false; const p = service.waitForIdle().then(() => { done = true; }); for (let i = 0; i < 3000 && !done; i++) { await flush(); if (!done) clock.next(); } if (!done) throw new Error('Virtual run did not settle'); await p; await flush(); }
export async function fixture(overrides: Partial<Settings> = {}, behavior?: MockAdapter['behavior']) {
  const clock = new TestClock(), adapter = new MockAdapter(clock), repo = new MemoryRepository(); if (behavior) adapter.behavior = behavior;
  const service = new DebateService(adapter, repo, { clock }); await service.initialize();
  const settings = { ...defaults(models.slice(0, 3)), roundMs: 1000, requestMs: 500, overallMs: 5000, reserveReviewMs: 1000, reviewMs: 1000, ...overrides };
  const { id } = await service.operation({ action: 'start', question: 'What makes a claim correct?', settings }) as { id: string };
  return { clock, adapter, repo, service, settings, id };
}

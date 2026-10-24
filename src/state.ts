import { z } from 'zod';
import { requestDiagnosticsSchema } from './diagnostics.js';
import { documentSchema, type DocumentPolicy } from './document-state.js';

const text = z.string().max(12000);
export const identitySchema = z.object({ provider: z.string().min(1).max(200), model: z.string().min(1).max(300) }).strict();
export const participantSchema = identitySchema.extend({ id: z.string().min(1).max(80).refine(id => id !== 'reviewer', 'Participant ID reviewer is reserved'), enabled: z.boolean(), role: z.string().max(120), instructions: text, options: z.object({ maxTokens: z.number().int().min(64).max(32768).optional(), reasoningEffort: z.string().max(80).optional() }).strict() }).strict();
export const settingsSchema = z.object({
  participants: z.array(participantSchema).max(20), mode: z.enum(['parallel', 'sequential', 'hybrid']), speakingOrder: z.enum(['configured', 'rotating']),
  concurrency: z.number().int().min(1).max(20), providerLimits: z.record(z.string(), z.number().int().min(1).max(20)),
  maxRepliesPerParticipant: z.number().int().min(1).max(30), maxReplies: z.number().int().min(2).max(600), queueLimit: z.number().int().min(1).max(100),
  rounds: z.number().int().min(1).max(30), roundMs: z.number().int().min(100).max(3600000), requestMs: z.number().int().min(100).max(3600000),
  overallMs: z.number().int().min(200).max(86400000), reserveReviewMs: z.number().int().min(100).max(3600000), reviewMs: z.number().int().min(100).max(3600000),
  roundCooldownMs: z.number().int().min(0).max(3600000), globalSpacingMs: z.number().int().min(0).max(3600000), providerSpacingMs: z.record(z.string(), z.number().int().min(0).max(3600000)), turnDelayMs: z.number().int().min(0).max(3600000),
  retries: z.number().int().min(0).max(5), backoffMs: z.number().int().min(0).max(60000), backoffMaxMs: z.number().int().min(0).max(300000),
  directReplies: z.boolean(), addressCount: z.number().int().min(1).max(19), quotedContext: z.boolean(), language: z.enum(['auto', 'ar', 'en']),
  responseChars: z.number().int().min(200).max(30000), contextChars: z.number().int().min(2000).max(500000), earlyStop: z.boolean(),
  tokenBudget: z.number().int().min(1000).max(10000000).nullable(), costBudget: z.number().positive().nullable(),
  reviewer: identitySchema.nullable(), reviewInstructions: text,
}).strict().superRefine((s, ctx) => {
  const on = s.participants.filter(p => p.enabled);
  if (new Set(s.participants.map(p => p.id)).size !== s.participants.length) ctx.addIssue({ code: 'custom', message: 'Participant IDs must be unique', path: ['participants'] });
  if (new Set(on.map(p => `${p.provider}\0${p.model}`)).size !== on.length) ctx.addIssue({ code: 'custom', message: 'Enabled participants must use distinct provider/model identities', path: ['participants'] });
  if (s.reserveReviewMs >= s.overallMs) ctx.addIssue({ code: 'custom', message: 'Review reservation must be shorter than overall deadline', path: ['reserveReviewMs'] });
  if (s.reviewMs > s.reserveReviewMs) ctx.addIssue({ code: 'custom', message: 'Review timeout must fit review reservation', path: ['reviewMs'] });
  if (s.backoffMaxMs < s.backoffMs) ctx.addIssue({ code: 'custom', message: 'Maximum backoff must be at least initial backoff', path: ['backoffMaxMs'] });
  if (s.costBudget !== null) ctx.addIssue({ code: 'custom', message: 'Cost budgets unavailable: DSH exposes no reliable text pricing contract', path: ['costBudget'] });
});
export type Settings = z.infer<typeof settingsSchema>;
export type Participant = z.infer<typeof participantSchema>;
export type Identity = z.infer<typeof identitySchema>;
export interface ModelInfo extends Identity { name: string; providerName: string; reasoningEfforts: string[]; contextWindow?: number; local: boolean; imageSupport?: 'supported' | 'unsupported' | 'unknown'; }
export const imageMediaTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/gif'] as const;
export const imageRefSchema = z.object({ attachmentId: z.string().min(1).max(200), mediaType: z.enum(imageMediaTypes), bytes: z.number().int().positive(), width: z.number().int().positive(), height: z.number().int().positive(), name: z.string().max(255).optional(), originalDimensions: z.object({ width: z.number().int().positive(), height: z.number().int().positive() }).strict().optional() }).strict();
export type ImageRef = z.infer<typeof imageRefSchema>;
export const encodedImageSchema = z.object({ mediaType: z.enum(imageMediaTypes), data: z.string().min(4).max(28 * 1024 * 1024), name: z.string().max(255).optional() }).strict();
export type EncodedImage = z.infer<typeof encodedImageSchema>;
export interface ImagePolicy { available: boolean; maxImages: number; maxImageBytes: number; maxTotalBytes: number; mediaTypes: readonly string[]; }
export const taskStatusSchema = z.enum(['queued', 'waiting for cooldown', 'responding', 'completed', 'partial', 'timed out', 'rate limited', 'failed', 'cancelled', 'stopped', 'interrupted']);
export type TaskStatus = z.infer<typeof taskStatusSchema>;
export const claimSchema = z.object({ id: z.string(), text: text });
export const objectionSchema = z.object({ claimId: z.string(), text: text, evidence: text, verification: text });
export const revisionSchema = z.object({ claimId: z.string(), text: text });
export const messageSchema = z.object({
  id: z.string(), participantId: z.string(), provider: z.string(), model: z.string(), role: z.string(), round: z.number().int(), turn: z.number().int(), stage: z.string(), timestamp: z.number(),
  text: z.string().max(100000), incomplete: z.boolean(), replyTo: z.array(z.string()), claims: z.array(claimSchema), objections: z.array(objectionSchema), revisions: z.array(revisionSchema),
  evidence: z.array(text), resolved: z.array(z.string()), unresolved: z.array(text), agreement: z.boolean(), parseWarning: z.string().optional(),
});
export type DebateMessage = z.infer<typeof messageSchema>;
export const usageSchema = z.object({ inputTokens: z.number().nonnegative(), outputTokens: z.number().nonnegative(), totalTokens: z.number().nonnegative().optional() });
export type Usage = z.infer<typeof usageSchema>;
export const attemptSchema = z.object({ attempt: z.number().int().positive(), correlationId: z.string(), diagnostics: requestDiagnosticsSchema.optional(), status: taskStatusSchema, queuedAt: z.number(), startedAt: z.number().optional(), endedAt: z.number().optional(), error: z.string().optional(), partial: z.string().max(100000).optional() });
export const taskSchema = z.object({ id: z.string(), participantId: z.string(), round: z.number(), status: taskStatusSchema, attempt: z.number(), queuedAt: z.number(), startedAt: z.number().optional(), endedAt: z.number().optional(), error: z.string().optional(), partial: z.string().max(100000).optional(), legacyError: z.string().optional(), attempts: z.array(attemptSchema).optional() }).transform(task => {
  // v1 snapshots kept only the latest attempt. Preserve unattributable legacy errors
  // explicitly, rather than guessing which earlier attempt produced them.
  if (!task.attempts && task.status === 'completed' && task.error) {
    if (task.error.startsWith('Response incomplete:')) task.status = 'partial';
    else if (task.attempt > 1) { task.legacyError = task.error; delete task.error; }
  }
  return task;
});
export type Task = z.infer<typeof taskSchema>;
export const issueSchema = z.object({ id: z.string(), claimId: z.string(), ownerId: z.string(), raisedBy: z.string(), text: z.string(), evidence: z.string(), verification: z.string(), resolved: z.boolean(), resolution: z.string().optional() });
export const reviewSchema = z.object({ text: z.string().max(100000), provider: z.string(), model: z.string(), timestamp: z.number(), incomplete: z.boolean() });
export const followUpSchema = z.object({ id: z.string(), text: z.string().max(30000), images: z.array(imageRefSchema).max(4).optional(), documents: z.array(documentSchema).max(40).optional(), timestamp: z.number(), startRound: z.number().int().min(1), budgetStart: z.number().nonnegative() }).refine(turn => !!turn.text.trim() || !!turn.images?.length || !!turn.documents?.length, 'A follow-up requires text or attachments');
export type FollowUp = z.infer<typeof followUpSchema>;
export const sessionSchema = z.object({
  schemaVersion: z.literal(1), id: z.string(), title: z.string().max(160), question: z.string().max(30000), documents: z.array(documentSchema).max(40).optional(), images: z.array(imageRefSchema).max(20).default([]), createdAt: z.number(), updatedAt: z.number(),
  status: z.enum(['running', 'reviewing', 'completed', 'partial', 'stopped', 'interrupted']), settings: settingsSchema,
  messages: z.array(messageSchema), tasks: z.array(taskSchema), issues: z.array(issueSchema),
  followUps: z.array(followUpSchema).max(30).default([]), reviews: z.array(reviewSchema.extend({ afterRound: z.number().int().nonnegative() })).default([]),
  requests: z.array(z.object({ taskId: z.string(), attempt: z.number(), timestamp: z.number(), system: z.string(), prompt: z.string(), config: z.object({ provider: z.string(), model: z.string(), maxTokens: z.number().optional(), reasoningEffort: z.string().optional() }), contextIds: z.array(z.string()), images: z.array(imageRefSchema).max(20).default([]), compressed: z.boolean() })),
  usage: usageSchema, usageUnavailable: z.boolean(), budgetUsed: z.number(), budgetEstimated: z.boolean(),
  round: z.number(), stage: z.string(), stageDeadline: z.number(), deadline: z.number(), startedAt: z.number(), endedAt: z.number().optional(),
  final: reviewSchema.nullable(),
  reviewError: z.string().nullable(), stopReason: z.string().nullable(), compression: z.array(z.object({ timestamp: z.number(), before: z.number(), after: z.number(), messageIds: z.array(z.string()) })),
});
export type DebateSession = z.infer<typeof sessionSchema>;
export const presetSchema = z.object({ id: z.string(), name: z.string().min(1).max(100), settings: settingsSchema });
export type Preset = z.infer<typeof presetSchema>;
export const preferencesSchema = z.object({ settings: settingsSchema, presets: z.array(presetSchema).max(100), activeId: z.string().nullable() });
export type Preferences = z.infer<typeof preferencesSchema>;
export interface Snapshot { documentPolicy?: DocumentPolicy; imagePolicy?: ImagePolicy; models: ModelInfo[]; diagnostics: string[]; localOnly: boolean; settings: Settings; presets: Preset[]; sessions: DebateSession[]; activeId: string | null; }
export const defaults = (models: ModelInfo[] = []): Settings => ({
  participants: models.slice(0, 4).map((m, i) => ({ id: `p${i + 1}`, provider: m.provider, model: m.model, enabled: true, role: ['solver', 'critic', 'verifier', 'synthesizer'][i], instructions: '', options: {} })),
  mode: 'parallel', speakingOrder: 'configured', concurrency: 4, providerLimits: {}, maxRepliesPerParticipant: 8, maxReplies: 80, queueLimit: 40,
  rounds: 3, roundMs: 60000, requestMs: 60000, overallMs: 300000, reserveReviewMs: 60000, reviewMs: 60000,
  roundCooldownMs: 0, globalSpacingMs: 0, providerSpacingMs: {}, turnDelayMs: 0, retries: 1, backoffMs: 500, backoffMaxMs: 10000,
  directReplies: true, addressCount: 2, quotedContext: true, language: 'auto', responseChars: 6000, contextChars: 48000, earlyStop: false,
  tokenBudget: null, costBudget: null, reviewer: null, reviewInstructions: '',
});
export function validateRun(settings: unknown, models: ModelInfo[]): Settings {
  const s = settingsSchema.parse(settings), on = s.participants.filter(p => p.enabled);
  if (on.length < 2) throw new Error('Configure and enable at least two distinct models in DSH Settings → Models.');
  for (const p of [...on, ...(s.reviewer ? [s.reviewer] : [])]) {
    const m = models.find(m => m.provider === p.provider && m.model === p.model);
    if (!m) throw new Error(`Model unavailable or restricted: ${p.provider}/${p.model}. No substitution was made.`);
    const participant = on.find(x => x.id === ('id' in p ? p.id : undefined));
    if (participant?.options.reasoningEffort && !m.reasoningEfforts.includes(participant.options.reasoningEffort)) throw new Error(`Unsupported reasoning effort for ${p.provider}/${p.model}`);
  }
  return s;
}
export function starterPresets(s: Settings): Preset[] { return [{ id: 'quick', name: 'Quick Debate', settings: { ...structuredClone(s), rounds: 2, roundMs: 30000, requestMs: 30000, overallMs: 120000, reserveReviewMs: 30000, reviewMs: 30000, responseChars: 3000 } }, { id: 'detailed', name: 'Detailed Debate', settings: { ...structuredClone(s), rounds: 5, roundMs: 120000, requestMs: 90000, overallMs: 900000, reserveReviewMs: 120000, reviewMs: 120000, responseChars: 10000, contextChars: 100000 } }]; }
export function schedulingWarnings(s: Settings): string[] {
  const n = s.participants.filter(p => p.enabled).length, waves = s.mode === 'sequential' ? n : Math.ceil(n / s.concurrency);
  const stageWorst = waves * s.requestMs + Math.max(0, n - 1) * s.globalSpacingMs + (s.mode === 'sequential' ? Math.max(0, n - 1) * s.turnDelayMs : 0);
  const out = [];
  if (stageWorst > s.roundMs) out.push(`${n} participants may not all fit: up to ${Math.ceil(stageWorst / 1000)}s before retries vs ${s.roundMs / 1000}s round deadline. Provider limits can reduce capacity further.`);
  if (s.rounds * s.roundMs + (s.rounds - 1) * s.roundCooldownMs > s.overallMs - s.reserveReviewMs) out.push('Configured rounds can exceed the debate window; final-review time takes priority.');
  if (s.queueLimit < n) out.push('Queue limit is below participant count; parallel work is admitted in bounded batches against one frozen snapshot.');
  return out;
}
export function restoreSession(value: unknown): DebateSession {
  const s = sessionSchema.parse(value);
  if (s.status === 'running' || s.status === 'reviewing') {
    s.status = 'interrupted'; s.stopReason = 'Host restarted or plugin reloaded; no automatic continuation.'; s.endedAt = Date.now();
    s.tasks = s.tasks.map(t => ['queued', 'waiting for cooldown', 'responding'].includes(t.status) ? { ...t, status: 'interrupted', endedAt: s.endedAt, attempts: t.attempts?.map(a => ['queued', 'waiting for cooldown', 'responding'].includes(a.status) ? { ...a, status: 'interrupted', endedAt: s.endedAt } : a) } : t);
  }
  return s;
}

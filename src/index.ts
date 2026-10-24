import Schema from '@deepseek-ai/schemastery';
import { z } from 'zod';
import { DshAdapter, ModelFailure, type AdapterContext } from './adapter.js';
import { DebateService, FollowUpError } from './engine.js';
import { Repository, type RepositoryDomain } from './persistence.js';
import { DshImages, ImageInputError, type AttachmentContext } from './images.js';
import { encodedImageSchema, preferencesSchema, sessionSchema, settingsSchema } from './state.js';
import { encodedDocumentSchema } from './document-state.js';
import { DocumentInputError } from './documents.js';

export const name = 'model-debate';
export const inject = ['llm', 'storageDomain', 'connection', 'tools', 'settings'];
// DSH Settings expects Schemastery metadata even though Cordis itself accepts any Standard Schema.
export const Config = Schema.object({
  documentMaxFiles: Schema.number().step(1).min(1).max(20).default(4).description('Maximum documents per user message.'),
  documentMaxFileBytes: Schema.number().step(1).min(1).max(10485760).default(10485760).description('Maximum uploaded bytes per document (hard ceiling 10 MiB).'),
  documentMaxTotalBytes: Schema.number().step(1).min(1).max(20971520).default(20971520).description('Maximum document bytes per user message.'),
  documentMaxConversationFiles: Schema.number().step(1).min(1).max(40).default(40).description('Maximum retained documents across a debate and follow-ups.'),
  documentMaxExtractedChars: Schema.number().step(1).min(1000).max(200000).default(200000).description('Maximum extracted characters per document; omissions are disclosed.'),
  localOnly: Schema.boolean().default(false).description('Restrict debate calls to verified, explicitly configured loopback endpoints. Unknown routes are denied.'),
  providerLimits: Schema.dict(Schema.number().step(1).min(1).max(20)).default({}).description('Host maximum concurrent requests per exact registered provider route; debate settings may only tighten it.'),
  providerSpacingMs: Schema.dict(Schema.number().step(1).min(0).max(3600000)).default({}).description('Host minimum request-start spacing per provider in milliseconds; debate settings may only increase it.'),
  maxConcurrentRuns: Schema.const(1).default(1).description('One active debate/review at a time; provider caps and spacing are enforced by its single scheduler.'),
  metadataTimeoutMs: Schema.number().step(1).min(50).max(60000).default(5000).description('Deadline for each bounded model catalog/capability discovery window, in milliseconds.'),
});
export interface HostConfig { documentMaxFiles?: number; documentMaxFileBytes?: number; documentMaxTotalBytes?: number; documentMaxConversationFiles?: number; documentMaxExtractedChars?: number; localOnly: boolean; providerLimits: Record<string, number>; providerSpacingMs: Record<string, number>; maxConcurrentRuns: 1; metadataTimeoutMs: number; }

const actions = ['snapshot', 'get', 'settings', 'start', 'stop', 'review', 'rename', 'delete', 'select', 'rerun', 'preset-save', 'preset-delete', 'preset-apply', 'export', 'image', 'followup', 'process-files'] as const;
const requestSchema = z.object({
  action: z.enum(actions), documents: z.array(encodedDocumentSchema).max(20).optional(), message: z.string().max(30000).optional(), images: z.array(encodedImageSchema).max(4).optional(), imageIndex: z.number().int().min(0).max(19).optional(), followUpId: z.string().max(100).optional(), id: z.string().max(100).nullable().optional(), question: z.string().trim().max(30000).optional(), settings: settingsSchema.optional(),
  name: z.string().trim().min(1).max(100).optional(), title: z.string().trim().min(1).max(160).optional(), format: z.enum(['json', 'markdown']).optional(),
}).strict();
const maxBodyBytes = 58 * 1024 * 1024; // Two independently bounded 20 MiB document/image batches after base64 expansion.
export type OperationResult = { ok: true; value: unknown } | { ok: false; error: string };

const expectedErrors = new Set(['This discussion is not executing.', 'Stop this run before renaming it.', 'Stop this run before deleting it.', 'Preset limit reached (100).', 'Preset not found.', 'Unsupported action', 'Debate session not found.', 'Another debate is active. Stop it or wait before starting another.', 'No available discussion to review.', 'Configure and enable at least two distinct models in DSH Settings → Models.']);
function publicError(error: unknown): string {
  if (error instanceof z.ZodError) return `Invalid request or settings (${[...new Set(error.issues.map(issue => issue.path.join('.') || 'request'))].slice(0, 8).join(', ')}).`;
  if (error instanceof ModelFailure || error instanceof ImageInputError || error instanceof DocumentInputError || error instanceof FollowUpError) return error.message;
  if (error instanceof Error && (expectedErrors.has(error.message) || /^Missing (id|format|question|settings|name|title|imageIndex|message)$/.test(error.message) || /^(Model unavailable or restricted: |Unsupported reasoning effort for |Reviewer unavailable: )/.test(error.message))) return error.message.slice(0, 600);
  // Storage, middleware and provider internals can contain paths, request bodies or credentials.
  return 'Model Debate could not complete the operation. Check plugin storage and model configuration; private error details are not exposed.';
}
function json(value: OperationResult, status = 200): Response { return new Response(JSON.stringify(value), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } }); }

/** One operation adapter for both authenticated GUI Fetch and the agent tool. */
export function createOperation(service: Pick<DebateService, 'operation'>): (input: unknown) => Promise<OperationResult> {
  return async input => { try { const request = requestSchema.parse(input); return { ok: true, value: await service.operation(request) }; } catch (error) { return { ok: false, error: publicError(error) }; } };
}

export const toolParameters = {
  type: 'object', properties: {
    action: { type: 'string', enum: [...actions], description: 'snapshot discovers models/settings/history; get reads a full debate; settings replaces future-run settings; start starts a debate; followup continues an inactive debate with new user information; stop cancels without review; review explicitly reviews available messages; rerun starts a new debate; rename/delete/select manage history; preset-* manage saved settings; export returns transcript text; image reads a saved debate image.' },
    id: { oneOf: [{ type: 'string' }, { type: 'null' }], description: 'Debate ID for get/followup/stop/review/rename/delete/select/rerun/export/image, or preset ID for preset-*. Null select clears selection.' },
    images: { type: 'array', maxItems: 4, items: { type: 'object', properties: { mediaType: { type: 'string', enum: ['image/png', 'image/jpeg', 'image/webp', 'image/gif'] }, data: { type: 'string', description: 'Canonical base64 image bytes, without a data URL prefix.' }, name: { type: 'string' } }, required: ['mediaType', 'data'], additionalProperties: false }, description: 'Optional new images for start or followup: at most 4 per message, 10 MiB each and 20 MiB total, further limited by DSH. Continuations retain earlier images and allow images without text. All enabled participants and reviewer must have confirmed image support. Never send arbitrary attachment references.' },
    documents: { type: 'array', maxItems: 20, items: { type: 'object', properties: { name: { type: 'string', maxLength: 255 }, data: { type: 'string', description: 'Canonical base64 original file bytes, without a data URL prefix.' }, mediaType: { type: 'string' } }, required: ['name', 'data'], additionalProperties: false }, description: 'Document uploads for process-files/start/followup. Host validates and extracts PDF, DOCX, TXT, Markdown, CSV and source files locally. Snapshot.documentPolicy supplies authoritative limits. Raw originals are not retained; extracted text persists with its user turn. Files alone may start or continue a debate.' },
    imageIndex: { type: 'integer', minimum: 0, maximum: 19, description: 'Required for image: zero-based index in the original images, or in the continuation identified by followUpId.' },
    followUpId: { type: 'string', description: 'Optional for image: saved continuation message owning the image. Omit to read original question images.' },
    message: { type: 'string', maxLength: 30000, description: 'For followup: new information, correction or question for an inactive saved debate. Text, new images or documents is required. Preserves saved participants/settings, earlier images, messages and reviews with fresh bounded allowances. Settings overrides are not accepted.' },
    question: { type: 'string', description: 'Question to debate, at most 30,000 characters. May be empty when starting with files or images.' },
    settings: { type: 'object', additionalProperties: true, description: 'Complete settings object from snapshot, modified as needed. Required for settings/preset-save; optional for start. Contains participants, scheduling bounds and reviewer. Host local-only and concurrency restrictions cannot be loosened here.' },
    name: { type: 'string', description: 'Required preset name for preset-save, at most 100 characters.' },
    title: { type: 'string', description: 'Required new debate title for rename, at most 160 characters.' },
    format: { type: 'string', enum: ['json', 'markdown'], description: 'Required for export. Returns text; does not write a file.' },
  }, required: ['action'], additionalProperties: false,
};

function toolText(args: unknown, result: OperationResult): string {
  let rendered: unknown = result;
  if (result.ok && (args as { action?: string })?.action === 'snapshot' && result.value && typeof result.value === 'object') {
    const snapshot = result.value as Record<string, any>;
    rendered = { ok: true, value: { ...snapshot, sessions: Array.isArray(snapshot.sessions) ? snapshot.sessions.map((session: any) => ({ id: session.id, title: session.title, status: session.status, updatedAt: session.updatedAt, messageCount: session.messages?.length ?? 0, followUpCount: session.followUps?.length ?? 0, hasFinal: !!session.final })) : [], detail: 'Use get with a debate ID for its full settings, transcript, task state and request log.' } };
  }
  const text = JSON.stringify(rendered, null, 2);
  return text.length <= 60000 ? text : `${text.slice(0, 60000)}\n[Tool display truncated at 60,000 characters. Use get with a specific debate ID, or export for its complete transcript.]`;
}
interface HostContext extends AdapterContext {
  attachments?: AttachmentContext;
  get?(name: string): unknown;
  storageDomain: { open(spec: object): Promise<RepositoryDomain> };
  connection: { fetch: { register(route: { path: string; methods: readonly ['POST']; requestBody: 'buffered'; fetch(request: Request): Promise<Response> }): () => Promise<void> } };
  tools: { register(definition: any): () => void };
  provide(name: string, value: unknown): () => void;
  effect(run: () => AsyncIterable<() => unknown>): PromiseLike<unknown>;
}

export async function apply(ctx: HostContext, rawConfig: HostConfig): Promise<void> {
  const config = Config(rawConfig) as HostConfig;
  await ctx.effect(async function* () {
    const domain = await ctx.storageDomain.open({ name: 'model_debate', version: 1, layout: 'single', tables: { sessions: { valueSchema: sessionSchema }, preferences: { valueSchema: preferencesSchema } } });
    let repository: Repository | undefined, service: DebateService | undefined;
    // One finalizer guarantees storage closes even if engine disposal or a write fails.
    yield async () => { try { await service?.dispose(); } finally { try { await repository?.flush(); } finally { await domain.close(); } } };
    repository = new Repository(domain);
    service = new DebateService(new DshAdapter(ctx, config), repository, { providerLimits: config.providerLimits, providerSpacingMs: config.providerSpacingMs, maxConcurrentRuns: config.maxConcurrentRuns, documentLimits: { maxFiles: config.documentMaxFiles, maxFileBytes: config.documentMaxFileBytes, maxTotalBytes: config.documentMaxTotalBytes, maxConversationFiles: config.documentMaxConversationFiles, maxExtractedChars: config.documentMaxExtractedChars }, images: new DshImages((ctx.get ? ctx.get('attachments') : ctx.attachments) as AttachmentContext | undefined) });
    await service.initialize();
    const operation = createOperation(service);
    yield ctx.provide('modelDebate', service);
    yield ctx.connection.fetch.register({ path: '/api/model-debate', methods: ['POST'], requestBody: 'buffered', async fetch(request) {
      if (!request.headers.get('content-type')?.toLowerCase().includes('application/json')) return json({ ok: false, error: 'Use application/json.' }, 415);
      const declaredLength = Number(request.headers.get('content-length') ?? 0);
      if (declaredLength > maxBodyBytes) return json({ ok: false, error: 'Request exceeds the 58 MiB JSON limit.' }, 413);
      let data: unknown;
      try { const body = await request.text(); if (Buffer.byteLength(body, 'utf8') > maxBodyBytes) return json({ ok: false, error: 'Request exceeds the 58 MiB JSON limit.' }, 413); data = JSON.parse(body); }
      catch { return json({ ok: false, error: 'Request body must be valid JSON.' }, 400); }
      // Request disconnection must not cancel a persistent run; explicit stop owns cancellation.
      const result = await operation(data); return json(result, result.ok ? 200 : 400);
    } });
    yield ctx.tools.register({
      name: 'model_debate',
      description: 'Read and manage saved multi-model debates. Start, followup or rerun spends model-provider resources; stop cancels without a final review, while review explicitly requests one. Delete removes saved history. Debate participants inspect text, extracted documents and optional submitted images, but never execute suggested tools or external actions. Start with snapshot to discover exact available models and complete settings.',
      parameters: toolParameters,
      output: { schema: { type: 'object', properties: { ok: { type: 'boolean' }, value: { oneOf: [{ type: 'object', additionalProperties: true }, { type: 'array', items: {} }, { type: 'string' }, { type: 'number' }, { type: 'boolean' }, { type: 'null' }] }, error: { type: 'string' } }, required: ['ok'], additionalProperties: false }, render: (args: unknown, value: OperationResult) => [{ type: 'text', text: toolText(args, value) }] },
      execute: (args: unknown) => operation(args),
      isConcurrencySafe: (args: unknown) => ['snapshot', 'get', 'export', 'image', 'process-files'].includes((args as { action?: string })?.action ?? ''),
    });
  });
}

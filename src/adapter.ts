import { randomUUID } from 'node:crypto';
import type { ImageRef, ModelInfo, Participant, Usage } from './state.js';
import { responseFieldNames, type DiagnosticCategory, type RequestDiagnostics } from './diagnostics.js';
export { requestDiagnosticsSchema, type RequestDiagnostics } from './diagnostics.js';

export interface PreparedConfig { provider: string; model: string; maxTokens?: number; reasoningEffort?: string; }
export interface RetryPolicy { maxRetries?: number; retryableCodes?: readonly string[]; initialDelayMs?: number; maxDelayMs?: number; }
export interface ModelAdapter {
  catalog(): Promise<{ models: ModelInfo[]; diagnostics: string[]; localOnly: boolean }>;
  call(input: { participant: Participant; correlationId?: string; system: string; prompt: string; enforceContextBudget?: boolean; images?: readonly ImageRef[]; imageGroups?: readonly { text: string; images: readonly ImageRef[] }[]; signal: AbortSignal; maxTokens: number; onText: (text: string) => void; onPrepared?: (config: PreparedConfig) => Promise<void>; onDiagnostics?: (diagnostics: RequestDiagnostics) => void | Promise<void> }): Promise<{ text: string; incomplete: boolean; usage?: Usage; diagnostics?: RequestDiagnostics }>;
  retryPolicy(provider: string): RetryPolicy;
}

/** Provider messages/bodies are deliberately never copied into this public error. */
export class ModelFailure extends Error {
  readonly code: string;
  readonly retryAfterMs?: number;
  readonly partial?: string;
  readonly usage?: Usage;
  readonly diagnostics?: RequestDiagnostics;
  constructor(message: string, code: string, options: { retryAfterMs?: number; partial?: string; usage?: Usage; diagnostics?: RequestDiagnostics } = {}) {
    super(message); this.name = 'ModelFailure'; this.code = code;
    this.retryAfterMs = options.retryAfterMs; this.partial = options.partial; this.usage = options.usage; this.diagnostics = options.diagnostics;
  }
}

// Structural contracts are intentionally confined to this adapter, avoiding a second DSH/Cordis runtime.
interface Provider { id: string; name: string; }
interface AdvertisedModel { provider: string; id: string; name: string; inputModalities?: readonly string[]; }
interface DirectoryEntry { provider: string; settingsNs: string; settingsPath: readonly string[]; baseURLEnv?: readonly string[]; }
interface ModelMetadata { inputModalities?: readonly string[]; reasoning?: { efforts: readonly { id: string }[] }; context?: { contextWindow: number }; }
interface PreparedCall { config: PreparedConfig; retryPolicy: RetryPolicy; inputModalities?: readonly string[]; stream(options: object): AsyncIterable<any>; }
type ImageSupport = NonNullable<ModelInfo['imageSupport']>;
/** Absence is unknown, never vision; one explicit exclusion wins a conflicting claim. */
function imageSupport(...claims: readonly (readonly string[] | undefined)[]): ImageSupport {
  if (claims.some(modalities => modalities !== undefined && !modalities.includes('image'))) return 'unsupported';
  return claims.some(modalities => modalities?.includes('image')) ? 'supported' : 'unknown';
}
function assertImageSupport(support: ImageSupport): void {
  if (support === 'unsupported') throw new ModelFailure('Selected model route does not support image inputs; choose an image-capable route in DSH Settings → Models.', 'IMAGE_UNSUPPORTED');
  if (support === 'unknown') throw new ModelFailure('Image capability is unknown for the selected model route; choose a route with explicit image support in DSH Settings → Models.', 'IMAGE_CAPABILITY_UNKNOWN');
}
export interface AdapterContext {
  llm: {
    listProviders(): Provider[];
    listConfigurableProviders(): DirectoryEntry[];
    listModels(provider: string): Promise<AdvertisedModel[]>;
    resolveModelInfo(provider: string, model: string, signal?: AbortSignal): Promise<ModelMetadata>;
    prepareCall(config: PreparedConfig, signal?: AbortSignal): Promise<PreparedCall>;
    providerRetryPolicy(provider: string): RetryPolicy;
  };
  settings: { describe(options: { redactSecrets: true }): { ns: string; value: unknown }[] };
}

const publicCodes = new Set(['RATE_LIMIT', 'SERVER', 'TIMEOUT', 'TRANSPORT', 'STREAM_CLOSED', 'EMPTY_RESPONSE', 'UNSUPPORTED_TOOLS', 'MALFORMED_RESPONSE', 'INVALID_REQUEST', 'ABORTED', 'MISSING_CREDENTIAL', 'INVALID_CREDENTIAL', 'AUTH', 'AUTHENTICATION', 'PERMISSION', 'BAD_REQUEST', 'CONTEXT_LENGTH', 'CONTEXT_LENGTH_EXCEEDED', 'CONTEXT_WINDOW_EXCEEDED', 'MODEL_NOT_FOUND', 'UNKNOWN_MODEL', 'UNSUPPORTED_REASONING_EFFORT', 'UNSUPPORTED_OPTION', 'UNKNOWN_PROVIDER', 'NO_ADAPTER', 'QUOTA', 'QUOTA_EXCEEDED', 'ACCOUNT_QUOTA', 'ACCOUNT_QUOTA_EXCEEDED', 'UNAVAILABLE', 'LOCAL_ONLY', 'OUTPUT_LIMIT', 'REQUEST_FAILED']);
// Preserve image/resource codes ahead of HTTP status so invalid inputs never become transient retries.
const imageFailureCodes = new Set(['IMAGE_UNSUPPORTED', 'IMAGE_CAPABILITY_UNKNOWN', 'IMAGE_OFFLOAD_REQUIRED', 'TOO_MANY_IMAGES', 'IMAGES_TOO_LARGE', 'UNSUPPORTED_IMAGE_TYPE', 'INVALID_IMAGE_BASE64', 'INVALID_IMAGE', 'IMAGE_TYPE_MISMATCH', 'IMAGE_TOO_LARGE', 'IMAGE_TOO_MANY_PIXELS', 'IMAGE_DIMENSION_TOO_LARGE', 'INVALID_ATTACHMENT_REF', 'ATTACHMENT_CORRUPT', 'ATTACHMENT_WRITE_FAILED', 'ATTACHMENT_NOT_FOUND', 'ATTACHMENT_READ_FAILED', 'ATTACHMENT_PROJECTION_UNSUPPORTED']);
function safeFailure(error: unknown, partial?: string, usage?: Usage, diagnostics?: RequestDiagnostics): ModelFailure {
  // Whitespace is not a public answer, even on a failure; never publish it as an available partial.
  partial = partial?.trim() ? partial : undefined;
  if (error instanceof ModelFailure) return new ModelFailure(error.message, error.code, { retryAfterMs: error.retryAfterMs, partial: partial ?? (error.partial?.trim() ? error.partial : undefined), usage: usage ?? error.usage, diagnostics: diagnostics ?? error.diagnostics });
  // Installed LlmError stores status/delay in .failure, not on the Error itself.
  const outer = asObject(error), facts = asObject(outer.failure);
  const failure = { code: facts.code ?? outer.code, status: facts.status ?? outer.status, providerRetryAfterMs: facts.providerRetryAfterMs ?? outer.providerRetryAfterMs, name: outer.name };
  const code = typeof failure.code === 'string' && imageFailureCodes.has(failure.code) ? failure.code : failure.status === 429 ? 'RATE_LIMIT' : failure.status === 401 || failure.status === 403 ? 'AUTH' : typeof failure.status === 'number' && failure.status >= 500 && failure.status <= 599 ? 'SERVER' : failure.status === 400 ? 'BAD_REQUEST' : typeof failure.code === 'string' && publicCodes.has(failure.code) ? failure.code : failure.name === 'AbortError' ? 'ABORTED' : 'REQUEST_FAILED';
  const message = imageFailureCodes.has(code) ? 'Image input could not be used on the selected model route; check its image support and saved attachments in DSH Settings → Models.' : code === 'ABORTED' ? 'Model request cancelled.' : code === 'RATE_LIMIT' ? 'Provider rate limited this request.' : code === 'MISSING_CREDENTIAL' || code === 'AUTH' || code === 'AUTHENTICATION' ? 'Provider authentication unavailable; check DSH Settings → Models.' : code === 'TIMEOUT' ? 'Model metadata or request timed out.' : 'Model request failed; check the exact model route and provider configuration in DSH Settings → Models.';
  const retryAfterMs = finiteNonnegative(failure.providerRetryAfterMs);
  return new ModelFailure(message, code, { partial: partial || undefined, usage, diagnostics, ...(retryAfterMs === undefined ? {} : { retryAfterMs }) });
}
function asObject(value: unknown): Record<string, any> { return typeof value === 'object' && value !== null ? value as Record<string, any> : {}; }
function finiteNonnegative(value: unknown): number | undefined { return typeof value === 'number' && Number.isFinite(value) && value >= 0 ? value : undefined; }
function usageOf(value: unknown): Usage | undefined {
  const data = asObject(value), inputTokens = finiteNonnegative(data.inputTokens), outputTokens = finiteNonnegative(data.outputTokens), totalTokens = finiteNonnegative(data.totalTokens);
  return inputTokens === undefined || outputTokens === undefined ? undefined : { inputTokens, outputTokens, ...(totalTokens === undefined ? {} : { totalTokens }) };
}
function aborted(signal: AbortSignal): void { if (signal.aborted) throw new ModelFailure('Model request cancelled.', 'ABORTED'); }
/** Race an uncooperative metadata provider/iterator without retaining abort listeners or timers. */
function interruptible<T>(promise: PromiseLike<T>, signal: AbortSignal, timeoutMs?: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    let settled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const finish = (fn: (value: any) => void, value: unknown) => { if (settled) return; settled = true; signal.removeEventListener('abort', cancel); if (timer) clearTimeout(timer); fn(value); };
    const cancel = () => finish(reject, new ModelFailure('Model request cancelled.', 'ABORTED'));
    signal.addEventListener('abort', cancel, { once: true });
    Promise.resolve(promise).then(value => finish(resolve, value), error => finish(reject, error));
    if (signal.aborted) { cancel(); return; }
    if (timeoutMs !== undefined) timer = setTimeout(() => finish(reject, new ModelFailure('Model metadata timed out.', 'TIMEOUT')), Math.max(1, timeoutMs));
  });
}
async function timed<T>(work: (signal: AbortSignal) => Promise<T>, timeoutMs: number, parent?: AbortSignal): Promise<T> {
  const controller = new AbortController();
  const cancel = () => controller.abort();
  parent?.addEventListener('abort', cancel, { once: true });
  if (parent?.aborted) controller.abort();
  const timer = setTimeout(cancel, timeoutMs);
  try { return await interruptible(Promise.resolve().then(() => work(controller.signal)), controller.signal); }
  catch (error) { if (controller.signal.aborted && !parent?.aborted) throw new ModelFailure('Model metadata timed out.', 'TIMEOUT'); throw error; }
  finally { clearTimeout(timer); parent?.removeEventListener('abort', cancel); }
}
async function mapLimit<T, R>(items: readonly T[], limit: number, run: (item: T) => Promise<R>): Promise<R[]> {
  const result = new Array<R>(items.length); let cursor = 0;
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => { while (cursor < items.length) { const i = cursor++; result[i] = await run(items[i]); } }));
  return result;
}

/** Only literal loopback endpoints are accepted; provider names never establish locality. */
export function isLoopbackEndpoint(value: unknown): boolean {
  if (typeof value !== 'string') return false;
  try {
    const url = new URL(value);
    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.search || url.hash) return false;
    return url.hostname === 'localhost' || url.hostname === '[::1]' || /^127\.(?:\d{1,3}\.){2}\d{1,3}$/.test(url.hostname);
  } catch { return false; }
}

export class DshAdapter implements ModelAdapter {
  private readonly timeoutMs: number;
  private readonly localOnly: boolean;
  constructor(private readonly ctx: AdapterContext, options: { localOnly?: boolean; metadataTimeoutMs?: number } = {}) {
    this.localOnly = options.localOnly === true;
    this.timeoutMs = Math.max(50, Math.min(60000, options.metadataTimeoutMs ?? 5000));
  }
  private verifiedLocalProviders(): Set<string> {
    const local = new Set<string>();
    try {
      const directory = this.ctx.llm.listConfigurableProviders();
      const settings = this.ctx.settings.describe({ redactSecrets: true });
      for (const entry of directory) {
        // An explicit endpoint is required: no default/environment URL is assumed to be local.
        if (!entry.settingsPath?.length || entry.baseURLEnv?.length || directory.filter(other => other.provider === entry.provider).length !== 1) continue;
        let profile: unknown = settings.find(item => item.ns === entry.settingsNs)?.value;
        for (const part of entry.settingsPath) {
          if (!profile || typeof profile !== 'object' || !Object.prototype.hasOwnProperty.call(profile, part)) { profile = undefined; break; }
          profile = asObject(profile)[part];
        }
        if (isLoopbackEndpoint(asObject(profile).baseURL)) local.add(entry.provider);
      }
    } catch { /* Unknown/unavailable configuration is not proof of locality. */ }
    return local;
  }
  async catalog(): Promise<{ models: ModelInfo[]; diagnostics: string[]; localOnly: boolean }> {
    const diagnostics: string[] = [], local = this.verifiedLocalProviders();
    let providers: Provider[];
    try { providers = this.ctx.llm.listProviders(); }
    catch { return { models: [], diagnostics: ['DSH model registry is unavailable.'], localOnly: this.localOnly }; }
    if (this.localOnly) diagnostics.push('Host local-only policy permits only explicitly configured, verified loopback provider endpoints. Unknown routes are excluded.');
    const catalogDeadline = Date.now() + this.timeoutMs;
    const routes = await mapLimit(providers, 4, async provider => {
      if (this.localOnly && !local.has(provider.id)) return [];
      const remaining = catalogDeadline - Date.now();
      if (remaining <= 0) { diagnostics.push('Provider catalog metadata window exhausted; remaining routes are excluded.'); return []; }
      try {
        const advertised = await timed(() => this.ctx.llm.listModels(provider.id), remaining);
        const seen = new Set<string>();
        return advertised.filter(model => model.provider === provider.id && typeof model.id === 'string' && model.id.length > 0 && !seen.has(model.id) && !!seen.add(model.id)).map(model => ({ provider: provider.id, model: model.id, name: model.name || model.id, providerName: provider.name || provider.id, reasoningEfforts: [] as string[], local: local.has(provider.id), imageSupport: imageSupport(model.inputModalities), inputModalities: model.inputModalities }));
      } catch { diagnostics.push('A registered provider catalog could not be read before the metadata timeout; its models are excluded.'); return []; }
    });
    // One bounded metadata window, not N sequential timeouts for a large catalog.
    const deadline = Date.now() + this.timeoutMs; let unavailable = 0;
    const models = await mapLimit(routes.flat(), 8, async ({ inputModalities, ...model }) => {
      const remaining = deadline - Date.now();
      if (remaining <= 0) { unavailable++; return model; }
      try {
        const metadata = await timed(signal => this.ctx.llm.resolveModelInfo(model.provider, model.model, signal), remaining);
        const reasoningEfforts = [...new Set((metadata.reasoning?.efforts ?? []).map(effort => effort.id).filter(id => typeof id === 'string'))];
        const contextWindow = finiteNonnegative(metadata.context?.contextWindow);
        return { ...model, reasoningEfforts, imageSupport: imageSupport(inputModalities, metadata.inputModalities), ...(contextWindow ? { contextWindow } : {}) };
      } catch { unavailable++; return model; }
    });
    if (unavailable) diagnostics.push(`Exact capability metadata unavailable for ${unavailable} advertised model(s); unsupported options are not offered and dispatch validates again.`);
    if (!models.length) diagnostics.push('No eligible advertised models. Configure active model routes in DSH Settings → Models; no model IDs are invented.');
    return { models, diagnostics: [...new Set(diagnostics)], localOnly: this.localOnly };
  }
  retryPolicy(provider: string): RetryPolicy {
    try {
      const policy = this.ctx.llm.providerRetryPolicy(provider);
      return { ...(policy.maxRetries === undefined ? {} : { maxRetries: policy.maxRetries }), ...(policy.retryableCodes ? { retryableCodes: [...policy.retryableCodes] } : {}), initialDelayMs: policy.initialDelayMs, maxDelayMs: policy.maxDelayMs };
    } catch { return { maxRetries: 0, retryableCodes: [] }; }
  }
  private async assertRoute(provider: string, model: string, signal: AbortSignal): Promise<AdvertisedModel> {
    aborted(signal);
    if (!this.ctx.llm.listProviders().some(item => item.id === provider)) throw new ModelFailure('Selected provider is no longer registered; no substitution was made.', 'UNAVAILABLE');
    if (this.localOnly && !this.verifiedLocalProviders().has(provider)) throw new ModelFailure('Host local-only policy blocks this provider; no substitution was made.', 'LOCAL_ONLY');
    const advertised = await timed(() => this.ctx.llm.listModels(provider), this.timeoutMs, signal);
    const selected = advertised.find(item => item.provider === provider && item.id === model);
    if (!selected) throw new ModelFailure('Selected model is no longer advertised on its exact provider route; no substitution was made.', 'UNAVAILABLE');
    return selected;
  }
  async call(input: Parameters<ModelAdapter['call']>[0]): ReturnType<ModelAdapter['call']> {
    const { participant, signal } = input; let text = '', usage: Usage | undefined;
    let iterator: AsyncIterator<unknown> | undefined;
    const diagnostics: RequestDiagnostics = {
      version: 1, correlationId: typeof input.correlationId === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(input.correlationId) ? input.correlationId : randomUUID(), provider: participant.provider, model: participant.model,
      phase: 'preparing', category: 'pending', chunkCount: 0,
      chunks: { textDelta: 0, reasoningDelta: 0, toolCallDelta: 0, blockStart: 0, blockEnd: 0, usage: 0, finish: 0, unknown: 0, malformed: 0 },
      responseFields: [], publicTextLength: 0, reasoningObserved: false, toolsObserved: false, toolsPolicy: 'unsupported',
    };
    const snapshot = (): RequestDiagnostics => ({ ...diagnostics, chunks: { ...diagnostics.chunks }, responseFields: [...diagnostics.responseFields], publicTextLength: text.length });
    const publish = async () => { if (input.onDiagnostics) await interruptible(Promise.resolve(input.onDiagnostics(snapshot())), signal); };
    const malformed = () => { diagnostics.chunks.malformed++; };
    const fields = new Set<RequestDiagnostics['responseFields'][number]>();
    const observe = (chunk: Record<string, any>) => {
      // Inspect only a closed field-name allowlist. Never enumerate provider-controlled keys or retain values.
      for (const path of responseFieldNames) {
        let object: unknown = chunk; let present = true;
        for (const part of path.split('.')) {
          if (!object || typeof object !== 'object' || !Object.prototype.hasOwnProperty.call(object, part)) { present = false; break; }
          object = asObject(object)[part];
        }
        if (present) fields.add(path);
      }
      diagnostics.responseFields = responseFieldNames.filter(field => fields.has(field));
    };
    const statusOf = (failure: unknown) => {
      const outer = asObject(failure), status = asObject(outer.failure).status ?? outer.status;
      if (Number.isInteger(status) && status >= 100 && status <= 599) diagnostics.status = status;
    };
    const noTextCategory = (): DiagnosticCategory => diagnostics.chunks.malformed ? 'malformed' : diagnostics.toolsObserved ? 'tool-only' : diagnostics.reasoningObserved ? 'reasoning-only' : 'empty';
    try {
      await publish();
      const imagesSeen = new Set<string>();
      const groups = input.imageGroups?.map(group => ({ text: group.text, images: group.images.filter(image => !imagesSeen.has(image.attachmentId) && !!imagesSeen.add(image.attachmentId)) }));
      const images = groups === undefined ? input.images ?? [] : groups.flatMap(group => group.images);
      if (groups !== undefined && input.images && (images.length !== input.images.length || images.some((image, index) => image.attachmentId !== input.images![index].attachmentId))) throw new ModelFailure('Image request groups do not match the validated ordered images.', 'INVALID_REQUEST');
      const advertised = await this.assertRoute(participant.provider, participant.model, signal);
      if (input.enforceContextBudget) {
        const metadata = await timed(child => this.ctx.llm.resolveModelInfo(participant.provider, participant.model, child), this.timeoutMs, signal);
        const window = finiteNonnegative(metadata.context?.contextWindow) ?? 16384;
        if (Buffer.byteLength(input.system + input.prompt, 'utf8') + input.maxTokens + 1024 > window) throw new ModelFailure('Document context exceeds the current model context window; reduce output/context or choose a larger-context model. No request was sent.', 'CONTEXT_LENGTH');
      }
      if (images.length) {
        // This runs for every call/retry, never trusting a previously displayed catalog.
        if (imageSupport(advertised.inputModalities) === 'unsupported') assertImageSupport('unsupported');
        const metadata = await timed(child => this.ctx.llm.resolveModelInfo(participant.provider, participant.model, child), this.timeoutMs, signal);
        assertImageSupport(imageSupport(advertised.inputModalities, metadata.inputModalities));
      }
      const prepared = await timed(child => this.ctx.llm.prepareCall({ provider: participant.provider, model: participant.model, maxTokens: Math.min(input.maxTokens, participant.options.maxTokens ?? input.maxTokens), ...(participant.options.reasoningEffort ? { reasoningEffort: participant.options.reasoningEffort } : {}) }, child), this.timeoutMs, signal);
      if (prepared.config.provider !== participant.provider || prepared.config.model !== participant.model) throw new ModelFailure('DSH prepared a different model route; request refused.', 'UNAVAILABLE');
      // The one-shot handle owns the actual adapter generation; never permit DSH's text-only placeholder fallback.
      if (images.length && prepared.inputModalities !== undefined) assertImageSupport(imageSupport(prepared.inputModalities));
      if (input.enforceContextBudget) {
        const metadata = await timed(child => this.ctx.llm.resolveModelInfo(participant.provider, participant.model, child), this.timeoutMs, signal);
        if (Buffer.byteLength(input.system + input.prompt, 'utf8') + (prepared.config.maxTokens ?? input.maxTokens) + 1024 > (finiteNonnegative(metadata.context?.contextWindow) ?? 16384)) throw new ModelFailure('Prepared document request exceeds the model context limit. No request was sent.', 'CONTEXT_LENGTH');
      }
      aborted(signal);
      await interruptible(Promise.resolve(input.onPrepared?.({ provider: prepared.config.provider, model: prepared.config.model, ...(prepared.config.maxTokens === undefined ? {} : { maxTokens: prepared.config.maxTokens }), ...(prepared.config.reasoningEffort === undefined ? {} : { reasoningEffort: prepared.config.reasoningEffort }) })), signal);
      aborted(signal);
      if (this.localOnly && !this.verifiedLocalProviders().has(participant.provider)) throw new ModelFailure('Host local-only policy blocks this provider; no substitution was made.', 'LOCAL_ONLY');
      diagnostics.phase = 'streaming'; await publish(); aborted(signal);
      const imageBlocks = (refs: readonly ImageRef[]) => refs.map(attachment => ({ type: 'image', attachment }));
      const messages = groups === undefined
        ? [{ role: 'user', content: [{ type: 'text', text: input.prompt }, ...imageBlocks(images)] }]
        : [{ role: 'user', content: [{ type: 'text', text: input.prompt }] }, ...groups.map(group => ({ role: 'user', content: [{ type: 'text', text: group.text }, ...imageBlocks(group.images)] }))];
      iterator = prepared.stream({ ...prepared.config, system: input.system, messages, tools: [], signal })[Symbol.asyncIterator]();
      // Match the SDK BlockAssembler's first-seen ordering and closed-block boundaries.
      const blocks = new Map<number, { kind: 'text' | 'reasoning' | 'tool-call'; text?: string; closed: boolean }>();
      const blockOf = (index: unknown, kind: 'text' | 'reasoning' | 'tool-call') => {
        if (!Number.isSafeInteger(index) || (index as number) < 0) { malformed(); return undefined; }
        const current = blocks.get(index as number);
        if (current) { if (current.kind !== kind || current.closed) { malformed(); return undefined; } return current; }
        if (blocks.size >= 10000) throw new ModelFailure('Provider emitted too many response blocks.', 'MALFORMED_RESPONSE');
        const block = { kind, closed: false } as { kind: 'text' | 'reasoning' | 'tool-call'; text?: string; closed: boolean };
        blocks.set(index as number, block); return block;
      };
      const update = (block: { text?: string }, value: string) => {
        block.text = value;
        const nextText = [...blocks.values()].filter(item => item.kind === 'text').map(item => item.text ?? '').join('');
        if (nextText.length > 100000) { text = nextText.slice(0, 100000); throw new ModelFailure('Model output exceeded the safe response limit.', 'OUTPUT_LIMIT'); }
        if (nextText !== text) { text = nextText; aborted(signal); input.onText(text); }
      };
      while (true) {
        const next = await interruptible(iterator.next(), signal);
        if (next.done) break;
        aborted(signal); const chunk = asObject(next.value); diagnostics.chunkCount++; observe(chunk);
        if (chunk.type === 'text-delta' || chunk.type === 'reasoning-delta') {
          const isText = chunk.type === 'text-delta'; diagnostics.chunks[isText ? 'textDelta' : 'reasoningDelta']++;
          if (!isText) diagnostics.reasoningObserved = true;
          const block = blockOf(chunk.index, isText ? 'text' : 'reasoning');
          if (typeof chunk.text !== 'string') malformed();
          else if (isText && block) update(block, (block.text ?? '') + chunk.text);
          // Reasoning values are not accumulated, stored, exposed, or used as public-answer fallback.
        } else if (chunk.type === 'block-start' || chunk.type === 'block-end') {
          const end = chunk.type === 'block-end'; diagnostics.chunks[end ? 'blockEnd' : 'blockStart']++;
          const value = asObject(chunk.block), kind = end ? value.type : chunk.blockType;
          if (kind === 'reasoning') diagnostics.reasoningObserved = true;
          if (kind === 'tool-call') diagnostics.toolsObserved = true;
          if (kind !== 'text' && kind !== 'reasoning' && kind !== 'tool-call') { malformed(); }
          const block = kind === 'text' || kind === 'reasoning' || kind === 'tool-call' ? blockOf(chunk.index, kind) : undefined;
          if (end && block) {
            if (kind === 'text') { if (typeof value.text === 'string') update(block, value.text); else malformed(); }
            else if (kind === 'reasoning' && typeof value.text !== 'string') malformed();
            else if (kind === 'tool-call' && (typeof value.id !== 'string' || typeof value.name !== 'string' || typeof value.arguments !== 'string')) malformed();
            block.closed = true;
          }
        } else if (chunk.type === 'tool-call-delta') {
          diagnostics.chunks.toolCallDelta++; diagnostics.toolsObserved = true; blockOf(chunk.index, 'tool-call');
          if (typeof chunk.id !== 'string' || typeof chunk.argumentsDelta !== 'string' || (chunk.name !== undefined && typeof chunk.name !== 'string')) malformed();
        } else if (chunk.type === 'usage') {
          diagnostics.chunks.usage++; const parsed = usageOf(chunk.usage); if (parsed) usage = parsed; else malformed();
        } else if (chunk.type === 'finish') {
          diagnostics.chunks.finish++; const reason = asObject(chunk.reason), kind = reason.kind;
          diagnostics.finishReason = kind === 'stop' || kind === 'max-tokens' || kind === 'tool-calls' || kind === 'error' || kind === 'aborted' ? kind : 'unknown';
          if (kind === 'aborted') { statusOf(reason.failure); throw new ModelFailure('Model request cancelled.', 'ABORTED'); }
          if (kind === 'error') {
            statusOf(reason.failure);
            if (typeof asObject(reason.failure).code !== 'string' && !(Number.isInteger(asObject(reason.failure).status) && asObject(reason.failure).status >= 100 && asObject(reason.failure).status <= 599)) { malformed(); throw new ModelFailure('Provider returned a malformed terminal failure.', 'MALFORMED_RESPONSE'); }
            if (asObject(reason.failure).code === 'EMPTY_RESPONSE' && !text.trim() && diagnostics.toolsObserved) throw new ModelFailure('Provider requested tools, but Model Debate does not support tools; no tool was executed and no public answer was returned.', 'UNSUPPORTED_TOOLS');
            throw safeFailure(reason.failure, text, usage);
          }
          if (kind === 'tool-calls') diagnostics.toolsObserved = true;
          if (diagnostics.finishReason === 'unknown') malformed();
          // Finish is terminal by SDK contract. Never scan replayState or fetch chunks after it.
          break;
        } else { diagnostics.chunks.unknown++; malformed(); }
        if (diagnostics.chunkCount % 32 === 0) await publish();
      }
      aborted(signal);
      if (!text.trim()) {
        if (diagnostics.chunks.malformed) throw new ModelFailure('Provider returned malformed response chunks with no public answer.', 'MALFORMED_RESPONSE');
        if (diagnostics.toolsObserved) throw new ModelFailure('Provider requested tools, but Model Debate does not support tools; no tool was executed and no public answer was returned.', 'UNSUPPORTED_TOOLS');
        if (diagnostics.reasoningObserved) throw new ModelFailure(diagnostics.finishReason === 'max-tokens' ? 'The provider used the entire output-token allowance on private reasoning before producing a public answer (finish: max-tokens). Increase maximum output tokens or lower reasoning effort.' : 'Provider returned reasoning without a public answer. Reasoning is not used as answer text; check output limits and model configuration.', 'EMPTY_RESPONSE');
        throw new ModelFailure('Provider returned no public response text.', 'EMPTY_RESPONSE');
      }
      diagnostics.phase = 'settled';
      diagnostics.category = diagnostics.chunks.malformed ? 'malformed' : !diagnostics.finishReason ? 'interrupted' : 'public-text';
      const incomplete = diagnostics.finishReason !== 'stop' || diagnostics.toolsObserved || diagnostics.chunks.malformed > 0;
      await publish();
      return { text, incomplete, ...(usage ? { usage } : {}), diagnostics: snapshot() };
    } catch (error) {
      statusOf(error); const failure = safeFailure(error, text, usage), phase = diagnostics.phase;
      diagnostics.phase = 'settled';
      diagnostics.category = failure.code === 'ABORTED' ? 'cancelled' : failure.code === 'OUTPUT_LIMIT' ? 'output-limit' : failure.code === 'MALFORMED_RESPONSE' ? 'malformed' : failure.code === 'UNSUPPORTED_TOOLS' ? 'tool-only' : failure.code === 'EMPTY_RESPONSE' ? noTextCategory() : failure.code === 'STREAM_CLOSED' || failure.code === 'TRANSPORT' ? 'interrupted' : phase === 'preparing' ? 'request-rejected' : 'provider-error';
      // Error metadata always carries the terminal snapshot even if persistence or cancellation rejects the callback.
      try { await publish(); } catch { /* Preserve the original failure and terminal diagnostics. */ }
      throw safeFailure(failure, text, usage, snapshot());
    } finally {
      // Calling return requests cleanup, but a broken provider must not hold cancellation hostage.
      if (iterator?.return) { try { const cleanup = iterator.return(); void Promise.resolve(cleanup).catch(() => undefined); } catch { /* Ignore provider cleanup error. */ } }
    }
  }
}

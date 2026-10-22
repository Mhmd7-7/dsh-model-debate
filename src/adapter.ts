import type { ImageRef, ModelInfo, Participant, Usage } from './state.js';

export interface PreparedConfig { provider: string; model: string; maxTokens?: number; reasoningEffort?: string; }
export interface RetryPolicy { maxRetries?: number; retryableCodes?: readonly string[]; initialDelayMs?: number; maxDelayMs?: number; }
export interface ModelAdapter {
  catalog(): Promise<{ models: ModelInfo[]; diagnostics: string[]; localOnly: boolean }>;
  call(input: { participant: Participant; system: string; prompt: string; images?: readonly ImageRef[]; signal: AbortSignal; maxTokens: number; onText: (text: string) => void; onPrepared?: (config: PreparedConfig) => Promise<void> }): Promise<{ text: string; incomplete: boolean; usage?: Usage }>;
  retryPolicy(provider: string): RetryPolicy;
}

/** Provider messages/bodies are deliberately never copied into this public error. */
export class ModelFailure extends Error {
  readonly code: string;
  readonly retryAfterMs?: number;
  readonly partial?: string;
  readonly usage?: Usage;
  constructor(message: string, code: string, options: { retryAfterMs?: number; partial?: string; usage?: Usage } = {}) {
    super(message); this.name = 'ModelFailure'; this.code = code;
    this.retryAfterMs = options.retryAfterMs; this.partial = options.partial; this.usage = options.usage;
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

const publicCodes = new Set(['RATE_LIMIT', 'SERVER', 'TIMEOUT', 'TRANSPORT', 'EMPTY_RESPONSE', 'ABORTED', 'MISSING_CREDENTIAL', 'INVALID_CREDENTIAL', 'AUTH', 'AUTHENTICATION', 'PERMISSION', 'BAD_REQUEST', 'CONTEXT_LENGTH', 'CONTEXT_LENGTH_EXCEEDED', 'CONTEXT_WINDOW_EXCEEDED', 'MODEL_NOT_FOUND', 'UNKNOWN_MODEL', 'UNSUPPORTED_REASONING_EFFORT', 'UNSUPPORTED_OPTION', 'UNKNOWN_PROVIDER', 'NO_ADAPTER', 'QUOTA', 'ACCOUNT_QUOTA', 'UNAVAILABLE', 'LOCAL_ONLY', 'OUTPUT_LIMIT', 'REQUEST_FAILED']);
// Preserve image/resource codes ahead of HTTP status so invalid inputs never become transient retries.
const imageFailureCodes = new Set(['IMAGE_UNSUPPORTED', 'IMAGE_CAPABILITY_UNKNOWN', 'IMAGE_OFFLOAD_REQUIRED', 'TOO_MANY_IMAGES', 'IMAGES_TOO_LARGE', 'UNSUPPORTED_IMAGE_TYPE', 'INVALID_IMAGE_BASE64', 'INVALID_IMAGE', 'IMAGE_TYPE_MISMATCH', 'IMAGE_TOO_LARGE', 'IMAGE_TOO_MANY_PIXELS', 'IMAGE_DIMENSION_TOO_LARGE', 'INVALID_ATTACHMENT_REF', 'ATTACHMENT_CORRUPT', 'ATTACHMENT_WRITE_FAILED', 'ATTACHMENT_NOT_FOUND', 'ATTACHMENT_READ_FAILED', 'ATTACHMENT_PROJECTION_UNSUPPORTED']);
function safeFailure(error: unknown, partial?: string, usage?: Usage): ModelFailure {
  if (error instanceof ModelFailure) return new ModelFailure(error.message, error.code, { retryAfterMs: error.retryAfterMs, partial: partial || error.partial, usage: usage ?? error.usage });
  const failure = asObject(error);
  const code = typeof failure.code === 'string' && imageFailureCodes.has(failure.code) ? failure.code : failure.status === 429 ? 'RATE_LIMIT' : failure.status === 401 || failure.status === 403 ? 'AUTH' : typeof failure.status === 'number' && failure.status >= 500 && failure.status <= 599 ? 'SERVER' : failure.status === 400 ? 'BAD_REQUEST' : typeof failure.code === 'string' && publicCodes.has(failure.code) ? failure.code : failure.name === 'AbortError' ? 'ABORTED' : 'REQUEST_FAILED';
  const message = imageFailureCodes.has(code) ? 'Image input could not be used on the selected model route; check its image support and saved attachments in DSH Settings → Models.' : code === 'ABORTED' ? 'Model request cancelled.' : code === 'RATE_LIMIT' ? 'Provider rate limited this request.' : code === 'MISSING_CREDENTIAL' || code === 'AUTH' || code === 'AUTHENTICATION' ? 'Provider authentication unavailable; check DSH Settings → Models.' : code === 'TIMEOUT' ? 'Model metadata or request timed out.' : 'Model request failed; check the exact model route and provider configuration in DSH Settings → Models.';
  const retryAfterMs = finiteNonnegative(failure.providerRetryAfterMs);
  return new ModelFailure(message, code, { partial: partial || undefined, usage, ...(retryAfterMs === undefined ? {} : { retryAfterMs }) });
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
    let iterator: AsyncIterator<any> | undefined;
    try {
      const advertised = await this.assertRoute(participant.provider, participant.model, signal);
      if (input.images?.length) {
        // This runs for every call/retry, never trusting a previously displayed catalog.
        if (imageSupport(advertised.inputModalities) === 'unsupported') assertImageSupport('unsupported');
        const metadata = await timed(child => this.ctx.llm.resolveModelInfo(participant.provider, participant.model, child), this.timeoutMs, signal);
        assertImageSupport(imageSupport(advertised.inputModalities, metadata.inputModalities));
      }
      const prepared = await timed(child => this.ctx.llm.prepareCall({ provider: participant.provider, model: participant.model, maxTokens: Math.min(input.maxTokens, participant.options.maxTokens ?? input.maxTokens), ...(participant.options.reasoningEffort ? { reasoningEffort: participant.options.reasoningEffort } : {}) }, child), this.timeoutMs, signal);
      if (prepared.config.provider !== participant.provider || prepared.config.model !== participant.model) throw new ModelFailure('DSH prepared a different model route; request refused.', 'UNAVAILABLE');
      // The one-shot handle owns the actual adapter generation; never permit DSH's text-only placeholder fallback.
      if (input.images?.length && prepared.inputModalities !== undefined) assertImageSupport(imageSupport(prepared.inputModalities));
      aborted(signal);
      await interruptible(Promise.resolve(input.onPrepared?.({ provider: prepared.config.provider, model: prepared.config.model, ...(prepared.config.maxTokens === undefined ? {} : { maxTokens: prepared.config.maxTokens }), ...(prepared.config.reasoningEffort === undefined ? {} : { reasoningEffort: prepared.config.reasoningEffort }) })), signal);
      aborted(signal);
      if (this.localOnly && !this.verifiedLocalProviders().has(participant.provider)) throw new ModelFailure('Host local-only policy blocks this provider; no substitution was made.', 'LOCAL_ONLY');
      iterator = prepared.stream({ ...prepared.config, system: input.system, messages: [{ role: 'user', content: [{ type: 'text', text: input.prompt }, ...(input.images ?? []).map(attachment => ({ type: 'image', attachment }))] }], tools: [], signal })[Symbol.asyncIterator]();
      const blocks = new Map<number, string>(); let incomplete = true;
      const update = (index: number, value: string) => {
        blocks.set(index, value); text = [...blocks.entries()].sort((a, b) => a[0] - b[0]).map(([, content]) => content).join('');
        if (text.length > 100000) { text = text.slice(0, 100000); throw new ModelFailure('Model output exceeded the safe response limit.', 'OUTPUT_LIMIT'); }
        aborted(signal); input.onText(text);
      };
      while (true) {
        const next = await interruptible(iterator.next(), signal);
        if (next.done) break;
        aborted(signal); const chunk = next.value;
        if (chunk.type === 'text-delta' && typeof chunk.text === 'string') update(chunk.index, (blocks.get(chunk.index) ?? '') + chunk.text);
        else if (chunk.type === 'block-end' && chunk.block?.type === 'text' && typeof chunk.block.text === 'string') {
          // Full block replaces its deltas rather than being appended a second time.
          if (blocks.get(chunk.index) !== chunk.block.text) update(chunk.index, chunk.block.text);
        } else if (chunk.type === 'usage') usage = usageOf(chunk.usage) ?? usage;
        else if (chunk.type === 'finish') {
          const reason = chunk.reason;
          if (reason?.kind === 'aborted') throw new ModelFailure('Model request cancelled.', 'ABORTED');
          if (reason?.kind === 'error') throw safeFailure(reason.failure, text, usage);
          incomplete = reason?.kind !== 'stop';
          break;
        }
        // Private reasoning, tool calls, replay state and unknown chunks are never retained/executed.
      }
      aborted(signal);
      if (!text.trim()) throw new ModelFailure('Provider returned no public response text.', 'EMPTY_RESPONSE');
      return { text, incomplete, ...(usage ? { usage } : {}) };
    } catch (error) { throw safeFailure(error, text, usage); }
    finally {
      // Calling return requests cleanup, but a broken provider must not hold cancellation hostage.
      if (iterator?.return) { try { const cleanup = iterator.return(); void Promise.resolve(cleanup).catch(() => undefined); } catch { /* Ignore provider cleanup error. */ } }
    }
  }
}

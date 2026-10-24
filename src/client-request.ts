export type ClientRequestErrorCode = 'TIMEOUT' | 'ABORTED' | 'AUTH_REQUIRED' | 'HTTP_ERROR' | 'INVALID_RESPONSE' | 'SERVER_ERROR' | 'NETWORK_ERROR' | 'INVALID_REQUEST';

/** Public, bounded guidance only: never retains transport errors, bodies or URLs. */
export class ClientRequestError extends Error {
  constructor(readonly code: ClientRequestErrorCode, message: string, readonly retryable = false, readonly status?: number) {
    super(message);
    this.name = 'ClientRequestError';
  }
}

export interface RequestOperationOptions {
  /** Pass document.baseURI so installations under a path keep that path. */
  baseUrl: string | URL;
  action: string;
  fields?: Record<string, unknown>;
  signal?: AbortSignal;
  fetch?: typeof globalThis.fetch;
  /** One deadline for both Fetch and JSON decoding; defaults to 30 seconds. */
  timeoutMs?: number;
}

const readActions = new Set(['snapshot', 'get', 'export', 'image', 'process-files']);
const maxPublicErrorChars = 1200;

/** Performs exactly one request. T describes the value, not runtime value validation. */
export async function requestOperation<T = unknown>(options: RequestOperationOptions): Promise<T> {
  const { action, fields = {}, signal, fetch: fetchImpl = globalThis.fetch, timeoutMs = 30000 } = options;
  const readOnly = readActions.has(action);
  const uncertain = ' The server may have accepted the operation. Refresh the debate state before deciding what to do; do not automatically retry.';
  const aborted = () => new ClientRequestError('ABORTED', `Model Debate request cancelled.${readOnly ? '' : uncertain}`);
  if (signal?.aborted) throw aborted();
  if (!Number.isInteger(timeoutMs) || timeoutMs < 1 || timeoutMs > 2147483647) {
    throw new ClientRequestError('INVALID_REQUEST', 'Model Debate request timeout must be a positive, bounded number of milliseconds.');
  }
  let url: URL, payload: string;
  try {
    url = new URL('api/model-debate', options.baseUrl);
    // The operation argument owns action; a field cannot silently change it.
    payload = JSON.stringify({ ...fields, action });
  } catch {
    throw new ClientRequestError('INVALID_REQUEST', 'Model Debate request could not be prepared.');
  }

  const controller = new AbortController();
  let interrupted: ClientRequestError | undefined;
  let rejectCancellation!: (error: ClientRequestError) => void;
  const cancellation = new Promise<never>((_resolve, reject) => { rejectCancellation = reject; });
  const interrupt = (error: ClientRequestError) => {
    if (interrupted) return;
    interrupted = error;
    // Settle the race before aborting: a cooperative fetch must not mask TIMEOUT.
    rejectCancellation(error);
    controller.abort();
  };
  const onAbort = () => interrupt(aborted());
  signal?.addEventListener('abort', onAbort, { once: true });
  const timer = setTimeout(() => interrupt(new ClientRequestError('TIMEOUT',
    `Model Debate request timed out.${readOnly ? ' You can retry this read request.' : uncertain}`, readOnly)), timeoutMs);

  try {
    if (signal?.aborted) onAbort();
    const work = (async (): Promise<T> => {
      if (interrupted) throw interrupted;
      const response = await fetchImpl(url, {
        method: 'POST', headers: { 'content-type': 'application/json' }, body: payload, signal: controller.signal,
      });
      if (interrupted) throw interrupted; // Do not consume a late, cancelled response.
      const status = response.status;
      if (status === 401) {
        throw new ClientRequestError('AUTH_REQUIRED', 'Model Debate authentication is required or has expired. Refresh the page and sign in again.', false, status);
      }
      const invalidResponse = () => new ClientRequestError(response.ok ? 'INVALID_RESPONSE' : 'HTTP_ERROR',
        `Model Debate ${response.ok ? 'returned an invalid response' : 'request failed'} (HTTP ${status}). Refresh the page and try again.`,
        readOnly && (status === 408 || status === 429 || status >= 500), status);
      const mime = response.headers.get('content-type')?.split(';', 1)[0].trim().toLowerCase();
      if (!mime || !/^application\/(?:json|[a-z0-9!#$&^_.+-]+\+json)$/.test(mime)) throw invalidResponse();
      let body: unknown;
      try { body = await response.json(); } catch { throw invalidResponse(); }
      if (interrupted) throw interrupted;
      // Validate only the small envelope; saved transcripts can legitimately be large.
      if (!body || typeof body !== 'object' || Array.isArray(body)) throw invalidResponse();
      const envelope = body as Record<string, unknown>;
      const keys = Object.keys(envelope);
      if (keys.length !== 2 || !Object.hasOwn(envelope, 'ok')) throw invalidResponse();
      if (envelope.ok === false && Object.hasOwn(envelope, 'error') && typeof envelope.error === 'string' && envelope.error.trim()) {
        // This is the Host's existing public error, not a raw HTTP/provider body.
        throw new ClientRequestError('SERVER_ERROR', envelope.error.slice(0, maxPublicErrorChars), false, status);
      }
      if (!response.ok || envelope.ok !== true || !Object.hasOwn(envelope, 'value')) throw invalidResponse();
      return envelope.value as T;
    })();
    // Neither fetch nor response.json is required to cooperate with AbortSignal.
    return await Promise.race([work, cancellation]);
  } catch (error) {
    if (error instanceof ClientRequestError) throw error;
    throw new ClientRequestError('NETWORK_ERROR', `Model Debate could not reach the server.${readOnly ? ' Check your connection and retry this read request.' : uncertain}`, readOnly);
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener('abort', onAbort);
  }
}

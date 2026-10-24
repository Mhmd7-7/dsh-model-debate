import test from 'node:test';
import assert from 'node:assert/strict';
import { getEventListeners } from 'node:events';
import { ClientRequestError, requestOperation } from '../src/client-request.js';

const baseUrl = 'https://example.invalid/dsh/workspace/';
const secret = 'https://private.invalid/path?token=private-token <html>private-body</html>';
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8' } });
const transport = (run: (url: URL, init: RequestInit) => Promise<Response>): typeof fetch => ((url, init) => run(url as URL, init!)) as typeof fetch;
function deferred<T>() {
  let resolve!: (value: T) => void, reject!: (error: unknown) => void;
  const promise = new Promise<T>((yes, no) => { resolve = yes; reject = no; });
  return { promise, resolve, reject };
}
function failure(code: ClientRequestError['code'], inspect?: (error: ClientRequestError) => void) {
  return (error: unknown) => {
    assert.ok(error instanceof ClientRequestError);
    assert.equal(error.code, code);
    assert.equal(Object.hasOwn(error, 'cause'), false);
    assert.ok(!error.message.includes('private-'));
    assert.ok(!error.message.includes('Unexpected token'));
    inspect?.(error);
    return true;
  };
}

test('request posts relative to baseURI with exact JSON action/fields and injectable fetch', async () => {
  let calls = 0;
  const value = await requestOperation<{ id: string }>({ baseUrl, action: 'get', fields: { id: 'saved', action: 'start' }, fetch: transport(async (url, init) => {
    calls++;
    assert.equal(url.href, 'https://example.invalid/dsh/workspace/api/model-debate');
    assert.equal(init.method, 'POST');
    assert.deepEqual(init.headers, { 'content-type': 'application/json' });
    assert.deepEqual(JSON.parse(init.body as string), { id: 'saved', action: 'get' });
    assert.ok(init.signal instanceof AbortSignal);
    return json({ ok: true, value: { id: 'saved' } });
  }) });
  assert.deepEqual(value, { id: 'saved' }); assert.equal(calls, 1);
});

test('defaults to global fetch and accepts JSON values including null and vendor JSON', async t => {
  const fetchMock = t.mock.method(globalThis, 'fetch', async () => new Response('{"ok":true,"value":null}', { headers: { 'content-type': 'application/vnd.dsh+json' } }));
  assert.equal(await requestOperation({ baseUrl, action: 'snapshot' }), null);
  assert.equal(fetchMock.mock.callCount(), 1);
});

test('deadline settles uncooperative fetch once and ignores a late response or rejection', async t => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  for (const late of ['resolve', 'reject'] as const) {
    const pending = deferred<Response>(); let internal!: AbortSignal, bodyReads = 0, calls = 0;
    const request = requestOperation({ baseUrl, action: 'snapshot', timeoutMs: 20, fetch: transport(async (_url, init) => {
      calls++; internal = init.signal!; return pending.promise;
    }) });
    const rejected = assert.rejects(request, failure('TIMEOUT', error => { assert.equal(error.retryable, true); assert.match(error.message, /retry this read/); }));
    t.mock.timers.tick(20); await rejected;
    assert.equal(internal.aborted, true); assert.equal(calls, 1);
    if (late === 'resolve') pending.resolve({ ...json({ ok: true, value: 'too late' }), json: async () => { bodyReads++; return { ok: true, value: 'too late' }; } } as Response);
    else pending.reject(new Error(secret));
    await Promise.resolve(); await Promise.resolve();
    assert.equal(bodyReads, 0);
  }
});

test('same deadline covers JSON body and mutating timeout does not retry', async t => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const body = deferred<unknown>(), entered = deferred<void>(); let calls = 0, internal!: AbortSignal;
  const request = requestOperation({ baseUrl, action: 'followup', fields: { id: 'saved' }, timeoutMs: 25, fetch: transport(async (_url, init) => {
    calls++; internal = init.signal!;
    const response = json({});
    response.json = () => { entered.resolve(); return body.promise; };
    return response;
  }) });
  await entered.promise;
  const rejected = assert.rejects(request, failure('TIMEOUT', error => {
    assert.equal(error.retryable, false); assert.match(error.message, /server may have accepted/i); assert.match(error.message, /do not automatically retry/i);
  }));
  t.mock.timers.tick(25); await rejected;
  assert.equal(internal.aborted, true); assert.equal(calls, 1);
  body.resolve({ ok: true, value: 'too late' }); await Promise.resolve(); await Promise.resolve();
});

test('abort before dispatch and during uncooperative fetch or JSON settles without leaking abort reason', async () => {
  const before = new AbortController(); before.abort(new Error(secret)); let calls = 0;
  await assert.rejects(requestOperation({ baseUrl, action: 'get', signal: before.signal, fetch: transport(async () => { calls++; return json({}); }) }), failure('ABORTED'));
  assert.equal(calls, 0);
  for (const stage of ['fetch', 'json']) {
    const controller = new AbortController(), entered = deferred<void>(); let internal!: AbortSignal;
    const request = requestOperation({ baseUrl, action: 'get', signal: controller.signal, fetch: transport(async (_url, init) => {
      internal = init.signal!;
      if (stage === 'fetch') { entered.resolve(); return new Promise(() => {}); }
      const response = json({}); response.json = () => { entered.resolve(); return new Promise(() => {}); }; return response;
    }) });
    await entered.promise;
    const rejected = assert.rejects(request, failure('ABORTED', error => assert.equal(error.retryable, false)));
    controller.abort(new Error(secret)); await rejected;
    assert.equal(internal.aborted, true); assert.equal(getEventListeners(controller.signal, 'abort').length, 0);
  }
});

test('401 gives authentication refresh guidance without reading even a stalled body', async () => {
  let reads = 0;
  const response = new Response(secret, { status: 401, headers: { 'content-type': 'text/html' } });
  response.json = () => { reads++; return new Promise(() => {}); };
  await assert.rejects(requestOperation({ baseUrl, action: 'snapshot', fetch: transport(async () => response) }), failure('AUTH_REQUIRED', error => {
    assert.equal(error.status, 401); assert.match(error.message, /authentication/i); assert.match(error.message, /refresh/i); assert.match(error.message, /sign in/i); assert.doesNotMatch(error.message, /https?:/);
  }));
  assert.equal(reads, 0);
});

test('HTML, broken JSON and invalid envelopes have safe HTTP status guidance', async () => {
  const fixtures = [
    new Response(secret, { status: 502, headers: { 'content-type': 'text/html' } }),
    new Response(secret, { status: 200, headers: { 'content-type': 'application/json' } }),
    new Response(secret, { status: 503, statusText: 'private-status', headers: { 'content-type': 'application/json' } }),
    json(null), json([]), json({}), json({ ok: 'true', value: 1 }), json({ ok: true }),
    json({ ok: true, value: 1, debug: secret }), json({ ok: false, error: { detail: secret } }),
    json({ ok: false, error: '' }), json({ ok: false, error: '   ' }), json({ ok: true, value: 1 }, 500),
  ];
  for (const response of fixtures) {
    await assert.rejects(requestOperation({ baseUrl, action: 'snapshot', fetch: transport(async () => response) }), failure(response.ok ? 'INVALID_RESPONSE' : 'HTTP_ERROR', error => {
      assert.equal(error.status, response.status); assert.match(error.message, new RegExp(`HTTP ${response.status}`));
    }));
  }
});

test('server ok:false keeps only the bounded existing public error on success or error HTTP status', async () => {
  for (const status of [200, 400]) {
    const publicError = 'Stop this run before renaming it. ' + 'x'.repeat(1500);
    await assert.rejects(requestOperation({ baseUrl, action: 'rename', fetch: transport(async () => json({ ok: false, error: publicError }, status)) }), failure('SERVER_ERROR', error => {
      assert.equal(error.message, publicError.slice(0, 1200)); assert.equal(error.status, status); assert.equal(error.retryable, false);
    }));
  }
});

test('transport failures are generic; mutating network failure never suggests a safe retry', async () => {
  for (const action of ['snapshot', 'start']) {
    await assert.rejects(requestOperation({ baseUrl, action, fetch: transport(async () => { throw new Error(secret); }) }), failure('NETWORK_ERROR', error => {
      assert.equal(error.retryable, action === 'snapshot');
      if (action === 'start') assert.match(error.message, /server may have accepted/i);
    }));
  }
});

test('success, failures, cancellation and timeout clear their own timer and external listener', async t => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const scheduled = t.mock.method(globalThis, 'setTimeout'), cleared = t.mock.method(globalThis, 'clearTimeout');
  for (const outcome of ['success', 'server', 'invalid', 'network', 'abort', 'timeout']) {
    const external = new AbortController(), start = scheduled.mock.callCount();
    const pending = requestOperation({ baseUrl, action: 'get', signal: external.signal, timeoutMs: 10, fetch: transport(async () => {
      if (outcome === 'network') throw new Error(secret);
      if (outcome === 'abort' || outcome === 'timeout') return new Promise(() => {});
      return json(outcome === 'success' ? { ok: true, value: 42 } : outcome === 'server' ? { ok: false, error: 'Public failure' } : {});
    }) });
    const result = outcome === 'success' ? pending : assert.rejects(pending, ClientRequestError);
    if (outcome === 'abort') external.abort();
    if (outcome === 'timeout') t.mock.timers.tick(10);
    await result;
    assert.equal(scheduled.mock.callCount(), start + 1);
    assert.equal(cleared.mock.callCount(), scheduled.mock.callCount());
    assert.equal(cleared.mock.calls.at(-1)!.arguments[0], scheduled.mock.calls.at(-1)!.result);
    assert.equal(getEventListeners(external.signal, 'abort').length, 0);
  }
});

test('invalid local request preparation is bounded and never dispatches', async () => {
  let calls = 0;
  const fetch = transport(async () => { calls++; throw new Error('Must not dispatch'); });
  for (const timeoutMs of [0, -1, Infinity, NaN, 2147483648, 1.5]) {
    await assert.rejects(requestOperation({ baseUrl, action: 'get', timeoutMs, fetch }), failure('INVALID_REQUEST'));
  }
  await assert.rejects(requestOperation({ baseUrl: 'not a valid base private-token', action: 'get', fetch }), failure('INVALID_REQUEST'));
  const fields: Record<string, unknown> = {}; fields.cycle = fields;
  await assert.rejects(requestOperation({ baseUrl, action: 'get', fields, fetch }), failure('INVALID_REQUEST'));
  assert.equal(calls, 0);
});

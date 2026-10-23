import test from 'node:test';
import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import { join } from 'node:path';
import { DshAdapter, ModelFailure, type AdapterContext } from '../src/adapter.js';
import { requestDiagnosticsSchema, type RequestDiagnostics } from '../src/diagnostics.js';
import type { Participant } from '../src/state.js';

const participant: Participant = { id: 'p', provider: 'fixture', model: 'model', enabled: true, role: 'solver', instructions: '', options: {} };
const stop = { type: 'finish', reason: { kind: 'stop' } };
function fixture(chunks: unknown[]) {
  let requested = 0, closed = 0, nextCalls = 0;
  const ctx: AdapterContext = {
    llm: {
      listProviders: () => [{ id: 'fixture', name: 'Fixture' }], listConfigurableProviders: () => [],
      listModels: async () => [{ provider: 'fixture', id: 'model', name: 'Fixture' }], resolveModelInfo: async () => ({}), providerRetryPolicy: () => ({}),
      prepareCall: async config => ({ config, retryPolicy: {}, stream: () => { requested++; let index = 0; return { [Symbol.asyncIterator]: () => ({ next: async () => { nextCalls++; return index < chunks.length ? { done: false, value: chunks[index++] } : { done: true, value: undefined }; }, return: async () => { closed++; return { done: true, value: undefined }; } }) }; } }),
    }, settings: { describe: () => [] },
  };
  const diagnostics: RequestDiagnostics[] = [], publicText: string[] = [];
  const call = (extra: Partial<Parameters<DshAdapter['call']>[0]> = {}) => new DshAdapter(ctx).call({ participant, system: 'PRIVATE_SYSTEM', prompt: 'PRIVATE_PROMPT', signal: new AbortController().signal, maxTokens: 1000, onText: text => publicText.push(text), onDiagnostics: value => { requestDiagnosticsSchema.parse(value); diagnostics.push(value); }, ...extra });
  return { ctx, call, diagnostics, publicText, counts: () => ({ requested, closed, nextCalls }) };
}
async function failed(run: Promise<unknown>, code: string, category: RequestDiagnostics['category']) {
  let caught: ModelFailure | undefined;
  await assert.rejects(run, (error: unknown) => { assert.ok(error instanceof ModelFailure); caught = error; assert.equal(error.code, code); assert.equal(error.diagnostics?.category, category); requestDiagnosticsSchema.parse(error.diagnostics); return true; });
  return caught!;
}

test('public output uses first-seen SDK block order, full-block correction, and a terminal boundary', async () => {
  const f = fixture([
    { type: 'block-start', index: 9, blockType: 'text' },
    { type: 'text-delta', index: 9, text: 'draft' },
    { type: 'text-delta', index: 2, text: 'B' },
    { type: 'block-end', index: 9, block: { type: 'text', text: 'A' } },
    { type: 'block-end', index: 2, block: { type: 'text', text: 'B' } },
    { type: 'usage', usage: { inputTokens: 10, outputTokens: 2, totalTokens: 12 } }, stop,
    { type: 'text-delta', index: 3, text: 'NOT_PART_OF_RESPONSE' },
  ]);
  const correlationId = '66b3c5c1-cef5-491b-a191-683f55825688';
  const result = await f.call({ correlationId }); assert.equal(result.text, 'AB'); assert.equal(result.incomplete, false); assert.equal(result.diagnostics?.correlationId, correlationId);
  assert.deepEqual(result.usage, { inputTokens: 10, outputTokens: 2, totalTokens: 12 });
  assert.equal(f.counts().nextCalls, 7); assert.equal(f.counts().closed, 1);
  assert.deepEqual(f.diagnostics.map(d => d.phase), ['preparing', 'streaming', 'settled']);
  assert.equal(result.diagnostics?.publicTextLength, 2); assert.equal(result.diagnostics?.finishReason, 'stop');
  assert.ok(f.diagnostics.every(d => d.correlationId === result.diagnostics?.correlationId));
  assert.equal(f.diagnostics[0].chunkCount, 0); assert.equal(f.diagnostics.at(-1)?.chunkCount, 7);
});

test('reasoning-only stop/length/provider EMPTY_RESPONSE never becomes public answer text', async () => {
  for (const finish of [stop, { type: 'finish', reason: { kind: 'max-tokens' } }, { type: 'finish', reason: { kind: 'error', failure: { code: 'EMPTY_RESPONSE', message: 'PRIVATE_PROVIDER_MESSAGE' } } }]) {
    const f = fixture([{ type: 'block-start', index: 0, blockType: 'reasoning' }, { type: 'reasoning-delta', index: 0, text: 'PRIVATE_REASONING' }, { type: 'block-end', index: 0, block: { type: 'reasoning', text: 'PRIVATE_REASONING' } }, finish]);
    const error = await failed(f.call(), 'EMPTY_RESPONSE', 'reasoning-only');
    assert.equal(error.partial, undefined); assert.deepEqual(f.publicText, []); assert.equal(error.diagnostics?.reasoningObserved, true);
    assert.equal(error.diagnostics?.publicTextLength, 0); assert.doesNotMatch(JSON.stringify(error), /PRIVATE_/);
  }
});

test('tool-only output has explicit unsupported policy even when provider incorrectly says stop', async () => {
  for (const finish of [stop, { type: 'finish', reason: { kind: 'tool-calls' } }, { type: 'finish', reason: { kind: 'error', failure: { code: 'EMPTY_RESPONSE', message: 'PRIVATE_TOOLS_ONLY' } } }]) {
    const f = fixture([{ type: 'tool-call-delta', index: 0, id: 'PRIVATE_TOOL_ID', name: 'PRIVATE_TOOL_NAME', argumentsDelta: 'PRIVATE_TOOL_ARGS' }, { type: 'block-end', index: 0, block: { type: 'tool-call', id: 'PRIVATE_TOOL_ID', name: 'PRIVATE_TOOL_NAME', arguments: 'PRIVATE_TOOL_ARGS' } }, finish]);
    const error = await failed(f.call(), 'UNSUPPORTED_TOOLS', 'tool-only');
    assert.match(error.message, /does not support tools/i); assert.equal(error.diagnostics?.toolsPolicy, 'unsupported'); assert.deepEqual(f.publicText, []);
    assert.doesNotMatch(JSON.stringify(error), /PRIVATE_TOOL/);
  }
  await failed(fixture([{ type: 'finish', reason: { kind: 'tool-calls' } }]).call(), 'UNSUPPORTED_TOOLS', 'tool-only');
});

test('empty and whitespace responses retain safe shape diagnostics, not replay or alternate fields', async () => {
  for (const chunks of [[], [stop], [{ type: 'block-end', index: 0, block: { type: 'text', text: '  ' } }, stop], [{ ...stop, content: 'PRIVATE_FINISH_CONTENT', replayState: { response: 'PRIVATE_REPLAY' } }]]) {
    const f = fixture(chunks); const error = await failed(f.call(), 'EMPTY_RESPONSE', 'empty');
    assert.doesNotMatch(JSON.stringify(error), /PRIVATE_/); assert.equal(error.diagnostics?.chunkCount, chunks.length); assert.equal(error.partial, undefined);
  }
});

test('malformed wire shapes fail safely without raw field names or content', async () => {
  for (const chunk of [null, 'PRIVATE_RAW', { type: 'text-delta', text: 'PRIVATE_UNINDEXED' }, { type: 'text-delta', index: -1, text: 'PRIVATE_NEGATIVE' }, { type: 'text-delta', index: 0, text: { secret: 'PRIVATE_OBJECT' } }, { type: 'PRIVATE_TYPE', PRIVATE_KEY: 'PRIVATE_VALUE' }, { type: 'finish', reason: null }, { type: 'finish', reason: { kind: 'error', failure: { message: 'PRIVATE_FAILURE' } } }]) {
    const f = fixture([chunk, stop]); const error = await failed(f.call(), 'MALFORMED_RESPONSE', 'malformed');
    assert.ok(error.diagnostics!.chunks.malformed > 0 || error.diagnostics!.finishReason === 'error');
    assert.doesNotMatch(JSON.stringify(error), /PRIVATE_|secret/); assert.deepEqual(f.publicText, []);
  }
});

test('closed blocks and conflicting typed indexes cannot corrupt completed public output', async () => {
  const f = fixture([{ type: 'block-end', index: 1, block: { type: 'text', text: 'Final' } }, { type: 'text-delta', index: 1, text: 'UNTRUSTED_LATE' }, { type: 'block-end', index: 1, block: { type: 'text', text: 'UNTRUSTED_OVERWRITE' } }, { type: 'reasoning-delta', index: 1, text: 'PRIVATE_REASONING' }, stop]);
  const result = await f.call(); assert.equal(result.text, 'Final'); assert.equal(result.incomplete, true); assert.equal(result.diagnostics?.category, 'malformed'); assert.equal(result.diagnostics?.chunks.malformed, 3);
  assert.doesNotMatch(JSON.stringify(result), /UNTRUSTED_|PRIVATE_/);
});

test('missing finish and STREAM_CLOSED preserve partial public output and distinguish interruption', async () => {
  const f = fixture([{ type: 'text-delta', index: 0, text: 'Partial' }]); const result = await f.call();
  assert.equal(result.incomplete, true); assert.equal(result.diagnostics?.category, 'interrupted'); assert.equal(result.diagnostics?.finishReason, undefined);
  const error = await failed(fixture([{ type: 'text-delta', index: 0, text: 'Partial' }, { type: 'finish', reason: { kind: 'error', failure: { code: 'STREAM_CLOSED', message: 'PRIVATE_TRANSPORT' } } }]).call(), 'STREAM_CLOSED', 'interrupted');
  assert.equal(error.partial, 'Partial');
});

test('HTTP failures retain only numeric status/stable code/delay and never provider IDs or details', async () => {
  for (const [status, code] of [[400, 'BAD_REQUEST'], [401, 'AUTH'], [429, 'RATE_LIMIT'], [503, 'SERVER']] as const) {
    const f = fixture([{ type: 'usage', usage: { inputTokens: 3, outputTokens: 1 } }, { type: 'finish', reason: { kind: 'error', failure: { code: 'PRIVATE_UNKNOWN_CODE', message: 'PRIVATE_BODY Bearer PRIVATE_KEY', status, providerRetryAfterMs: 12, requestId: 'PRIVATE_REQUEST_ID', headers: { Authorization: 'PRIVATE_HEADER' } } } }]);
    const error = await failed(f.call(), code, 'provider-error'); assert.equal(error.diagnostics?.status, status); assert.equal(error.retryAfterMs, 12); assert.deepEqual(error.usage, { inputTokens: 3, outputTokens: 1 }); assert.doesNotMatch(JSON.stringify(error), /PRIVATE_|Bearer/);
    assert.deepEqual(f.diagnostics.at(-1), error.diagnostics);
  }
});

test('thrown preparation/iterator failures carry correlated metadata; callback snapshots are detached', async () => {
  const f = fixture([]); f.ctx.llm.prepareCall = async () => { throw { status: 403, requestId: 'PRIVATE_ID', message: 'PRIVATE_MESSAGE' }; };
  const error = await failed(f.call(), 'AUTH', 'request-rejected'); assert.equal(error.diagnostics?.status, 403); assert.equal(f.counts().requested, 0);
  const a = fixture([]); a.ctx.llm.prepareCall = async config => ({ config, retryPolicy: {}, stream: async function* () { yield { type: 'text-delta', index: 0, text: 'Partial' }; throw { code: 'TRANSPORT', message: 'PRIVATE_SOCKET' }; } });
  const transport = await failed(a.call(), 'TRANSPORT', 'interrupted'); assert.equal(transport.partial, 'Partial');
  const b = fixture([{ type: 'text-delta', index: 0, text: 'Answer' }, stop]);
  const result = await b.call({ onDiagnostics: d => { d.chunks.textDelta = 9999; d.responseFields.push('replayState'); } });
  assert.equal(result.diagnostics?.chunks.textDelta, 1); assert.equal(result.diagnostics?.responseFields.includes('replayState'), false);
});

test('SDK structured LlmError failure facts retain numeric status/delay without nested private data', async () => {
  const f = fixture([]); f.ctx.llm.prepareCall = async () => { throw { name: 'LlmError', code: 'RATE_LIMIT', message: 'PRIVATE_MESSAGE', failure: { code: 'RATE_LIMIT', status: 429, providerRetryAfterMs: 25, requestId: 'PRIVATE_ID', message: 'PRIVATE_BODY' } }; };
  const error = await failed(f.call(), 'RATE_LIMIT', 'request-rejected'); assert.equal(error.diagnostics?.status, 429); assert.equal(error.retryAfterMs, 25); assert.doesNotMatch(JSON.stringify(error), /PRIVATE_/);
});

test('cancellation records available counters and escapes an uncooperative iterator/cleanup', { timeout: 1000 }, async () => {
  const f = fixture([]), controller = new AbortController(); let begin!: () => void; const began = new Promise<void>(resolve => { begin = resolve; }); let returned = false;
  f.ctx.llm.prepareCall = async config => ({ config, retryPolicy: {}, stream: () => ({ [Symbol.asyncIterator]: () => ({ next: () => { begin(); return new Promise(() => {}); }, return: () => { returned = true; return new Promise(() => {}); } }) }) });
  const pending = f.call({ signal: controller.signal }); await began; controller.abort();
  const error = await failed(pending, 'ABORTED', 'cancelled'); assert.equal(returned, true); assert.equal(error.diagnostics?.chunkCount, 0);
});

test('diagnostics progress is bounded and safety ceiling preserves only capped public partial', async () => {
  const f = fixture([...Array.from({ length: 70 }, () => ({ type: 'text-delta', index: 0, text: 'a' })), stop]);
  const result = await f.call(); assert.equal(f.diagnostics.length, 5); assert.equal(result.diagnostics?.chunkCount, 71);
  const error = await failed(fixture([{ type: 'text-delta', index: 0, text: 'a'.repeat(100001) }]).call(), 'OUTPUT_LIMIT', 'output-limit'); assert.equal(error.partial?.length, 100000); assert.equal(error.diagnostics?.publicTextLength, 100000);
});

// Actual installed DSH/Cordis/pi-ai translator with in-memory provider events: no fetch, credentials or paid request.
test('actual installed pi-ai translation and fragmented SSE transport preserve public/reasoning/tool boundaries', { skip: !process.env.DSH_RUNTIME_ROOT }, async () => {
  const root = process.env.DSH_RUNTIME_ROOT!, load = (name: string) => import(pathToFileURL(join(root, 'node_modules', '@deepseek-ai', name, 'lib', 'index.js')).href);
  const [{ Context }, { LlmRuntime }, { PiAiAdapter }] = await Promise.all([load('cordis'), load('dsh-llm'), load('dsh-llm-pi-ai')]);
  const { createAssistantMessageEventStream } = await import(pathToFileURL(join(root, 'node_modules', '@earendil-works', 'pi-ai', 'dist', 'utils', 'event-stream.js')).href);
  const model = { id: 'model', provider: 'fixture', name: 'Fixture', api: 'openai-completions', baseUrl: 'http://invalid.test/v1', reasoning: true, input: ['text'], contextWindow: 10000, maxTokens: 1000, cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 } };
  let events: any[] = [], requests = 0;
  let transport: ((model: any, context: any, options: any) => any) | undefined;
  const piProvider = { id: 'fixture', name: 'Fixture', auth: { apiKey: { name: 'Mock', resolve: async () => ({ auth: { apiKey: 'fixture-only-not-a-secret' } }) } }, getModels: () => [model], streamSimple: (m: any, c: any, o: any) => { requests++; if (transport) return transport(m, c, o); if (!events.some(event => event.type === 'done' || event.type === 'error')) return { [Symbol.asyncIterator]: async function* () { yield* events; } }; const stream = createAssistantMessageEventStream(); for (const event of events) stream.push(event); stream.end(); return stream; } };
  const profiles = new Map([['fixture', { provider: 'fixture', displayName: 'Fixture', piProvider, retryPolicy: { maxRetries: 0, retryableCodes: [] }, streamIdleTimeoutMs: 1000, modelErrors: new Map(), configuredMaxTokens: new Map() }]]);
  const pi = new PiAiAdapter({ profiles: () => profiles, resolveApiKey: async () => 'fixture-only-not-a-secret', auth: { credentials: { read: async () => undefined, list: async () => [], modify: async () => { throw new Error('never write'); }, delete: async () => {} }, authContext: { env: async () => undefined, fileExists: async () => false } } });
  const ctx = new Context(), runtime = ctx.plugin(LlmRuntime); await runtime.await();
  const registration = ctx.plugin({ name: 'provider-contract-fixture', inject: ['llm'], apply: (owner: any) => owner.llm.registerAdapter(['fixture'], pi) }); await registration.await();
  const adapter = new DshAdapter({ llm: ctx.get('llm'), settings: { describe: () => [] } });
  const message = (content: any[], stopReason = 'stop', errorMessage?: string) => ({ role: 'assistant', provider: 'fixture', model: 'model', api: 'openai-completions', content, stopReason, ...(errorMessage ? { errorMessage } : {}), timestamp: Date.now(), usage: { input: 3, output: 2, cacheRead: 0, cacheWrite: 0, totalTokens: 5, cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, total: 0 } } });
  const run = () => adapter.call({ participant, system: 'Fixture', prompt: 'Fixture', maxTokens: 100, signal: new AbortController().signal, onText: () => {} });
  try {
    const normal = message([{ type: 'text', text: 'Answer' }]); events = [{ type: 'text_start', contentIndex: 0 }, { type: 'text_delta', contentIndex: 0, delta: 'Answer' }, { type: 'text_end', contentIndex: 0, content: 'Answer' }, { type: 'done', message: normal }];
    const result = await run(); assert.equal(result.text, 'Answer'); assert.equal(result.incomplete, false); assert.deepEqual(result.usage, { inputTokens: 3, outputTokens: 2, totalTokens: 5 });
    events = [{ type: 'thinking_start', contentIndex: 0 }, { type: 'thinking_delta', contentIndex: 0, delta: 'PRIVATE_REASONING' }, { type: 'thinking_end', contentIndex: 0, content: 'PRIVATE_REASONING' }, { type: 'done', message: message([{ type: 'thinking', thinking: 'PRIVATE_REASONING' }]) }];
    await failed(run(), 'EMPTY_RESPONSE', 'reasoning-only');
    const toolCall = { type: 'toolCall', id: 'PRIVATE_TOOL', name: 'PRIVATE_NAME', arguments: { secret: 'PRIVATE_ARGS' } };
    events = [{ type: 'toolcall_start', contentIndex: 0, partial: { content: [toolCall] } }, { type: 'toolcall_delta', contentIndex: 0, delta: '{}' }, { type: 'toolcall_end', contentIndex: 0, toolCall }, { type: 'done', message: message([toolCall], 'toolUse') }];
    await failed(run(), 'UNSUPPORTED_TOOLS', 'tool-only');
    events = [{ type: 'done', message: message([]) }]; await failed(run(), 'EMPTY_RESPONSE', 'empty');
    events = [{ type: 'text_delta', contentIndex: 0, delta: 'Partial' }]; await failed(run(), 'STREAM_CLOSED', 'interrupted');
    events = [{ type: 'error', error: message([], 'error', '503 PRIVATE_BODY') }]; await failed(run(), 'SERVER', 'provider-error');
    assert.equal(requests, 6);
    // Actual installed OpenAI-compatible SDK parses injected HTTP/SSE bytes. No global fetch replacement or network.
    const { streamSimple } = await import(pathToFileURL(join(root, 'node_modules', '@earendil-works', 'pi-ai', 'dist', 'api', 'openai-completions.js')).href);
    const encode = new TextEncoder(); let body = '', contentType = 'text/event-stream', httpStatus = 200, fetches = 0;
    transport = (m, c, o) => streamSimple(m, c, { ...o, maxRetries: 0, fetch: async (_url: unknown, init: RequestInit) => {
      fetches++; const payload = JSON.parse(init.body as string); assert.equal(payload.stream, true); assert.equal(payload.messages.at(-1).content, 'Fixture');
      const bytes = encode.encode(body); let offset = 0;
      return new Response(new ReadableStream({ pull(controller) { if (offset >= bytes.length) { controller.close(); return; } const length = offset % 7 + 1; controller.enqueue(bytes.slice(offset, offset + length)); offset += length; } }), { status: httpStatus, headers: { 'content-type': contentType } });
    } });
    const wire = (delta: object, finish: string | null = null) => ({ id: 'PRIVATE_RESPONSE_ID', object: 'chat.completion.chunk', created: 1, model: 'model', choices: [{ index: 0, delta, finish_reason: finish }] });
    const sse = (...chunks: object[]) => chunks.map(chunk => `data: ${JSON.stringify(chunk)}\r\n\r\n`).join('') + 'data: [DONE]\r\n\r\n';
    body = sse(wire({ reasoning_content: 'PRIVATE_REASONING' }), wire({ content: 'Ans' }), wire({ content: 'wer' }), wire({}, 'stop'));
    const parsed = await run(); assert.equal(parsed.text, 'Answer'); assert.equal(parsed.incomplete, false); assert.equal(parsed.diagnostics?.reasoningObserved, true); assert.equal(parsed.diagnostics?.status, undefined); assert.doesNotMatch(JSON.stringify(parsed), /PRIVATE_/);
    body = sse(wire({ reasoning_content: 'PRIVATE_ONLY' }), wire({}, 'stop')); await failed(run(), 'EMPTY_RESPONSE', 'reasoning-only');
    body = sse(wire({ tool_calls: [{ index: 0, id: 'PRIVATE_TOOL', type: 'function', function: { name: 'PRIVATE_NAME', arguments: '{' } }] }), wire({ tool_calls: [{ index: 0, function: { arguments: '}' } }] }, 'tool_calls')); await failed(run(), 'UNSUPPORTED_TOOLS', 'tool-only');
    body = sse(wire({}, 'stop')); await failed(run(), 'EMPTY_RESPONSE', 'empty');
    body = sse(wire({ content: 'Partial' })); const interrupted = await failed(run(), 'TRANSPORT', 'interrupted'); assert.equal(interrupted.partial, 'Partial');
    // Installed decoder emits two generic parse notices (no raw bytes) for this intentionally invalid event.
    body = 'data: {malformed JSON}\n\n'; await failed(run(), 'REQUEST_FAILED', 'provider-error');
    // A server ignoring stream:true is not a second plugin extraction API; SDK expects SSE and rejects it.
    contentType = 'application/json'; body = JSON.stringify({ id: 'PRIVATE_NONSTREAM_ID', choices: [{ message: { role: 'assistant', content: 'NOT_SDK_PUBLIC_STREAM_TEXT' }, finish_reason: 'stop' }] });
    await failed(run(), 'TRANSPORT', 'interrupted');
    httpStatus = 429; body = JSON.stringify({ error: { message: 'PRIVATE_RATE_BODY', type: 'rate_limit_error' } }); await failed(run(), 'RATE_LIMIT', 'provider-error');
    assert.equal(fetches, 8);
  } finally { await registration.dispose(); await runtime.dispose(); }
});

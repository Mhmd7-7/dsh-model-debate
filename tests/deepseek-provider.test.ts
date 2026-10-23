import test from 'node:test';
import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import { join } from 'node:path';
import { DshAdapter, ModelFailure } from '../src/adapter.js';
import type { Participant } from '../src/state.js';

// Actual installed official Messages adapter, byte-level fake fetch: no real HTTP/auth/config/attachments.
test('installed official DeepSeek Messages transport handles split SSE, empty/reasoning/tools/malformed/interruption/status', { skip: !process.env.DSH_RUNTIME_ROOT }, async t => {
  const root = process.env.DSH_RUNTIME_ROOT!, load = (name: string) => import(pathToFileURL(join(root, 'node_modules', '@deepseek-ai', name, 'lib', 'index.js')).href);
  const [{ Context }, { LlmRuntime }, { DeepSeekAdapter, resolveAdapterOptions }] = await Promise.all([load('cordis'), load('dsh-llm'), load('dsh-llm-deepseek')]);
  const connection = resolveAdapterOptions({ baseURL: 'https://invalid.test/anthropic', models: [{ id: 'model', inputModalities: ['text'] }], retryPolicy: { mode: 'normal', maxRetries: 0 } });
  const official = new DeepSeekAdapter({ options: () => connection, resolveAuth: async () => ({ headers: {} }), resolveUserId: () => 'fixture-user', discoverModels: async (provider: string) => [{ provider, id: 'model', name: 'Fixture', inputModalities: ['text'] }], prepareExtensions: async () => ({ fields: {}, accept: async () => {} }) });
  const ctx = new Context(), runtime = ctx.plugin(LlmRuntime); await runtime.await();
  const registration = ctx.plugin({ name: 'official-provider-fixture', inject: ['llm'], apply: (owner: any) => owner.llm.registerAdapter(['fixture'], official) }); await registration.await();
  const participant: Participant = { id: 'p', provider: 'fixture', model: 'model', enabled: true, role: 'solver', instructions: '', options: {} };
  const adapter = new DshAdapter({ llm: ctx.get('llm'), settings: { describe: () => [] } });
  let body = '', status = 200, fetches = 0, contentType = 'text/event-stream';
  const encoder = new TextEncoder();
  t.mock.method(globalThis, 'fetch', async (url: unknown, init: RequestInit) => {
    fetches++; assert.equal(String(url), 'https://invalid.test/anthropic/v1/messages');
    const request = JSON.parse(init.body as string); assert.equal(request.stream, true); assert.ok(request.tools === undefined || request.tools.length === 0);
    const bytes = encoder.encode(body); let offset = 0;
    return new Response(new ReadableStream({ pull(controller) { if (offset >= bytes.length) { controller.close(); return; } const length = offset % 13 + 1; controller.enqueue(bytes.slice(offset, offset + length)); offset += length; } }), { status, headers: { 'content-type': contentType, 'retry-after': '2', 'x-request-id': 'PRIVATE_REQUEST_ID' } });
  });
  const start = { type: 'message_start', message: { usage: { input_tokens: 3, output_tokens: 0 } } };
  const end = (reason = 'end_turn') => [{ type: 'message_delta', delta: { stop_reason: reason }, usage: { output_tokens: 2 } }, { type: 'message_stop' }];
  const frame = (event: any) => `event: ${event.type}\r\ndata: ${JSON.stringify(event)}\r\n\r\n`;
  const sse = (...events: any[]) => events.map(frame).join('');
  const block = (type: string, value: string) => [
    { type: 'content_block_start', index: 7, content_block: type === 'text' ? { type, text: '' } : { type, thinking: '' } },
    { type: 'content_block_delta', index: 7, delta: type === 'text' ? { type: 'text_delta', text: value } : { type: 'thinking_delta', thinking: value } },
    { type: 'content_block_stop', index: 7 },
  ];
  const run = () => adapter.call({ participant, system: 'Fixture', prompt: 'Fixture', maxTokens: 100, signal: new AbortController().signal, onText: () => {} });
  const failure = async (code: string, category: string) => { let caught: ModelFailure | undefined; await assert.rejects(run(), (error: unknown) => { assert.ok(error instanceof ModelFailure); caught = error; assert.equal(error.code, code); assert.equal(error.diagnostics?.category, category); assert.doesNotMatch(JSON.stringify(error), /PRIVATE_|invalid\.test/); return true; }); return caught!; };
  try {
    body = sse(start, ...block('text', 'Answer'), ...end()); const result = await run(); assert.equal(result.text, 'Answer'); assert.equal(result.incomplete, false); assert.deepEqual(result.usage, { inputTokens: 3, outputTokens: 2, totalTokens: 5 });
    body = sse(start, ...block('thinking', 'PRIVATE_REASONING'), ...end('max_tokens')); const reasoningOnly = await failure('EMPTY_RESPONSE', 'reasoning-only'); assert.match(reasoningOnly.message, /output-token allowance|max-tokens/);
    body = sse(start, { type: 'content_block_start', index: 0, content_block: { type: 'tool_use', id: 'PRIVATE_TOOL_ID', name: 'PRIVATE_NAME', input: {} } }, { type: 'content_block_delta', index: 0, delta: { type: 'input_json_delta', partial_json: '{}' } }, { type: 'content_block_stop', index: 0 }, ...end('tool_use')); await failure('UNSUPPORTED_TOOLS', 'tool-only');
    body = sse(start, ...end()); await failure('EMPTY_RESPONSE', 'empty');
    body = sse(start, ...block('text', 'Partial')); const interrupted = await failure('STREAM_CLOSED', 'interrupted'); assert.equal(interrupted.partial, 'Partial');
    body = 'event: message_start\ndata: {invalid JSON}\n\n'; await failure('MALFORMED_RESPONSE', 'malformed');
    // Unterminated final frame must not accidentally settle the response.
    body = sse(start, ...block('text', 'Partial'), end()[0]) + 'event: message_stop\ndata: {"type":"message_stop"}'; await failure('STREAM_CLOSED', 'interrupted');
    body = sse(start, { type: 'content_block_delta', index: 0, delta: { type: 'text_delta', text: 'PRIVATE_ORPHAN' } }); await failure('MALFORMED_RESPONSE', 'malformed');
    contentType = 'application/json'; body = JSON.stringify({ type: 'message', content: [{ type: 'text', text: 'PRIVATE_NONSTREAM' }], stop_reason: 'end_turn' }); await failure('STREAM_CLOSED', 'interrupted');
    status = 429; body = JSON.stringify({ type: 'error', error: { type: 'rate_limit_error', message: 'PRIVATE_RATE_BODY' } }); const rate = await failure('RATE_LIMIT', 'provider-error'); assert.equal(rate.diagnostics?.status, 429); assert.equal(rate.retryAfterMs, 2000);
    assert.equal(fetches, 10);
  } finally { t.mock.restoreAll(); await registration.dispose(); await runtime.dispose(); }
});

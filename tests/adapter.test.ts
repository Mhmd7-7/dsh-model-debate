import test from 'node:test';
import assert from 'node:assert/strict';
import { DshAdapter, ModelFailure, isLoopbackEndpoint, type AdapterContext, type PreparedConfig } from '../src/adapter.js';
import { Repository, type DomainTable, type RepositoryDomain } from '../src/persistence.js';
import { createOperation, Config } from '../src/index.js';
import { pathToFileURL } from 'node:url';
import { join, resolve, basename } from 'node:path';
import { mkdtemp, realpath, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { defaults, preferencesSchema, sessionSchema, type DebateSession, type Participant, type Preferences } from '../src/state.js';

const participant: Participant = { id: 'p1', provider: 'loop', model: 'm1', enabled: true, role: 'solver', instructions: '', options: {} };
function context(chunks: any[] = [{ type: 'text-delta', index: 0, text: 'Answer' }, { type: 'finish', reason: { kind: 'stop' } }]) {
  const seen: { config?: PreparedConfig; options?: any; prepared: number } = { prepared: 0 };
  const ctx: AdapterContext = {
    llm: {
      listProviders: () => [{ id: 'loop', name: 'Local' }],
      listConfigurableProviders: () => [{ provider: 'loop', settingsNs: 'llm-settings', settingsPath: ['providers', 'loop'] }],
      listModels: async () => [{ provider: 'loop', id: 'm1', name: 'Model one' }],
      resolveModelInfo: async () => ({ context: { contextWindow: 8192 }, reasoning: { efforts: [{ id: 'low' }] } }),
      providerRetryPolicy: () => ({ maxRetries: 2, retryableCodes: ['RATE_LIMIT'], initialDelayMs: 12, maxDelayMs: 123 }),
      prepareCall: async config => {
        seen.prepared++; seen.config = config;
        return { config: { ...config, reasoningEffort: config.reasoningEffort ?? 'low' }, retryPolicy: {}, stream: async function* (options: object) { seen.options = options; for (const chunk of chunks) yield chunk; } };
      },
    },
    settings: { describe: options => { assert.equal(options.redactSecrets, true); return [{ ns: 'llm-settings', value: { providers: { loop: { baseURL: 'http://127.0.0.1:11434/v1', apiKeyEnv: 'PRIVATE_REFERENCE', headers: { Authorization: 'PRIVATE_CONFIG' } } } } }]; } },
  };
  return { ctx, seen };
}
function call(adapter: DshAdapter, extra: Partial<Parameters<DshAdapter['call']>[0]> = {}) { return adapter.call({ participant, system: 'System', prompt: 'Question', maxTokens: 1000, signal: new AbortController().signal, onText: () => {}, ...extra }); }

// These tests deliberately use fake registered providers; they do not prove live model connectivity.
test('catalog preserves advertised exact identities and capabilities without exposing config', async () => {
  const { ctx } = context(); const result = await new DshAdapter(ctx, { localOnly: true }).catalog();
  assert.deepEqual(result.models, [{ provider: 'loop', model: 'm1', name: 'Model one', providerName: 'Local', reasoningEfforts: ['low'], contextWindow: 8192, local: true, imageSupport: 'unknown' }]);
  assert.equal(result.localOnly, true);
  assert.doesNotMatch(JSON.stringify(result), /PRIVATE_REFERENCE|PRIVATE_CONFIG|127\.0\.0\.1|11434/);
});
test('loopback classifier rejects remote, ambiguous, credential-bearing and query URLs', () => {
  for (const value of ['http://localhost:123/v1', 'http://127.3.4.5/v1', 'https://[::1]/v1']) assert.equal(isLoopbackEndpoint(value), true, value);
  for (const value of ['http://localhost.evil.test', 'http://192.168.1.1', 'http://user:password@localhost', 'http://localhost?key=secret', 'http://localhost/#secret', 'file:///localhost', 'not a url']) assert.equal(isLoopbackEndpoint(value), false, value);
});
test('local-only fails closed before catalog or call for unknown locality', async () => {
  const { ctx, seen } = context(); ctx.settings.describe = () => [];
  const adapter = new DshAdapter(ctx, { localOnly: true });
  assert.equal((await adapter.catalog()).models.length, 0);
  await assert.rejects(call(adapter), (error: unknown) => error instanceof ModelFailure && error.code === 'LOCAL_ONLY');
  assert.equal(seen.prepared, 0);
});
test('catalog ignores mismatched routes; calls never silently substitute', async () => {
  const { ctx, seen } = context(); ctx.llm.listModels = async () => [{ provider: 'other', id: 'm1', name: 'Wrong route' }];
  const adapter = new DshAdapter(ctx);
  assert.equal((await adapter.catalog()).models.length, 0);
  await assert.rejects(call(adapter), (error: unknown) => error instanceof ModelFailure && error.code === 'UNAVAILABLE');
  assert.equal(seen.prepared, 0);
});
test('stalled catalog and metadata lookup return within bounded windows', { timeout: 1000 }, async () => {
  const { ctx } = context(); ctx.llm.listModels = () => new Promise(() => {});
  const adapter = new DshAdapter(ctx, { metadataTimeoutMs: 50 });
  assert.equal((await adapter.catalog()).models.length, 0);
  ctx.llm.listModels = async () => [{ provider: 'loop', id: 'm1', name: 'Model' }];
  ctx.llm.resolveModelInfo = () => new Promise(() => {});
  const result = await adapter.catalog(); assert.equal(result.models.length, 1); assert.deepEqual(result.models[0].reasoningEfforts, []);
  assert.match(result.diagnostics.join(' '), /unavailable/i);
});
test('text chunks deduplicate full blocks and ignore private reasoning/tools', async () => {
  const { ctx, seen } = context([
    { type: 'reasoning-delta', index: 0, text: 'PRIVATE_REASONING' },
    { type: 'block-end', index: 0, block: { type: 'reasoning', text: 'PRIVATE_REASONING' } },
    { type: 'text-delta', index: 1, text: 'Hello' }, { type: 'text-delta', index: 1, text: ' world' },
    { type: 'block-end', index: 1, block: { type: 'text', text: 'Hello world' } },
    { type: 'tool-call-delta', index: 2, id: 'tc', name: 'delete_files', argumentsDelta: '{}' },
    { type: 'block-end', index: 3, block: { type: 'text', text: '!' } },
    { type: 'usage', usage: { inputTokens: 10, outputTokens: 4, totalTokens: 14, reasoningTokens: 900 } },
    { type: 'finish', reason: { kind: 'stop' }, replayState: { secret: true } },
  ]);
  const texts: string[] = []; let persisted: PreparedConfig | undefined;
  const result = await call(new DshAdapter(ctx), { onText: text => texts.push(text), onPrepared: async config => { persisted = config; assert.equal(seen.options, undefined); } });
  assert.deepEqual(result, { text: 'Hello world!', incomplete: false, usage: { inputTokens: 10, outputTokens: 4, totalTokens: 14 } });
  assert.deepEqual(texts, ['Hello', 'Hello world', 'Hello world!']);
  assert.deepEqual(persisted, { provider: 'loop', model: 'm1', maxTokens: 1000, reasoningEffort: 'low' });
  assert.deepEqual(seen.options.tools, []); assert.deepEqual(seen.options.messages, [{ role: 'user', content: [{ type: 'text', text: 'Question' }] }]);
  assert.equal(seen.options.system, 'System'); assert.ok(seen.options.signal instanceof AbortSignal);
});
test('truncation and streams without finish are incomplete; usage absence stays absent', async () => {
  for (const chunks of [[{ type: 'block-end', index: 0, block: { type: 'text', text: 'Partial' } }, { type: 'finish', reason: { kind: 'max-tokens' } }], [{ type: 'text-delta', index: 0, text: 'Partial' }]]) {
    const { ctx } = context(chunks); const result = await call(new DshAdapter(ctx));
    assert.equal(result.incomplete, true); assert.equal(result.text, 'Partial'); assert.equal(result.usage, undefined);
  }
});
test('known provider failure keeps partial usage and retry delay but never raw body', async () => {
  const { ctx } = context([{ type: 'text-delta', index: 0, text: 'Public partial' }, { type: 'usage', usage: { inputTokens: 3, outputTokens: 2 } }, { type: 'finish', reason: { kind: 'error', failure: { code: 'RATE_LIMIT', message: 'Authorization: Bearer PRIVATE_TOKEN', status: 429, providerRetryAfterMs: 456 } } }]);
  await assert.rejects(call(new DshAdapter(ctx)), (error: unknown) => {
    assert.ok(error instanceof ModelFailure); assert.equal(error.code, 'RATE_LIMIT'); assert.equal(error.partial, 'Public partial'); assert.equal(error.retryAfterMs, 456); assert.deepEqual(error.usage, { inputTokens: 3, outputTokens: 2 }); assert.doesNotMatch(error.message, /PRIVATE_TOKEN|Bearer/); return true;
  });
});
test('unknown fatal errors are not mislabeled retryable; HTTP statuses safely classify', async () => {
  for (const [failure, code] of [[{ code: 'PRIVATE_TOKEN', message: 'PRIVATE_BODY' }, 'REQUEST_FAILED'], [{ status: 503, message: 'PRIVATE_BODY' }, 'SERVER'], [{ status: 400, message: 'PRIVATE_BODY' }, 'BAD_REQUEST'], [{ code: 'NO_ADAPTER', message: 'PRIVATE_BODY' }, 'NO_ADAPTER']] as const) {
    const { ctx } = context([{ type: 'finish', reason: { kind: 'error', failure } }]);
    await assert.rejects(call(new DshAdapter(ctx)), (error: unknown) => error instanceof ModelFailure && error.code === code && !error.message.includes('PRIVATE_'));
  }
});
test('true abort reaches stream signal and promptly escapes a stalled iterator', { timeout: 1000 }, async () => {
  const { ctx } = context(); let actualSignal: AbortSignal | undefined, returned = false;
  ctx.llm.prepareCall = async config => ({ config, retryPolicy: {}, stream: (options: any) => { actualSignal = options.signal; return { [Symbol.asyncIterator]: () => ({ next: () => new Promise(() => {}), return: async () => { returned = true; return { done: true, value: undefined }; } }) }; } });
  const controller = new AbortController(); const pending = call(new DshAdapter(ctx), { signal: controller.signal });
  await new Promise(resolve => setTimeout(resolve, 5)); controller.abort();
  await assert.rejects(pending, (error: unknown) => error instanceof ModelFailure && error.code === 'ABORTED');
  assert.equal(actualSignal, controller.signal); assert.equal(actualSignal?.aborted, true); assert.equal(returned, true);
});
test('provider policy is detached and exposed without retries inside call', () => {
  const { ctx } = context(); const policy = new DshAdapter(ctx).retryPolicy('loop');
  assert.deepEqual(policy, { maxRetries: 2, retryableCodes: ['RATE_LIMIT'], initialDelayMs: 12, maxDelayMs: 123 });
});
test('tool and UI operation envelope share strict validation and sanitize internal errors', async () => {
  let calls = 0; const op = createOperation({ operation: async () => { calls++; throw new Error('Authorization: Bearer PRIVATE_TOKEN'); } });
  assert.equal((await op({ action: 'invented' })).ok, false); assert.equal(calls, 0);
  const result = await op({ action: 'snapshot' }); assert.equal(calls, 1); assert.equal(result.ok, false); assert.doesNotMatch(JSON.stringify(result), /PRIVATE_TOKEN|Bearer/);
  assert.equal(Config({}).maxConcurrentRuns, 1); assert.equal(Config({}).localOnly, false);
});

function session(id = 's1'): DebateSession {
  return { schemaVersion: 1, id, title: 'Original', question: 'Question', images: [], createdAt: 1, updatedAt: 1, status: 'running', settings: defaults(), messages: [], followUps: [], reviews: [], tasks: [{ id: 't1', participantId: 'p1', round: 1, status: 'responding', attempt: 1, queuedAt: 1 }], issues: [], requests: [], usage: { inputTokens: 0, outputTokens: 0 }, usageUnavailable: false, budgetUsed: 0, budgetEstimated: false, round: 1, stage: 'test', stageDeadline: 5, deadline: 20, startedAt: 1, final: null, reviewError: null, stopReason: null, compression: [] };
}
class Table<T> implements DomainTable<T> {
  data = new Map<string, T>(); log: string[] = []; beforePut?: (key: string, value: T) => Promise<void>;
  get(key: string) { return this.data.get(key); }
  entries() { return this.data.entries(); }
  async put(key: string, value: T) { await this.beforePut?.(key, value); this.data.set(key, value); this.log.push(`put:${key}`); }
  async delete(key: string) { this.log.push(`delete:${key}`); return this.data.delete(key); }
}
function domain() {
  const sessions = new Table<DebateSession>(), preferences = new Table<Preferences>();
  const value = { table: (name: string) => name === 'sessions' ? sessions : preferences, close: async () => {} } as RepositoryDomain;
  return { sessions, preferences, value };
}
test('repository clones both sides, validates snapshots, and recovers interrupted work durably', async () => {
  const d = domain(); d.sessions.data.set('s1', session()); const repo = new Repository(d.value); await repo.ready;
  const read = repo.get('s1')!; read.title = 'Mutation'; assert.equal(repo.get('s1')!.title, 'Original');
  await repo.recover(); const recovered = repo.get('s1')!; assert.equal(recovered.status, 'interrupted'); assert.equal(recovered.tasks[0].status, 'interrupted'); assert.match(recovered.stopReason!, /no automatic continuation/i); assert.equal(d.sessions.get('s1')!.status, 'interrupted');
  const prefs: Preferences = { settings: defaults(), presets: [], activeId: 's1' }; const saving = repo.savePreferences(prefs); prefs.activeId = null; await saving;
  assert.equal(repo.getPreferences()!.activeId, 's1'); const p = repo.getPreferences()!; p.presets.push({ id: 'x', name: 'x', settings: defaults() }); assert.equal(repo.getPreferences()!.presets.length, 0);
  assert.throws(() => repo.save({ ...session(), schemaVersion: 9 } as unknown as DebateSession));
});
test('repository serializes invocation snapshots and deletion against delayed writes', async () => {
  const d = domain(); let unblock!: () => void; let first = true;
  d.sessions.beforePut = async () => { if (first) { first = false; await new Promise<void>(resolve => { unblock = resolve; }); } };
  const repo = new Repository(d.value), one = session();
  const firstSave = repo.save(one); one.title = 'Later'; const secondSave = repo.save(one); one.title = 'Unpersisted mutation';
  await Promise.resolve(); assert.equal(repo.get('s1'), undefined); unblock(); await Promise.all([firstSave, secondSave]);
  assert.equal(repo.get('s1')!.title, 'Later'); assert.equal(d.sessions.get('s1')!.title, 'Later');
  const save = repo.save(session()), remove = repo.remove('s1'); await Promise.all([save, remove]); await repo.flush();
  assert.equal(repo.get('s1'), undefined); assert.equal(d.sessions.get('s1'), undefined); assert.equal(d.sessions.log.at(-1), 'delete:s1');
});
test('failed repository write does not fake commit or poison subsequent operations', async () => {
  const d = domain(); let fail = true; d.sessions.beforePut = async () => { if (fail) { fail = false; throw new Error('disk failure'); } };
  const repo = new Repository(d.value);
  await assert.rejects(repo.save(session()), /disk failure/); assert.equal(repo.list().length, 0);
  await repo.save(session()); assert.equal(repo.list().length, 1); await repo.remove('s1'); assert.equal(repo.list().length, 0);
});

// Opt-in portability: set DSH_RUNTIME_ROOT to the installed 0.2.1-rc.2 checkout.
// This uses real Cordis ownership/lifecycle with fake LLM/storage/transport services.
test('actual Cordis 4 lifecycle mounts shared route/tool and tears down before domain close', { skip: !process.env.DSH_RUNTIME_ROOT }, async () => {
  const root = process.env.DSH_RUNTIME_ROOT!;
  const { Context } = await import(pathToFileURL(join(root, 'node_modules', '@deepseek-ai', 'cordis', 'lib', 'index.js')).href);
  const host = await import('../src/index.js');
  const ctx = new Context(), d = domain(), { ctx: adapterCtx, seen } = context();
  const events: string[] = []; let route: any, tool: any;
  let closed = false;
  d.value.close = async () => { closed = true; events.push('domain-close'); };
  d.sessions.beforePut = async () => { assert.equal(closed, false); events.push('session-save'); };
  d.preferences.beforePut = async () => { assert.equal(closed, false); };
  ctx.provide('llm', adapterCtx.llm); ctx.provide('settings', adapterCtx.settings);
  ctx.provide('storageDomain', { open: async (spec: any) => { assert.equal(spec.name, 'model_debate'); assert.equal(spec.version, 1); return d.value; } });
  ctx.provide('connection', { fetch: { register: (r: any) => { route = r; events.push('route-register'); return async () => { events.push('route-remove'); }; } } });
  ctx.provide('tools', { register: (t: any) => { tool = t; events.push('tool-register'); return () => { events.push('tool-remove'); }; } });
  const fiber = ctx.plugin(host, {}); await fiber.await();
  assert.equal(route.path, '/api/model-debate'); assert.deepEqual(route.methods, ['POST']); assert.equal(route.requestBody, 'buffered');
  assert.equal(tool.name, 'model_debate'); assert.ok(ctx.get('modelDebate'));
  const toolResult = await tool.execute({ action: 'snapshot' });
  const response = await route.fetch(new Request('http://localhost/api/model-debate', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ action: 'snapshot' }) }));
  assert.deepEqual(await response.json(), toolResult);
  const invalid = await route.fetch(new Request('http://localhost/api/model-debate', { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{' })); assert.equal(invalid.status, 400);
  const settings = defaults([{ provider: 'loop', model: 'm1', name: 'One', providerName: 'Local', local: true, reasoningEfforts: [] }, { provider: 'loop', model: 'm2', name: 'Two', providerName: 'Local', local: true, reasoningEfforts: [] }]);
  adapterCtx.llm.listModels = async () => [{ provider: 'loop', id: 'm1', name: 'One' }, { provider: 'loop', id: 'm2', name: 'Two' }];
  adapterCtx.llm.prepareCall = async config => { seen.prepared++; return { config, retryPolicy: {}, stream: (options: any) => ({ [Symbol.asyncIterator]: () => ({ next: () => new Promise(() => {}), return: async () => ({ done: true, value: undefined }) }) }) }; };
  const started = await tool.execute({ action: 'start', question: 'Question', settings }); assert.equal(started.ok, true);
  await new Promise(resolve => setTimeout(resolve, 5));
  await fiber.dispose();
  assert.equal(ctx.get('modelDebate'), undefined); assert.equal(closed, true);
  assert.equal(d.sessions.get(started.value.id)!.status, 'interrupted');
  assert.ok(events.indexOf('tool-remove') < events.indexOf('domain-close'));
  assert.ok(events.indexOf('route-remove') < events.indexOf('domain-close'));
  assert.equal(events.at(-1), 'domain-close');
});

test('actual DSH DomainFacility and JSON backend persist/reopen/recover plugin schema', { skip: !process.env.DSH_RUNTIME_ROOT }, async () => {
  const root = process.env.DSH_RUNTIME_ROOT!;
  const load = (name: string) => import(pathToFileURL(join(root, 'node_modules', '@deepseek-ai', name, 'lib', 'index.js')).href);
  const [{ Context }, { BackendRegistry }, { DomainFacility }, { JsonStorageBackend }] = await Promise.all([load('cordis'), load('dsh-storage'), load('dsh-storage-domain'), load('dsh-storage-json')]);
  const directory = await mkdtemp(join(tmpdir(), 'dsh-model-debate-storage-test-'));
  const canonical = await realpath(directory);
  assert.ok(basename(canonical).startsWith('dsh-model-debate-storage-test-'));
  const backend = new JsonStorageBackend(canonical), registry = new BackendRegistry(); registry.register('json', backend);
  const ctx = new Context(); ctx.provide('storage', { backend: registry });
  const facility = new DomainFacility(ctx, { backend: 'json' });
  const spec = { name: 'model_debate', version: 1, layout: 'single', tables: { sessions: { valueSchema: sessionSchema }, preferences: { valueSchema: preferencesSchema } } };
  try {
    await assert.rejects(facility.open({ ...spec, name: 'model-debate' }), /invalid unit name/i);
    const first = await facility.open(spec); const repository = new Repository(first);
    await repository.save(session()); await repository.savePreferences({ settings: defaults(), presets: [], activeId: 's1' }); await repository.flush(); await first.close();
    const second = await facility.open(spec); const reopened = new Repository(second);
    assert.equal(reopened.get('s1')!.status, 'running'); assert.equal(reopened.getPreferences()!.activeId, 's1');
    await reopened.recover(); assert.equal(reopened.get('s1')!.status, 'interrupted'); await second.close();
    const third = await facility.open(spec); const durable = new Repository(third);
    assert.equal(durable.get('s1')!.status, 'interrupted'); assert.equal(durable.get('s1')!.tasks[0].status, 'interrupted');
    await durable.remove('s1'); await durable.flush(); await third.close();
    const fourth = await facility.open(spec); assert.equal(new Repository(fourth).list().length, 0); await fourth.close();
  } finally {
    await facility.closeAll(); await backend.close();
    // Delete only the exact canonical temp directory created and verified above.
    assert.equal(resolve(directory), canonical); await rm(canonical, { recursive: true, force: true });
  }
});

test('actual DSH Connection registry requires full API path and dispatches/removes owned route', { skip: !process.env.DSH_RUNTIME_ROOT }, async () => {
  const root = process.env.DSH_RUNTIME_ROOT!;
  const load = (name: string) => import(pathToFileURL(join(root, 'node_modules', '@deepseek-ai', name, 'lib', 'index.js')).href);
  const [{ Context }, { HostConnectionService }] = await Promise.all([load('cordis'), load('dsh-client-connection')]);
  const ctx = new Context();
  // Registry/ownership only; no network, actual cookies, credentials, or browser admission.
  const service = new HostConnectionService(ctx, [], {});
  const route = { path: '/api/model-debate', methods: ['POST'], requestBody: 'buffered', fetch: async () => Response.json({ ok: true, value: { tested: true } }) };
  assert.throws(() => service.fetch.register({ ...route, path: '/model-debate' }), /invalid exact Fetch route/);
  const unregister = service.fetch.register(route), handler = service.createSharedFetchHandler('/api');
  const request = () => new Request('http://localhost/api/model-debate', { method: 'POST', body: '{}' });
  const response = await handler.fetch(request(), service.browserPeer); assert.deepEqual(await response.json(), { ok: true, value: { tested: true } });
  await unregister(); assert.equal((await handler.fetch(request(), service.browserPeer)).status, 404);
  await service.browserPeer.dispose();
});

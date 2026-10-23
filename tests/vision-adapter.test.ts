import test from 'node:test';
import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import { join } from 'node:path';
import { DshAdapter, ModelFailure, type AdapterContext, type PreparedConfig } from '../src/adapter.js';
import type { ImageRef, Participant } from '../src/state.js';

type Modalities = readonly string[] | undefined;
const participant: Participant = { id: 'vision', provider: 'loop', model: 'model', enabled: true, role: 'solver', instructions: '', options: {} };
const imageA: ImageRef = Object.freeze({ attachmentId: 'image-a', mediaType: 'image/png', bytes: 123, width: 64, height: 32, name: 'first.png', originalDimensions: Object.freeze({ width: 128, height: 64 }) });
const imageB: ImageRef = Object.freeze({ attachmentId: 'image-b', mediaType: 'image/jpeg', bytes: 456, width: 80, height: 60 });
const images = Object.freeze([imageA, imageB]);
const success = [{ type: 'text-delta', index: 0, text: 'Public answer' }, { type: 'finish', reason: { kind: 'stop' } }];
function context(advertised: Modalities = ['text', 'image'], resolved: Modalities = ['text', 'image']) {
  const seen: { listings: number; resolutions: number; preparations: number; streams: number; requests: any[] } = { listings: 0, resolutions: 0, preparations: 0, streams: 0, requests: [] };
  const modes: { advertised: Modalities; resolved: Modalities; prepared: Modalities; chunks: any[] } = { advertised, resolved, prepared: undefined, chunks: success };
  const ctx: AdapterContext = {
    llm: {
      listProviders: () => [{ id: 'loop', name: 'Local' }],
      listConfigurableProviders: () => [{ provider: 'loop', settingsNs: 'settings', settingsPath: ['loop'] }],
      listModels: async provider => { seen.listings++; return [{ provider, id: 'model', name: 'Model', ...(modes.advertised === undefined ? {} : { inputModalities: modes.advertised }) }]; },
      resolveModelInfo: async () => { seen.resolutions++; return modes.resolved === undefined ? {} : { inputModalities: modes.resolved }; },
      providerRetryPolicy: () => ({ maxRetries: 3, retryableCodes: ['RATE_LIMIT', 'SERVER', 'INVALID_IMAGE', 'IMAGE_UNSUPPORTED'] }),
      prepareCall: async config => {
        seen.preparations++;
        return { config, retryPolicy: {}, ...(modes.prepared === undefined ? {} : { inputModalities: modes.prepared }), stream: async function* (options: object) { seen.streams++; seen.requests.push(options); for (const chunk of modes.chunks) yield chunk; } };
      },
    },
    settings: { describe: () => [{ ns: 'settings', value: { loop: { baseURL: 'http://127.0.0.1:11434/v1' } } }] },
  };
  return { ctx, seen, modes };
}
function call(adapter: DshAdapter, extra: Partial<Parameters<DshAdapter['call']>[0]> = {}) {
  return adapter.call({ participant, system: 'System', prompt: 'Compare these images.', images, maxTokens: 1000, signal: new AbortController().signal, onText: () => {}, ...extra });
}
function failure(code: string) {
  return (error: unknown) => { assert.ok(error instanceof ModelFailure); assert.equal(error.code, code); assert.doesNotMatch(error.message, /PRIVATE_|Bearer|data:image|base64|https:\/\/secret/); return true; };
}
const claims: { name: string; modalities: Modalities; support: 'supported' | 'unsupported' | 'unknown' }[] = [
  { name: 'absent', modalities: undefined, support: 'unknown' },
  { name: 'image', modalities: ['text', 'image'], support: 'supported' },
  { name: 'text-only', modalities: ['text'], support: 'unsupported' },
  { name: 'empty', modalities: [], support: 'unsupported' },
];

test('catalog and dispatch conservatively merge every advertised/resolved image-capability combination', async t => {
  for (const advertised of claims) for (const resolved of claims) await t.test(`${advertised.name} listing + ${resolved.name} resolution`, async () => {
    const { ctx, seen } = context(advertised.modalities, resolved.modalities);
    // Explicit undefined must stay absent rather than take the helper's supported defaults.
    ctx.llm.listModels = async provider => [{ provider, id: 'model', name: 'Model', ...(advertised.modalities === undefined ? {} : { inputModalities: advertised.modalities }) }];
    ctx.llm.resolveModelInfo = async () => resolved.modalities === undefined ? {} : { inputModalities: resolved.modalities };
    const support = advertised.support === 'unsupported' || resolved.support === 'unsupported' ? 'unsupported' : advertised.support === 'supported' || resolved.support === 'supported' ? 'supported' : 'unknown';
    const adapter = new DshAdapter(ctx), catalog = await adapter.catalog();
    assert.equal(catalog.models[0].imageSupport, support);
    if (support === 'supported') assert.equal((await call(adapter)).text, 'Public answer');
    else { await assert.rejects(call(adapter), failure(support === 'unknown' ? 'IMAGE_CAPABILITY_UNKNOWN' : 'IMAGE_UNSUPPORTED')); assert.equal(seen.preparations, 0); assert.equal(seen.streams, 0); }
  });
});

test('catalog preserves advertised modality fallback when exact metadata is unavailable', async () => {
  for (const claim of claims) {
    const { ctx } = context();
    ctx.llm.listModels = async () => [{ provider: 'loop', id: 'model', name: 'Model', ...(claim.modalities === undefined ? {} : { inputModalities: claim.modalities }) }];
    ctx.llm.resolveModelInfo = async () => { throw new Error('PRIVATE_METADATA_BODY'); };
    const result = await new DshAdapter(ctx).catalog();
    assert.equal(result.models[0].imageSupport, claim.support); assert.match(result.diagnostics.join(' '), /unavailable/i);
    assert.doesNotMatch(JSON.stringify(result), /PRIVATE_|inputModalities/);
  }
});

test('image requests use prompt-first actual image blocks and unchanged attachment references', async () => {
  const { ctx, seen, modes } = context(); modes.prepared = ['text', 'image'];
  const controller = new AbortController(), before = JSON.stringify(images), order: string[] = [];
  let persisted: PreparedConfig | undefined;
  const onText: string[] = [];
  const result = await call(new DshAdapter(ctx), {
    signal: controller.signal,
    onPrepared: async config => { order.push('persist'); persisted = config; assert.equal(seen.streams, 0); await Promise.resolve(); },
    onText: text => { assert.deepEqual(order, ['persist']); onText.push(text); },
  });
  assert.equal(result.text, 'Public answer'); assert.equal(result.incomplete, false); assert.equal(result.diagnostics?.category, 'public-text'); assert.deepEqual(onText, ['Public answer']);
  assert.deepEqual(persisted, { provider: 'loop', model: 'model', maxTokens: 1000 });
  const request = seen.requests[0];
  assert.deepEqual(request.messages, [{ role: 'user', content: [{ type: 'text', text: 'Compare these images.' }, { type: 'image', attachment: imageA }, { type: 'image', attachment: imageB }] }]);
  assert.equal(request.messages[0].content[1].attachment, imageA); assert.equal(request.messages[0].content[2].attachment, imageB);
  assert.deepEqual(request.tools, []); assert.equal(request.system, 'System'); assert.equal(request.signal, controller.signal);
  assert.equal(JSON.stringify(images), before); assert.ok(Object.isFrozen(images)); assert.ok(Object.isFrozen(imageA));
  assert.doesNotMatch(JSON.stringify(request), /data:image|base64|image_url/);
});

test('prepared captured-generation modalities veto stale image claims before persistence and dispatch', async () => {
  for (const modalities of [['text'], []]) {
    const { ctx, modes, seen } = context(); modes.prepared = modalities;
    let persisted = false;
    await assert.rejects(call(new DshAdapter(ctx), { onPrepared: async () => { persisted = true; } }), failure('IMAGE_UNSUPPORTED'));
    assert.equal(seen.preparations, 1); assert.equal(seen.streams, 0); assert.equal(persisted, false);
  }
});

test('every retry rechecks fresh exact route and both metadata claims instead of prior catalog support', async () => {
  for (const change of ['listing', 'resolved', 'unknown', 'removed'] as const) {
    const { ctx, modes, seen } = context(), adapter = new DshAdapter(ctx);
    assert.equal((await adapter.catalog()).models[0].imageSupport, 'supported');
    modes.chunks = [{ type: 'finish', reason: { kind: 'error', failure: { code: 'RATE_LIMIT', status: 429, message: 'PRIVATE_BODY' } } }];
    await assert.rejects(call(adapter), failure('RATE_LIMIT'));
    if (change === 'listing') modes.advertised = ['text'];
    if (change === 'resolved') modes.resolved = ['text'];
    if (change === 'unknown') { modes.advertised = undefined; modes.resolved = undefined; }
    if (change === 'removed') ctx.llm.listModels = async () => [];
    const code = change === 'unknown' ? 'IMAGE_CAPABILITY_UNKNOWN' : change === 'removed' ? 'UNAVAILABLE' : 'IMAGE_UNSUPPORTED';
    await assert.rejects(call(adapter), failure(code));
    assert.equal(seen.preparations, 1); assert.equal(seen.streams, 1);
  }
});

test('image route lookup cannot borrow another provider/model capability or bypass locality and auth', async () => {
  const missing = context(); missing.ctx.llm.listModels = async () => [{ provider: 'other', id: 'model', name: 'Wrong route', inputModalities: ['image'] }, { provider: 'loop', id: 'other', name: 'Wrong model', inputModalities: ['image'] }];
  await assert.rejects(call(new DshAdapter(missing.ctx)), failure('UNAVAILABLE')); assert.equal(missing.seen.preparations, 0);
  const local = context(); local.ctx.settings.describe = () => [];
  await assert.rejects(call(new DshAdapter(local.ctx, { localOnly: true })), failure('LOCAL_ONLY')); assert.equal(local.seen.listings, 0); assert.equal(local.seen.preparations, 0);
  const auth = context(); auth.ctx.llm.resolveModelInfo = async () => { throw { code: 'MISSING_CREDENTIAL', message: 'PRIVATE_TOKEN' }; };
  await assert.rejects(call(new DshAdapter(auth.ctx)), failure('MISSING_CREDENTIAL')); assert.equal(auth.seen.preparations, 0);
  const prepareAuth = context(); prepareAuth.ctx.llm.prepareCall = async () => { throw { status: 403, message: 'PRIVATE_TOKEN' }; };
  await assert.rejects(call(new DshAdapter(prepareAuth.ctx)), failure('AUTH')); assert.equal(prepareAuth.seen.streams, 0);
});

test('image calls retain prepared-route mismatch and post-persistence local-only guards', async () => {
  const mismatch = context(); mismatch.ctx.llm.prepareCall = async config => ({ config: { ...config, model: 'different' }, retryPolicy: {}, stream: async function* () { assert.fail('must not dispatch'); } });
  await assert.rejects(call(new DshAdapter(mismatch.ctx)), failure('UNAVAILABLE'));
  const local = context();
  await assert.rejects(call(new DshAdapter(local.ctx, { localOnly: true }), { onPrepared: async () => { local.ctx.settings.describe = () => []; } }), failure('LOCAL_ONLY'));
  assert.equal(local.seen.streams, 0);
});

test('text-only and empty-image calls remain compatible without image metadata lookups', async () => {
  const { ctx, seen, modes } = context(); modes.advertised = ['text']; modes.prepared = ['text'];
  ctx.llm.resolveModelInfo = async () => { assert.fail('text calls must not acquire a new metadata requirement'); };
  for (const imageInput of [undefined, []]) {
    assert.equal((await call(new DshAdapter(ctx), { images: imageInput })).text, 'Public answer');
    assert.deepEqual(seen.requests.at(-1).messages, [{ role: 'user', content: [{ type: 'text', text: 'Compare these images.' }] }]);
  }
  assert.equal(seen.preparations, 2);
});

test('image and attachment failures keep stable sanitized nontransient codes even with retryable HTTP status', async () => {
  const codes = ['IMAGE_UNSUPPORTED', 'IMAGE_CAPABILITY_UNKNOWN', 'IMAGE_OFFLOAD_REQUIRED', 'TOO_MANY_IMAGES', 'IMAGES_TOO_LARGE', 'UNSUPPORTED_IMAGE_TYPE', 'INVALID_IMAGE_BASE64', 'INVALID_IMAGE', 'IMAGE_TYPE_MISMATCH', 'IMAGE_TOO_LARGE', 'IMAGE_TOO_MANY_PIXELS', 'IMAGE_DIMENSION_TOO_LARGE', 'INVALID_ATTACHMENT_REF', 'ATTACHMENT_CORRUPT', 'ATTACHMENT_WRITE_FAILED', 'ATTACHMENT_NOT_FOUND', 'ATTACHMENT_READ_FAILED', 'ATTACHMENT_PROJECTION_UNSUPPORTED'];
  for (const code of codes) {
    const { ctx, modes, seen } = context(); modes.chunks = [{ type: 'finish', reason: { kind: 'error', failure: { code, status: 503, message: 'PRIVATE_BODY Authorization: Bearer PRIVATE_TOKEN https://secret/image.png', providerRetryAfterMs: 123 } } }];
    await assert.rejects(call(new DshAdapter(ctx)), failure(code));
    assert.equal(seen.preparations, 1); assert.equal(seen.streams, 1); // Adapter never retries internally.
  }
});

test('abort during fresh image metadata cancels before prepare and dispatch', { timeout: 1000 }, async () => {
  const { ctx, seen } = context(), controller = new AbortController(); let metadataSignal: AbortSignal | undefined;
  let started!: () => void; const began = new Promise<void>(resolve => { started = resolve; });
  ctx.llm.resolveModelInfo = async (_provider, _model, signal) => { metadataSignal = signal; started(); return new Promise(() => {}); };
  const pending = call(new DshAdapter(ctx), { signal: controller.signal }); await began; controller.abort();
  await assert.rejects(pending, failure('ABORTED')); assert.equal(metadataSignal?.aborted, true); assert.equal(seen.preparations, 0); assert.equal(seen.streams, 0);
});

test('image streaming retains original abort signal and promptly closes stalled iterator', { timeout: 1000 }, async () => {
  const { ctx } = context(), controller = new AbortController(); let streamSignal: AbortSignal | undefined, returned = false;
  let started!: () => void; const began = new Promise<void>(resolve => { started = resolve; });
  ctx.llm.prepareCall = async config => ({ config, retryPolicy: {}, inputModalities: ['image'], stream: (options: any) => { streamSignal = options.signal; assert.equal(options.messages[0].content[1].attachment, imageA); started(); return { [Symbol.asyncIterator]: () => ({ next: () => new Promise(() => {}), return: async () => { returned = true; return { done: true, value: undefined }; } }) }; } });
  const pending = call(new DshAdapter(ctx), { signal: controller.signal }); await began; controller.abort();
  await assert.rejects(pending, failure('ABORTED')); assert.equal(streamSignal, controller.signal); assert.equal(returned, true);
});

test('abort while image request config is being persisted prevents inference', { timeout: 1000 }, async () => {
  const { ctx, seen } = context(), controller = new AbortController();
  let started!: () => void; const began = new Promise<void>(resolve => { started = resolve; });
  const pending = call(new DshAdapter(ctx), { signal: controller.signal, onPrepared: async () => { started(); return new Promise(() => {}); } });
  await began; controller.abort(); await assert.rejects(pending, failure('ABORTED')); assert.equal(seen.streams, 0);
});

test('continuation image groups preserve chronology and inject each durable image once', async () => {
  const { ctx, seen } = context();
  await call(new DshAdapter(ctx), { imageGroups: [{ text: 'Original image question', images: [imageA] }, { text: 'User continuation', images: [imageA, imageB] }] });
  assert.deepEqual(seen.requests[0].messages, [
    { role: 'user', content: [{ type: 'text', text: 'Compare these images.' }] },
    { role: 'user', content: [{ type: 'text', text: 'Original image question' }, { type: 'image', attachment: imageA }] },
    { role: 'user', content: [{ type: 'text', text: 'User continuation' }, { type: 'image', attachment: imageB }] },
  ]);
  assert.equal(seen.requests[0].messages.flatMap((m: any) => m.content).filter((b: any) => b.type === 'image').length, 2);
});

test('continuation image groups cannot silently differ from validated ordered images or bypass capability checks', async () => {
  for (const groupImages of [[imageB], [], [imageB, imageA]]) {
    const { ctx, seen } = context();
    await assert.rejects(call(new DshAdapter(ctx), { imageGroups: [{ text: 'Source', images: groupImages }] }), failure('INVALID_REQUEST'));
    assert.equal(seen.preparations, 0); assert.equal(seen.streams, 0);
  }
  const { ctx, seen } = context(['text'], ['text']);
  await assert.rejects(call(new DshAdapter(ctx), { images: undefined, imageGroups: [{ text: 'Source', images: [imageA] }] }), failure('IMAGE_UNSUPPORTED'));
  assert.equal(seen.preparations, 0); assert.equal(seen.streams, 0);
});

// Actual installed LLM/Cordis service, fake registered provider: no network, image reads, or credentials.
test('actual DSH LLM service accepts unchanged ImageBlock reference requests and captured-modality veto', { skip: !process.env.DSH_RUNTIME_ROOT }, async () => {
  const root = process.env.DSH_RUNTIME_ROOT!;
  const load = (name: string) => import(pathToFileURL(join(root, 'node_modules', '@deepseek-ai', name, 'lib', 'index.js')).href);
  const [{ Context }, { LlmRuntime, LlmAdapter }] = await Promise.all([load('cordis'), load('dsh-llm')]);
  let actual: any, prepareCount = 0, changeAtPrepare = false;
  class FakeAdapter extends LlmAdapter {
    providerInfo(provider: string) { return { id: provider, name: 'Local fake' }; }
    async listModels(provider: string) { return [{ provider, id: 'model', name: 'Vision', inputModalities: ['text', 'image'] }]; }
    async resolveModel(provider: string, model: string) { return { provider, id: model, name: 'Vision', inputModalities: ['text', 'image'] }; }
    async prepareCall(provider: string, model: string) {
      prepareCount++;
      return { model: { provider, id: model, name: 'Vision', inputModalities: changeAtPrepare ? ['text'] : ['text', 'image'] }, stream: (options: any) => this.stream(options) };
    }
    async *stream(options: any) { actual = options; for (const chunk of success) yield chunk; }
  }
  const ctx = new Context(), serviceFiber = ctx.plugin(LlmRuntime); await serviceFiber.await();
  const registrationFiber = ctx.plugin({ name: 'vision-adapter-contract-test', inject: ['llm'], apply: (owner: any) => { owner.llm.registerAdapter(['loop'], new FakeAdapter()); } });
  await registrationFiber.await();
  try {
    const llm = ctx.get('llm'), adapter = new DshAdapter({ llm, settings: { describe: () => [] } });
    assert.equal((await adapter.catalog()).models[0].imageSupport, 'supported');
    assert.equal((await call(adapter)).text, 'Public answer');
    assert.deepEqual(actual.messages[0].content.map((block: any) => block.type), ['text', 'image', 'image']);
    assert.equal(actual.messages[0].content[1].attachment, imageA); assert.equal(actual.messages[0].content[2].attachment, imageB);
    const previous = actual; changeAtPrepare = true;
    await assert.rejects(call(adapter), failure('IMAGE_UNSUPPORTED')); assert.equal(actual, previous); assert.equal(prepareCount, 2);
  } finally { await registrationFiber.dispose(); await serviceFiber.dispose(); }
});

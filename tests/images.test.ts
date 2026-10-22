import test from 'node:test';
import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import { join, resolve } from 'node:path';
import { mkdtemp, realpath, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { DshImages, ImageInputError, noImages, validateImageModels, type AttachmentContext } from '../src/images.js';
import { DebateService } from '../src/engine.js';
import { defaults, sessionSchema, type EncodedImage, type ImageRef, type ModelInfo } from '../src/state.js';
import { finish, MemoryRepository, MockAdapter, models, TestClock } from './helpers.js';
import { exportSession } from '../src/content.js';
import { createOperation } from '../src/index.js';

import { imageFixture } from './image-fixture.js';
const png = imageFixture().toString('base64');
const encoded: EncodedImage = { mediaType: 'image/png', data: png, name: 'sample.png' };
const image: ImageRef = { attachmentId: 'a'.repeat(64), mediaType: 'image/png', bytes: Buffer.from(png, 'base64').length, width: 1, height: 1, name: 'sample.png' };
function store() {
  const calls: any[] = [];
  const value: AttachmentContext = {
    imageLimits: { maxImageBytes: 20 * 1024 * 1024, maxImagesPerMessage: 20, maxMessageImageBytes: 200 * 1024 * 1024, mediaTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/gif'] },
    async admitPromptContent(content) { calls.push(structuredClone(content)); return content.map((_, i) => ({ type: 'image', attachment: { ...image, attachmentId: String(i + 1).repeat(64) } })); },
    async readImage(ref) { return { ref, data: Buffer.from(png, 'base64') }; },
  };
  return { value, calls, gateway: new DshImages(value) };
}
test('image input policy tightens deployment limits, batch validation is atomic and names have no paths', async () => {
  const s = store(); assert.equal(s.gateway.policy().maxImages, 4); assert.equal(s.gateway.policy().maxImageBytes, 10 * 1024 * 1024);
  s.value.imageLimits.maxImagesPerMessage = 2; assert.equal(s.gateway.policy().maxImages, 2);
  await assert.rejects(s.gateway.admit([encoded, { ...encoded, data: 'not-base64' }]), /base64/); assert.equal(s.calls.length, 0);
  await assert.rejects(s.gateway.admit([encoded, encoded, encoded]), /Too many/); assert.equal(s.calls.length, 0);
  const admitted = await s.gateway.admit([{ ...encoded, name: 'C:\\private\\sample.png' }]); assert.equal(admitted.length, 1); assert.equal(s.calls[0][0].name, 'sample.png');
});
test('image byte, media, canonical encoding, and total limits are enforced before any storage', async () => {
  const s = store(); s.value.imageLimits.maxImageBytes = 1;
  await assert.rejects(s.gateway.admit([encoded]), /byte input limit/); assert.equal(s.calls.length, 0);
  s.value.imageLimits.maxImageBytes = 1000; s.value.imageLimits.maxMessageImageBytes = 1;
  await assert.rejects(s.gateway.admit([encoded]), /total input limit/); assert.equal(s.calls.length, 0);
  s.value.imageLimits.maxMessageImageBytes = 2000;
  await assert.rejects(s.gateway.admit([{ ...encoded, data: 'Zh==' }]), /base64/); // noncanonical pad bits
  s.value.imageLimits.mediaTypes = ['image/jpeg']; await assert.rejects(s.gateway.admit([encoded]), /Unsupported image/);
  assert.equal(s.calls.length, 0);
});
test('backend raster/integrity errors are public-safe and storage never exposes raw paths', async () => {
  const s = store(); s.value.admitPromptContent = async () => { throw { code: 'INVALID_IMAGE', message: 'C:\\PRIVATE\\API-KEY' }; };
  await assert.rejects(s.gateway.admit([encoded]), (e: any) => e instanceof ImageInputError && /decoded/.test(e.message) && !/PRIVATE/.test(e.message));
  s.value.readImage = async () => { throw { code: 'ATTACHMENT_NOT_FOUND', message: 'private path' }; };
  await assert.rejects(s.gateway.read(image), /unavailable/); assert.equal(noImages.policy().available, false); await assert.rejects(noImages.admit([encoded]), /unavailable/);
});
test('every participant and reviewer needs confirmed image support; image token budgets do not pretend exact accounting', () => {
  const vision = models.map(m => ({ ...m, imageSupport: 'supported' as const })), settings = defaults(vision);
  validateImageModels(settings, vision, 1);
  for (const support of ['unknown', 'unsupported'] as const) { const m = vision.map((m, i) => i ? m : { ...m, imageSupport: support }); assert.throws(() => validateImageModels(settings, m, 1), /no image was dropped/); }
  assert.throws(() => validateImageModels({ ...settings, reviewer: { provider: 'other', model: 'missing' } }, vision, 1), /not confirmed/);
  assert.throws(() => validateImageModels({ ...settings, tokenBudget: 100000 }, vision, 1), /image-token accounting/);
  validateImageModels({ ...settings, tokenBudget: 100000 }, [], 0);
});
test('images survive all stages, reviewer, persistence, exports, preview lookup and rerun without reupload', async () => {
  const clock = new TestClock(), adapter = new MockAdapter(clock), repo = new MemoryRepository(), s = store();
  adapter.offered = models.map(m => ({ ...m, imageSupport: 'supported' }));
  const service = new DebateService(adapter, repo, { clock, images: s.gateway }); await service.initialize();
  const settings = { ...defaults(adapter.offered.slice(0, 2)), rounds: 2 };
  const { id } = await service.operation({ action: 'start', question: 'Read the attached image.', settings, images: [encoded] }) as { id: string }; await finish(service, clock);
  const saved = repo.get(id)!; assert.equal(saved.images.length, 1); assert.equal(s.calls.length, 1); assert.equal(saved.status, 'completed');
  assert.equal(saved.requests.length, 5); assert.ok(saved.requests.every(r => r.images[0].attachmentId === saved.images[0].attachmentId));
  assert.ok(adapter.calls.every(c => c.images.length === 1));
  const preview = await service.operation({ action: 'image', id, imageIndex: 0 }) as any; assert.equal(preview.data, png);
  await assert.rejects(service.operation({ action: 'image', id, imageIndex: 1 }), /not found/);
  const json = exportSession(saved, 'json'); assert.equal(JSON.parse(json.content).images[0].attachmentId, saved.images[0].attachmentId); assert.ok(!json.content.includes(png)); assert.match(exportSession(saved, 'markdown').content, /Image metadata only/);
  const second = await service.operation({ action: 'rerun', id }) as { id: string }; await finish(service, clock); assert.notEqual(second.id, id); assert.equal(s.calls.length, 1); assert.deepEqual(repo.get(second.id)!.images, saved.images);
  const restored = sessionSchema.parse({ ...saved, images: undefined, requests: saved.requests.map(({ images, ...request }) => request) }); assert.deepEqual(restored.images, []); assert.ok(restored.requests.every(r => r.images.length === 0));
});
test('non-image models or invalid uploads never start inference; raw references are refused', async () => {
  const clock = new TestClock(), adapter = new MockAdapter(clock), repo = new MemoryRepository(), s = store(), service = new DebateService(adapter, repo, { clock, images: s.gateway }); await service.initialize();
  const operation = createOperation(service), settings = defaults(models.slice(0, 2));
  assert.equal((await operation({ action: 'start', question: 'Image', settings, images: [encoded] })).ok, false); assert.equal(adapter.calls.length, 0); assert.equal(s.calls.length, 0);
  assert.equal((await operation({ action: 'start', question: 'Image', settings, images: [image] })).ok, false); assert.equal(adapter.calls.length, 0);
  assert.equal((await operation({ action: 'image', id: 'does-not-exist', imageIndex: 0 })).ok, false);
});
test('saved image read failure prevents rerun instead of sending text alone', async () => {
  const clock = new TestClock(), adapter = new MockAdapter(clock), repo = new MemoryRepository(), s = store(); adapter.offered = models.map(m => ({ ...m, imageSupport: 'supported' }));
  const service = new DebateService(adapter, repo, { clock, images: s.gateway }); await service.initialize(); const { id } = await service.operation({ action: 'start', question: 'Image', settings: defaults(adapter.offered.slice(0, 2)), images: [encoded] }) as { id: string }; await finish(service, clock);
  const count = adapter.calls.length; s.value.readImage = async () => { throw { code: 'ATTACHMENT_NOT_FOUND' }; };
  await assert.rejects(service.operation({ action: 'rerun', id }), /unavailable/); assert.equal(adapter.calls.length, count);
});
test('actual DSH image admission normalizes, decodes, rejects malformed raster and durably reads original references', { skip: !process.env.DSH_RUNTIME_ROOT }, async () => {
  const root = process.env.DSH_RUNTIME_ROOT!, load = (name: string) => import(pathToFileURL(join(root, 'node_modules', '@deepseek-ai', name, 'lib', 'index.js')).href);
  const [{ Context }, { LocalAttachmentStore }] = await Promise.all([load('cordis'), load('dsh-attachment-local')]);
  const directory = await mkdtemp(join(tmpdir(), 'dsh-debate-images-')), canonical = await realpath(directory); assert.equal(resolve(directory), canonical);
  const ctx = new Context();
  try {
    const actual = new LocalAttachmentStore(ctx, { dshHome: canonical }), gateway = new DshImages(actual);
    const refs = await gateway.admit([encoded]); assert.equal(refs.length, 1); assert.ok(refs[0].width > 0); await gateway.verify(refs);
    const bytes = await gateway.read(refs[0]); assert.ok(bytes.data.length > 0); assert.ok(['image/jpeg', 'image/webp', 'image/png'].includes(bytes.mediaType));
    await assert.rejects(gateway.admit([{ ...encoded, data: Buffer.from('not an image').toString('base64') }]), /decoded/);
    const reopened = new DshImages(new LocalAttachmentStore(new Context(), { dshHome: canonical })); assert.deepEqual(await reopened.read(refs[0]), bytes);
  } finally { assert.equal(resolve(directory), canonical); await rm(canonical, { recursive: true, force: true }); }
});

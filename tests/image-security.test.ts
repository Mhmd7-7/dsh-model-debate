import test from 'node:test';
import assert from 'node:assert/strict';
import { createOperation } from '../src/index.js';
import { DshImages, noImages, type AttachmentContext } from '../src/images.js';
import { DebateService } from '../src/engine.js';
import { defaults, type ImageRef } from '../src/state.js';
import { finish, MemoryRepository, MockAdapter, models, TestClock } from './helpers.js';
import { imageFixture } from './image-fixture.js';

function fixture() {
  const clock = new TestClock(), adapter = new MockAdapter(clock), repository = new MemoryRepository(), data = imageFixture();
  adapter.offered = models.map(m => ({ ...m, imageSupport: 'supported' }));
  const ref: ImageRef = { attachmentId: 'f'.repeat(64), mediaType: 'image/png', bytes: data.length, width: 96, height: 64 };
  let reads = 0, admissions = 0;
  const store: AttachmentContext = { imageLimits: { maxImageBytes: 1000000, maxImagesPerMessage: 4, maxMessageImageBytes: 2000000, mediaTypes: ['image/png'] },
    async admitPromptContent() { admissions++; return [{ type: 'image', attachment: ref }]; }, async readImage(image) { reads++; return { ref: image, data }; } };
  const service = new DebateService(adapter, repository, { clock, images: new DshImages(store) });
  const settings = { ...defaults(adapter.offered.slice(0, 2)), rounds: 2 };
  return { clock, adapter, repository, store, service, settings, ref, encoded: { mediaType: 'image/png', data: data.toString('base64') }, counts: () => ({ reads, admissions }) };
}
test('preview cannot read arbitrary attachment IDs, local paths, or deleted debates', async () => {
  const f = fixture(); await f.service.initialize(); const operation = createOperation(f.service);
  const invalid = await operation({ action: 'image', id: 'absent', imageIndex: 0, attachmentId: f.ref.attachmentId }); assert.equal(invalid.ok, false); assert.equal(f.counts().reads, 0);
  assert.equal((await operation({ action: 'image', id: '../../private', imageIndex: 0 })).ok, false); assert.equal(f.counts().reads, 0);
  const start = await f.service.operation({ action: 'start', question: 'Read image', settings: f.settings, images: [f.encoded] }) as { id: string }; await finish(f.service, f.clock);
  await f.service.operation({ action: 'delete', id: start.id }); assert.equal((await operation({ action: 'image', id: start.id, imageIndex: 0 })).ok, false); assert.equal(f.counts().reads, 0);
});
test('image uploads attached to non-start operations are rejected without admission', async () => {
  const f = fixture(); await f.service.initialize();
  for (const action of ['snapshot', 'get', 'settings', 'image', 'stop', 'export']) await assert.rejects(f.service.operation({ action, id: 'none', imageIndex: 0, settings: f.settings, format: 'json', images: [f.encoded] }), /only when starting/);
  assert.equal(f.counts().admissions, 0); assert.equal(f.adapter.calls.length, 0);
});
test('unsupported reviewer blocks admission without charging a provider request', async () => {
  const f = fixture(); await f.service.initialize(); f.adapter.offered[2] = { ...f.adapter.offered[2], imageSupport: 'unsupported' };
  await assert.rejects(f.service.operation({ action: 'start', question: 'Read image', settings: { ...f.settings, reviewer: { provider: f.adapter.offered[2].provider, model: f.adapter.offered[2].model } }, images: [f.encoded] }), /unsupported/);
  assert.equal(f.counts().admissions, 0); assert.equal(f.adapter.calls.length, 0);
});
test('image-dependent stopped discussions review only through explicit action and with retained input', async () => {
  const f = fixture(); await f.service.initialize(); const { id } = await f.service.operation({ action: 'start', question: 'Read image', settings: f.settings, images: [f.encoded] }) as { id: string };
  await new Promise<void>(resolve => setImmediate(resolve)); f.clock.advance(10); await new Promise<void>(resolve => setImmediate(resolve));
  await f.service.operation({ action: 'stop', id }); await finish(f.service, f.clock);
  const count = f.adapter.calls.length; assert.ok(f.repository.get(id)!.messages.length >= 2); assert.ok(!f.adapter.calls.some(c => c.participant.id === 'reviewer'));
  await f.service.operation({ action: 'review', id }); await finish(f.service, f.clock);
  const reviewer = f.adapter.calls.slice(count).find(c => c.participant.id === 'reviewer')!; assert.ok(reviewer); assert.deepEqual(reviewer.images, [f.ref]);
});
test('base64 uploads are not retained in preferences, presets, session snapshots or request prompts', async () => {
  const f = fixture(); await f.service.initialize(); const { id } = await f.service.operation({ action: 'start', question: 'Read image', settings: f.settings, images: [f.encoded] }) as { id: string }; await finish(f.service, f.clock);
  assert.ok(!JSON.stringify(f.repository.getPreferences()).includes(f.encoded.data));
  assert.ok(!JSON.stringify(f.repository.get(id)).includes(f.encoded.data));
  assert.ok(f.repository.get(id)!.requests.every(request => request.images.length === 1 && !request.prompt.includes(f.encoded.data)));
});

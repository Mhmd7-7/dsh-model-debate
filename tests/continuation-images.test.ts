import test from 'node:test';
import assert from 'node:assert/strict';
import { DebateService } from '../src/engine.js';
import { createOperation } from '../src/index.js';
import { DshImages, type AttachmentContext } from '../src/images.js';
import { conversationImages, conversationImageGroups } from '../src/conversation-images.js';
import { sessionSchema, type ImageRef } from '../src/state.js';
import { fixture, finish, models } from './helpers.js';
import { imageFixture } from './image-fixture.js';

async function setup() {
  const f = await fixture({ rounds: 2, contextChars: 500000 }); await finish(f.service, f.clock);
  const data = imageFixture().toString('base64');
  const refs = new Map<string, ImageRef>(); let n = 0;
  const attachments: AttachmentContext = {
    imageLimits: { maxImageBytes: 1000000, maxImagesPerMessage: 4, maxMessageImageBytes: 2000000, mediaTypes: ['image/png'] },
    async admitPromptContent(inputs) { return inputs.map(input => { const ref: ImageRef = { attachmentId: String(++n).padStart(64, '0'), mediaType: input.mediaType, bytes: Buffer.from(input.data, 'base64').length, width: 1, height: 1, name: input.name }; refs.set(ref.attachmentId, ref); return { type: 'image', attachment: ref }; }); },
    async readImage(ref) { if (!refs.has(ref.attachmentId)) throw { code: 'ATTACHMENT_NOT_FOUND' }; return { ref, data: Buffer.from(data, 'base64') }; },
  };
  const saved = f.repo.get(f.id)!;
  const original: ImageRef = { attachmentId: 'original', mediaType: 'image/png', bytes: Buffer.from(data, 'base64').length, width: 1, height: 1, name: 'original.png' };
  refs.set(original.attachmentId, original); saved.images = [original]; await f.repo.save(saved);
  f.adapter.offered = models.map(m => ({ ...m, imageSupport: 'supported' }));
  const gateway = new DshImages(attachments);
  const service = new DebateService(f.adapter, f.repo, { clock: f.clock, images: gateway }); await service.initialize();
  return { ...f, service, gateway, data, original, refs, image: (name: string) => ({ mediaType: 'image/png' as const, data, name }) };
}

test('text + image and image-only continuations retain per-message refs, original context, exact request images and reopen', async () => {
  const f = await setup(), originalSettings = f.repo.get(f.id)!.settings;
  for (const [i, text] of ['New visible evidence', ''].entries()) {
    const start = f.adapter.calls.length;
    const result = await createOperation(f.service)({ action: 'followup', id: f.id, message: text, images: [f.image(`new-${i}.png`)] });
    assert.equal(result.ok, true); await finish(f.service, f.clock);
    const saved = f.repo.get(f.id)!, images = conversationImages(saved), turn = saved.followUps.at(-1)!;
    assert.equal(turn.text, text); assert.equal(turn.images?.[0].name, `new-${i}.png`);
    assert.deepEqual(saved.images, [f.original]); assert.deepEqual(saved.settings, originalSettings);
    assert.equal(images.length, i + 2);
    for (const call of f.adapter.calls.slice(start)) {
      assert.deepEqual(call.images, images);
      const prompt = JSON.parse(call.prompt);
      assert.equal(prompt.imageInputs.length, images.length);
      assert.equal(prompt.imageInputs[0].sources[0].kind, 'original');
      assert.equal(prompt.imageInputs.at(-1).sources[0].followUpId, turn.id);
      assert.equal(prompt.originalQuestion, saved.question);
      assert.ok(prompt.imageInstructions.includes('image-only'));
    }
    assert.deepEqual(saved.requests.at(-1)!.images, images, 'reviewer receives all intended images');
    const pixels = await f.service.operation({ action: 'image', id: f.id, followUpId: turn.id, imageIndex: 0 });
    assert.deepEqual(pixels, { mediaType: 'image/png', data: f.data });
    assert.deepEqual(sessionSchema.parse(JSON.parse(JSON.stringify(saved))), saved);
    // Recreate the service/repository boundary without rewriting metadata or reuploading pixels.
    const reopened = new DebateService(f.adapter, f.repo, { clock: f.clock, images: f.gateway }); await reopened.initialize();
    assert.deepEqual(await reopened.operation({ action: 'get', id: f.id }), saved);
  }
  const before = f.repo.get(f.id)!;
  const rerun = await f.service.operation({ action: 'rerun', id: f.id }) as { id: string }; await finish(f.service, f.clock);
  assert.deepEqual(conversationImages(f.repo.get(rerun.id)!), conversationImages(before));
  assert.deepEqual(f.repo.get(f.id), before);
});

test('duplicate attachment content has one request image, with original and continuation origins retained', async () => {
  const f = await setup(), s = f.repo.get(f.id)!;
  s.followUps.push({ id: 'u1', text: '', images: [f.original], timestamp: 1, startRound: 3, budgetStart: 0 });
  assert.deepEqual(conversationImages(s), [f.original]);
  assert.deepEqual(conversationImageGroups(s).flatMap(group => group.images), [f.original]);
});

test('unsupported/unknown participant or reviewer never silently loses continuation images', async () => {
  for (const support of ['unsupported', 'unknown'] as const) {
    const f = await setup(), before = f.repo.get(f.id), count = f.adapter.calls.length;
    f.adapter.offered = f.adapter.offered.map((m, i) => i === 1 ? { ...m, imageSupport: support } : m);
    await assert.rejects(f.service.operation({ action: 'followup', id: f.id, images: [f.image('new.png')] }), /support|confirmed/);
    assert.deepEqual(f.repo.get(f.id), before); assert.equal(f.adapter.calls.length, count);
  }
});

test('invalid batch and failed continuation persistence leave saved debate unchanged and invoke no providers', async () => {
  const f = await setup(), before = f.repo.get(f.id), count = f.adapter.calls.length;
  for (const images of [[{ mediaType: 'image/svg+xml', data: 'eA==' }], Array.from({ length: 5 }, () => f.image('excess.png')), [{ mediaType: 'image/png', data: 'bad!' }]]) {
    assert.equal((await createOperation(f.service)({ action: 'followup', id: f.id, images })).ok, false);
    assert.deepEqual(f.repo.get(f.id), before); assert.equal(f.adapter.calls.length, count);
  }
  const save = f.repo.save.bind(f.repo); f.repo.save = async () => { throw new Error('private-path'); };
  assert.equal((await createOperation(f.service)({ action: 'followup', id: f.id, images: [f.image('retained-draft.png')] })).ok, false);
  assert.deepEqual(f.repo.get(f.id), before); assert.equal(f.adapter.calls.length, count); f.repo.save = save;
});

test('cumulative 20-image context limit rejects the next attachment turn before committing it', async () => {
  const f = await setup(), before = f.repo.get(f.id)!;
  for (let turn = 0; turn < 4; turn++) {
    const images = Array.from({ length: 4 }, (_, i) => f.image(`turn-${turn}-${i}.png`));
    const result = await createOperation(f.service)({ action: 'followup', id: f.id, images });
    assert.equal(result.ok, true); await finish(f.service, f.clock);
  }
  const fourTurns = f.repo.get(f.id)!;
  assert.equal(conversationImages(fourTurns).length, 17, 'one original plus four complete continuation batches');
  const rejected = await createOperation(f.service)({ action: 'followup', id: f.id, images: [f.image('over-limit-1.png'), f.image('over-limit-2.png'), f.image('over-limit-3.png'), f.image('over-limit-4.png')] });
  assert.equal(rejected.ok, false); if (!rejected.ok) assert.match(rejected.error, /20 distinct|exceeds/);
  assert.equal(f.repo.get(f.id)!.followUps.length, 4);
  assert.deepEqual(f.repo.get(f.id)!.messages, fourTurns.messages);
  assert.ok(before.followUps.length === 0);
});

test('old followups without attachments still load and empty followups remain invalid', async () => {
  const f = await setup(), s = f.repo.get(f.id)!;
  s.followUps.push({ id: 'old', text: 'legacy text', timestamp: 1, startRound: 3, budgetStart: 0 });
  assert.equal(sessionSchema.parse(s).followUps[0].images, undefined);
  for (const message of [undefined, '', '  \n']) assert.equal((await createOperation(f.service)({ action: 'followup', id: f.id, message })).ok, false);
});

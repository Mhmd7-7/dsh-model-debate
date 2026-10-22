import test from 'node:test';
import assert from 'node:assert/strict';
import { DebateService } from '../src/engine.js';
import { createOperation } from '../src/index.js';
import { DshImages, type AttachmentContext } from '../src/images.js';
import { sessionSchema, type DebateSession, type ImageRef, type Settings } from '../src/state.js';
import { fixture, finish, flush, models, TestClock, type CallRecord } from './helpers.js';
import { imageFixture } from './image-fixture.js';

const followup = (service: DebateService, id: string, message = 'new info') => service.operation({ action: 'followup', id, message });
const participantCalls = (calls: CallRecord[]) => calls.filter(c => c.participant.id !== 'reviewer');
const discussion = (call: CallRecord) => JSON.parse(JSON.parse(call.prompt).publishedDiscussion) as { id: string; participant: string }[];
const completedFixture = async (settings: Partial<Settings> = {}) => {
  const f = await fixture({ rounds: 2, contextChars: 500000, ...settings });
  await finish(f.service, f.clock);
  assert.equal(f.repo.get(f.id)!.status, 'completed');
  return f;
};

async function rejectsWithoutCommit(f: Awaited<ReturnType<typeof fixture>>, input: unknown, pattern?: RegExp) {
  const before = f.repo.list(), preferences = f.repo.getPreferences(), count = f.adapter.calls.length;
  const save = f.repo.save.bind(f.repo); let saves = 0;
  f.repo.save = async session => { saves++; await save(session); };
  try {
    if (pattern) await assert.rejects(f.service.operation(input), pattern);
    else await assert.rejects(f.service.operation(input));
    assert.deepEqual(f.repo.list(), before, 'rejection must leave saved conversations unchanged');
    assert.deepEqual(f.repo.getPreferences(), preferences, 'rejection must leave preferences unchanged');
    assert.equal(saves, 0, 'invalid follow-up must not attempt a session write');
    assert.equal(f.adapter.calls.length, count, 'invalid follow-up must not invoke a model');
  } finally { f.repo.save = save; }
}

async function advanceUntil(clock: TestClock, predicate: () => boolean) {
  for (let i = 0; i < 100 && !predicate(); i++) { await flush(); if (!predicate()) clock.next(); }
  assert.ok(predicate(), 'expected virtual scheduler state was not reached');
}

test('legacy session schemas default missing follow-up and review history to empty arrays', async () => {
  const f = await completedFixture();
  const legacy: Record<string, unknown> = structuredClone(f.repo.get(f.id)!);
  delete legacy.followUps; delete legacy.reviews;
  const restored = sessionSchema.parse(legacy);
  assert.deepEqual(restored.followUps, []);
  assert.deepEqual(restored.reviews, []);
  assert.deepEqual(restored.messages, f.repo.get(f.id)!.messages);
});

test('follow-up preserves one conversation, archives reviews, and runs a fresh bounded cycle each time', async () => {
  const f = await completedFixture({ maxRepliesPerParticipant: 2, maxReplies: 6 });
  const original = f.repo.get(f.id)!;
  assert.deepEqual(original.followUps, []); assert.deepEqual(original.reviews, []);
  for (const call of f.adapter.calls) {
    assert.deepEqual(JSON.parse(call.prompt).userFollowUps, []);
    assert.deepEqual(JSON.parse(call.prompt).previousReviews, []);
  }

  for (const text of ['new info', 'second correction']) {
    const before = f.repo.get(f.id)!, callStart = f.adapter.calls.length;
    f.clock.advance(20000); // The original deadline is expired: a new cycle needs its own time window.
    const timestamp = f.clock.now();
    const result = await followup(f.service, f.id, ` \n${text}\t `) as { id: string };
    assert.equal(result.id, f.id);
    const committed = await f.service.operation({ action: 'get', id: f.id }) as DebateSession;
    assert.equal(committed.status, 'running'); assert.equal(committed.final, null);
    assert.equal(committed.followUps.length, before.followUps.length + 1);
    const turn = committed.followUps.at(-1)!;
    assert.ok(turn.id); assert.equal(turn.text, text); assert.equal(turn.timestamp, timestamp);
    assert.equal(turn.startRound, before.round + 1); assert.equal(turn.budgetStart, before.budgetUsed);
    assert.deepEqual(committed.reviews.at(-1), { ...before.final!, afterRound: before.round });
    assert.ok(committed.deadline > timestamp);
    await finish(f.service, f.clock);

    const after = f.repo.get(f.id)!, calls = f.adapter.calls.slice(callStart), current = participantCalls(calls);
    assert.equal(after.status, 'completed'); assert.equal(after.id, original.id);
    assert.equal(after.question, original.question); assert.equal(after.title, original.title);
    assert.equal(after.createdAt, original.createdAt); assert.deepEqual(after.images, original.images);
    assert.deepEqual(after.settings, original.settings);
    assert.equal(after.round, before.round + f.settings.rounds);
    assert.equal(current.length, 6, 'reply limits reset for the new cycle');
    for (const p of after.settings.participants.filter(p => p.enabled)) assert.equal(current.filter(c => c.participant.id === p.id).length, 2);
    assert.equal(calls.filter(c => c.participant.id === 'reviewer').length, 1);
    assert.deepEqual(after.messages.slice(0, before.messages.length), before.messages);
    assert.deepEqual(after.tasks.slice(0, before.tasks.length), before.tasks);
    assert.deepEqual(after.requests.slice(0, before.requests.length), before.requests);
    assert.equal(after.messages.length, before.messages.length + 6, 'user turns are not model contributions');
    assert.equal(after.budgetUsed, before.budgetUsed + calls.length * 50);
    assert.equal(after.usage.totalTokens, before.usage.totalTokens! + calls.length * 50);
    assert.ok(after.messages.slice(before.messages.length).every(m => m.round >= turn.startRound && m.round < turn.startRound + f.settings.rounds));
    assert.equal(new Set(after.messages.map(m => m.id)).size, after.messages.length);
    assert.equal(new Set(after.followUps.map(t => t.id)).size, after.followUps.length);
    assert.equal(f.repo.list().length, 1);
    for (const call of calls) {
      const prompt = JSON.parse(call.prompt);
      assert.equal(prompt.originalQuestion, original.question);
      assert.equal(prompt.latestUserMessage, text);
      assert.deepEqual(prompt.userFollowUps.map((t: { text: string }) => t.text), after.followUps.map(t => t.text));
      assert.deepEqual(prompt.previousReviews, after.reviews);
      assert.deepEqual(prompt.participants.map((p: { id: string }) => p.id), original.settings.participants.filter(p => p.enabled).map(p => p.id));
      const ids = new Set(discussion(call).map(m => m.id));
      assert.ok(before.messages.every(m => ids.has(m.id)), 'prior discussion is present even in the first follow-up round');
      assert.ok(discussion(call).every(m => original.settings.participants.some(p => p.id === m.participant)), 'user text never masquerades as participant output');
    }
    sessionSchema.parse(after);
  }
});

test('follow-up text is trimmed, nonempty, and at most 30000 characters; settings and images are forbidden', async () => {
  const f = await completedFixture();
  const base = { action: 'followup', id: f.id, message: 'new info' };
  const invalid = [
    { action: 'followup', id: f.id }, { ...base, message: '' }, { ...base, message: ' \n\t ' },
    { ...base, message: 'x'.repeat(30001) }, { ...base, message: 42 }, { ...base, id: null },
    { action: 'followup', message: 'new info' }, { ...base, settings: f.settings },
    { ...base, images: [] }, { ...base, images: [{ mediaType: 'image/png', data: 'eA==' }] },
  ];
  for (const input of invalid) await rejectsWithoutCommit(f, input);
  const publicOperation = createOperation(f.service);
  for (const input of invalid) assert.equal((await publicOperation(input)).ok, false, 'GUI/tool validation must reject the same invalid inputs');
  const message = 'x'.repeat(30000);
  assert.equal((await publicOperation({ ...base, message: ` \n${message}\t ` })).ok, true);
  await finish(f.service, f.clock);
  assert.equal(f.repo.get(f.id)!.followUps.at(-1)!.text, message);
});

for (const status of ['completed', 'partial', 'stopped', 'interrupted'] as const) test(`follow-up accepts an inactive ${status} conversation`, async () => {
  const f = await completedFixture(), saved = f.repo.get(f.id)!;
  saved.status = status; await f.repo.save(saved);
  assert.equal((await followup(f.service, f.id) as { id: string }).id, f.id);
  await finish(f.service, f.clock);
  assert.equal(f.repo.get(f.id)!.followUps.length, 1);
});

for (const status of ['running', 'reviewing'] as const) test(`follow-up rejects an active ${status} conversation`, async () => {
  const f = await fixture({ rounds: 2 }, c => ({ delay: c.participant.id === 'reviewer' ? 400 : 100 }));
  if (status === 'reviewing') await advanceUntil(f.clock, () => f.adapter.calls.some(c => c.participant.id === 'reviewer'));
  assert.equal((await f.service.operation({ action: 'get', id: f.id }) as DebateSession).status, status);
  await assert.rejects(followup(f.service, f.id));
  const saved = await f.service.operation({ action: 'get', id: f.id }) as DebateSession;
  assert.deepEqual(saved.followUps, []); assert.deepEqual(saved.reviews, []);
  await f.service.operation({ action: 'stop', id: f.id }); await finish(f.service, f.clock);
});

test('missing and deleted conversations reject follow-up without creating replacement sessions', async () => {
  const f = await completedFixture();
  await rejectsWithoutCommit(f, { action: 'followup', id: 'missing', message: 'new info' });
  await f.service.operation({ action: 'delete', id: f.id });
  await rejectsWithoutCommit(f, { action: 'followup', id: f.id, message: 'new info' });
  assert.equal(f.repo.list().length, 0);
});

for (const missing of ['participant', 'reviewer'] as const) test(`fresh catalog validation rejects an unavailable ${missing} before committing a follow-up`, async () => {
  const f = await completedFixture({ reviewer: { provider: models[3].provider, model: models[3].model } });
  const removed = missing === 'participant' ? models[1] : models[3];
  f.adapter.offered = models.filter(m => m.provider !== removed.provider || m.model !== removed.model);
  await rejectsWithoutCommit(f, { action: 'followup', id: f.id, message: 'new info' }, /unavailable|restricted|model/i);
});

test('follow-up enforces the saved-turn limit before any write', async () => {
  const f = await completedFixture(), saved = f.repo.get(f.id)!;
  saved.followUps = Array.from({ length: 30 }, (_, i) => ({ id: `user-${i}`, text: `Earlier addition ${i}`, timestamp: i, startRound: 1, budgetStart: 0 }));
  await f.repo.save(saved);
  await rejectsWithoutCommit(f, { action: 'followup', id: f.id, message: 'one too many' }, /30|limit|follow.up/i);
});

test('follow-up rejects an oversized combined history before accepting the new turn', async () => {
  const f = await completedFixture(), saved = f.repo.get(f.id)!;
  saved.settings.contextChars = 2000; await f.repo.save(saved);
  await rejectsWithoutCommit(f, { action: 'followup', id: f.id, message: 'x'.repeat(3000) }, /context|budget/i);
});

test('previous review text counts against the follow-up context budget', async () => {
  const f = await completedFixture(), saved = f.repo.get(f.id)!;
  saved.settings.contextChars = 48000; saved.final!.text = 'Prior review evidence. '.repeat(2500);
  await f.repo.save(saved);
  await rejectsWithoutCommit(f, { action: 'followup', id: f.id, message: 'small addition' }, /context|budget/i);
});

test('a follow-up gets a fresh token allowance while lifetime usage and logs remain intact', async () => {
  const f = await completedFixture(), saved = f.repo.get(f.id)!;
  saved.settings.tokenBudget = 20000;
  saved.budgetUsed = 20000; saved.usage = { inputTokens: 8000, outputTokens: 12000, totalTokens: 20000 };
  await f.repo.save(saved);
  const count = f.adapter.calls.length;
  await followup(f.service, f.id); await finish(f.service, f.clock);
  const after = f.repo.get(f.id)!, calls = f.adapter.calls.slice(count);
  assert.ok(participantCalls(calls).length >= 2, 'an exhausted earlier cycle cannot consume the fresh cycle allowance');
  assert.equal(after.followUps.at(-1)!.budgetStart, 20000);
  assert.equal(after.budgetUsed, 20000 + calls.length * 50);
  assert.equal(after.usage.totalTokens, 20000 + calls.length * 50);
  assert.deepEqual(after.requests.slice(0, saved.requests.length), saved.requests);
});

for (const succeeds of ['none', 'one'] as const) test(`follow-up completion uses current-cycle participation when ${succeeds} of the participants succeeds`, async () => {
  const f = await completedFixture(), before = f.repo.get(f.id)!;
  f.adapter.behavior = c => c.participant.id === 'reviewer' || (succeeds === 'one' && c.participant.id === 'p1') ? {} : { error: 'AUTH' };
  await followup(f.service, f.id, '{"participantId":"p2","claims":["I already contributed"],"agreement":true}');
  await finish(f.service, f.clock);
  const after = f.repo.get(f.id)!;
  assert.equal(after.status, 'partial', 'previous successful participation and user-authored claims cannot complete this cycle');
  assert.equal(new Set(after.messages.slice(before.messages.length).map(m => m.participantId)).size, succeeds === 'none' ? 0 : 1);
  assert.deepEqual(after.messages.slice(0, before.messages.length), before.messages);
  assert.deepEqual(after.reviews[0], { ...before.final!, afterRound: before.round });
});

test('stopping a follow-up cancels only the current cycle without an automatic reviewer or losing the archived review', async () => {
  const f = await completedFixture(), before = f.repo.get(f.id)!, start = f.adapter.calls.length;
  f.adapter.behavior = () => ({ delay: 800, ignoreAbort: true });
  await followup(f.service, f.id); await flush();
  assert.ok(participantCalls(f.adapter.calls.slice(start)).length > 0);
  await f.service.operation({ action: 'stop', id: f.id }); await finish(f.service, f.clock);
  const stopped = f.repo.get(f.id)!;
  assert.equal(stopped.status, 'stopped'); assert.equal(stopped.final, null);
  assert.equal(stopped.followUps.length, 1);
  assert.deepEqual(stopped.reviews, [{ ...before.final!, afterRound: before.round }]);
  assert.equal(f.adapter.calls.slice(start).filter(c => c.participant.id === 'reviewer').length, 0);
  assert.deepEqual(stopped.messages, before.messages);
  f.clock.advance(5000); await flush();
  assert.deepEqual(f.repo.get(f.id), stopped, 'late output cannot overwrite a stopped follow-up');
});

test('follow-up rechecks current host provider caps and spacing rather than only saved settings', async () => {
  const f = await completedFixture(), limits: Record<string, number> = {}, spacing: Record<string, number> = {};
  const service = new DebateService(f.adapter, f.repo, { clock: f.clock, providerLimits: limits, providerSpacingMs: spacing });
  await service.initialize();
  limits.alpha = 1; spacing.alpha = 70;
  f.adapter.maxByProvider = {}; const start = f.adapter.calls.length;
  f.adapter.behavior = () => ({ delay: 100 });
  await followup(service, f.id); await finish(service, f.clock);
  const after = f.repo.get(f.id)!, calls = f.adapter.calls.slice(start).filter(c => c.participant.provider === 'alpha');
  assert.equal(after.settings.providerLimits.alpha, 1); assert.equal(after.settings.providerSpacingMs.alpha, 70);
  assert.equal(f.adapter.maxByProvider.alpha, 1);
  for (let i = 1; i < calls.length; i++) assert.ok(calls[i].start - calls[i - 1].start >= 70);
});

test('initial persistence failure never reports a fake accepted follow-up or exposes a tentative turn', async () => {
  const f = await completedFixture(), before = f.repo.get(f.id)!, preferences = f.repo.getPreferences(), count = f.adapter.calls.length;
  const save = f.repo.save.bind(f.repo); let attempts = 0;
  f.repo.save = async () => { attempts++; throw new Error('C:\\PRIVATE\\secret-storage-path'); };
  try {
    const result = await createOperation(f.service)({ action: 'followup', id: f.id, message: 'not accepted' });
    assert.equal(result.ok, false);
    if (!result.ok) assert.doesNotMatch(result.error, /PRIVATE|secret-storage-path/);
    assert.equal(attempts, 1); assert.equal(f.adapter.calls.length, count);
    assert.deepEqual(f.repo.get(f.id), before);
    assert.deepEqual(await f.service.operation({ action: 'get', id: f.id }), before, 'live lookup must not expose an uncommitted turn');
    assert.deepEqual(f.repo.getPreferences(), preferences);
  } finally { f.repo.save = save; }
  await followup(f.service, f.id, 'accepted after recovery'); await finish(f.service, f.clock);
  assert.deepEqual(f.repo.get(f.id)!.followUps.map(t => t.text), ['accepted after recovery']);
});

async function imageDebate() {
  const f = await completedFixture();
  const png = imageFixture().toString('base64');
  const image: ImageRef = { attachmentId: 'a'.repeat(64), mediaType: 'image/png', bytes: Buffer.from(png, 'base64').length, width: 1, height: 1, name: 'original.png' };
  let reads = 0;
  const attachments: AttachmentContext = {
    imageLimits: { maxImageBytes: 1000000, maxImagesPerMessage: 4, maxMessageImageBytes: 2000000, mediaTypes: ['image/png'] },
    async admitPromptContent() { throw new Error('A follow-up must not reupload saved images'); },
    async readImage(ref) { reads++; return { ref, data: Buffer.from(png, 'base64') }; },
  };
  const saved = f.repo.get(f.id)!; saved.images = [image]; await f.repo.save(saved);
  f.adapter.offered = models.map(m => ({ ...m, imageSupport: 'supported' }));
  const service = new DebateService(f.adapter, f.repo, { clock: f.clock, images: new DshImages(attachments) });
  await service.initialize();
  return { ...f, service, attachments, image, reads: () => reads };
}

test('original saved image references accompany every follow-up turn and reviewer without reupload', async () => {
  const f = await imageDebate(), start = f.adapter.calls.length;
  await followup(f.service, f.id); await finish(f.service, f.clock);
  const after = f.repo.get(f.id)!, calls = f.adapter.calls.slice(start);
  assert.ok(f.reads() >= 1, 'saved images must be verified before a turn is committed');
  assert.equal(calls.filter(c => c.participant.id === 'reviewer').length, 1);
  assert.deepEqual(after.images, [f.image]);
  for (const call of calls) {
    assert.deepEqual(call.images, [f.image]);
    assert.equal(JSON.parse(call.prompt).imageInputs[0].name, f.image.name);
  }
  assert.ok(after.requests.slice(-calls.length).every(r => r.images[0]?.attachmentId === f.image.attachmentId));
});

test('missing saved images reject follow-up atomically rather than silently switching to text', async () => {
  const f = await imageDebate();
  f.attachments.readImage = async () => { throw { code: 'ATTACHMENT_NOT_FOUND', message: 'C:\\PRIVATE\\image.png' }; };
  await rejectsWithoutCommit(f, { action: 'followup', id: f.id, message: 'new info' }, /unavailable/i);
});

test('lost image capability rejects follow-up before appending user text', async () => {
  const f = await imageDebate();
  f.adapter.offered = f.adapter.offered.map((m, i) => i === 1 ? { ...m, imageSupport: 'unknown' } : m);
  await rejectsWithoutCommit(f, { action: 'followup', id: f.id, message: 'new info' }, /image|support|confirmed/i);
});

test('follow-up rounds start after the greatest previously saved task or message round', async () => {
  const f = await completedFixture(), saved = f.repo.get(f.id)!;
  saved.messages[0].round = 5; saved.tasks[0].round = 7; await f.repo.save(saved);
  const start = f.adapter.calls.length;
  await followup(f.service, f.id); await finish(f.service, f.clock);
  const after = f.repo.get(f.id)!;
  assert.equal(after.followUps[0].startRound, 8);
  assert.deepEqual([...new Set(participantCalls(f.adapter.calls.slice(start)).map(c => JSON.parse(c.prompt).round))], [8, 9]);
  assert.equal(after.round, 9);
});

test('a conversation with no prior final review does not fabricate an archived review', async () => {
  const f = await fixture({ rounds: 2, contextChars: 500000 }, c => c.participant.id === 'reviewer' ? { error: 'AUTH' } : {});
  await finish(f.service, f.clock);
  const before = f.repo.get(f.id)!;
  assert.equal(before.status, 'partial'); assert.equal(before.final, null); assert.ok(before.reviewError);
  f.adapter.behavior = () => ({});
  await followup(f.service, f.id); await finish(f.service, f.clock);
  const after = f.repo.get(f.id)!;
  assert.equal(after.status, 'completed'); assert.ok(after.final); assert.equal(after.reviewError, null);
  assert.deepEqual(after.reviews, []);
});

test('rerun carries the original question and all user additions into a fresh conversation, not old model output', async () => {
  const f = await completedFixture();
  for (const text of ['first addition', 'second addition']) { await followup(f.service, f.id, text); await finish(f.service, f.clock); }
  const original = f.repo.get(f.id)!, start = f.adapter.calls.length;
  const { id } = await f.service.operation({ action: 'rerun', id: f.id }) as { id: string };
  assert.notEqual(id, f.id); await finish(f.service, f.clock);
  const rerun = f.repo.get(id)!, calls = f.adapter.calls.slice(start);
  assert.equal(rerun.question, original.question); assert.deepEqual(rerun.images, original.images);
  assert.deepEqual(rerun.followUps.map(t => t.text), original.followUps.map(t => t.text));
  assert.ok(rerun.followUps.every(t => t.startRound === 1 && t.budgetStart === 0 && !original.followUps.some(prior => prior.id === t.id)));
  assert.deepEqual(rerun.reviews, []); assert.equal(rerun.messages.length, 6); assert.equal(rerun.round, 2);
  for (const call of calls) {
    const prompt = JSON.parse(call.prompt);
    assert.equal(prompt.originalQuestion, original.question); assert.equal(prompt.latestUserMessage, 'second addition');
    assert.deepEqual(prompt.userFollowUps.map((t: { text: string }) => t.text), ['first addition', 'second addition']);
    assert.deepEqual(prompt.previousReviews, []);
  }
  assert.deepEqual(discussion(participantCalls(calls)[0]), []);
  assert.deepEqual(f.repo.get(f.id), original, 'rerun must not alter the source conversation');
});

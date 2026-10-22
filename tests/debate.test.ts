import test from 'node:test';
import assert from 'node:assert/strict';
import { defaults, restoreSession, settingsSchema, validateRun, schedulingWarnings, sessionSchema } from '../src/state.js';
import { exportSession, publish, sharedContext } from '../src/content.js';
import { RequestGate } from '../src/scheduler.js';
import { fixture, finish, flush, models, TestClock } from './helpers.js';

const discussion = (prompt: string) => JSON.parse(JSON.parse(prompt).publishedDiscussion) as { id: string; participant: string }[];
test('parallel proposals are independent; subsequent snapshots identical and attributed', async () => {
  const f = await fixture(); await finish(f.service, f.clock);
  const s = f.repo.get(f.id)!; assert.equal(s.status, 'completed'); assert.equal(s.messages.length, 9); assert.equal(s.final?.incomplete, false);
  for (let round = 0; round < 3; round++) {
    const calls = f.adapter.calls.slice(round * 3, round * 3 + 3);
    assert.equal(new Set(calls.map(c => JSON.parse(c.prompt).publishedDiscussion)).size, 1);
    assert.equal(discussion(calls[0].prompt).length, round * 3);
    calls.forEach(c => { const p = JSON.parse(c.prompt); assert.equal(p.participants.length, 3); assert.equal(p.participants[0].provider, 'alpha'); });
  }
  assert.equal(new Set(s.messages.map(m => m.id)).size, 9); assert.ok(s.messages[3].objections[0].claimId.startsWith('m')); assert.ok(s.requests.every(r => r.system && r.prompt && r.config.model)); sessionSchema.parse(s);
});
test('sequential turns see earlier turns, and rotating order changes starting participant', async () => {
  const f = await fixture({ mode: 'sequential', speakingOrder: 'rotating', rounds: 2, turnDelayMs: 25 }); await finish(f.service, f.clock);
  const calls = f.adapter.calls.filter(c => c.participant.id !== 'reviewer');
  assert.deepEqual(calls.map(c => discussion(c.prompt).length), [0, 1, 2, 3, 4, 5]);
  assert.deepEqual(calls.map(c => c.participant.id), ['p1', 'p2', 'p3', 'p2', 'p3', 'p1']);
  assert.ok(calls[1].start - calls[0].end! >= 25); assert.equal(f.adapter.maxActive, 1);
});
test('hybrid proposals independent then targeted fair bounded cycles', async () => {
  const f = await fixture({ mode: 'hybrid', rounds: 4, maxRepliesPerParticipant: 3, queueLimit: 1 }); await finish(f.service, f.clock);
  const calls = f.adapter.calls.filter(c => c.participant.id !== 'reviewer'); assert.equal(calls.length, 9);
  assert.deepEqual(calls.slice(0, 3).map(c => discussion(c.prompt).length), [0, 0, 0]);
  assert.deepEqual(calls.slice(3, 6).map(c => c.participant.id), ['p2', 'p3', 'p1']);
  for (const p of ['p1', 'p2', 'p3']) assert.equal(calls.filter(c => c.participant.id === p).length, 3);
  assert.ok(f.repo.get(f.id)!.messages.slice(3).every(m => m.replyTo.length));
});
test('participants and settings validate 2–20 distinct identities and unavailable models never substitute', () => {
  assert.throws(() => validateRun(defaults(models.slice(0, 1)), models), /at least two/);
  const duplicate = defaults(models); duplicate.participants[1].model = duplicate.participants[0].model; assert.throws(() => settingsSchema.parse(duplicate), /distinct/);
  const unavailable = defaults(models); unavailable.participants[0].model = 'not-configured'; assert.throws(() => validateRun(unavailable, models), /No substitution/);
  const many = Array.from({ length: 20 }, (_, i) => ({ ...models[0], model: `m${i}` })); const s = defaults(); s.participants = many.map((m, i) => ({ ...defaults([m]).participants[0], id: `p${i}` })); assert.equal(validateRun(s, many).participants.length, 20);
  s.participants.push({ ...s.participants[0], id: 'extra' }); assert.throws(() => settingsSchema.parse(s));
  assert.throws(() => settingsSchema.parse({ ...defaults(), concurrency: 0 })); assert.throws(() => settingsSchema.parse({ ...defaults(), reviewMs: 61000 })); assert.throws(() => settingsSchema.parse({ ...defaults(), costBudget: 5 }), /unavailable/);
  assert.ok(schedulingWarnings({ ...defaults(models), concurrency: 1 }).length);
});
test('global/provider concurrency and start spacing do not serialize responding requests', async () => {
  const f = await fixture({ rounds: 1, concurrency: 3, providerLimits: { alpha: 1 }, globalSpacingMs: 20, providerSpacingMs: { alpha: 70 } }, () => ({ delay: 100 })); await finish(f.service, f.clock);
  assert.ok(f.adapter.maxActive >= 2); assert.equal(f.adapter.maxByProvider.alpha, 1);
  const calls = f.adapter.calls; for (let i = 1; i < calls.length; i++) assert.ok(calls[i].start - calls[i - 1].start >= 20);
  const alpha = calls.filter(c => c.participant.provider === 'alpha'); for (let i = 1; i < alpha.length; i++) assert.ok(alpha[i].start - alpha[i - 1].start >= 70);
});
test('round timeout covers queued work and protects review reservation/overall deadline', async () => {
  const f = await fixture({ concurrency: 1, rounds: 3, roundMs: 200, requestMs: 1000, overallMs: 1000, reserveReviewMs: 300, reviewMs: 300 }, c => ({ delay: c.participant.id === 'reviewer' ? 20 : 500, partial: c.participant.id === 'reviewer' ? undefined : 'Partial initial claim' })); await finish(f.service, f.clock);
  const s = f.repo.get(f.id)!; assert.ok(f.adapter.calls.filter(c => c.participant.id !== 'reviewer').every(c => c.start < s.deadline - 300));
  assert.ok(s.endedAt! <= s.deadline); assert.equal(s.status, 'partial'); assert.ok(s.messages.every(m => m.incomplete)); assert.ok(s.tasks.some(t => t.status === 'timed out'));
});
test('appropriate transient retries honor retry-after and auth failures do not retry', async () => {
  const f = await fixture({ rounds: 1, retries: 2, backoffMs: 5, backoffMaxMs: 100 }, (c, i) => ({ error: i === 0 ? 'RATE_LIMIT' : c.participant.id === 'p2' ? 'AUTH' : undefined, retryAfterMs: 120 })); await finish(f.service, f.clock);
  const p1 = f.adapter.calls.filter(c => c.participant.id === 'p1'); assert.equal(p1.length, 2); assert.ok(p1[1].start - p1[0].end! >= 120); assert.equal(f.adapter.calls.filter(c => c.participant.id === 'p2').length, 1);
  assert.equal(f.repo.get(f.id)!.tasks.find(t => t.participantId === 'p2')?.status, 'failed');
});
for (const point of ['request', 'queue', 'cooldown', 'retry'] as const) test(`Stop during ${point} cancels and never invokes reviewer`, async () => {
  const f = await fixture({ rounds: 3, concurrency: point === 'queue' ? 1 : 4, globalSpacingMs: point === 'cooldown' ? 400 : 0, retries: 3, backoffMs: 200, backoffMaxMs: 300 }, (_c, i) => ({ delay: point === 'retry' ? 10 : 400, error: point === 'retry' && i === 0 ? 'RATE_LIMIT' : undefined }));
  await flush(); if (point === 'retry') { f.clock.advance(10); await flush(); }
  if (point === 'queue') assert.ok((await f.service.operation({ action: 'get', id: f.id }) as any).tasks.some((t: any) => t.status === 'queued'));
  await f.service.operation({ action: 'stop', id: f.id }); const before = f.adapter.calls.length; await finish(f.service, f.clock); f.clock.advance(5000); await flush();
  assert.equal(f.repo.get(f.id)!.status, 'stopped'); assert.equal(f.adapter.calls.length, before); assert.ok(!f.adapter.calls.some(c => c.participant.id === 'reviewer'));
});
test('late responses from an uncooperative provider cannot overwrite a stopped run', async () => {
  const f = await fixture({}, () => ({ delay: 800, ignoreAbort: true, partial: 'incomplete stream' })); await flush(); await f.service.operation({ action: 'stop', id: f.id }); await finish(f.service, f.clock);
  const before = f.repo.get(f.id)!; f.clock.advance(2000); await flush(); assert.deepEqual(f.repo.get(f.id), before); assert.equal(before.status, 'stopped'); assert.equal(before.final, null);
});
test('malformed structured responses preserve original text; partial responses retain incomplete labels in shared context', async () => {
  const f = await fixture({ rounds: 2 }, c => ({ malformed: c.participant.id === 'p2', incomplete: c.participant.id === 'p1' })); await finish(f.service, f.clock);
  const s = f.repo.get(f.id)!; const malformed = s.messages.find(m => m.participantId === 'p2')!; assert.equal(malformed.text, '{"text":'); assert.ok(malformed.parseWarning); assert.deepEqual(malformed.claims, []);
  assert.ok(f.adapter.calls.some(c => discussion(c.prompt).some((m: any) => m.incomplete))); assert.ok(s.messages.filter(m => m.participantId === 'p1').every(m => m.incomplete));
});
test('review failure preserves discussion, no fabricated verdict, explicit review can be retried', async () => {
  const f = await fixture({ rounds: 2, retries: 0 }, c => ({ error: c.participant.id === 'reviewer' ? 'AUTH' : undefined })); await finish(f.service, f.clock);
  let s = f.repo.get(f.id)!; assert.equal(s.status, 'partial'); assert.equal(s.final, null); assert.ok(s.reviewError); assert.equal(s.messages.length, 6);
  f.adapter.behavior = () => ({}); await f.service.operation({ action: 'review', id: f.id }); await finish(f.service, f.clock); s = f.repo.get(f.id)!; assert.ok(s.final); assert.equal(s.status, 'completed');
});
test('single-round separate answers cannot be labeled a complete multi-model exchange', async () => { const f = await fixture({ rounds: 1 }); await finish(f.service, f.clock); assert.equal(f.repo.get(f.id)!.status, 'partial'); });
test('budgets are conservatively admitted, usage unavailability labeled, no exact cost claim', async () => {
  const f = await fixture({ tokenBudget: 12000, rounds: 3 }, () => ({ noUsage: true })); await finish(f.service, f.clock); const s = f.repo.get(f.id)!; assert.ok(s.budgetEstimated); assert.ok(s.usageUnavailable); assert.ok(s.tasks.some(t => t.status === 'cancelled')); assert.ok(s.budgetUsed <= 12000);
});
test('settings/presets/history/exports round trip; unfinished sessions become interrupted', async () => {
  const f = await fixture({ rounds: 2 }); await finish(f.service, f.clock);
  const name = 'My Arabic debate'; const a = await f.service.operation({ action: 'preset-save', name, settings: { ...f.settings, language: 'ar' } }) as any;
  await f.service.operation({ action: 'preset-save', id: a.id, name: 'Renamed', settings: a.settings });
  const copy = await f.service.operation({ action: 'preset-save', name: 'Duplicated', settings: a.settings }) as any; assert.notEqual(copy.id, a.id);
  await f.service.operation({ action: 'preset-apply', id: a.id }); assert.equal(f.repo.getPreferences()!.settings.language, 'ar');
  await f.service.operation({ action: 'preset-delete', id: copy.id }); assert.ok(!f.repo.getPreferences()!.presets.some(p => p.id === copy.id));
  await f.service.operation({ action: 'rename', id: f.id, title: name }); const s = f.repo.get(f.id)!;
  const json = exportSession(s, 'json'); assert.deepEqual(JSON.parse(json.content), s); const md = exportSession(s, 'markdown'); assert.match(md.content, /Run configuration/); assert.match(md.content, /alpha\/model-1/); assert.ok(!json.content.includes('apiKey'));
  const unfinished = structuredClone(s); unfinished.status = 'running'; assert.equal(restoreSession(unfinished).status, 'interrupted');
  assert.equal(restoreSession(s).status, s.status); await f.service.operation({ action: 'delete', id: f.id }); assert.equal(f.repo.get(f.id), undefined);
});
test('model attribution/foreign revisions are validated, context compression preserves structured issues', () => {
  const s = defaults(models), p = s.participants[0], prior = publish(JSON.stringify({ text: 'original', claims: ['central'] }), p, [], { id: 'm1', round: 1, turn: 1, stage: 'proposal', timestamp: 0, incomplete: false, targets: [] });
  const m = publish(JSON.stringify({ text: 'objection', participantId: 'p1', claims: ['new'] }), s.participants[1], [prior], { id: 'm2', round: 2, turn: 2, stage: 'challenge', timestamp: 1, incomplete: false, targets: [] }); assert.equal(m.participantId, 'p2'); assert.ok(m.parseWarning);
  const foreign = publish(JSON.stringify({ text: 'response', revisions: [{ claimId: 'm1:c1', text: 'overwrite' }], objections: [{ claimId: 'invented', text: 'bad' }] }), s.participants[1], [prior], { id: 'm3', round: 2, turn: 3, stage: 'challenge', timestamp: 2, incomplete: false, targets: [] }); assert.deepEqual(foreign.revisions, []); assert.deepEqual(foreign.objections, []);
  prior.text = 'Long rationale '.repeat(1000); const context = sharedContext([prior], { ...s, contextChars: 2000 }); assert.equal(context.compressed, true); assert.match(context.text, /m1:c1/); assert.match(context.text, /central/);
});
test('agreement alone cannot trigger early completion', async () => { const f = await fixture({ earlyStop: true, rounds: 3 }, () => ({ text: JSON.stringify({ text: 'Everyone agrees', agreement: true }) })); await finish(f.service, f.clock); assert.equal(f.adapter.calls.filter(c => c.participant.id !== 'reviewer').length, 9); });
test('gate cancellation rejects while waiting without occupying capacity', async () => {
  const clock = new TestClock(), settings = { ...defaults(), globalSpacingMs: 100 }, gate = new RequestGate(settings, clock); const a = new AbortController(), b = new AbortController();
  const release = await gate.acquire('alpha', a.signal, clock.now() + 1000, () => {}); const waiting = gate.acquire('beta', b.signal, clock.now() + 1000, () => {}); b.abort(); await assert.rejects(waiting); release(); gate.dispose(); assert.equal(clock.timers.size, 0);
});

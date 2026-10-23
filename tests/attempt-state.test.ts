import test from 'node:test';
import assert from 'node:assert/strict';
import { fixture, finish, flush } from './helpers.js';
import { sessionSchema } from '../src/state.js';

test('failed reviewer attempt followed by successful retry clears active error but preserves failure history', async () => {
  let reviewer = 0;
  const f = await fixture({ rounds: 2, retries: 1, backoffMs: 1 }, call => call.participant.id === 'reviewer' && reviewer++ === 0 ? { error: 'SERVER' } : {});
  await finish(f.service, f.clock);
  const s = f.repo.get(f.id)!, task = s.tasks.at(-1)!;
  assert.equal(task.status, 'completed'); assert.equal(task.attempt, 2); assert.equal(task.error, undefined);
  assert.equal(s.reviewError, null); assert.equal(s.final?.incomplete, false);
  assert.deepEqual(task.attempts!.map(a => a.status), ['failed', 'completed']);
  assert.match(task.attempts![0].error!, /SERVER/); assert.equal(task.attempts![1].error, undefined);
  assert.notEqual(task.attempts![0].correlationId, task.attempts![1].correlationId);
  assert.equal(s.requests.filter(r => r.taskId === task.id).length, 2);
  sessionSchema.parse(s);
});

test('late text, preparation and diagnostics from an expired attempt cannot overwrite newer successful result', async () => {
  const f = await fixture({ rounds: 2, retries: 1, backoffMs: 1, requestMs: 100 });
  // Finish initial existing run, then inject a timeout/retry into the followup's first participant call.
  await finish(f.service, f.clock);
  const call = f.adapter.call.bind(f.adapter); let stale: Parameters<typeof call>[0] | undefined; let first = true;
  f.adapter.call = async input => {
    if (input.participant.id === 'p1' && first) {
      first = false; stale = input;
      await input.onPrepared?.({ provider: input.participant.provider, model: input.participant.model });
      return new Promise(() => {}); // Uncooperative iterator until engine timeout; no partial answer.
    }
    return call(input);
  };
  await f.service.operation({ action: 'followup', id: f.id, message: 'retry state check' });
  await finish(f.service, f.clock);
  const before = f.repo.get(f.id)!;
  assert.equal(before.tasks.find(t => t.participantId === 'p1' && t.round === before.followUps.at(-1)!.startRound)!.attempt, 2);
  assert.equal(before.tasks.find(t => t.participantId === 'p1' && t.round === before.followUps.at(-1)!.startRound)!.status, 'completed');
  // A separately prepared new task still must not be touched by an older attempt's callbacks.
  stale!.onText('OLD EVENT MUST NOT WIN');
  await assert.rejects(stale!.onPrepared!({ provider: 'alpha', model: 'model-1' }));
  await flush(); assert.deepEqual(f.repo.get(f.id), before);
});

test('old failed attempt callbacks arriving while retry is responding are ignored', async () => {
  const f = await fixture({ rounds: 2, retries: 1, backoffMs: 1 }); await finish(f.service, f.clock);
  const call = f.adapter.call.bind(f.adapter); let old: Parameters<typeof call>[0] | undefined; let first = true;
  f.adapter.call = async input => {
    if (input.participant.id === 'p1' && first) { first = false; old = input; throw Object.assign(new Error('Transient server failure'), { code: 'SERVER' }); }
    if (input.participant.id === 'p1' && old) { old.onText('stale partial'); await assert.rejects(old.onPrepared!({ provider: 'alpha', model: 'model-1' })); }
    return call(input);
  };
  await f.service.operation({ action: 'followup', id: f.id, message: 'check retry' }); await finish(f.service, f.clock);
  const task = f.repo.get(f.id)!.tasks.find(t => t.participantId === 'p1' && t.round === f.repo.get(f.id)!.followUps.at(-1)!.startRound)!;
  assert.equal(task.attempt, 2); assert.equal(task.status, 'completed'); assert.equal(task.error, undefined);
  assert.equal(task.partial, undefined); assert.ok(!f.repo.get(f.id)!.messages.some(m => m.text.includes('stale partial')));
});

test('legacy completed tasks preserve unattributable stale errors separately and reclassify truncation', () => {
  const base = { id: 't-legacy', participantId: 'reviewer', round: 3, attempt: 2, queuedAt: 1 };
  const migrated = sessionSchema.parse({ schemaVersion: 1, id: 'legacy', title: 'Legacy', question: 'Q', images: [], createdAt: 1, updatedAt: 1, status: 'completed', settings: fixtureSettings(), messages: [], tasks: [
    { ...base, status: 'completed', error: 'Provider returned no public response text.' },
    { ...base, id: 't-truncated', status: 'completed', error: 'Response incomplete: provider output/token limit.' },
  ], issues: [], followUps: [], reviews: [], requests: [], usage: { inputTokens: 0, outputTokens: 0 }, usageUnavailable: false, budgetUsed: 0, budgetEstimated: false, round: 3, stage: 'Final review', stageDeadline: 2, deadline: 3, startedAt: 1, final: null, reviewError: null, stopReason: null, compression: [] });
  assert.equal(migrated.tasks[0].status, 'completed'); assert.equal(migrated.tasks[0].error, undefined);
  assert.equal(migrated.tasks[0].legacyError, 'Provider returned no public response text.');
  assert.equal(migrated.tasks[1].status, 'partial'); assert.equal(migrated.tasks[1].legacyError, undefined);
});
function fixtureSettings() {
  return { participants: [{ provider: 'p', model: 'm', id: 'a', enabled: true, role: '', instructions: '', options: {} }, { provider: 'p', model: 'm2', id: 'b', enabled: true, role: '', instructions: '', options: {} }], mode: 'parallel', speakingOrder: 'configured', concurrency: 1, providerLimits: {}, maxRepliesPerParticipant: 1, maxReplies: 2, queueLimit: 2, rounds: 1, roundMs: 1000, requestMs: 1000, overallMs: 5000, reserveReviewMs: 1000, reviewMs: 1000, roundCooldownMs: 0, globalSpacingMs: 0, providerSpacingMs: {}, turnDelayMs: 0, retries: 0, backoffMs: 0, backoffMaxMs: 0, directReplies: true, addressCount: 1, quotedContext: true, language: 'en' as const, responseChars: 1000, contextChars: 2000, earlyStop: false, tokenBudget: null, costBudget: null, reviewer: null, reviewInstructions: '' };
}
test('partial output and deterministic empty responses are not retried into fake success', async () => {
  for (const behavior of [{ error: 'SERVER', partial: 'A partial public answer' }, { error: 'EMPTY_RESPONSE' }]) {
    const f = await fixture({ rounds: 1, retries: 2 }, c => c.participant.id === 'p1' ? behavior : {});
    await finish(f.service, f.clock);
    assert.equal(f.adapter.calls.filter(c => c.participant.id === 'p1').length, 1);
    const s = f.repo.get(f.id)!;
    assert.notEqual(s.tasks.find(t => t.participantId === 'p1')!.status, 'completed');
    assert.ok(s.messages.filter(m => m.participantId === 'p1').every(m => m.incomplete));
  }
});

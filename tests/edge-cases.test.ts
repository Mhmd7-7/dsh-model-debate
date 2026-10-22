import test from 'node:test';
import assert from 'node:assert/strict';
import { fixture, finish, flush, models, MemoryRepository, MockAdapter, TestClock } from './helpers.js';
import { DebateService } from '../src/engine.js';
import { hasReviewSections, updateIssues, publish } from '../src/content.js';
import { defaults } from '../src/state.js';

test('parallel prompts freeze failure context: same-stage failures cannot leak by arrival order', async () => {
  const f = await fixture({ rounds: 1, queueLimit: 1, concurrency: 1 }, (_c, i) => ({ error: i === 0 ? 'AUTH' : undefined })); await finish(f.service, f.clock);
  const calls = f.adapter.calls.filter(c => c.participant.id !== 'reviewer'); assert.equal(calls.length, 3);
  for (const c of calls) { assert.deepEqual(JSON.parse(c.prompt).failures, []); assert.equal(JSON.parse(c.prompt).publishedDiscussion, '[]'); }
});
test('Stop during round cooldown preserves messages and cancels future rounds/review', async () => {
  const f = await fixture({ roundCooldownMs: 500 }); await flush(); f.clock.advance(10); await flush();
  assert.equal(f.adapter.calls.length, 3); assert.equal(f.repo.get(f.id)!.messages.length, 3);
  await f.service.operation({ action: 'stop', id: f.id }); await finish(f.service, f.clock); assert.equal(f.adapter.calls.length, 3); assert.equal(f.repo.get(f.id)!.status, 'stopped');
});
test('late result after request timeout/final completion cannot change stored session', async () => {
  const f = await fixture({ rounds: 2, roundMs: 200, requestMs: 100 }, c => c.participant.id === 'p1' ? { delay: 2000, ignoreAbort: true, partial: 'Partial public argument' } : {});
  await finish(f.service, f.clock); const before = f.repo.get(f.id)!; assert.ok(['completed', 'partial'].includes(before.status)); assert.ok(before.messages.filter(m => m.participantId === 'p1').every(m => m.incomplete));
  f.clock.advance(3000); await flush(); assert.deepEqual(f.repo.get(f.id), before);
});
test('final reviewer timeout records partial output and never a completed verdict', async () => {
  const f = await fixture({ rounds: 2, reviewMs: 200, reserveReviewMs: 200 }, c => c.participant.id === 'reviewer' ? { delay: 1000, partial: 'Unfinished evaluation' } : {}); await finish(f.service, f.clock);
  const s = f.repo.get(f.id)!; assert.equal(s.status, 'partial'); assert.equal(s.final?.incomplete, true); assert.equal(s.final?.text, 'Unfinished evaluation'); assert.ok(s.reviewError); assert.equal(s.tasks.at(-1)?.status, 'timed out');
});
test('Stop preserves received partial text as a durable incomplete message', async () => {
  const f = await fixture({}, () => ({ delay: 500, partial: 'Visible partial public answer' })); await flush(); await f.service.operation({ action: 'stop', id: f.id }); await finish(f.service, f.clock);
  const s = f.repo.get(f.id)!; assert.equal(s.messages.length, 3); assert.ok(s.messages.every(m => m.incomplete && m.text === 'Visible partial public answer')); assert.equal(s.status, 'stopped'); assert.equal(s.final, null);
});
test('disabled targeted routing does not manufacture reply IDs; untrusted output cannot claim a new identity', async () => {
  const f = await fixture({ rounds: 2, directReplies: false }, c => ({ text: JSON.stringify({ text: `${c.participant.id} rationale`, replyTo: ['fake-message'], claims: ['safe claim'] }) })); await finish(f.service, f.clock);
  assert.ok(f.repo.get(f.id)!.messages.every(m => m.replyTo.length === 0)); assert.equal(f.repo.get(f.id)!.status, 'partial');
});
test('malformed output original text and overlength response are never silently clipped', async () => {
  const original = 'Original published output '.repeat(100);
  const f = await fixture({ rounds: 1, responseChars: 200 }, c => c.participant.id === 'reviewer' ? {} : { text: original }); await finish(f.service, f.clock);
  const s = f.repo.get(f.id)!; assert.ok(s.messages.every(m => m.text === original && m.incomplete));
});
test('correction must follow the specific objection before evidence acknowledgment can resolve it', async () => {
  const f = await fixture({ rounds: 1 }); await finish(f.service, f.clock); const s = f.repo.get(f.id)!;
  s.messages = []; s.issues = []; const p = defaults(models).participants;
  const meta = (id: string, turn: number) => ({ id, round: turn, turn, stage: 'test', timestamp: turn, incomplete: false, targets: [] });
  const first = publish(JSON.stringify({ text: 'claim', claims: ['central claim'] }), p[0], [], meta('m1', 1)); s.messages.push(first);
  const pre = publish(JSON.stringify({ text: 'earlier defense', revisions: [{ claimId: 'm1:c1', text: 'defense' }], evidence: ['check'] }), p[0], s.messages, meta('m2', 2)); s.messages.push(pre);
  const objection = publish(JSON.stringify({ text: 'objection', objections: [{ claimId: 'm1:c1', text: 'not established', evidence: 'counterexample', verification: 'calculate' }] }), p[1], s.messages, meta('m3', 3)); s.messages.push(objection); updateIssues(s, objection);
  const ack = publish(JSON.stringify({ text: 'agree', resolved: ['m1:c1'], evidence: ['check'] }), p[1], s.messages, meta('m4', 4)); s.messages.push(ack); updateIssues(s, ack); assert.equal(s.issues[0].resolved, false);
  const post = publish(JSON.stringify({ text: 'corrected', revisions: [{ claimId: 'm1:c1', text: 'correction' }], evidence: ['arithmetic'] }), p[0], s.messages, meta('m5', 5)); s.messages.push(post); updateIssues(s, post);
  const ack2 = publish(JSON.stringify({ text: 'verified under assumptions', resolved: ['m1:c1'], evidence: ['recomputed'] }), p[1], s.messages, meta('m6', 6)); s.messages.push(ack2); updateIssues(s, ack2); assert.equal(s.issues[0].resolved, true); assert.match(s.issues[0].resolution!, /not independently verified/);
});
test('review missing required sections is preserved but cannot become a completed verdict', async () => {
  assert.equal(hasReviewSections('### 1. Answer\n2. Reasons\n3. Corrections\n4. Unverified\n5. Participation'), true);
  assert.equal(hasReviewSections('The answer is correct.'), false);
  const f = await fixture({ rounds: 2 }, c => c.participant.id === 'reviewer' ? { text: 'Unsupported verdict without required review sections' } : {}); await finish(f.service, f.clock); const s = f.repo.get(f.id)!;
  assert.equal(s.status, 'partial'); assert.equal(s.final?.incomplete, true); assert.match(s.reviewError!, /five required/);
});
test('host provider restrictions tighten future-run settings and persist effective controls', async () => {
  const clock = new TestClock(), adapter = new MockAdapter(clock), repo = new MemoryRepository();
  const service = new DebateService(adapter, repo, { clock, providerLimits: { alpha: 1 }, providerSpacingMs: { alpha: 60 } }); await service.initialize();
  const settings = { ...defaults(models.slice(0, 2)), rounds: 1, concurrency: 4, providerLimits: { alpha: 4 }, providerSpacingMs: { alpha: 0 } };
  const { id } = await service.operation({ action: 'start', question: 'Policy test', settings }) as { id: string }; await finish(service, clock);
  assert.equal(repo.get(id)!.settings.providerLimits.alpha, 1); assert.equal(repo.get(id)!.settings.providerSpacingMs.alpha, 60); assert.equal(adapter.maxByProvider.alpha, 1); assert.ok(adapter.calls[1].start - adapter.calls[0].start >= 60);
});

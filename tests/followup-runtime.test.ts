import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, realpath, rm } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';
import { DebateService } from '../src/engine.js';
import { Repository } from '../src/persistence.js';
import { sessionSchema, preferencesSchema } from '../src/state.js';
import { fixture, finish } from './helpers.js';

// Real durable backend, deterministic inference. Not a real-provider or browser test.
test('actual DSH storage retains follow-up turns, all reviews, request context and interruptions across reopen', { skip: !process.env.DSH_RUNTIME_ROOT }, async () => {
  const root = process.env.DSH_RUNTIME_ROOT!;
  const load = (name: string) => import(pathToFileURL(join(root, 'node_modules', '@deepseek-ai', name, 'lib', 'index.js')).href);
  const [{ Context }, { BackendRegistry }, { DomainFacility }, { JsonStorageBackend }] = await Promise.all([load('cordis'), load('dsh-storage'), load('dsh-storage-domain'), load('dsh-storage-json')]);
  const directory = await mkdtemp(join(tmpdir(), 'dsh-debate-followup-test-')), canonical = await realpath(directory);
  assert.ok(basename(canonical).startsWith('dsh-debate-followup-test-'));
  const backend = new JsonStorageBackend(canonical), registry = new BackendRegistry(); registry.register('json', backend);
  const ctx = new Context(); ctx.provide('storage', { backend: registry }); const facility = new DomainFacility(ctx, { backend: 'json' });
  const spec = { name: 'model_debate', version: 1, layout: 'single', tables: { sessions: { valueSchema: sessionSchema }, preferences: { valueSchema: preferencesSchema } } };
  try {
    const f = await fixture({ rounds: 2, contextChars: 500000 }); await finish(f.service, f.clock);
    const first = await facility.open(spec), repository = new Repository(first);
    await repository.save(f.repo.get(f.id)!); await repository.savePreferences(f.repo.getPreferences()!);
    // Real file I/O must not race a virtual clock that jumps straight to request deadlines.
    const calls: { prompt: string }[] = [];
    const adapter = { catalog: () => f.adapter.catalog(), retryPolicy: () => f.adapter.retryPolicy('alpha'), async call(input: Parameters<typeof f.adapter.call>[0]) {
      calls.push({ prompt: input.prompt }); await input.onPrepared?.({ provider: input.participant.provider, model: input.participant.model, maxTokens: input.maxTokens });
      const prompt = JSON.parse(input.prompt), prior = JSON.parse(prompt.publishedDiscussion);
      const text = input.participant.id === 'reviewer' ? '1. Answer\nUpdated answer\n2. Reasons\nEvidence\n3. Corrections\nUser update\n4. Disagreement\nSee history\n5. Participation\nSee tasks' : JSON.stringify({ text: 'Response to ' + prompt.latestUserMessage, claims: ['Updated claim'], replyTo: prior.length ? [prior[0].id] : [] });
      input.onText(text); return { text, incomplete: false, usage: { inputTokens: 20, outputTokens: 30, totalTokens: 50 } };
    } };
    const service = new DebateService(adapter, repository); await service.initialize();
    await service.operation({ action: 'followup', id: f.id, message: 'A newly supplied constraint.' }); await service.waitForIdle();
    const completed = repository.get(f.id)!;
    assert.equal(completed.followUps.length, 1); assert.equal(completed.reviews.length, 1); assert.ok(completed.final);
    await repository.flush(); await first.close();
    const second = await facility.open(spec), reopened = new Repository(second);
    assert.deepEqual(reopened.get(f.id), completed);
    const restored = new DebateService(adapter, reopened); await restored.initialize();
    const start = calls.length;
    await restored.operation({ action: 'followup', id: f.id, message: 'Another question after reopening.' }); await restored.waitForIdle();
    const after = reopened.get(f.id)!; assert.equal(after.followUps.length, 2); assert.equal(after.reviews.length, 2);
    for (const call of calls.slice(start)) {
      const prompt = JSON.parse(call.prompt); assert.deepEqual(prompt.userFollowUps.map((turn: { text: string }) => turn.text), after.followUps.map(turn => turn.text));
      assert.deepEqual(prompt.previousReviews, after.reviews);
    }
    const markdown = await restored.operation({ action: 'export', id: f.id, format: 'markdown' }) as { content: string };
    for (const turn of after.followUps) assert.ok(markdown.content.includes(turn.text));
    for (const review of after.reviews) assert.ok(markdown.content.includes(review.text));
    const json = await restored.operation({ action: 'export', id: f.id, format: 'json' }) as { content: string }; assert.deepEqual(JSON.parse(json.content), after);
    await reopened.flush(); await second.close();
    const third = await facility.open(spec), interrupted = new Repository(third);
    const pending = interrupted.get(f.id)!; pending.status = 'running'; pending.final = null;
    pending.followUps.push({ id: 'interrupted-user', text: 'A committed message interrupted by restart.', timestamp: f.clock.now(), startRound: pending.round + 1, budgetStart: pending.budgetUsed });
    await interrupted.save(pending); await interrupted.flush(); await third.close();
    const fourth = await facility.open(spec), recovered = new Repository(fourth); await recovered.recover();
    assert.equal(recovered.get(f.id)!.status, 'interrupted'); assert.equal(recovered.get(f.id)!.followUps.at(-1)!.text, pending.followUps.at(-1)!.text);
    assert.deepEqual(recovered.get(f.id)!.reviews, pending.reviews); assert.deepEqual(recovered.get(f.id)!.requests, pending.requests);
    await fourth.close();
  } finally {
    await facility.closeAll(); await backend.close();
    assert.equal(resolve(directory), canonical); await rm(canonical, { recursive: true, force: true });
  }
});

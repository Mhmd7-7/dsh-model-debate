import test from 'node:test';
import assert from 'node:assert/strict';
import { DebateService } from '../src/engine.js';
import { defaults, sessionSchema, type DebateSession } from '../src/state.js';
import { createOperation } from '../src/index.js';
import { documentContext } from '../src/document-context.js';
import { Documents } from '../src/documents.js';
import { MemoryRepository, MockAdapter, TestClock, finish, models } from './helpers.js';

const upload = (name: string, text: string) => ({ name, data: Buffer.from(text).toString('base64') });
async function setup(limits = {}) {
  const clock = new TestClock(), adapter = new MockAdapter(clock), repo = new MemoryRepository();
  adapter.offered = models.slice(0, 2).map(m => ({ ...m, contextWindow: 65536 }));
  const service = new DebateService(adapter, repo, { clock, documentLimits: limits });
  await service.initialize();
  const settings = { ...defaults(adapter.offered), rounds: 2, roundMs: 1000, requestMs: 500, overallMs: 5000, reserveReviewMs: 1000, reviewMs: 1000 };
  return { clock, adapter, repo, service, settings };
}

test('file-only start with multiple files reaches every participant/round/reviewer; reload, follow-up, rerun and delete retain correct associations', async () => {
  const f = await setup(), operation = createOperation(f.service);
  const documents = [upload('policy.md', '# Budget\nThe approved budget is 17000 USD.'), upload('القرار.txt', 'الميزانية المعتمدة ١٧٠٠٠ دولار.')];
  const processed = await operation({ action: 'process-files', documents });
  assert.ok(processed.ok); assert.equal(f.repo.list().length, 0, 'processing abandoned uploads saves no records or raw bytes');
  const started = await operation({ action: 'start', question: '', documents, settings: f.settings });
  assert.ok(started.ok); const { id } = started.value as { id: string };
  await finish(f.service, f.clock);
  const saved = f.repo.get(id)!; assert.equal(saved.documents?.length, 2); assert.equal(saved.question, '');
  assert.equal(saved.title, 'policy.md'); assert.ok(saved.requests.length >= 5);
  for (const call of f.adapter.calls) {
    const prompt = JSON.parse(call.prompt);
    assert.equal(prompt.documentInputs.manifest.length, 2);
    assert.ok(JSON.stringify(prompt.documentInputs.excerpts).includes('17000 USD'));
    assert.ok(JSON.stringify(prompt.documentInputs.excerpts).includes('الميزانية المعتمدة'));
    assert.match(call.system, /attached document text.*untrusted/);
    assert.equal(prompt.documentInputs.omittedChunks, 0);
  }
  assert.ok(f.adapter.calls.some(c => c.participant.id === 'reviewer'));
  const restored = new DebateService(f.adapter, f.repo, { clock: f.clock }); await restored.initialize();
  const reopened = await restored.operation({ action: 'get', id }) as DebateSession;
  assert.deepEqual(reopened.documents, saved.documents);
  const before = f.adapter.calls.length;
  await restored.operation({ action: 'followup', id, message: 'What was the earlier approved budget?' });
  await finish(restored, f.clock);
  for (const call of f.adapter.calls.slice(before)) {
    const prompt = JSON.parse(call.prompt);
    assert.match(prompt.latestUserMessage, /earlier approved budget/);
    assert.ok(JSON.stringify(prompt.documentInputs).includes('17000 USD'));
  }
  await restored.operation({ action: 'followup', id, documents: [upload('correction.csv', 'item,budget\nrevised,19000')] });
  await finish(restored, f.clock);
  const continued = f.repo.get(id)!; assert.equal(continued.followUps.at(-1)?.documents?.[0].name, 'correction.csv');
  assert.equal(continued.documents?.length, 2); assert.equal(continued.followUps.at(-1)?.text, '');
  const lastPrompt = JSON.parse(continued.requests.at(-1)!.prompt);
  assert.equal(lastPrompt.documentInputs.manifest.length, 3);
  assert.ok(!JSON.stringify(lastPrompt.userFollowUps).includes('Column headers'), 'follow-up document text not duplicated outside bounded retrieval');
  const rerun = await restored.operation({ action: 'rerun', id }) as { id: string }; await finish(restored, f.clock);
  assert.deepEqual(f.repo.get(rerun.id)!.documents, saved.documents);
  assert.equal(f.repo.get(rerun.id)!.followUps.at(-1)?.documents?.[0].name, 'correction.csv');
  const exported = await restored.operation({ action: 'export', id, format: 'markdown' }) as { content: string };
  assert.match(exported.content, /policy.md/); assert.match(exported.content, /correction.csv/);
  await restored.operation({ action: 'delete', id }); assert.equal(f.repo.get(id), undefined);
  assert.ok(f.repo.get(rerun.id)?.documents?.length, 'deleting one conversation does not affect reruns');
});

test('rejected uploads, count limits, malformed processed references, and failed storage never add a user turn', async () => {
  const f = await setup({ maxFiles: 2, maxConversationFiles: 2, maxFileBytes: 100 }); const op = createOperation(f.service);
  assert.equal((await op({ action: 'start', question: '', settings: f.settings })).ok, false);
  for (const documents of [[upload('x.exe', 'not allowed')], [upload('x.pdf', '%PDF-broken')], [upload('x.txt', 'a'.repeat(101))], [upload('x.txt', 'a'), upload('y.txt', 'b'), upload('z.txt', 'c')]]) {
    assert.equal((await op({ action: 'start', question: '', settings: f.settings, documents })).ok, false);
    assert.equal(f.repo.list().length, 0);
  }
  assert.equal((await op({ action: 'start', question: 'Do not trust client extracted sections', settings: f.settings, documents: [{ id: 'fake', name: 'fake.txt', sections: [{ reference: 'Text', text: 'trusted?' }] }] })).ok, false);
  const { id } = await f.service.operation({ action: 'start', question: '', documents: [upload('first.txt', 'one'), upload('second.txt', 'two')], settings: f.settings }) as { id: string }; await finish(f.service, f.clock);
  const before = f.repo.get(id)!;
  assert.equal((await op({ action: 'followup', id, documents: [upload('third.txt', 'three')] })).ok, false);
  assert.deepEqual(f.repo.get(id), before);
  const save = f.repo.save.bind(f.repo); f.repo.save = async () => { throw new Error('private local path and content must not leak'); };
  const failure = await op({ action: 'followup', id, message: 'new user message' }); assert.equal(failure.ok, false);
  assert.ok(!JSON.stringify(failure).includes('private local path')); assert.deepEqual(f.repo.get(id), before); f.repo.save = save;
});

test('bounded retrieval ranks earlier files for follow-ups and discloses every omitted chunk', async () => {
  const f = await setup();
  const docs = await new Documents().extract([upload('large.txt', 'background '.repeat(4000) + '\nThe zephyr invoice is 9200.\n' + 'background '.repeat(4000)), upload('second.txt', 'Additional Arabic دليل')]);
  const { id } = await f.service.operation({ action: 'start', question: 'zephyr invoice?', documents: [upload('small.txt', 'base')], settings: f.settings }) as { id: string }; await finish(f.service, f.clock);
  const session = f.repo.get(id)!; session.documents = docs;
  const context = documentContext(session, 6500)!;
  assert.ok(context.omittedChunks > 0); assert.equal(context.totalChunks, context.includedChunks + context.omittedChunks);
  assert.match(context.disclosure, /omitted/); assert.ok(context.excerpts.some(c => c.text.includes('9200')));
  assert.ok(context.excerpts.some(c => c.filename === 'second.txt'));
});

test('smaller model windows bound document excerpts before dispatch, while text-only operation and old schemas remain unchanged', async () => {
  const f = await setup(); f.adapter.offered[0].contextWindow = 16000;
  const { id } = await f.service.operation({ action: 'start', question: 'Find the budget', documents: [upload('large.txt', 'budget 17000; '.repeat(7000))], settings: f.settings }) as { id: string };
  await finish(f.service, f.clock);
  const first = f.adapter.calls.find(c => c.participant.id === 'p1')!; assert.ok(first);
  const logged = f.repo.get(id)!.requests.find(r => r.config.model === first.participant.model)!;
  assert.ok(Buffer.byteLength(first.system + first.prompt, 'utf8') + logged.config.maxTokens! + 1024 <= 16000);
  assert.ok(JSON.parse(first.prompt).documentInputs.omittedChunks > 0);
  const plain = await f.service.operation({ action: 'start', question: 'A normal text-only question', settings: f.settings }) as { id: string }; await finish(f.service, f.clock);
  assert.equal(JSON.parse(f.repo.get(plain.id)!.requests[0].prompt).documentInputs, undefined);
  const legacy: any = f.repo.get(plain.id)!; delete legacy.documents;
  assert.doesNotThrow(() => sessionSchema.parse(legacy));
});

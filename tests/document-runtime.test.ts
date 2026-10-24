import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, realpath, rm } from 'node:fs/promises';
import { basename, dirname, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';
import type { DebateSession, Settings, Snapshot } from '../src/state.js';
import type { DocumentAttachment } from '../src/document-state.js';
import { docx, paragraph, pdf, word } from './document-fixtures.js';

const english = 'The approved English project budget is 17000 USD.';
const arabic = 'الميزانية العربية المعتمدة ١٧٠٠٠ دولار.';
const upload = (name: string, data: Buffer, mediaType?: string) => ({ name, data: data.toString('base64'), ...(mediaType ? { mediaType } : {}) });
type Result<T = unknown> = { ok: true; value: T } | { ok: false; error: string };
interface Call { model: string; system: string; prompt: Record<string, any>; }

// Preserve the fixture's xref offsets and stream length while replacing its text
// with a genuine inline grayscale raster. This page contains no text operators.
function scannedPdf(): Buffer {
  return Buffer.from(pdf(['x'.repeat(100)]).toString('ascii').replace(/stream\n([^]*?)\nendstream/, (_match, content: string) => {
    const raster = 'q 100 0 0 100 50 600 cm BI /W 1 /H 1 /BPC 8 /CS /G ID X EI Q';
    assert.ok(raster.length <= content.length);
    return `stream\n${raster.padEnd(content.length, ' ')}\nendstream`;
  }));
}

// Opt-in installed-host integration, not a provider or authenticated HTTP test.
// Only inference and the tool registry are doubles. The BUILT plugin owns actual
// Cordis effects, actual Connection routing, and actual durable DSH JSON storage.
// Do not introduce a virtual clock: disk writes must not race jumped deadlines.
test('built document plugin runs through installed Cordis, Connection and durable DSH storage', { skip: !process.env.DSH_RUNTIME_ROOT, timeout: 90000 }, async t => {
  const root = process.env.DSH_RUNTIME_ROOT!;
  const load = (name: string) => import(pathToFileURL(join(root, 'node_modules', '@deepseek-ai', name, 'lib', 'index.js')).href);
  const [{ Context }, { BackendRegistry }, { DomainFacility }, { JsonStorageBackend }, { HostConnectionService }, built] = await Promise.all([
    load('cordis'), load('dsh-storage'), load('dsh-storage-domain'), load('dsh-storage-json'), load('dsh-client-connection'),
    // resolve from the project cwd, not emitted node_modules/.cache test output.
    import(pathToFileURL(resolve('dist/index.js')).href),
  ]);
  assert.equal(typeof built.apply, 'function', 'build dist/index.js before this opt-in integration test');
  const prefix = 'dsh-debate-document-runtime-', directory = await mkdtemp(join(tmpdir(), prefix)), canonical = await realpath(directory);
  assert.ok(basename(canonical).startsWith(prefix));
  const canonicalTemp = await realpath(tmpdir());
  assert.equal(dirname(canonical), canonicalTemp);
  const calls: Call[] = [];
  const llm = {
    listProviders: () => [{ id: 'deterministic', name: 'Deterministic test provider' }],
    listConfigurableProviders: () => [],
    listModels: async () => ['solver', 'critic', 'reviewer'].map(id => ({ provider: 'deterministic', id, name: id, inputModalities: ['text'] })),
    resolveModelInfo: async () => ({ inputModalities: ['text'], context: { contextWindow: 128000 } }),
    providerRetryPolicy: () => ({ maxRetries: 0, retryableCodes: [] }),
    async prepareCall(config: { provider: string; model: string; maxTokens?: number }) {
      return { config, retryPolicy: { maxRetries: 0 }, inputModalities: ['text'], async *stream(options: any) {
        assert.equal(options.signal.aborted, false);
        assert.deepEqual(options.tools, []);
        assert.ok(options.messages.every((message: any) => message.content.every((block: any) => block.type === 'text')), 'documents use extracted text, never vision/provider attachments');
        const prompt = JSON.parse(options.messages[0].content[0].text);
        calls.push({ model: config.model, system: options.system, prompt });
        const published = JSON.parse(prompt.publishedDiscussion) as { id: string }[];
        const answer = config.model === 'reviewer'
          ? '1. Best supported answer\nThe documents support a 17000 USD budget.\n2. Reasons\nEnglish PDF and Arabic DOCX excerpts agree.\n3. Corrections\nLater uploads remain associated with their user turn.\n4. Disagreements\nNo verified disagreement.\n5. Participation\nBoth participants examined the supplied document excerpts.'
          : JSON.stringify({ text: 'The supplied excerpts support the project budget.', claims: ['The approved budget is 17000 USD.'], replyTo: published.length ? [published[0].id] : [], objections: [], revisions: [], evidence: ['English budget.pdf, Page 1; القرار.docx, Paragraph 1'], resolved: [], unresolved: [], agreement: false });
        yield { type: 'block-start', index: 0, blockType: 'text' };
        yield { type: 'text-delta', index: 0, text: answer };
        yield { type: 'block-end', index: 0, block: { type: 'text', text: answer } };
        yield { type: 'usage', usage: { inputTokens: 20, outputTokens: 30, totalTokens: 50 } };
        yield { type: 'finish', reason: { kind: 'stop' } };
      } };
    },
  };
  async function mount() {
    const ctx = new Context(), backend = new JsonStorageBackend(canonical), registry = new BackendRegistry();
    registry.register('json', backend); ctx.provide('storage', { backend: registry });
    const facility = new DomainFacility(ctx, { backend: 'json' }); ctx.provide('storageDomain', facility);
    ctx.provide('llm', llm); ctx.provide('settings', { describe: () => [] });
    const connection = new HostConnectionService(ctx, [], {}), handler = connection.createSharedFetchHandler('/api');
    const tools = new Map<string, any>();
    ctx.provide('tools', { register(definition: any) { tools.set(definition.name, definition); return () => { tools.delete(definition.name); }; } });
    let fiber: any;
    const request = (input: unknown) => new Request('http://localhost/api/model-debate', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(input) });
    const dispatch = (input: unknown) => handler.fetch(request(input), connection.browserPeer);
    async function operation<T = unknown>(input: unknown): Promise<T> {
      const response = await dispatch(input), result = await response.json() as Result<T>;
      assert.equal(response.status, 200, `route rejected ${JSON.stringify(input && typeof input === 'object' ? { action: (input as any).action } : input)}: ${JSON.stringify(result)}`);
      if (!result.ok) assert.fail(result.error);
      return result.value;
    }
    async function close() {
      try { await fiber?.dispose(); }
      finally { try { await facility.closeAll(); } finally { try { await backend.close(); } finally { await connection.browserPeer.dispose(); } } }
    }
    try {
      fiber = ctx.plugin(built, { documentMaxFileBytes: 65536, documentMaxTotalBytes: 131072 }); await fiber.await();
      assert.ok(ctx.get('modelDebate'), 'built apply must mount its actual service'); assert.ok(tools.has('model_debate'));
      return { ctx, operation, dispatch, close, tools, idle: () => ctx.get('modelDebate').waitForIdle() as Promise<void> };
    } catch (error) { await close(); throw error; }
  }
  let host: Awaited<ReturnType<typeof mount>> | undefined;
  const documents = [upload('English budget.pdf', pdf([english, 'Second page contains independently checkable evidence.']), 'application/pdf'), upload('القرار.docx', docx(word(paragraph(arabic))), 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')];
  function assertDocumentCalls(batch: Call[], names = documents.map(doc => doc.name), extra?: string) {
    assert.ok(batch.length >= 5, 'two rounds from both participants plus final reviewer');
    assert.deepEqual([...new Set(batch.map(call => call.model))].sort(), ['critic', 'reviewer', 'solver']);
    for (const call of batch) {
      const inputs = call.prompt.documentInputs;
      assert.deepEqual(inputs.manifest.map((doc: any) => doc.name), names);
      assert.equal(inputs.omittedChunks, 0);
      assert.ok(inputs.excerpts.some((excerpt: any) => excerpt.filename === documents[0].name && excerpt.reference === 'Page 1' && excerpt.text.includes(english)));
      assert.ok(inputs.excerpts.some((excerpt: any) => excerpt.filename === documents[1].name && excerpt.reference === 'Paragraph 1' && excerpt.text.includes(arabic)));
      if (extra) assert.ok(JSON.stringify(inputs.excerpts).includes(extra));
      assert.match(call.system, /attached document text.*untrusted/i);
      for (const doc of documents) assert.ok(!JSON.stringify(call).includes(doc.data), 'raw uploaded originals must not enter provider prompts');
    }
  }
  try {
    host = await mount();
    const initial = await host.operation<Snapshot>({ action: 'snapshot' });
    assert.equal(initial.documentPolicy?.maxFileBytes, 65536);
    const settings: Settings = { ...initial.settings, participants: initial.settings.participants.slice(0, 2), reviewer: { provider: 'deterministic', model: 'reviewer' }, rounds: 2, roundMs: 15000, requestMs: 10000, overallMs: 60000, reserveReviewMs: 15000, reviewMs: 15000, retries: 0, contextChars: 100000, earlyStop: false };
    let id = '';
    await t.test('built parser workers process genuine English PDF and Arabic DOCX without creating session records', async () => {
      const result = await host!.operation<DocumentAttachment[]>({ action: 'process-files', documents });
      assert.equal(result.length, 2);
      assert.ok(result[0].sections.some(section => section.reference === 'Page 1' && section.text.includes(english)));
      assert.ok(result[1].sections.some(section => section.reference === 'Paragraph 1' && section.text.includes(arabic)));
      assert.deepEqual((await host!.operation<Snapshot>({ action: 'snapshot' })).sessions, []); assert.equal(calls.length, 0);
    });
    await t.test('file-only multiple-document start reaches every participant and the final reviewer', async () => {
      const start = await host!.operation<{ id: string }>({ action: 'start', question: '', documents, settings }); id = start.id;
      await host!.idle();
      const saved = await host!.operation<DebateSession>({ action: 'get', id });
      assert.equal(saved.status, 'completed'); assert.equal(saved.question, ''); assert.equal(saved.title, documents[0].name);
      assert.equal(saved.documents?.length, 2); assert.equal(saved.messages.length, 4); assert.equal(saved.round, 2);
      assert.ok(saved.messages.every(message => !message.incomplete && !message.parseWarning));
      assert.ok(saved.tasks.every(task => task.status === 'completed')); assert.equal(saved.final?.incomplete, false); assert.equal(saved.final?.model, 'reviewer');
      assertDocumentCalls(calls);
      for (const doc of documents) assert.ok(!JSON.stringify(saved).includes(doc.data));
    });
    await t.test('text follow-up retrieves the earlier documents for both participants and reviewer', async () => {
      const before = calls.length;
      await host!.operation({ action: 'followup', id, message: 'What was the approved budget in the earlier PDF and Arabic document?' }); await host!.idle();
      const saved = await host!.operation<DebateSession>({ action: 'get', id });
      assert.equal(saved.status, 'completed'); assert.equal(saved.followUps.length, 1); assert.equal(saved.reviews.length, 1); assert.ok(saved.final);
      assertDocumentCalls(calls.slice(before));
      for (const call of calls.slice(before)) assert.match(call.prompt.latestUserMessage, /earlier PDF/);
    });
    await t.test('fresh Cordis, DomainFacility and JSONBackend restore documents and all durable turn/request records', async () => {
      const saved = await host!.operation<DebateSession>({ action: 'get', id });
      const old = host!; host = undefined; await old.close(); assert.equal(old.tools.size, 0); assert.equal((await old.dispatch({ action: 'snapshot' })).status, 404);
      const disk = await readFile(join(canonical, 'model_debate.json'), 'utf8');
      assert.ok(disk.includes(english)); assert.ok(disk.includes(arabic)); for (const doc of documents) assert.ok(!disk.includes(doc.data));
      host = await mount();
      assert.deepEqual(await host.operation<DebateSession>({ action: 'get', id }), saved);
      assert.equal((await host.operation<Snapshot>({ action: 'snapshot' })).activeId, id);
    });
    await t.test('documents-only follow-up survives a further full durable reopen with earlier document associations intact', async () => {
      const before = calls.length, correction = 'The revised allocation is 19000 USD.';
      await host!.operation({ action: 'followup', id, documents: [upload('correction.txt', Buffer.from(correction))] }); await host!.idle();
      const saved = await host!.operation<DebateSession>({ action: 'get', id });
      assert.equal(saved.status, 'completed'); assert.equal(saved.documents?.length, 2); assert.equal(saved.followUps.length, 2); assert.equal(saved.reviews.length, 2);
      assert.equal(saved.followUps.at(-1)?.text, ''); assert.equal(saved.followUps.at(-1)?.documents?.[0].name, 'correction.txt');
      assertDocumentCalls(calls.slice(before), [...documents.map(doc => doc.name), 'correction.txt'], correction);
      const old = host!; host = undefined; await old.close(); host = await mount();
      assert.deepEqual(await host.operation<DebateSession>({ action: 'get', id }), saved);
    });
    await t.test('unsupported, corrupt PDF/DOCX, scanned and oversized uploads never create sessions, turns or provider calls', async () => {
      const before = calls.length, snapshot = await host!.operation<Snapshot>({ action: 'snapshot' }), prior = await host!.operation<DebateSession>({ action: 'get', id });
      const invalid = [
        { file: upload('program.exe', Buffer.from('unsupported')), error: /unsupported|not supported/i },
        { file: upload('broken.pdf', Buffer.from('%PDF-1.7\ncorrupt')), error: /corrupt|PDF/i },
        { file: upload('broken.docx', Buffer.from('PK corrupt')), error: /corrupt|DOCX/i },
        { file: upload('scanned.pdf', scannedPdf()), error: /OCR|no extractable text|scanned/i },
        { file: upload('oversized.txt', Buffer.alloc(65537, 65)), error: /size|byte|exceed|limit/i },
      ];
      for (const { file, error } of invalid) {
        for (const input of [{ action: 'process-files', documents: [file] }, { action: 'start', question: '', documents: [file], settings }, { action: 'followup', id, documents: [file] }]) {
          const response = await host!.dispatch(input), result = await response.json() as Result;
          assert.equal(response.status, 400, `${input.action} should reject ${file.name}`); assert.equal(result.ok, false);
          if (!result.ok) assert.match(result.error, error);
        }
        assert.deepEqual((await host!.operation<Snapshot>({ action: 'snapshot' })).sessions, snapshot.sessions);
        assert.deepEqual(await host!.operation<DebateSession>({ action: 'get', id }), prior);
      }
      assert.equal(calls.length, before);
    });
    await t.test('normal text-only discussion still completes without a document context', async () => {
      const before = calls.length, started = await host!.operation<{ id: string }>({ action: 'start', question: 'A normal text-only question.', settings }); await host!.idle();
      const plain = await host!.operation<DebateSession>({ action: 'get', id: started.id });
      assert.equal(plain.status, 'completed'); assert.ok(plain.final); assert.equal(plain.documents?.length ?? 0, 0);
      assert.ok(calls.length > before); for (const call of calls.slice(before)) assert.equal(call.prompt.documentInputs, undefined);
      await host!.operation({ action: 'delete', id: started.id });
    });
    await t.test('delete removes extracted document/session/request records durably and clears the selected record', async () => {
      await host!.operation({ action: 'select', id }); await host!.operation({ action: 'delete', id });
      const snapshot = await host!.operation<Snapshot>({ action: 'snapshot' }); assert.deepEqual(snapshot.sessions, []); assert.equal(snapshot.activeId, null);
      const response = await host!.dispatch({ action: 'get', id }); assert.equal(response.status, 400);
      const old = host!; host = undefined; await old.close();
      const disk = await readFile(join(canonical, 'model_debate.json'), 'utf8');
      for (const removed of [id, english, arabic, 'correction.txt']) assert.ok(!disk.includes(removed), 'deleted document content and associations must not remain in the durable unit');
      host = await mount(); assert.deepEqual((await host.operation<Snapshot>({ action: 'snapshot' })).sessions, []);
    });
  } finally {
    try { await host?.close(); }
    finally {
      // Never remove a computed/unverified target, a symlink replacement, or a host runtime directory.
      assert.equal(await realpath(directory), canonical); assert.equal(resolve(directory), canonical);
      assert.equal(dirname(canonical), canonicalTemp); assert.ok(basename(canonical).startsWith(prefix));
      await rm(canonical, { recursive: true, force: true });
    }
  }
});

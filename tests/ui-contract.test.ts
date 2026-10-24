import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { en, ar } from '../src/i18n.js';

// These are static Client artifact/contracts, not a fabricated browser render.
test('English and Arabic dictionaries have identical nonempty keys', () => {
  assert.deepEqual(Object.keys(en).sort(), Object.keys(ar).sort());
  for (const [key, value] of Object.entries(ar)) assert.ok(value.trim(), `Arabic text missing: ${key}`);
});
test('Client uses only additive inspected seats and safe model text rendering', async () => {
  const source = await readFile(new URL('../src/client.tsx', import.meta.url), 'utf8');
  assert.match(source, /name: 'main', key: 'model-debate'/); assert.match(source, /name: 'conversation.header.leading'/); assert.match(source, /name: 'sidebar.panellist', id: 'model-debate'/);
  assert.ok(!source.includes('dangerouslySetInnerHTML')); assert.ok(!/require\(['"]@deepseek-ai\//.test(source)); assert.ok(!source.includes('document.body'));
  assert.match(source, /ctx.layout.selectPanel\(null\)/); assert.match(source, /ctx.layout.selectPanel\('model-debate'\)/);
  assert.match(source, /dir="auto"/); assert.match(source, /aria-labelledby/); assert.match(source, /controller.abort\(\)/);
});
test('image composer uses bounded atomic batches and sends canonical inline images only', async () => {
  const source = await readFile(new URL('../src/client.tsx', import.meta.url), 'utf8');
  assert.match(source, /type="file" multiple accept="image\/png,image\/jpeg,image\/webp,image\/gif"/);
  assert.match(source, /onPaste=/); assert.match(source, /onDrop=/); assert.match(source, /getAsFile\(\)/);
  assert.match(source, /MAX_IMAGES = 4/); assert.match(source, /MAX_IMAGE_BYTES = 10 \* 1024 \* 1024/); assert.match(source, /MAX_TOTAL_IMAGE_BYTES = 20 \* 1024 \* 1024/);
  assert.match(source, /Math\.min\(ceiling, Math\.floor\(value\)\)/);
  assert.ok(source.indexOf('const error = validateImageBatch(files, before, policy)') < source.indexOf('files.map(readImageFile)'));
  assert.match(source, /Promise\.allSettled\(files\.map\(readImageFile\)\)/);
  assert.match(source, /reader\.readAsDataURL\(file\)/); assert.match(source, /reader\.result\.slice\(prefix\.length\)/);
  assert.match(source, /btoa\(decoded\) !== data/); assert.match(source, /checked\.bytes !== file\.size/);
  assert.match(source, /images: images\.images\.map\(image => image\.encoded\)/);
  assert.match(source, /if \(busy \|\| imageDraft\.reading \|\| documentsBlocked\(documentDraft\)\) return/); assert.match(source, /disabled=\{busy \|\| images\.reading \|\| documentsBlocked\(documents\) \|\| !!validation\.length/);
  assert.match(source, /if \(action === 'start' && result\?\.id\) \{ publishImageDraft\(\{ images: \[\]/);
  assert.match(source, /imageReaders\.forEach\(reader => reader\.abort\(\)\)/);
  assert.ok(!source.includes("request('upload'")); assert.ok(!source.includes('revokeObjectURL(image.'));
});
test('image selection blocks unsupported and unknown models and explicitly labels support', async () => {
  const source = await readFile(new URL('../src/client.tsx', import.meta.url), 'utf8');
  assert.match(source, /imageSupport !== 'supported'/); assert.match(source, /settings\.reviewer \? \[settings\.reviewer\] : \[\]/);
  assert.match(source, /settings\.tokenBudget !== null/); assert.match(source, /t\('Image token budget unsupported'\)/);
  assert.match(source, /<ImageSupportBadge model=\{model\}/); assert.match(source, /t\(imageSupportLabel\(m\)\)/);
  for (const key of ['Vision supported', 'Text-only model', 'Image support unknown', 'Image privacy note', 'Image model support required', 'Image token budget unsupported', 'Image export note']) {
    assert.ok(en[key] && ar[key], `Missing image translation: ${key}`);
  }
});
test('persisted previews are scoped to stored session images, allowlisted, cached and canceled logically', async () => {
  const source = await readFile(new URL('../src/client.tsx', import.meta.url), 'utf8');
  assert.match(source, /request<unknown>\('image', \{ id: sessionId, imageIndex, .*followUpId/);
  assert.match(source, /safeImageDataUrl\(result\.mediaType, result\.data\)/);
  assert.match(source, /result\.mediaType !== image\.mediaType \|\| checked\.bytes !== image\.bytes/);
  assert.match(source, /if \(!current \|\| !alive\) return/); assert.match(source, /return \(\) => \{ current = false; \}/);
  assert.match(source, /previewCacheSession !== snapshot\.activeId/); assert.match(source, /savedImageCache\.size < 20/);
  assert.match(source, /<SessionImages session=\{s\}/); assert.match(source, /image\.originalDimensions/);
  assert.match(source, /<img src=\{preview\} alt=\{label\}/); assert.match(source, /<img src=\{image\.preview\} alt=/);
  assert.ok(!/src=\{(?:image\.attachmentId|result\.data|image\.url)\}/.test(source));
});
test('follow-up composer is same-session, supports attachments and retains drafts until accepted', async () => {
  const source = await readFile(new URL('../src/client.tsx', import.meta.url), 'utf8');
  const composer = source.slice(source.indexOf('function FollowUpComposer('), source.indexOf('function SessionView('));
  assert.match(source, /const followUpDrafts = new Map<string, string>\(\)/);
  assert.match(source, /MAX_FOLLOW_UP_DRAFTS = 30/); assert.match(source, /MAX_FOLLOW_UP_CHARS = 30000/);
  assert.match(source, /while \(followUpDrafts\.size > MAX_FOLLOW_UP_DRAFTS\)/);
  assert.match(composer, /followUpDrafts\.get\(session\.id\)/);
  assert.match(composer, /act\('followup', \{ id: session\.id, message: text,/);
  assert.match(composer, /if \(result\) \{ setFollowUpDraft\(session\.id, ''\); setFollowUpImages/);
  assert.match(composer, /const disabled = busy \|\| running \|\| sending/);
  assert.match(composer, /followUpPending\.has\(session\.id\)/);
  assert.match(composer, /!event\.nativeEvent\.isComposing/); assert.match(composer, /event\.nativeEvent\.keyCode !== 229/);
  assert.match(composer, /event\.ctrlKey \|\| event\.metaKey/); assert.match(composer, /!event\.repeat/);
  assert.match(composer, /dir="auto"/); assert.match(composer, /t\(running \? 'Follow-up wait'/);
  assert.match(composer, /<AttachmentComposer .*owner=\{session.id\}/); assert.match(composer, /images: attachments.images.map/); assert.ok(!composer.includes('settings:'));
  assert.match(composer, /onPaste=/); assert.match(composer, /onDrop=/); assert.match(composer, /attachments.reading/);
  assert.match(source, /<FollowUpComposer session=\{s\}/);
  for (const key of ['Continue this debate', 'Follow-up wait', 'Follow-up resource hint', 'Follow-up image hint', 'Send follow-up', 'Follow-up message', 'Previous synthesis', 'You']) assert.ok(en[key] && ar[key], `Missing follow-up translation: ${key}`);
});
test('transcript interleaves attributed user follow-ups and archived reviews at round boundaries', async () => {
  const source = await readFile(new URL('../src/client.tsx', import.meta.url), 'utf8');
  assert.match(source, /const cycleStartedAt = session\.followUps\?\.at\(-1\)\?\.timestamp \?\? session\.startedAt/);
  assert.match(source, /duration\(at - cycleStartedAt\)/);
  assert.match(source, /s\.round - \(followUps\.at\(-1\)\?\.startRound \?\? 1\) \+ 1/);
  assert.match(source, /\{cycleRound\}\/\{s\.settings\.rounds\}/);
  const transcript = source.slice(source.indexOf('<details className="mdb-transcript"'), source.indexOf('<details className="mdb-run-details"'));
  assert.match(transcript, /transcriptRounds\.map\(round/);
  assert.match(transcript, /followUp\.startRound === round/); assert.match(transcript, /review\.afterRound === round/);
  assert.ok(transcript.indexOf('followUp.startRound === round') < transcript.indexOf('message.round === round'));
  assert.ok(transcript.indexOf('message.round === round') < transcript.indexOf('review.afterRound === round'));
  assert.match(transcript, /t\('You'\)/); assert.match(transcript, /followUp\.text \|\| t\(followUp\.documents\?\.length \? 'Attachment-only follow-up' : 'Image-only follow-up'\)/);
  assert.match(transcript, /<Markdown labels=\{participantLabels\(s\)\}>\{review\.text\}<\/Markdown>/); assert.match(source, /<Markdown labels=\{participantLabels\(s\)\}>\{s\.final\.text\}<\/Markdown>/);
});
test('document attachments are processed before send and retained only as closure-owned raw drafts', async () => {
  const source = await readFile(new URL('../src/client.tsx', import.meta.url), 'utf8');
  assert.match(source, /import type \{ DocumentAttachment, DocumentPolicy, EncodedDocument \} from '.\/document-state.js'/);
  assert.match(source, /const followUpDocuments = new Map<string, DocumentDraftState>\(\)/);
  assert.match(source, /request<DocumentAttachment\[\]>\('process-files', \{ documents: \[encoded\] \}\)/);
  const processing = source.slice(source.indexOf('let documentProcessingQueue:'), source.indexOf('function addAttachmentFiles('));
  assert.match(processing, /documentProcessingQueue\.then\(processBatch\)/);
  assert.match(processing, /for \(const \[index, file\] of files\.entries\(\)\)/);
  assert.ok(!processing.includes('Promise.all'));
  assert.ok(processing.indexOf('if (!retained()) continue') < processing.indexOf('await readDocumentFile(file)'));
  assert.match(processing, /await readDocumentFile\(file\);\s+if \(!retained\(\)\) continue/);
  assert.match(source, /documents: documents.documents.map\(file => file.encoded!\)/);
  assert.match(source, /documents: files.documents.map\(file => file.encoded!\)/);
  assert.ok(!/documents:.*map\(file => file.processed/.test(source));
  assert.match(source, /const documents = files.filter\(file => !images.includes\(file\)\)/);
  assert.match(source, /if \(images.length\) void addImageFiles\(images, imagePolicy, owner\)/);
  assert.match(source, /if \(documents.length\) void addDocumentFiles\(documents, documentPolicy, owner\)/);
  assert.match(source, /publishDocuments\(emptyDocumentDraft, result.id\)/);
  assert.match(source, /<SavedDocuments documents=\{s.documents\}/);
  assert.match(source, /<SavedDocuments documents=\{followUp.documents\} continuation/);
  assert.match(source, /<Plain>\{section.text\}<\/Plain>/);
  for (const key of ['Add attachments', 'Document ready', 'Document error', 'Processing document', 'Document privacy note', 'Document warnings']) assert.ok(en[key] && ar[key]);
  assert.match(en['Document privacy note'], /not OCR-processed/);
  assert.match(source, /deletedSessionDrafts\.add\(fields.id\)/);
  assert.match(source, /followUpDrafts.delete\(fields.id\); followUpImages.delete\(fields.id\); followUpDocuments.delete\(fields.id\)/);
  assert.match(source, /if \(!alive \|\| deletedSessionDrafts.has\(id\)\) return/);
  assert.match(source, /t\('Document excerpt note'\)/);
  assert.match(en['Document excerpt note'], /bounded excerpts/);
});
test('Client CSS uses inspected theme tokens rather than hardcoded UI colors', async () => {
  const css = await readFile(new URL('../src/client.css', import.meta.url), 'utf8');
  assert.ok(!/#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(/.test(css)); assert.match(css, /--dsw-alias-bg-base/); assert.match(css, /prefers-reduced-motion/); assert.match(css, /dir=rtl/);
});
test('panel uses its own available width and retains mutation admission across remounts', async () => {
  const source = await readFile(new URL('../src/client.tsx', import.meta.url), 'utf8');
  const css = await readFile(new URL('../src/client.css', import.meta.url), 'utf8');
  assert.match(css, /container-name:mdb-panel/);
  assert.match(css, /@container mdb-panel \(max-width:760px\)/);
  assert.ok(!/@media\(max-width:/.test(css), 'layout must follow the DSH main slot, not browser viewport');
  assert.ok(source.indexOf('let operationBusy = false') < source.indexOf('function App()'));
  assert.match(source, /useSyncExternalStore\(subscribeOperation, \(\) => operationBusy/);
  assert.match(source, /if \(operationBusy\) return null/);
  assert.match(source, /setHistoryOpen\(false\); setSettingsOpen\(false\); setAttempted\(false\)/);
  assert.match(source, /requestOperation<T>\(\{ baseUrl: document.baseURI/);
});
test('metadata, icon exports, and runtime artifacts are included in distribution', async () => {
  const packageJSON = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
  assert.equal(packageJSON.exports['./client'], './dist/client.js'); assert.equal(packageJSON.dsh.client.platform, 'web'); assert.ok(packageJSON.files.includes('tests')); assert.ok(packageJSON.files.includes('scripts'));
  for (const lang of ['en', 'ar']) { const locale = JSON.parse(await readFile(new URL(`../locale/${lang}.json`, import.meta.url), 'utf8')); assert.ok(locale.meta.title && locale.meta.description); }
  const icon = await readFile(new URL('../icon.svg', import.meta.url), 'utf8'); assert.match(icon, /^<svg /); assert.match(icon, /<title>Model Debate<\/title>/); assert.ok(Buffer.byteLength(icon) < 256 * 1024);
});

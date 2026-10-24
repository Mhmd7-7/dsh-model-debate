import test from 'node:test';
import assert from 'node:assert/strict';
import { zip, ct, word, paragraph, docx, pdf } from './document-fixtures.js';
import { Documents, DocumentInputError, DEFAULT_DOCUMENT_POLICY } from '../src/documents.js';
import { encodedDocumentSchema, documentSchema, type EncodedDocument } from '../src/document-state.js';

const encoded = (name: string, value: string | Buffer, mediaType?: string): EncodedDocument => ({ name, data: Buffer.from(value).toString('base64'), ...(mediaType ? { mediaType } : {}) });

test('browser document schema requires bounded canonical base64 and exact processed fields', () => {
  assert.equal(encodedDocumentSchema.safeParse(encoded('a.txt', 'hello')).success, true);
  for (const data of ['Zh==', 'Zm9=', 'Zg', 'Zg==\n', '!!!!', '']) assert.equal(encodedDocumentSchema.safeParse({ name: 'a.txt', data }).success, false, data);
  assert.equal(encodedDocumentSchema.safeParse({ ...encoded('a.txt', 'a'), extra: true }).success, false);
  assert.equal(encodedDocumentSchema.safeParse(encoded('x'.repeat(256), 'a')).success, false);
});
test('default policy, configured limits, immutable policy snapshots and no raw persistence', async () => {
  const gateway = new Documents(); assert.equal(gateway.policy().maxFiles, 4); assert.equal(gateway.policy().maxFileBytes, 10 * 1024 * 1024); assert.equal(gateway.policy().maxTotalBytes, 20 * 1024 * 1024); assert.equal(gateway.policy().maxConversationFiles, 40); assert.equal(gateway.policy().maxExtractedChars, 200000);
  const policy = gateway.policy(); policy.extensions.length = 0; assert.ok(gateway.policy().extensions.includes('.pdf')); assert.ok(Object.isFrozen(DEFAULT_DOCUMENT_POLICY));
  assert.throws(() => new Documents({ maxFiles: 0 }), DocumentInputError); assert.throws(() => new Documents({ maxFileBytes: 50 * 1024 * 1024 }), DocumentInputError); assert.throws(() => new Documents({ extensions: ['.exe'] }), DocumentInputError);
  assert.deepEqual(await gateway.extract([]), []);
  const [result] = await gateway.extract([encoded('C:\\private\\hello.txt', 'English مرحبا')]);
  assert.equal(result.name, 'hello.txt'); assert.match(result.id, /^[a-f0-9]{64}$/); assert.equal(result.sections[0].text, 'English مرحبا'); assert.equal(result.bytes, Buffer.byteLength('English مرحبا')); assert.equal(result.mediaType, 'text/plain'); assert.equal(documentSchema.safeParse(result).success, true); assert.equal('data' in result, false);
  await assert.rejects(new Documents({ maxFiles: 1 }).extract([encoded('a.txt', 'a'), encoded('b.txt', 'b')]), /Too many/);
  await assert.rejects(new Documents({ maxFileBytes: 2 }).extract([encoded('a.txt', 'abc')]), /file limit/);
  await assert.rejects(new Documents({ maxTotalBytes: 2 }).extract([encoded('a.txt', 'ab'), encoded('b.txt', 'c')]), /batch limit/);
});
test('strict UTF8 and BOM UTF16, Arabic, binary rejection and explicit truncation', async () => {
  const gateway = new Documents(); const utf16 = Buffer.concat([Buffer.from([0xff, 0xfe]), Buffer.from('العربية English', 'utf16le')]);
  assert.equal((await gateway.extract([encoded('b.txt', utf16)]))[0].sections[0].text, 'العربية English');
  const big = Buffer.from(utf16); for (let i = 2; i < big.length; i += 2) { const low = big[i]; big[i] = big[i + 1]; big[i + 1] = low; } big[0] = 0xfe; big[1] = 0xff;
  assert.equal((await gateway.extract([encoded('b.md', big)]))[0].sections[0].text, 'العربية English');
  for (const data of [Buffer.from([0xc0, 0xaf]), Buffer.from([0xff]), Buffer.from([0x61, 0, 0x62, 0]), Buffer.from('MZ\0binary')]) await assert.rejects(gateway.extract([encoded('bad.txt', data)]), DocumentInputError);
  await assert.rejects(gateway.extract([encoded('empty.txt', '  \n\t')]), /empty/);
  const [cut] = await new Documents({ maxExtractedChars: 5 }).extract([encoded('a.py', 'print("hello")')]); assert.equal(cut.sections[0].text, 'print'); assert.match(cut.warnings.join(), /omitted/);
});
test('CSV extraction preserves headers, quoting, multiline cells and treats formula as inert text', async () => {
  const [csv] = await new Documents().extract([encoded('table.csv', 'Name,Notes,Value\nأحمد,"two, words",=1+1\nJane,"line one\nline two",3')]);
  assert.equal(csv.sections[0].reference, 'Column headers'); assert.match(csv.sections[0].text, /Name/); assert.match(csv.sections[1].text, /Name: أحمد.*Notes: two, words.*Value: =1\+1/); assert.match(csv.sections[2].text, /line one\nline two/);
  await assert.rejects(new Documents().extract([encoded('bad.csv', 'Name\n"unclosed')]), /CSV is malformed/);
  const [cut] = await new Documents({ maxExtractedChars: 15 }).extract([encoded('cut.csv', 'Name,Count\nAlice,10\nBob,20')]); assert.ok(cut.sections.reduce((n, s) => n + s.text.length, 0) <= 15); assert.match(cut.warnings.join(), /omitted/);
});
test('rejects unsupported, mismatched, malformed and oversized inputs with sanitized errors', async () => {
  const gateway = new Documents();
  for (const input of [encoded('x.exe', 'a'), encoded('x.zip', 'a'), encoded('x.pdf', 'not pdf'), encoded('x.docx', 'not zip'), encoded('x.txt', pdf()), encoded('x.pdf', pdf(), 'text/plain'), { name: 'x.txt', data: 'Zh==' }]) await assert.rejects(gateway.extract([input]), error => error instanceof DocumentInputError && !/node_modules|C:\\|stack/.test(error.message));
  await assert.rejects(new Documents({ extensions: ['.txt'] }).extract([encoded('x.md', 'a')]), /Unsupported/);
  await assert.rejects(gateway.extract([encoded('large.txt', Buffer.alloc(10 * 1024 * 1024 + 1, 65))]), /file limit/);
});
test('actual generated English PDF extracts page references and reports char omissions', async () => {
  const [document] = await new Documents().extract([encoded('english.pdf', pdf(), 'application/pdf')]);
  assert.equal(document.sections.length, 2); assert.equal(document.sections[0].reference, 'Page 1'); assert.match(document.sections[0].text, /English document first page/); assert.equal(document.sections[1].reference, 'Page 2'); assert.match(document.sections[1].text, /Second page evidence/); assert.equal(documentSchema.safeParse(document).success, true);
  const [cut] = await new Documents({ maxExtractedChars: 8 }).extract([encoded('short.pdf', pdf())]); assert.ok(cut.sections.reduce((n, s) => n + s.text.length, 0) <= 8); assert.match(cut.warnings.join(), /omitted/);
});
test('PDF encrypted, corrupt and scanned/image-only failures are actionable without raw parser details', async () => {
  const gateway = new Documents();
  await assert.rejects(gateway.extract([encoded('encrypted.pdf', pdf(['secret'], true))]), /Encrypted|password/);
  await assert.rejects(gateway.extract([encoded('broken.pdf', '%PDF-1.7\nSECRET C:\\private\\parser-file')]), error => error instanceof DocumentInputError && /corrupt/.test(error.message) && !/SECRET|private/.test(error.message));
  await assert.rejects(gateway.extract([encoded('scanned.pdf', pdf([''], false, true))]), /no extractable text.*OCR is unavailable/);
  const [mixed] = await gateway.extract([encoded('mixed.pdf', pdf(['', 'Visible English']))]); assert.equal(mixed.sections[0].reference, 'Page 2'); assert.match(mixed.warnings.join(), /1 page.*OCR is unavailable/);
});
test('actual generated Arabic DOCX preserves heading, paragraphs, tables and XML entities', async () => {
  const xml = word('<w:p><w:pPr><w:pStyle w:val="Heading1"/></w:pPr><w:r><w:t>عنوان عربي</w:t></w:r></w:p>' + paragraph('مرحبا بالعالم &amp; English') + '<w:tbl><w:tr><w:tc>' + paragraph('الاسم') + '</w:tc><w:tc>' + paragraph('القيمة') + '</w:tc></w:tr><w:tr><w:tc>' + paragraph('أحمد') + '</w:tc><w:tc>' + paragraph('42') + '</w:tc></w:tr></w:tbl>');
  const [result] = await new Documents().extract([encoded('arabic.docx', docx(xml))]);
  assert.match(result.sections[0].reference, /Heading1: عنوان عربي/); assert.equal(result.sections[1].text, 'مرحبا بالعالم & English'); assert.equal(result.sections[2].text, 'الاسم | القيمة'); assert.equal(result.sections[3].text, 'أحمد | 42'); assert.equal(result.mediaType, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'); assert.equal(documentSchema.safeParse(result).success, true);
  const [cut] = await new Documents({ maxExtractedChars: 8 }).extract([encoded('short.docx', docx(xml))]); assert.ok(cut.sections.reduce((n, s) => n + s.text.length, 0) <= 8); assert.match(cut.warnings.join(), /omitted/);
});
test('Markdown heading and source-line references preserve content without evaluation', async () => {
  const gateway = new Documents();
  const [markdown] = await gateway.extract([encoded('note.md', '# عنوان\nمرحبا\n## English\nEvidence\n')]);
  assert.equal(markdown.sections[0].reference, 'Heading: عنوان'); assert.equal(markdown.sections[1].reference, 'Heading: English'); assert.match(markdown.sections[0].text, /مرحبا/);
  const [source] = await gateway.extract([encoded('code.ts', 'throw new Error("never execute");\n')]); assert.equal(source.sections[0].reference, 'Lines 1–2');
});
test('DOCX external hyperlink targets are ignored with warning while visible text is preserved', async () => {
  const rels = '<Relationships><Relationship Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink" TargetMode="External" Target="https://secret.invalid/private"/></Relationships>';
  const [result] = await new Documents().extract([encoded('links.docx', docx(word(paragraph('Visible link text')), { 'word/_rels/document.xml.rels': rels }))]);
  assert.equal(result.sections[0].text, 'Visible link text'); assert.match(result.warnings.join(), /hyperlink targets were ignored/); assert.ok(!JSON.stringify(result).includes('secret.invalid'));
});
test('DOCX rejects ZIP bombs, encrypted, corrupt archives, external XML and active content', async () => {
  const gateway = new Documents(), normal = docx(word(paragraph('hello')));
  const cases: [Buffer, RegExp][] = [
    [zip({ '[Content_Types].xml': ct, 'word/document.xml': word(paragraph('secret')) }, 1), /Encrypted/],
    [Buffer.from('PK\x03\x04broken secret C:\\path'), /corrupt/],
    [zip({ '[Content_Types].xml': ct, 'word/document.xml': word(paragraph('x'.repeat(2 * 1024 * 1024))) }), /ZIP bomb|compression/],
    [docx('<!DOCTYPE doc [<!ENTITY ext SYSTEM "file:///SECRET">]>' + word(paragraph('&ext;'))), /XML entities|DTD/],
    [docx(word(paragraph('hello')), { 'word/_rels/document.xml.rels': '<Relationships><Relationship TargetMode="External" Target="https://secret.invalid"/></Relationships>' }), /external relationships/],
    [docx(word(paragraph('hello')), { 'word/vbaProject.bin': 'not executed' }), /macros|embedded/],
    [zip({ '[Content_Types].xml': ct, 'word/document.xml': word(paragraph('hello')), '../escape.xml': '<x/>' }), /corrupt/],
    [docx(word('<w:p>broken')), /XML is corrupt/],
    [docx(word('')), /no extractable text.*OCR/],
    [zip({ 'other.xml': '<hello/>' }), /not a DOCX/],
  ];
  const tampered = Buffer.from(normal); tampered[50] ^= 1; cases.push([tampered, /corrupt/]);
  const compound = Buffer.from('d0cf11e0a1b11ae1', 'hex'); cases.push([compound, /Encrypted|legacy/]);
  for (const [bytes, pattern] of cases) await assert.rejects(gateway.extract([encoded('bad.docx', bytes)]), error => error instanceof DocumentInputError && pattern.test(error.message) && !/SECRET|secret\.invalid|C:\\/.test(error.message));
});

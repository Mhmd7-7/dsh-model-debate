import { createHash } from 'node:crypto';
import { inflateRawSync } from 'node:zlib';
import { Worker } from 'node:worker_threads';
import type { SaxesParser, SaxesTagNS } from 'saxes';
import { encodedDocumentSchema, type EncodedDocument, type DocumentAttachment, type DocumentPolicy } from './document-state.js';

export class DocumentInputError extends Error { constructor(message: string) { super(message); this.name = 'DocumentInputError'; } }
const MiB = 1024 * 1024;
const extensions = ['.pdf', '.docx', '.txt', '.md', '.markdown', '.csv', '.tsv', '.json', '.jsonl', '.js', '.jsx', '.ts', '.tsx', '.py', '.java', '.c', '.h', '.cpp', '.hpp', '.cs', '.go', '.rs', '.rb', '.php', '.swift', '.kt', '.sh', '.sql', '.css', '.html', '.xml', '.yaml', '.yml', '.toml', '.ini', '.log', '.r'];
export const DEFAULT_DOCUMENT_POLICY: DocumentPolicy = Object.freeze({ maxFiles: 4, maxFileBytes: 10 * MiB, maxTotalBytes: 20 * MiB, maxConversationFiles: 40, maxExtractedChars: 200000, extensions: Object.freeze(extensions) as unknown as string[] });
const caps = { maxFiles: 20, maxFileBytes: 10 * MiB, maxTotalBytes: 40 * MiB, maxConversationFiles: 40, maxExtractedChars: 1000000 };
const fail = (message: string): never => { throw new DocumentInputError(message); };
type Extracted = Pick<DocumentAttachment, 'sections' | 'warnings'>;
function cleanName(value: string): string { return value.split(/[\\/]/).at(-1)!.replace(/[\x00-\x1f\x7f\u202a-\u202e\u2066-\u2069]/g, '').trim(); }
function truncate(text: string, limit: number): string { let out = text.slice(0, limit); if (/[\ud800-\udbff]$/.test(out)) out = out.slice(0, -1); return out; }
function decode(bytes: Uint8Array): string {
  let encoding = 'utf-8', start = 0;
  if (bytes[0] === 0xff && bytes[1] === 0xfe) { encoding = 'utf-16le'; start = 2; }
  else if (bytes[0] === 0xfe && bytes[1] === 0xff) { encoding = 'utf-16be'; start = 2; }
  try {
    const text = new TextDecoder(encoding, { fatal: true }).decode(bytes.subarray(start));
    if (/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(text)) fail('Document contains binary data or an unsupported text encoding. Save it as UTF-8 or BOM-marked UTF-16.');
    return text.replace(/\r\n?/g, '\n');
  } catch (error) { if (error instanceof DocumentInputError) throw error; return fail('Unsupported or invalid text encoding. Save the document as UTF-8 or BOM-marked UTF-16.'); }
}
function textExtract(bytes: Buffer, ext: string, limit: number): Extracted {
  const text = decode(bytes);
  if (!text.trim()) fail('Document is empty. Choose a document containing readable text.');
  const warnings: string[] = [], sections: DocumentAttachment['sections'] = [];
  if (ext === '.csv' || ext === '.tsv') {
    // RFC 4180 quoting, including escaped quotes and embedded newlines; never evaluate cells.
    const delimiter = ext === '.tsv' ? '\t' : ',', rows: string[][] = []; let row: string[] = [], cell = '', quoted = false, closed = false;
    const parseLimit = Math.min(text.length, Math.max(limit * 4, 65536)); let position = 0;
    for (; position < text.length; position++) {
      const ch = text[position];
      if (position > parseLimit && !quoted && !row.length && !cell) break;
      if (quoted) { if (ch === '"') { if (text[position + 1] === '"') { cell += '"'; position++; } else { quoted = false; closed = true; } } else cell += ch; }
      else if (ch === '"' && !cell && !closed) quoted = true;
      else if (ch === delimiter || ch === '\n') { row.push(cell); cell = ''; closed = false; if (row.length > 1000) fail('CSV exceeds the 1,000-column safety limit.'); if (ch === '\n') { rows.push(row); row = []; if (rows.length >= 10000) { position++; break; } } }
      else { if (closed || ch === '"') fail('CSV is malformed. Export a valid quoted CSV or plain text file.'); cell += ch; }
      if (cell.length > 2 * MiB) fail('CSV cell exceeds the safe extraction limit.');
    }
    if (quoted) fail('CSV is malformed or contains an excessively large quoted record. Export smaller valid CSV records.');
    if (cell || row.length) { row.push(cell); rows.push(row); }
    const headers = rows.shift() ?? [];
    let remaining = limit;
    const add = (reference: string, value: string) => { const part = truncate(value, remaining); if (part) sections.push({ reference, text: part }); remaining -= part.length; return part.length === value.length; };
    add('Column headers', headers.map((h, i) => `${i + 1}: ${h || `Column ${i + 1}`}`).join(' | '));
    for (let i = 0; i < rows.length && remaining > 0; i++) add(`Row ${i + 2}`, rows[i].map((v, col) => `${headers[col] || `Column ${col + 1}`}: ${v}`).join(' | '));
    if (position < text.length || remaining <= 0) warnings.push(`CSV content was omitted at the ${limit}-character / 10,000-row extraction limit.`);
  } else {
    const bounded = truncate(text, limit);
    if (ext === '.md' || ext === '.markdown') {
      let reference = 'Introduction', block = '', fence = false;
      const flush = () => { if (block) sections.push({ reference, text: block }); block = ''; };
      for (const line of bounded.split(/(?<=\n)/)) {
        if (/^\s*(```|~~~)/.test(line)) fence = !fence;
        const heading = !fence && /^ {0,3}(#{1,6})\s+(.+?)(?:\s+#+)?\s*$/.exec(line);
        if (heading && sections.length < 9999) { flush(); reference = truncate(`Heading: ${heading[2]}`, 300); }
        block += line;
      }
      flush();
    } else sections.push({ reference: ext === '.txt' || ext === '.log' ? 'Text' : `Lines 1–${bounded.split('\n').length}`, text: bounded });
    if (text.length > limit) warnings.push(`Text beyond the ${limit}-character extraction limit was omitted.`);
  }
  return { sections, warnings };
}

interface ZipMember { name: string; flags: number; method: number; crc: number; size: number; compressed: number; offset: number; }
function crc32(bytes: Uint8Array): number { let c = 0xffffffff; for (const b of bytes) { c ^= b; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ c >>> 1 : c >>> 1; } return (c ^ 0xffffffff) >>> 0; }
function readZip(bytes: Buffer): Map<string, Buffer> {
  const MiB = 1024 * 1024;
  const bad = () => fail('DOCX archive is corrupt or uses an unsupported ZIP format. Re-save it as a standard DOCX.');
  let end = -1;
  for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 65557); i--) if (bytes.readUInt32LE(i) === 0x06054b50 && i + 22 + bytes.readUInt16LE(i + 20) === bytes.length) { end = i; break; }
  if (end < 0) return bad();
  const count = bytes.readUInt16LE(end + 10), directorySize = bytes.readUInt32LE(end + 12), directory = bytes.readUInt32LE(end + 16);
  if (bytes.readUInt16LE(end + 4) || bytes.readUInt16LE(end + 6) || bytes.readUInt16LE(end + 8) !== count || count === 65535 || directory + directorySize !== end) return bad();
  if (count > 2048) fail('DOCX exceeds the 2,048 ZIP-entry safety limit. Export a smaller document.');
  let cursor = directory, total = 0; const members: ZipMember[] = [], names = new Set<string>();
  for (let i = 0; i < count; i++) {
    if (cursor + 46 > end || bytes.readUInt32LE(cursor) !== 0x02014b50) return bad();
    const flags = bytes.readUInt16LE(cursor + 8), method = bytes.readUInt16LE(cursor + 10), crc = bytes.readUInt32LE(cursor + 16), compressed = bytes.readUInt32LE(cursor + 20), size = bytes.readUInt32LE(cursor + 24), n = bytes.readUInt16LE(cursor + 28), extra = bytes.readUInt16LE(cursor + 30), comment = bytes.readUInt16LE(cursor + 32), offset = bytes.readUInt32LE(cursor + 42);
    if (cursor + 46 + n + extra + comment > end || bytes.readUInt16LE(cursor + 34)) return bad();
    const name = bytes.subarray(cursor + 46, cursor + 46 + n).toString('utf8');
    if (!name || /[\x00-\x1f\\]/.test(name) || name.startsWith('/') || name.includes(':') || name.split('/').includes('..') || names.has(name)) return bad();
    if (flags & (1 | 64)) fail('Encrypted DOCX files are unsupported. Remove the password and save a new DOCX.');
    if (![0, 8].includes(method) || size === 0xffffffff || compressed === 0xffffffff || offset === 0xffffffff) return bad();
    total += size;
    if (total > 32 * MiB || size > 16 * MiB || (size > MiB && size > Math.max(1, compressed) * 200)) fail('DOCX exceeds safe uncompressed-size or compression-ratio limits (possible ZIP bomb). Export a smaller document.');
    if (/vbaProject|^word\/embeddings\//i.test(name)) fail('DOCX contains macros or embedded files. Export a plain DOCX without active or embedded content.');
    names.add(name); members.push({ name, flags, method, crc, size, compressed, offset }); cursor += 46 + n + extra + comment;
  }
  if (cursor !== end) return bad();
  const output = new Map<string, Buffer>(), ranges: [number, number][] = [];
  for (const m of members) {
    const o = m.offset;
    if (o + 30 > directory || bytes.readUInt32LE(o) !== 0x04034b50 || bytes.readUInt16LE(o + 6) !== m.flags || bytes.readUInt16LE(o + 8) !== m.method) return bad();
    const n = bytes.readUInt16LE(o + 26), extra = bytes.readUInt16LE(o + 28), start = o + 30 + n + extra, stop = start + m.compressed;
    if (stop > directory || bytes.subarray(o + 30, o + 30 + n).toString('utf8') !== m.name || ranges.some(([a, b]) => o < b && stop > a)) return bad();
    ranges.push([o, stop]);
    if (!/\.(xml|rels)$/i.test(m.name)) continue; // binary media are never inflated, rendered, or executed
    if (m.size > 8 * MiB) fail('DOCX XML exceeds the 8 MiB extraction safety limit. Export a smaller document.');
    let data: Buffer;
    try { data = m.method === 0 ? bytes.subarray(start, stop) : inflateRawSync(bytes.subarray(start, stop), { maxOutputLength: Math.min(m.size + 1, 8 * MiB + 1) }); } catch { return bad(); }
    if (data.length !== m.size || crc32(data) !== m.crc) return bad();
    output.set(m.name, data);
  }
  if (!output.has('[Content_Types].xml') || !output.has('word/document.xml')) fail('File is not a DOCX document. Choose a valid Word .docx file, not a renamed ZIP archive.');
  return output;
}
const wordNamespace = (uri: string) => uri === 'http://schemas.openxmlformats.org/wordprocessingml/2006/main' || uri === 'http://purl.oclc.org/ooxml/wordprocessingml/main';
function safeXml(data: Buffer, Parser: typeof import('saxes').SaxesParser, visit?: (parser: SaxesParser<{ xmlns: true }>) => void, warnings?: string[]): void {
  const text = decode(data);
  if (/<!\s*(?:DOCTYPE|ENTITY)/i.test(text)) fail('DOCX contains prohibited XML entities or a DTD. Export a standard DOCX without external XML.');
  const parser = new Parser({ xmlns: true }); let depth = 0, nodes = 0;
  parser.on('xmldecl', declaration => { if (declaration.encoding && !/^utf-(?:8|16(?:le|be)?)$/i.test(declaration.encoding)) fail('DOCX XML uses an unsupported encoding. Re-save it as a standard UTF-8 DOCX.'); });
  parser.on('doctype', () => fail('DOCX external XML/DTDs are not supported. Export a standard DOCX.'));
  parser.on('error', () => fail('DOCX XML is corrupt. Re-save the document and try again.'));
  parser.on('opentag', tag => {
    if (++depth > 128 || ++nodes > 300000) fail('DOCX XML exceeds safe nesting or node limits. Export a smaller document.');
    if (tag.local === 'Relationship' && Object.values(tag.attributes).some(a => a.local === 'TargetMode' && a.value.toLowerCase() === 'external')) {
      const type = Object.values(tag.attributes).find(a => a.local === 'Type')?.value ?? '';
      if (/\/hyperlink$/.test(type)) { const warning = 'External hyperlink targets were ignored; visible hyperlink text is retained and no links were fetched.'; if (warnings && !warnings.includes(warning)) warnings.push(warning); }
      else fail('DOCX contains external relationships. Remove external links or export it as PDF/plain text.');
    }
  });
  parser.on('closetag', () => { depth--; });
  // saxes has one listener per event; combine security and content handlers.
  if (visit) {
    const originalOn = parser.on.bind(parser);
    parser.on = ((event: string, handler: (...args: any[]) => void) => {
      if (event === 'opentag') return originalOn('opentag', tag => { if (++depth > 128 || ++nodes > 300000) fail('DOCX XML exceeds safe nesting or node limits. Export a smaller document.'); handler(tag); });
      if (event === 'closetag') return originalOn('closetag', tag => { depth--; handler(tag); });
      return originalOn(event as any, handler);
    }) as typeof parser.on;
    visit(parser);
  }
  parser.write(text).close();
}
function docxExtract(bytes: Buffer, limit: number, Parser: typeof import('saxes').SaxesParser): Extracted {
  const files = readZip(bytes), sections: DocumentAttachment['sections'] = [], warnings: string[] = [];
  for (const [name, data] of files) if (name !== 'word/document.xml') safeXml(data, Parser, undefined, warnings);
  if ([...files.keys()].some(n => /^word\/(?:header|footer|footnotes|endnotes|comments)/.test(n))) warnings.push('Headers, footers, footnotes, endnotes and comments are omitted; only the main document body is extracted.');
  warnings.push('DOCX images, drawings, fields and embedded content are not rendered. Page numbers are unavailable; references use paragraphs/headings/table rows.');
  let paragraph = '', paragraphIndex = 0, heading = '', inText = false, inParagraph = false, deleted = 0, tableDepth = 0, rowIndex = 0, row: string[] = [], cell = '', remaining = limit, omitted = false;
  const add = (reference: string, text: string) => { text = text.trim(); if (!text) return; if (!remaining || sections.length >= 10000) { omitted = true; return; } const part = truncate(text, remaining); sections.push({ reference: truncate(reference, 300), text: part }); remaining -= part.length; if (part.length < text.length) omitted = true; };
  safeXml(files.get('word/document.xml')!, Parser, parser => {
    parser.on('opentag', (tag: SaxesTagNS) => {
      if (!wordNamespace(tag.uri)) return;
      const local = tag.local;
      if (local === 'del' || local === 'moveFrom') deleted++;
      if (local === 'tbl') { tableDepth++; if (tableDepth > 1 && !warnings.includes('Nested DOCX table layout was flattened; row and cell boundaries may be approximate.')) warnings.push('Nested DOCX table layout was flattened; row and cell boundaries may be approximate.'); }
      if (local === 'tr' && tableDepth === 1) { row = []; rowIndex++; }
      if (local === 'tc' && tableDepth === 1) cell = '';
      if (local === 'p') { inParagraph = true; paragraph = ''; heading = ''; paragraphIndex++; }
      if (local === 'pStyle') { const value = Object.values(tag.attributes).find(a => a.local === 'val')?.value ?? ''; if (/^(?:heading|title|subtitle)/i.test(value)) heading = value; }
      if (local === 't' && !deleted) inText = true;
      if (inParagraph && !deleted && local === 'tab') paragraph += '\t';
      if (inParagraph && !deleted && (local === 'br' || local === 'cr')) paragraph += '\n';
      if (local === 'altChunk') fail('DOCX contains externally supplied or embedded alternative content. Export a standard text DOCX.');
    });
    parser.on('text', text => {
      if (!inText || deleted) return;
      const room = Math.max(0, limit + 1000 - paragraph.length);
      paragraph += text.slice(0, room);
      if (text.length > room) omitted = true;
    });
    parser.on('closetag', tag => {
      if (!wordNamespace(tag.uri)) return;
      const local = tag.local;
      if (local === 't') inText = false;
      if (local === 'p') { inParagraph = false; if (tableDepth) cell += (cell ? '\n' : '') + paragraph; else add(heading ? `${heading}: ${paragraph.slice(0, 180)}` : `Paragraph ${paragraphIndex}`, paragraph); }
      if (local === 'tc' && tableDepth === 1) row.push(cell.trim());
      if (local === 'tr' && tableDepth === 1) add(`Table row ${rowIndex}`, row.join(' | '));
      if (local === 'tbl') tableDepth--;
      if (local === 'del' || local === 'moveFrom') deleted--;
    });
  });
  if (omitted) warnings.push(`Document text beyond the ${limit}-character / 10,000-section extraction limit was omitted.`);
  if (!sections.some(s => s.text.trim())) fail('DOCX has no extractable text. Images/scans require OCR, which is unavailable in this installation. Export a text-based document.');
  return { sections, warnings };
}

// Serialized into an eval worker: keep this function self-contained (no module closures).
async function pdfWorker(): Promise<void> {
  const { parentPort, workerData } = await import('node:worker_threads');
  const { data, moduleUrl, limit } = workerData;
  console.log = console.warn = console.error = console.info = () => {}; // parser diagnostics may contain private paths
  // pdfjs eagerly loads an optional native canvas addon even for text. Never load
  // native image/rendering code: it can crash the entire host across worker teardown.
  const builtin = process.getBuiltinModule.bind(process);
  (process as any).getBuiltinModule = (name: string) => {
    const value: any = builtin(name);
    if (name !== 'module') return value;
    return { ...value, createRequire: (url: string) => {
      const require = value.createRequire(url);
      return (specifier: string) => specifier === '@napi-rs/canvas'
        ? { DOMMatrix: class TextOnlyDOMMatrix {}, ImageData: class TextOnlyImageData {}, Path2D: class TextOnlyPath2D {} }
        : require(specifier);
    } };
  };
  // No PDF-triggered network access, JavaScript evaluation, image decoding or filesystem writes.
  globalThis.fetch = async () => { throw new Error('Network disabled'); };
  let task: any;
  try {
    const pdfjs = await import(moduleUrl);
    task = pdfjs.getDocument({ data, isEvalSupported: false, useWorkerFetch: false, useSystemFonts: false, disableFontFace: true, disableAutoFetch: true, disableStream: true, stopAtErrors: true, maxImageSize: 1, canvasMaxAreaInBytes: 1, verbosity: 0 });
    const pdf = await task.promise, sections = [], warnings = []; let remaining = limit, blanks = 0, truncated = false;
    const pageLimit = Math.min(pdf.numPages, 500);
    for (let number = 1; number <= pageLimit && remaining > 0; number++) {
      const page = await pdf.getPage(number), reader = page.streamTextContent({ disableNormalization: false, includeMarkedContent: false }).getReader(); let text = '';
      try {
        while (true) {
          const chunk = await reader.read(); if (chunk.done) break;
          for (const item of chunk.value.items) if ('str' in item) {
            const next = item.str + (item.hasEOL ? '\n' : ' '), room = remaining - text.length;
            text += next.slice(0, Math.max(0, room));
            if (next.length > room) { truncated = true; break; }
          }
          if (text.length >= remaining) { truncated = true; await reader.cancel(new Error('Extraction character limit reached')); break; }
        }
      } finally { reader.releaseLock(); page.cleanup(); }
      if (text.trim()) { if (/[\ud800-\udbff]$/.test(text)) text = text.slice(0, -1); sections.push({ reference: `Page ${number}`, text }); remaining -= text.length; }
      else blanks++;
    }
    if (!sections.length) { parentPort!.postMessage({ error: 'PDF has no extractable text. It may be empty, scanned, or image-only. OCR is unavailable in this installation; provide a text-based PDF or extracted text.' }); return; }
    if (pdf.numPages > pageLimit) warnings.push(`Pages after ${pageLimit} were omitted by the PDF page safety limit.`);
    if (truncated || remaining <= 0) warnings.push(`PDF text beyond the ${limit}-character extraction limit was omitted.`);
    if (blanks) warnings.push(`${blanks} page(s) had no extractable text; scanned/image content was omitted because OCR is unavailable.`);
    warnings.push('PDF images, annotations, attachments and forms are not extracted; text reading order may differ from the visual layout.');
    parentPort!.postMessage({ sections, warnings });
  } catch (error: any) { parentPort!.postMessage({ error: error?.name === 'PasswordException' ? 'Encrypted or password-protected PDF is unsupported. Remove its password and export a text-based PDF.' : 'PDF is corrupt or cannot be safely extracted. Re-save it as a text-based PDF and try again.' }); }
  finally { try { await task?.destroy(); } catch { /* never disclose parser details */ } }
}
async function boundedDocxExtract(bytes: Buffer, limit: number): Promise<Extracted> {
  // Isolate ZIP inflation and XML parsing too: size bounds alone are not a CPU deadline.
  const code = `console.log = console.warn = console.error = console.info = () => {};
    const { parentPort, workerData } = require('node:worker_threads');
    const { inflateRawSync } = require('node:zlib');
    const ${DocumentInputError.name} = ${DocumentInputError.toString()};
    const ${fail.name} = ${fail.toString()};
    const ${truncate.name} = ${truncate.toString()};
    const ${decode.name} = ${decode.toString()};
    const ${crc32.name} = ${crc32.toString()};
    const ${readZip.name} = ${readZip.toString()};
    const ${wordNamespace.name} = ${wordNamespace.toString()};
    const ${safeXml.name} = ${safeXml.toString()};
    const ${docxExtract.name} = ${docxExtract.toString()};
    import(workerData.moduleUrl).then(({ SaxesParser }) => {
      try { parentPort.postMessage(${docxExtract.name}(Buffer.from(workerData.data), workerData.limit, SaxesParser)); }
      catch (error) { parentPort.postMessage({error: error instanceof ${DocumentInputError.name} ? error.message : 'DOCX is corrupt or cannot be safely extracted. Re-save the document and try again.'}); }
    }).catch(() => parentPort.postMessage({error: 'DOCX extraction is unavailable. Re-save it as PDF or plain text.'}));`;
  return runParserWorker(code, { data: new Uint8Array(bytes), moduleUrl: import.meta.resolve('saxes'), limit }, 'DOCX');
}
let activeParserWorkers = 0;
async function runParserWorker(code: string, workerData: unknown, kind: string): Promise<Extracted> {
  if (activeParserWorkers >= 2) fail('Document extraction is busy. Please retry after the current extraction finishes.');
  activeParserWorkers++;
  try {
    return await new Promise<Extracted>((resolve, reject) => {
      let settled = false;
      const worker = new Worker(code, { eval: true, workerData, execArgv: [], resourceLimits: { maxOldGenerationSizeMb: 128, maxYoungGenerationSizeMb: 16, stackSizeMb: 4 } });
      const finish = (error?: string, result?: Extracted) => {
        if (settled) return; settled = true; clearTimeout(timer);
        // Do not release the concurrency slot while the old parser is still alive.
        void worker.terminate().finally(() => { if (error) reject(new DocumentInputError(error)); else resolve(result!); });
      };
      const timer = setTimeout(() => finish(`${kind} extraction exceeded the 15-second safety limit. Split or simplify the document and try again.`), 15000);
      worker.once('message', (message: Extracted & { error?: string }) => finish(message.error, message));
      worker.once('error', () => finish(`${kind} exceeded parser resource limits or could not be safely extracted. Split or re-save the document.`));
      worker.once('exit', () => { if (!settled) finish(`${kind} extraction stopped unexpectedly. Re-save or simplify the document and try again.`); });
    });
  } finally { activeParserWorkers--; }
}
async function pdfExtract(bytes: Buffer, limit: number): Promise<Extracted> {
  return runParserWorker(`(${pdfWorker.toString()})()`, { data: new Uint8Array(bytes), moduleUrl: import.meta.resolve('pdfjs-dist/legacy/build/pdf.mjs'), limit }, 'PDF');
}

export class Documents {
  private readonly limits: DocumentPolicy;
  constructor(options: Partial<DocumentPolicy> = {}) {
    this.limits = { ...DEFAULT_DOCUMENT_POLICY, extensions: [...DEFAULT_DOCUMENT_POLICY.extensions] };
    for (const key of Object.keys(caps) as (keyof typeof caps)[]) {
      const value = options[key];
      if (value !== undefined) { if (!Number.isSafeInteger(value) || value <= 0 || value > caps[key]) fail(`Invalid document policy ${key}; use an integer from 1 to ${caps[key]}.`); this.limits[key] = value; }
    }
    if (options.extensions !== undefined) {
      if (!Array.isArray(options.extensions) || options.extensions.some(ext => typeof ext !== 'string' || !extensions.includes(ext.toLowerCase()))) fail('Document policy contains an unsupported extension.');
      this.limits.extensions = [...new Set(options.extensions.map(ext => ext.toLowerCase()))];
    }
  }
  policy(): DocumentPolicy { return { ...this.limits, extensions: [...this.limits.extensions] }; }
  async extract(inputs: readonly EncodedDocument[]): Promise<DocumentAttachment[]> {
    if (!Array.isArray(inputs) || inputs.length > this.limits.maxFiles) fail(`Too many documents. The per-message limit is ${this.limits.maxFiles}.`);
    let total = 0;
    // Validate the complete batch before any parser work. Raw bytes never leave this request or reach disk.
    const values = inputs.map(input => {
      // Reject enormous values before Zod refinements or base64 decoding allocate work.
      if (!input || typeof input.data !== 'string' || input.data.length > 14 * MiB || typeof input.name !== 'string' || input.name.length > 255) fail('Invalid or oversized document metadata/base64. Choose a file within the configured input limits.');
      const parsed = encodedDocumentSchema.safeParse(input);
      if (!parsed.success) fail('Invalid document metadata or canonical base64 encoding. Choose the file again (name ≤255 characters; base64 ≤14 MiB).');
      const value = parsed.data!, name = cleanName(value.name), ext = /\.[^.]+$/.exec(name)?.[0].toLowerCase() ?? '';
      if (!name || !this.limits.extensions.includes(ext)) fail('Unsupported document format. Use an allowed PDF, DOCX, UTF-8 text, Markdown, CSV or source file.');
      const length = value.data.length / 4 * 3 - (value.data.endsWith('==') ? 2 : value.data.endsWith('=') ? 1 : 0);
      if (!length) fail('Document is empty. Choose a file containing readable text.');
      if (length > this.limits.maxFileBytes) fail(`Document exceeds the ${this.limits.maxFileBytes}-byte file limit.`);
      total += length;
      if (total > this.limits.maxTotalBytes) fail(`Documents exceed the ${this.limits.maxTotalBytes}-byte batch limit.`);
      return { value, name, ext };
    });
    const result: DocumentAttachment[] = [];
    for (const { value, name, ext } of values) {
      const bytes = Buffer.from(value.data, 'base64');
      if (bytes.toString('base64') !== value.data) fail('Invalid canonical document base64 encoding.');
      let extracted: Extracted, mediaType: string;
      try {
        const pdf = bytes.subarray(0, 5).toString('ascii') === '%PDF-', zip = bytes.length >= 4 && bytes.readUInt32LE(0) === 0x04034b50, compound = bytes.subarray(0, 8).equals(Buffer.from('d0cf11e0a1b11ae1', 'hex'));
        if (compound) fail('Encrypted or legacy Office document is unsupported. Remove the password and export a standard DOCX.');
        const declared = value.mediaType?.split(';')[0].trim().toLowerCase();
        if (declared && !['application/octet-stream', ''].includes(declared)) {
          const expected = ext === '.pdf' ? 'application/pdf' : ext === '.docx' ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' : undefined;
          if ((expected && declared !== expected) || (!expected && (declared === 'application/pdf' || declared.includes('wordprocessingml') || declared.startsWith('image/') || declared.includes('zip')))) fail('Document media type does not match its file extension. Choose the original file without renaming it.');
        }
        if (ext === '.pdf') { if (!pdf) fail('PDF signature does not match the file extension. Choose a valid PDF.'); extracted = await pdfExtract(bytes, this.limits.maxExtractedChars); mediaType = 'application/pdf'; }
        else if (ext === '.docx') { if (!zip) fail('DOCX signature does not match the file extension. Choose a valid DOCX.'); extracted = await boundedDocxExtract(bytes, this.limits.maxExtractedChars); mediaType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'; }
        else { if (pdf || zip || bytes.subarray(0, 2).toString('ascii') === 'MZ' || bytes.subarray(0, 4).equals(Buffer.from([0x7f, 69, 76, 70]))) fail('Binary document signature does not match the text extension. Choose a supported text document.'); extracted = textExtract(bytes, ext, this.limits.maxExtractedChars); mediaType = ext === '.csv' ? 'text/csv' : ext === '.tsv' ? 'text/tab-separated-values' : ext === '.md' || ext === '.markdown' ? 'text/markdown' : 'text/plain'; }
      } catch (error) { if (error instanceof DocumentInputError) throw error; fail('Document is corrupt or cannot be safely extracted. Re-save it as PDF, DOCX or UTF-8 text and try again.'); }
      result.push({ id: createHash('sha256').update(bytes).digest('hex'), name, bytes: bytes.length, mediaType: mediaType!, ...extracted! });
    }
    return result;
  }
}

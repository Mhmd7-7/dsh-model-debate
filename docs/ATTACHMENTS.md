# File attachment implementation and verification

Verified on 2026-10-24 with Node 26.3.0 and installed DSH 0.2.1-rc.2. This is a plugin, not a standalone Web app.

## Delivered behavior

- Combined multiple-file picker beside both composers; paste/drag/drop route image and document inputs to their respective validators.
- Filename, byte size, per-document processing/ready/error status, extraction warnings and removal controls. Processing is sequential and removed queued files are skipped. Drafts survive Chat/Debate remount and failed submission, but not browser reload.
- Initial and follow-up messages accept attachments with or without text. Submitted document metadata and extracted sections are persisted with that user turn and displayed after reload. Successful deletion purges retained drafts too.
- Local extraction: PDF pages; DOCX body headings/paragraphs/table rows; Markdown headings; CSV/TSV headers and rows; text/source line references. UTF-8/BOM UTF-16 and Arabic/English supported.
- Every participant and final/explicit reviewer receives supported text inputs containing bounded extracted chunks, filenames and section/page references. Later rounds, follow-ups and re-runs retain access to earlier documents. No provider is assumed to accept raw PDF/DOCX.
- Keyword-ranked 1,600-character extractive chunks, budgeted per model. Each exact saved request discloses included/omitted chunks and extraction limitations. No model-generated summary disguises omissions. The saved-document UI also explains that models may receive only excerpts.
- Documents and embedded instructions are untrusted references. No uploaded code/macros/formulas/commands/URLs execute. Existing local-only and exact-route restrictions remain enforced. Images continue through DSH normalized durable refs and verified vision gating.

## Formats and configurable defaults

PDF, DOCX, TXT, Markdown, CSV/TSV; JS/TS/JSX/TSX, Python, Java, C/H/C++/HPP/C#, Go, Rust, Ruby, PHP, Swift, Kotlin, shell, SQL, CSS/HTML/XML, JSON/JSONL, YAML, TOML, INI, LOG and R. The authoritative extension list is returned by `snapshot.documentPolicy`.

| DSH Plugin Config | Default | Host configuration range |
| --- | --- | --- |
| `documentMaxFiles` | 4/message | 1–20 |
| `documentMaxFileBytes` | 10 MiB | 1 byte–10 MiB |
| `documentMaxTotalBytes` | 20 MiB/message | 1 byte–20 MiB |
| `documentMaxConversationFiles` | 40 | 1–40 |
| `documentMaxExtractedChars` | 200,000/file | 1,000–200,000 |

PDF/DOCX parser workers: 15 seconds/file, 128 MiB old-generation heap, bounded concurrency. PDF extraction stops at 500 pages; DOCX limits ZIP entries/expansion/XML depth and nodes. CSV has 10,000-row/1,000-column limits. Caps produce explicit omission warnings or rejection. The authenticated JSON route allows at most 58 MiB; DSH carrier limits can be tighter. Browser document-preview processing has a 30-second per-file request deadline; start/follow-up mutations allow 30 seconds plus 15 seconds per submitted document for independent backend re-extraction. Mutations are never automatically retried.

## Persistence and file lifecycle

Existing DSH `model_debate` storage-domain records hold extracted text, sanitized display names, sizes, media type, content digest, warnings and message associations. Fields are optional for older version-1 histories. Raw original file bytes are **not persisted or downloadable**. Processing creates no durable upload; raw bytes exist only in request/client memory. Removing or abandoning a pending document therefore needs no filesystem garbage collection. Conversation deletion removes extracted content and request records; independent re-run copies remain independent. Submitted messages are immutable: remove files before sending, or delete the conversation afterward.

Inspected DSH general file storage has immutable content-addressed save/read but no removal/retention API or document extraction; ordinary file-upload receipts require a live Chat Agent Session, not a plugin-owned debate. Using these for raw debate drafts would create unmanaged objects. This implementation reuses DSH storage and image services without pretending these APIs provide cleanup/extraction they do not expose. Existing shared image object retention is unchanged.

## Automated verification results

Final `npm run check` with `DSH_RUNTIME_ROOT` configured: **213 tests passed, zero failed, zero skipped**. TypeScript and both build outputs passed. `npm audit --omit=dev`: **zero vulnerabilities** after pinning PDF.js/SAX and updating Zod to 4.6.7. Build output was regenerated; host/client JavaScript syntax and `git diff --check` passed.

New focused suites:

- `tests/documents.test.ts`: 11 extraction/security checks using actual generated PDF/ZIP-DOCX documents, not mocked text extractors. English multi-page PDF, actual Arabic heading/paragraph/table DOCX, strict encodings, CSV headers/quotes/formulas-as-data, Markdown/source refs, sanitization, wrong signatures, unsupported/oversized, password/encryption, corrupt archives/PDF/XML, inline-raster scanned PDF, ZIP bombs, external entities/relationships, safe ignored hyperlinks, explicit truncation.
- `tests/document-flow.test.ts`: file-only/multiple inputs; all participants/rounds/reviewer; earlier-file follow-up; documents-only continuation; association/reopen/re-run/export/delete; no save on processing; invalid/caller-forged extracted sections; failed persistence; conversation count; retrieval ranking/omissions; model-window limits; legacy/text-only behavior.
- `tests/document-adapter.test.ts`: extracted docs remain text-only SDK content; refreshed metadata and prepared output limits block oversize requests; unknown window fallback; local-only denial before preparation/dispatch.
- `tests/document-runtime.test.ts`: **9 tests including 8 named subtests**, loading actual **built** `dist/index.js`. Uses installed Cordis, Connection route/browserPeer dispatch, DSH DomainFacility and JSONBackend with real clocks. Processes genuine English PDF + Arabic DOCX, starts file-only debate with two participants over two rounds and a distinct reviewer, checks every actual prepared stream payload, asks about earlier files, fully disposes/recreates runtime/backend to verify disk persistence, sends docs-only continuation and reopens again, rejects unsupported/corrupt PDF/corrupt DOCX/raster scanned/oversized across processing/start/follow-up without user turns or provider calls, completes text-only debate, and verifies deletion in actual storage plus subsequent reopen.
- Existing image, provider translation, cancellation, scheduling, follow-up, Markdown and storage regressions all remain passing.

`npm run test:browser`: actual production `dist/client.js` loaded in Chrome inside a constrained DSH-like host with deterministic Fetch fixtures. **English and Arabic passed with zero page errors**. File picker, processing/ready/error, removal including queued entries, mixed image/document drop, file-only initial/continuation, raw-only submissions, failed-send draft retention/remount, safe escaped extracted content/warnings, immutable saved display, image-only initial, panel sizing/navigation and mutation lock verified. This is a browser fixture, **not an authenticated production GUI or live-provider test**.

## What remains unverified or limited

1. The existing GUI at `http://127.0.0.1:3080` returned **HTTP 401 Unauthorized** to this session. Its authenticated deployment was not changed, no credentials were read, and no authentication bypass or replacement server was used. Install/reload the built local package via DSH Plugin Manager, then refresh the existing GUI.
2. No live inference requests were made for these attachment tests. Provider payload propagation and SDK translation are verified with deterministic streams, not proof that a live model accurately understands documents. No claim is made that credentials are missing; production authentication/access was unavailable for live testing here.
3. No integrated OCR: scanned/image-only PDFs are rejected with actionable guidance. Mixed PDFs disclose empty pages. An unrelated local vision model is not silently substituted or treated as a verified OCR service. Users can supply images only to selected routes with verified vision.
4. PDF reading order can differ from visual layout; images/forms/annotations are not extracted. DOCX body text only; images/drawings/fields, headers/footers/footnotes/endnotes/comments/nested tables may be omitted with warnings. Legacy `.doc` and binary spreadsheet/archive formats are unsupported.
5. Extracted text rather than original binaries is retained. Large-file retrieval can omit relevant passages; request disclosures are explicit, and targeted follow-ups can select other chunks. Conservative token reservation may reject requests that a provider tokenizer could technically fit; it is not exact tokenization.
6. Existing storage snapshots include full histories and extracted text; pagination and global storage quotas are not introduced. Protect saved storage and intentional exports. Individual submitted attachments cannot be removed without deleting their immutable conversation.

## Run / verify

```powershell
npm ci --ignore-scripts
npm run build
$env:DSH_RUNTIME_ROOT = Join-Path $env:APPDATA 'npm\node_modules\@deepseek-ai\dsh'
npm run check
npm run test:browser # Python Playwright + installed Chrome required
npm audit --omit=dev
```

Then use DSH **Plugins → Add/Install** with the absolute path to this local checkout. Confirm `application: applied`; restart the profile if `restart-required`, and refresh the existing DSH GUI. Open **Debate**. A local build alone does not update a separately installed GitHub copy or cached host module. There is no `npm start` or separate Vite application for this plugin; no same-checkout HMR watcher was verified.

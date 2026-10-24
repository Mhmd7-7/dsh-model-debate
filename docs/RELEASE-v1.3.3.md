# v1.3.3 — Document attachments

## What's new

- Attach multiple documents with the file picker or drag-and-drop in initial and follow-up composers; text is optional when files are attached.
- See each filename, size, processing/ready/error status, extraction warnings and remove control before sending.
- Read PDF pages, DOCX body headings/paragraphs/tables, TXT, Markdown, CSV/TSV and common source/config files, including Arabic and English.
- Preserve extracted attachments with their user messages across rounds, follow-ups, reloads and re-runs.
- Give every participant and final reviewer bounded source-referenced excerpts. Exact requests disclose extraction warnings and omitted chunks; raw-document support is not assumed for providers.
- Retain the existing DSH image service and verified-vision checks, local-only policy and provider restrictions.
- Add backend type/signature/encoding checks, configurable count/byte/extraction limits, parser time/memory bounds and actionable rejection of unsupported, corrupt, encrypted, oversized or scanned documents.
- Keep pending raw bytes in memory only; deleting a conversation removes its persisted extracted attachment content and request records.
- Pin PDF.js/SAX dependencies and update Zod to 4.6.7; production dependency audit reports zero vulnerabilities.

## Defaults and requirements

- 4 documents/message; 10 MiB/document; 20 MiB/message; 40 documents/conversation; 200,000 extracted characters/document.
- Node.js 22.3+ and DSH 0.2.1-rc.2.
- Install as a DSH plugin, not a standalone Web server. Built host/client bundles are included.

## Verification

- 213 automated tests passed with installed DSH runtime checks enabled, zero failures/skips.
- Genuine English PDF and Arabic DOCX extraction and submission through the built plugin's actual Cordis, Connection and durable JSON storage services.
- Multiple participants/reviewer, earlier-file follow-up, durable reopen, invalid/scanned/oversized inputs, deletion and normal text-only conversations.
- Built-client Chrome checks passed in English and Arabic with zero page errors using deterministic Fetch fixtures.

Provider execution was deterministic in these tests. Live-provider document comprehension and the authenticated production GUI were not verified; the existing GUI returned HTTP 401 to the implementation session.

## Limitations

OCR is not integrated: scanned/image-only PDFs require a searchable PDF or extracted text. Raw original document binaries are not retained or downloadable. PDF nontext content and DOCX ancillary content may be omitted with warnings. Large documents use disclosed excerpts; ask a targeted follow-up for other passages. Existing shared DSH image-object retention is unchanged.

## Install/update

In DSH **Plugins → Add/Install**, use:

```text
github:Mhmd7-7/dsh-model-debate#v1.3.3
```

Or build a local checkout:

```powershell
npm ci --ignore-scripts
npm run build
```

Install the checkout through DSH Plugin Manager. Restart the profile if requested, then refresh the existing GUI. A local build does not update a separately installed copy automatically.

See [attachment documentation](ATTACHMENTS.md) and [README](../README.md) for configuration, verification scope and full instructions.

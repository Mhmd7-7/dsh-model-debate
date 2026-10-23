# Verification report

Tested on **22 October 2026** against the existing DSH GUI at **http://127.0.0.1:3080**.

## Runtime and APIs actually checked

* Installed `@deepseek-ai/dsh`: **0.2.1-rc.2**.
* Cordis plugin framework: **4.0.5**.
* DSH LLM, storage-domain, client modules/Connection and Client UI contracts: **0.2.1-rc.2**.
* Schemastery **3.18.5**, Zod **4.4.3**.
* Node **26.3.0**, npm **12.0.2**.

Live Inspect was used before implementation for Host `llm`, `storageDomain`, `connection`, `tools`, `settings`; Client `layout` and `locale`; selected live Slots and Theme tokens. Installed documentation, declarations, registration templates and source resolved incomplete contracts. No DSH core modifications were made.

## Checks run

* `npm run typecheck`: passed (strict TypeScript, Host, core, Client and tests).
* v1.2 `npm test` with `DSH_RUNTIME_ROOT` pointing at this installed DSH: **127 passed, 0 failed, 0 skipped**. This includes deterministic virtual-time providers, image admission/security/capability tests, static Client contracts, and actual DSH runtime contract tests.
* `npm run build`: passed, producing Host ESM and native lazy ModuleLoader Client bundles.
* `node --check dist/index.js` and `node --check dist/client.js`: passed.
* `npm run smoke`: passed, **explicitly mock** end-to-end smoke, not provider inference.
* `npm pack --dry-run --json`: checked for runtime bundles, source, patch, translated metadata, original icon, docs, scripts and tests. No credentials/provider configuration are included.

The deterministic suite covers independent proposals, equal frozen parallel context (including failure metadata), sequential visibility, fair bounded targeted hybrid cycles, distinct participant validation, concurrency and request spacing, round/request/overall deadlines and review reservation, appropriate transient retries/Retry-After, Stop while responding/queued/cooling down/backing off/between rounds, late output after completion or stop, incomplete streams, malformed structured output, final-review failure/timeout, budgets/usage honesty, presets/history/export, attribution constraints, structured-memory compression and evidence-based participant issue acknowledgment.

The real-runtime tests use:

1. Actual **Cordis** lifecycle with mocked model/provider services, verifying shared route/tool operations and teardown.
2. Actual **DomainFacility + JSON storage backend**, proving valid schema/unit open, durable close/reopen, interrupted recovery, delete and rejection of an invalid storage-unit name. The owned temporary directory is verified before cleanup.
3. Actual **HostConnectionService** exact route registry/dispatch/removal, proving the full `/api/model-debate` path is required.

These tests are not mislabeled as real-provider connectivity tests.

## Live installation

Installed through DSH `plugin_manager` in the current `web` profile; final activation reported **`application: applied`**. Live Config inspection found `include:model-debate` with the intended Host schema. The connected Client reported active registrations for:

* `conversation.header.leading` — top Chat | Debate switch.
* `main`, key `model-debate` — dedicated Debate panel.
* `sidebar.panellist`, id `model-debate` — global panel entry.

Two concrete deployment defects were found and corrected rather than ignored:

* Storage units require `^[a-z][a-z0-9_]*$`; the domain is **`model_debate`**, not a hyphenated name.
* Exact Fetch registration requires the full **`/api/model-debate`** path, not a path relative to `/api`.

Real-runtime regressions now cover these constraints. An unrelated pre-existing `better-sidebar` warning (`pending`, waiting for `webRuntime`) was returned by Plugin Manager; this plugin did not modify that package.

## Real multi-model smoke test — passed

Used only existing configured models through DSH's actual LLM service and credential handling:

* **`codex/gpt-6.1-sol`** — solver.
* **`codex/gpt-6-luna`** — verifier.
* Final reviewer: **`codex/gpt-6.1-sol`** (no extra reviewer provider).

Saved debate ID: **`91351c9e-0bf8-4b02-ac27-07f737f4a7bc`**.

Question: fair independent coin tosses; distinguish the probability of heads on toss 10 after nine heads from the probability of ten heads from the start.

Observed:

* Three parallel rounds with **six published participant messages**.
* Round-one request logs contained empty shared discussion for both models.
* Round-two requests shared the same two-message published snapshot; round-three requests shared the same four-message snapshot.
* Replies addressed published message/claim IDs and named participants; one defense was retained as a revision of the author's own prior claim.
* Agreement was allowed rather than manufacturing a false dispute.
* All **seven model requests**, including reviewer, completed; no retry, timeout, missing participation or incomplete output was reported.
* Final review completed with all five requested sections. Correct result: conditional probability **1/2**; unconditional ten-head probability **1/1024**.
* Total wall-clock time approximately **44.1 seconds** (session start `1792687528095`, final update `1792687572240`).
* Adapter-reported usage: **9,352 input**, **1,688 output**, **11,040 total tokens**. These are provider-reported values, not independent billing measurements. No price was claimed.
* Installed tool `get` and Markdown `export` worked during that original verification.

This test verifies two real configured models and their actual provider route. It does not establish every configured provider's connectivity, real operation with 20 models, or independent factual verification of arbitrary answers. Arabic answer quality and live transient-provider failure behavior were not separately smoke-tested.

The smoke test changed next-run settings temporarily and the original default four-model settings were restored afterward. This is historical v1.0 evidence: at the later v1.1 verification the old sample ID was no longer available from the live plugin, so its continued presence is not claimed. The two new image discussions listed below were retained and rechecked after the final v1.1 reinstall.

## Image support (v1.1) — actual verification

Image support was added before any GitHub upload. The expanded suite passes **97 tests**, including all 16 advertised/resolved capability combinations, unchanged ordered ImageBlock references, actual captured-generation veto against text-only placeholder projection, safe batch admission, image limits, malformed rasters, interrupted/old-session schema compatibility, session-scoped previews, re-runs, exports, and static bilingual picker/paste/drop/cleanup contracts.

Actual **LocalAttachmentStore** tests proved image decoding/normalization and durable close/reopen reads. Actual **LlmRuntime/LlmAdapter** tests proved valid image blocks cross the SDK boundary with unchanged attachment references and that captured text-only modalities prevent inference.

### Live image input

A synthetic **96×64 RGB-band PNG** was submitted through the installed `model_debate` tool as raw base64, admitted by DSH, saved, passed to every turn/reviewer and retrieved through the session-scoped `image` action. This is a deliberately generated model-input fixture, **not a screenshot**. The question and filename did not disclose the expected color order.

Independent numeric decoding using the installed Sharp library confirmed source and DSH request-variant representative pixels: left **[255,0,0]**, center **[0,255,0]**, right **[0,0,255]**. The variant retained dimensions 96×64 and all three bands.

**Transport success does not establish model accuracy:**

* Saved discussion **`6814a7ae-e7b3-48d3-a0a5-89899cdccf54`** used `codex/gpt-6.1-sol` and `codex/gpt-6-luna`: two rounds, four participant responses plus review completed. Both models' descriptions were **incorrect** (uniform green vs uniform red), and the reviewer incorrectly favored green. This run demonstrates real multimodal request completion and a meaningful disagreement, **not successful visual understanding**.
* Saved discussion **`27d8e1ec-6c74-4c66-adfa-14b51b7b3a4e`** used `deepseek-official/deepseek-flash` and `our-free-model/mimo-v2.6-flash-free`. DeepSeek correctly identified three vertical **red, green, blue** bands in both turns and final review. The other route failed both requests; the discussion remained **partial**, and the review explicitly disclosed the missing independent participant. No complete two-model correctness claim is made.
* Attempting an image debate with the current `ollama/gemma3:latest` route was rejected before inference because its actual catalog/resolved configuration advertised image input as unsupported. The plugin did not override that configuration or silently drop images.

The live `image` action returned the exact admitted PNG bytes, and export retained image metadata without embedding pixel data. Provider-specific vision accuracy/connectivity varies. No GitHub repository or upload was created during image implementation; public publishing was requested separately afterward.

## Follow-up conversation (v1.2) — actual verification

**127 tests passed, 0 failed, 0 skipped** with the actual installed runtime enabled; strict TypeScript, build, JavaScript syntax, and deterministic mock smoke passed. The 27 focused follow-up tests cover same-session continuation, preserved original messages/reviews, fresh per-cycle limits, cumulative usage, model/image revalidation, Stop and late output, no false completion inherited from old participation, initial-write atomicity, legacy schema defaults, and re-run semantics. The real DSH JSON storage test closes/reopens the domain repeatedly and verifies both completed follow-ups and interrupted user turns, exact request context, and Markdown/JSON exports remain intact. Its provider is deterministic, not a live model.

Installed **1.2.0** through Plugin Manager with `application: applied`; the connected Client confirmed the existing Chat/Debate registration remained active. No replacement server or core changes.

### Live Arabic conversation after completion

Saved debate **`f30f48eb-763c-462b-9e3f-45b2a06b4ba2`**, with `deepseek-official/deepseek-flash` and `codex/gpt-6-luna`, plus DeepSeek as reviewer:

1. Original Arabic question: ten books at 20 riyals each, no discount. Two rounds/four participant messages and review completed with the correct **200 riyal** answer.
2. After it completed, the actual `followup` action supplied **15% discount, then 10 riyals delivery**. It returned the **same session ID** and a new user-turn ID.
3. Both participants used the new information, explicitly revised their original claims, and returned **180 riyals**, **20 less** than before: `200 × 0.85 + 10 = 180`.
4. The second cycle completed two more rounds/four replies plus review. The original four messages and original 200-riyal review remained unchanged; the new user turn, replies and updated review were retained in the same saved conversation and Markdown export.
5. No request failures were reported across all ten actual calls. The new cycle took approximately **26.4 seconds** from user-turn commit to review completion. Provider-reported cumulative usage was **23,935 input**, **7,236 output**, **32,451 total** tokens; provider totals need not equal the sum of the reported components and are not independent billing measurements.

The caller's next-run participant/settings selections were restored after the smoke. The demonstration is retained for manual inspection; no autonomous follow-up is scheduled. Browser typing/click geometry remains unverified because no browser-control tool was supplied. Follow-ups accept text; original saved images continue to be sent, but new image attachments in follow-ups are not implemented.

## Rendering, diagnostics, retries and continuation images (23 October 2026)

**170 tests total. Without `DSH_RUNTIME_ROOT`, 162 pass and 8 optional runtime tests skip; with the installed DSH runtime enabled, all 170 pass with 0 failures and 0 skips, including actual DSH storage, attachment and LLM contracts plus official DeepSeek/pi-ai parser fixtures.** Strict typecheck, build, `node --check dist/index.js`, `node --check dist/client.js`, deterministic smoke and `npm pack --dry-run --json` passed. No DSH core file or user configuration was modified.

### Confirmed causes

1. **Markdown/math/RTL:** published text was rendered by a plain-text `Plain` component. The stored model text already contained Markdown and TeX (including the Arabic session above), so raw markers were displayed. This was a rendering defect, not provider corruption. Separately, prompts described participants by internal IDs (`p3`, `p-…`), and models repeated those IDs in public prose. List markers expose a browser fact: `dir="auto"` does not inherit through nested list/paragraph elements, so Arabic list markers could remain LTR even with RTL paragraph text.
2. **Request activity:** the task object kept one `error` field across retries. A failed reviewer attempt left `error` populated; a later attempt set `status: completed` without clearing it. Correct fix is attempt-scoped state, not hiding the old alert.
3. **Continuation composer:** both request validation and the engine explicitly rejected images on `followup`; the UI had no file/paste/drop path and said follow-ups were text-only. This was missing functionality throughout the chain, not merely a missing button.
4. **DeepSeek empty responses:** a historical saved session (`beac5be2-…`) shows `deepseek-official/deepseek-flash` with image input, reasoning `high`, and four failed requests, each ending `Provider returned no public response text.` after `attempt: 2`. The old adapter had no diagnostics, so the exact cause (reasoning-only, tool-only, malformed, interrupted, or genuine zero-content stop) is **not recoverable** from that record. The installed SDK source confirms that this plugin can only extract indexed public `text-delta`/`block-end` chunks; reasoning and tool calls are deliberately separate, and successful status/HTTP metadata is not exposed by the stream contract. No live model request was made to the old provider configuration by the subagent; the anonymous API probe returned HTTP 401. The provider is not assumed down and the model name was not changed.

### Fixes verified by tests

* Safe GFM AST renderer (no raw HTML execution, no remote Markdown images), headings/bold/lists/links/quotes/tables/fenced + indented code, bundled KaTeX for `$…$`, `$$…$$`, `\(…\)`, `\[…\]` with `trust: false`, bounded expansion and per-equation macros.
* Arabic/mixed-English direction: prose `dir=auto`; lists and quotes inferred from first strong authored prose; code/math LTR-isolated; incomplete streaming constructs remain readable. Dedicated tests cover all Markdown streaming prefixes and dangerous HTML/URL/TeX inputs.
* Participant labels replace only exact, boundary-delimited internal IDs in AST text—never code, math, HTML or link destinations. Prompts now ask for public labels and reserve IDs for structured fields.
* Adapter assembly uses first-seen block order, terminal finish boundary, reasoning and tools never become public text, tools are explicitly unsupported, malformed/split/closed chunks are handled, and diagnostics are sanitized. Provider tests cover normal, reasoning-only, tool-only, empty, malformed, interrupted, unterminated SSE, split SSE (1–13 byte fragments), plain JSON on streaming endpoints, 429 and missing finish. They are synthetic transport fixtures against installed adapters, **not live calls**.
* Retry state: attempts have their own status/error/partial/diagnostics and correlation ID. Successful retries clear the current error; prior errors remain in labeled attempt history; stale callbacks from older/cancelled attempts cannot overwrite newer results; legacy tasks with only a stale error are labeled as legacy rather than misattributed.
* Continuation attachments: selection, clipboard paste, drag-and-drop, thumbnails, remove, processing lock, validation errors, draft/attachment preservation on failure, text+image, text-only and image-only sends, multiple successive image turns, preview after reopen, older debates without images, and per-message/cumulative limits. Tests also verify original+new image refs reach every participant and reviewer in a single deduplicated request, and unsupported/unknown image models block before a user turn is committed.

### Live provider evidence

A live one-round isolated debate was run through the installed plugin after the adapter implementation (the installed bundle still predates this local rebuild):

* Saved debate **`a58343c0-2d8e-4d81-a930-af5c65b1d4a2`**.
* `deepseek-official/deepseek-flash`, reasoning `high`, **public answer completed**: `2 + 2 = 4.` with no reasoning leakage.
* `codex/gpt-6.1-sol` control participant and reviewer also completed; final review had all five sections.
* Status was `partial` only because the intentionally minimal one-round settings allowed no reply relationship; this is not a provider failure.

A second live isolated run used the actual original-image path with a synthetic **RGB-bands PNG**:

* Saved debate **`5c0c6ecb-b560-4be1-9ef1-4c51fefe3ab9`**.
* `deepseek-official/deepseek-flash`, reasoning `high`, image attached, **public answer completed** and correctly described **red, green, blue** left-to-right from the 96×64 image.
* `codex/gpt-6.1-sol` control and reviewer were **rate limited** by their provider, so the discussion remained `partial`, no review was produced, and the UI correctly displayed the provider failure rather than a verdict.

Together these live runs confirm that the current DeepSeek route can serve both a normal public answer and a real image+reasoning request, so a blanket "DeepSeek is down" or "the model name is invalid" explanation is false. The temporary runs changed the then-current next-run settings and active selection; both were restored to the exact pre-verification settings and original active debate afterward. The two temporary sessions are retained, clearly titled as verification runs, for inspection; no user-owned debate was modified. They do **not** reproduce the historical empty response, and they did not exercise the locally rebuilt diagnostics because the installed plugin is still the GitHub copy. The historical exact cause therefore remains unconfirmed; installing this build and repeating the original image request will expose the new attempt category. The live image run used the original-image path, **not** the new continuation-attachment code.

### Continuation image evidence

No live **continuation** image request was made against the rebuilt adapter; the live image run above exercised only original question images through the installed old bundle. Original/new image delivery is verified with:
* Actual DSH `LocalAttachmentStore` durable admission, close/reopen, image-only follow-up and exact image preview in `tests/followup-runtime.test.ts`.
* Deterministic request assertions that every participant/reviewer receives the ordered original + continuation images, with source labels and no duplicates.
* Built-client Chrome interactions using a synthetic 96×64 RGB PNG (not a screenshot): file selection, paste, drag-and-drop, remove, validation rejection, failed-submit retention, text+image send, image-only send, second continuation, and persisted preview retrieval.

### Genuine browser screenshots (fixture, not authenticated GUI)

Real Chrome (Playwright, installed Chrome) loaded the **built plugin UI** with a deterministic `fetch` fixture and synthetic data. The fixture banner is part of the screenshot. These files are genuine captures of that fixture, not the authenticated DSH page and not live provider output:

* [Arabic Markdown/math/RTL fixture](../docs/screenshots/arabic-markdown-fixture.png)
* [Continuation images fixture](../docs/screenshots/continuation-images-fixture.png)
* [Browser check record](../docs/screenshots/browser-results.json)

The checks asserted: one rendered heading, one table, at least three KaTeX elements, LTR code, no executed `<script>`, no `p1` in rendered prose, RTL list markers, file selection/removal, clipboard paste, drag-and-drop, validation error, failed-submit draft retention, text+image submit, image-only submit, multiple continuation turns and saved previews; no page errors. The authenticated GUI at `http://127.0.0.1:3080` answered **HTTP 401** to the unauthenticated probe, so its rendered appearance was not claimed.

## Visual verification limits

The production authenticated GUI was not visually verified because no authenticated browser session was available. No personal browser profile/token was inspected, and the screenshots above are explicitly labeled deterministic fixture captures. They are not presented as live-provider or authenticated-GUI evidence.

The existing GUI should be refreshed after installing the final rebuild. The installed web profile points to `github:Mhmd7-7/dsh-model-debate`, so this local build is not yet the loaded module; install the built package/checkout through Plugin Manager (or restart that profile) and refresh the GUI. No same-checkout `dev:web` watcher was verified and no replacement server was started.

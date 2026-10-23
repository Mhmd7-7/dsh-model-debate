# Model Debate for DeepSeek Harness

A complete, self-contained DSH bundle for observing an evidence-first exchange between **2–20 distinct configured models**. Proposals, named objections, defenses, revisions, evidence limitations and final evaluation are retained with immutable attribution. This is not a collection of independent answers labeled a debate.

**Compatibility checked:** DSH **0.2.1-rc.2**, Cordis **4.0.5**, DSH LLM/storage/Client packages **0.2.1-rc.2**, Node **26.3.0** (runtime requirement Node 22+). Versions are deliberately pinned: this plugin does not grant a compatibility exemption on another DSH version.

## Installation

**Requires:** DeepSeek Harness **0.2.1-rc.2**, Node.js **22 or newer**, and at least **two configured model routes** for running a debate. Install this as a **DSH plugin**, not a standalone application.

### Option 1 — Install in the DSH GUI (recommended)

1. Open your existing **DeepSeek Harness Web GUI**.
2. Open **Plugins** → **Add / Install**.
3. Paste this GitHub package source into the install field:

   ```text
   github:Mhmd7-7/dsh-model-debate
   ```

4. Select **Install** and enable **Model Debate** if prompted. The repository already includes the built plugin, so **you do not need to clone it, build it, or run npm commands** for this method.
5. When installation reports **`application: applied`**, refresh the page. If it reports **`restart-required`**, restart that DSH profile first, then refresh.
6. Open **Debate** using the **Chat | Debate** switch, or choose **Model Debate** from the global panel list. Choose **New debate**, select your models in **Settings**, and send your question.

> Installation affects every session in the selected DSH profile. Compatibility is deliberately pinned to DSH **0.2.1-rc.2**; do not bypass a version mismatch warning.

### Option 2 — Ask your DSH assistant to install it

Copy this message into a DSH chat where Plugin Manager is available:

```text
Install and enable the Model Debate plugin in my current DSH profile from github:Mhmd7-7/dsh-model-debate using the plugin_manager tool. Report whether activation was applied or a restart is required.
```

The equivalent **`plugin_manager` tool call** is below. This JSON is **not a terminal command**:

```json
{"action":"install_bundle","target":"github:Mhmd7-7/dsh-model-debate"}
```

### Open the installed plugin

Use your existing DSH Web GUI (for example **http://127.0.0.1:3080**), not a separate development server. The Debate panel includes its own switch back to Chat.

The switch uses `layout.selectPanel()`; it does **not** create/change the active Chat session or rewrite Chat history. Debate history is separate plugin-owned durable storage. DSH's ordinary outer workspace sidebar remains intact: the plugin adds a narrow debate-history column inside its supported main-panel surface instead of replacing DSH's sidebar.

## Build and install from a local checkout

Clone [Mhmd7-7/dsh-model-debate](https://github.com/Mhmd7-7/dsh-model-debate), then:

1. In this directory, install build/test dependencies without lifecycle scripts and build:

   ```powershell
   npm ci --ignore-scripts
   npm run check
   ```

2. In DSH **Plugins**, use **Add / Install** and select this directory (or enter its absolute package path). The supported agent equivalent is:

   ```json
   {"action":"install_bundle","target":"C:\\path\\to\\dsh-model-debate"}
   ```

   This is a call to DSH's `plugin_manager` tool, not an npm command. It manages the profile dependency and bundle selection; do not hand-edit DSH's profile manifest or patch.

3. Confirm the result says `application: applied`, then refresh the existing GUI. If it says `restart-required`, restart that DSH profile before opening the panel. Installation affects **all sessions in that profile**.

The directory is linked by local installation: keep it available. To update built code, rebuild then disable/remove and reinstall through DSH Plugin Manager for a fresh module generation, or restart the profile. There is no promise of automatic source hot reload: no same-checkout `pnpm run dev:web` watcher was verified. No DSH core source was modified and no replacement Web server was started.

To uninstall, use DSH Plugins → Model Debate → Remove, or `plugin_manager` action `remove_bundle` with target `@local/dsh-model-debate`. Plugin-owned saved discussions are not silently erased on uninstall.

## Keep talking after the result (version 1.3)

A result no longer closes the conversation. At the end of a saved debate, use **Continue the conversation** to send a new question, correction, or additional information. Every participant responds to your latest message with the original question, previous discussion, all prior user additions, and earlier reviews in context. The reviewer then updates the synthesis. Your message and the new replies remain in the **same debate**; earlier answers and reviews are retained, not overwritten.

* Wait until the current cycle finishes, or press **Stop**, before sending the next message.
* Each follow-up starts a fresh bounded cycle using the debate's saved participants/settings and all original and earlier continuation images. Time, reply limits and optional token allowance apply **per cycle**; usage and exact request logs remain cumulative. It spends provider resources again.
* A continuation accepts **text, new images, or both**, including an image-only message. Add files, paste, or drop them in the continuation composer; preview and remove them before sending. New images are saved with that user turn and included in later cycles and reviews. The **20 distinct images per conversation** limit is explicit; provider-unsupported models block the send rather than dropping images.
* Up to **30 follow-ups**, **30,000 characters each**, within the saved shared-context budget. User additions, continuation images and previous reviews are never silently removed to fit: if the preserved context is too large, sending fails visibly without adding the message.
* A failed/partial follow-up cannot inherit `completed` status from a previous successful cycle. Stop still cancels without launching a review. Re-run starts a fresh debate retaining the original question, images, and all user additions, but not previous model answers.

The agent operation is `model_debate` with `{"action":"followup","id":"…","message":"Here is some additional information…"}`. The GUI uses the same operation.

## Image questions (version 1.1)

Use **Add images**, paste an image into the composer, or drop image files onto it. PNG, JPEG, WebP and GIF are supported. Review/remove thumbnails before starting. The plugin accepts up to **4 images**, **10 MiB per image**, **20 MiB total**, further restricted by the current DSH attachment policy. A nonempty question is still required.

Images are validated and normalized by DSH's durable attachment service. Each enabled participant **and the final reviewer** must have positively advertised image support; text-only and unknown-capability models are blocked rather than receiving a text placeholder. Choose image-capable models yourself—selection is never silently changed. Every turn, including final review, receives the same ordered original normalized images. Text inside an image is untrusted input, not permission to execute actions.

**Continuation images:** when continuing a debate, new images are admitted as a bounded batch (4 images, 10 MiB each, 20 MiB total per message, subject to the DSH policy), stored against the user follow-up that introduced them, and included once in every later participant and final-review request. The request manifest distinguishes **original** images from each **continuation** image; duplicate attachment content is sent once while both origins remain recorded. Image-only continuations carry an explicit inspect-and-answer instruction so text-only request schemas always receive the original question and discussion context. If a selected model lacks confirmed image support, the continuation is rejected before the user turn is saved; images are never discarded or described as seen by a model that cannot see them.

Saved sessions retain image references and normalized-image previews across reloads. Re-run reuses the saved attachments; it fails visibly if images are missing or a selected model is no longer image-capable. The local DSH attachment backend retains content-addressed image objects; deleting a debate does **not** automatically garbage-collect shared image files.

**Model quality:** advertised image support is a capability check, not an accuracy guarantee. The live verification found correct RGB-band recognition on the configured DeepSeek vision route, incorrect color descriptions on two configured Codex models, and failures on a free-model route. Check important visual claims yourself; see `docs/VERIFICATION.md` for the exact results.

**Privacy:** images are sent to all selected participant/reviewer providers. Exports contain image names, dimensions, and durable references, **not embedded image pixels**; moving an export to another DSH installation does not transfer image files. The provider may downscale image request variants. Image-token costs cannot be reliably predicted through this SDK, so optional token-budget enforcement is unavailable for image debates; clear that budget or remove the images. Provider-reported actual usage is retained when supplied.

## First debate

1. Choose **New Debate** and open **Settings**.
2. Enable 2–20 distinct **provider/model** identities from the active DSH catalog. Four are selected initially when available; two or three are used if that is all the catalog offers. With fewer than two, configure additional routes in DSH Settings → Models. No IDs are invented or silently substituted.
3. Reorder participants, choose optional visible roles/instructions and supported generation controls. Select a reviewer from the same models or another advertised model. No additional paid reviewer is required.
4. Enter an English or Arabic question and **Start debate**. Interface language uses DSH's locale service; English and Arabic are supported. Mixed-language messages use automatic text direction and isolated identities.
5. Watch stage/overall timers, statuses and incomplete streaming previews. Published prose is rendered as safe GitHub-flavored Markdown: headings, emphasis, lists, links, blockquotes, tables, task lists and fenced/indented code; raw HTML is shown as text rather than executed. Inline `$…$`/`\(…\)` and display `$$…$$`/`\[…\]` math use bundled KaTeX with `trust: false` and no remote fonts. Arabic paragraphs and lists follow their first strong prose direction, mixed English is bidi-isolated, and code/math stay LTR. While a response streams, incomplete constructs are shown as readable text until the completed message arrives. Expand structured claims, objections, original provider output, issues and exact request/configuration details.
6. **Stop** cancels outstanding work and never launches review. Use **Review available discussion** separately if wanted. Final review can fail; that produces an explicit warning rather than a fabricated verdict.
7. Copy the final answer, export Markdown/JSON, rename/delete inactive sessions, or re-run into a **new** session. Applying/editing settings affects future runs only.

### Presets

**Quick Debate:** 2 rounds, 30-second stage/request limits, 2-minute overall limit, 30-second reserved review, 3,000-character response guidance. **Detailed Debate:** 5 rounds, 120-second stages, 90-second requests, 15-minute overall limit, 120-second reserved review, 10,000-character response guidance. Both are editable presets, not promises that every participant or verification will finish. Save, apply, rename, duplicate and delete presets in Settings.

## Scheduling semantics

* **Parallel rounds (default):** round 1 independently answers the question; round 2 sees one frozen snapshot of published proposals; round 3 sees one frozen snapshot of prior rounds and answers objections. Additional rounds alternate focused challenges and defenses/corrections. Arrival order cannot change another request's stage context.
* **Sequential turns:** participants speak in configured or rotating order. Later turns see earlier published turns and are explicitly labeled as having more context. Optional delays apply between turns, not after the final turn.
* **Hybrid:** independent initial proposals, then fair rotating targeted-reply cycles. At most one turn per participant per cycle; participant and total limits prevent a pair monopolizing the discussion. Reply relationships are retained. This is bounded deterministic targeting, not an unbounded autonomous message router.

Defaults: **3 rounds × 60 seconds**, **5 minutes overall**, **60 seconds reserved for review**, **60 seconds/request**, at most **4 simultaneous requests**, no intentional cooldown. Host/provider constraints further limit admission.

Round deadlines start before queuing. Queue wait, spacing, retry delay and turn/round cooldown all count against their deadlines. Each request is capped by request, stage and overall remaining time. Final-review reservation stops admission of debate work early. Global and per-provider spacing regulate **request starts**, without holding concurrency slots during cooldown/backoff. A provider's Retry-After is honored when time permits; only approved transient codes retry, bounded by both provider policy and debate limits.

All three stopping bounds—rounds/turns, time and resources—apply regardless of custom instructions. A single response or only independent proposals cannot receive `completed` multi-model-exchange status. Participant agreement is separate from correctness. Optional early completion requires recorded owner revisions, specific objector acknowledgments, evidence and verification methods; those remain **participant-reported**, not independent verification.

## Settings and resource honesty

Every enabled setting is schema-validated and saved on the Host: participants/order/roles, mode/speaking order, global/provider concurrency, queue/turn/reply limits, rounds/timeouts/deadlines/reservation, pacing, retry/backoff, targeting/quotes, language/length/shared-context budgets, early stopping, reviewer/instructions and optional token budget.

* **Generation options:** exact advertised reasoning-effort IDs and maximum output tokens. The automatic output cap includes a conservative public-answer allowance plus headroom for reasoning tokens; providers such as DeepSeek count private reasoning against the same output limit, so a cap sized only from response characters can end with reasoning and no public answer. An explicit per-participant maximum is still honored exactly and may deliberately truncate output. Temperature, top-p and stop sequences are visibly unsupported: this DSH capability contract does not advertise portable support, and its pi-ai adapter explicitly rejects stop sequences. No pretend knobs are sent.
* **Response length:** prompt guidance plus token cap; overlength or provider-truncated output is marked incomplete. Original provider text up to the 100,000-character safety ceiling is preserved, not silently rewritten.
* **Token budget:** admission uses conservative UTF-8-byte input reservations plus requested output caps and reserves a portion for review. Reported usage replaces that reservation when available; unavailable usage retains an explicitly estimated reservation. This is not exact token prediction or a guarantee about provider billing/tokenizer behavior. Requests already sent may incur charges after cancellation.
* **Cost budget:** disabled/unavailable. No reliable provider-neutral text-pricing API was exposed by this SDK; the plugin does not invent a price or call estimated costs exact.
* **Context compression:** deterministic attributed excerpts preserve all structured central claims, objections, corrections, evidence and unresolved issues. Unstructured responses remain verbatim rather than guessing their central claims. Compression is recorded. If the budget cannot preserve that memory, the turn fails visibly rather than silently dropping disagreements.

### Provider output and request diagnostics

Only public answer text is published. Provider reasoning is never retained as an answer or used to bypass an empty-response failure; tool-call chunks are never executed, and this plugin advertises no tools. Tool-only output fails explicitly; mixed public text plus tool calls is published as incomplete. A stream stops at its terminal `finish` event, ignores later or replay content, and preserves available partial public text on interruption. Empty, malformed and truncated responses have distinct failure categories rather than a generic "failed".

Each request attempt carries a plugin-generated correlation ID and a sanitized diagnostic snapshot (provider/model, phase, category, available HTTP status, finish reason, chunk counts, response-field **names** only, reasoning/tool observation flags and public-text length). Failures that cannot be retried safely—authentication, request validation, unsupported images, empty public output, reasoning-only or tool-only output—are not retried. Bounded retries apply only to provider-approved transient categories, and a retry must succeed on its own.

Attempts are tracked separately. A successful retry clears the task's active error but retains earlier failures in **Attempt history**; late callbacks from a cancelled or older attempt cannot overwrite a newer result. Legacy saved tasks that recorded only a stale error are migrated to a separately labeled legacy note (when the producing attempt is unknowable) instead of presenting that error as the current result.

### Verify DeepSeek or any other provider

The activity panel now distinguishes a genuine empty answer from truncated, cancelled or malformed streams. For an empty DeepSeek response, open **Attempt history → Diagnostics** and compare `category`, `finishReason`, `chunks`, `publicTextLength`, `reasoningObserved` and `toolsObserved`. `reasoning-only` means the provider streamed private reasoning but no public text; the plugin will not publish that reasoning. `tool-only` means a tool-call response was received although the plugin advertises no tools. The exact configured endpoint and model mapping remain owned by DSH; this plugin does not read credentials or guess alternate APIs.

### Host-enforced policy

Plugin Config (ordinary DSH configuration, separate from debate presets) exposes:

```yaml
localOnly: false
providerLimits: {}       # exact route → maximum concurrency
providerSpacingMs: {}    # exact route → minimum start interval, milliseconds
maxConcurrentRuns: 1     # only 1 accepted; one scheduler owns all plugin calls
metadataTimeoutMs: 5000
```

Browser/tool settings cannot relax these limits. Effective restrictions are captured in each run. There is no inspected universal DSH global `localOnly` API; the plugin implements an explicit fail-closed Host policy. `localOnly: true` accepts only advertised routes whose configured endpoint can be verified as literal loopback. Unknown/environment-derived endpoints are denied. **A loopback gateway can still forward remotely**: this is an endpoint policy, not a firewall or proof that computation stays local. Use a trusted local inference server for sensitive data. Existing DSH adapter authentication and routing restrictions remain authoritative.

## Persistence, safety and architecture

Source modules separate integration (`index`), model adapter (`adapter`), scheduling (`scheduler`), orchestration (`engine`), validation (`state`), content/export (`content`), storage (`persistence`), durable image admission (`images`) and UI (`client`, `client.css`, `i18n`). Build output contains a Host ESM entry and the native DSH lazy Client factory.

DSH `storageDomain` owns the `model_debate` domain, version 1. Settings/presets and complete session snapshots are validated and durably written. Model-visible exact prepared requests are stored before dispatch. Reloaded unfinished runs become **interrupted**; no fake execution or automatic continuation is shown. Failed storage writes do not fake a committed cache. Schema/version errors fail visibly rather than delete history.

Only DSH's registered LLM service performs inference, with an empty tool list. API keys, provider endpoints/headers and private provider configuration are never sent to the client, exported or read directly by this plugin. Provider errors and diagnostics are sanitized: attempts record provider/model, a plugin-generated correlation ID, available numeric HTTP status, response-field presence, finish reason, chunk counters, public-text length and a closed failure category—never authorization headers, API keys, provider request IDs, message bodies or private conversation text. User-supplied question/instructions and model answer text are exported by design: do not paste secrets there. Published messages/claim IDs and ownership are assigned and validated by the Host; models cannot change another participant's attribution or rewrite earlier messages. The GUI parses model prose into an allowlisted Markdown AST and renders React elements; raw model HTML is displayed literally. KaTeX is the only HTML sink and runs with `trust: false`, bounded expansion and per-equation macros.

The plugin requests concise public rationale, assumptions, evidence, corrections and verification methods—not private chain-of-thought. It provides **no browsing, code execution, autonomous external actions or truth oracle**. Citations supplied by models may remain unverified and are labeled accordingly. The reviewer must disclose corrections, remaining uncertainty and missing participation.

GUI operations and the `model_debate` agent tool call the same validated Host operation function. The exact Fetch endpoint is `/api/model-debate`, protected by DSH Connection authentication/trust/owner access; no second server or unauthenticated route exists.

## Validation

```powershell
npm run check
node --check dist/index.js
node --check dist/client.js
npm run smoke
npm pack --dry-run --json
```

`npm test` now compiles the suite and runs Node's test runner without process-isolation pipes, so it also works in a restricted environment; `npm run check` runs typecheck, all tests, then build. Tests use deterministic providers and virtual time for initial independence, equal parallel snapshots, sequential visibility, fair targeted hybrid turns, validation, concurrency/start spacing, timeouts/retries, deadline/review reservation, Stop at request/queue/cooldown/backoff, late responses, partial/malformed output, reviewer failure, settings/presets/history/exports and interrupted recovery. Adapter tests cover exact identities/capabilities, sanitized failures, streaming assembly, first-seen block order, reasoning/tool/empty distinctions, split events, cancellation and diagnostics. Markdown tests cover mixed Arabic/English GFM, tables, links, quotes, code indentation, TeX, unsafe HTML/URLs, every streaming prefix, recursive/oversized math and RTL list markers. Continuation tests cover text+image, image-only, multiple successive images, unsupported models, validation/persistence failure, preview lookup, reopen and legacy records without images. The optional installed-runtime tests add real DSH storage, attachment and LLM-contract checks; they do not turn synthetic provider fixtures into live connectivity.

To also run opt-in tests against this machine's **actual installed DSH/Cordis** runtime:

```powershell
$env:DSH_RUNTIME_ROOT = Join-Path $env:APPDATA 'npm\node_modules\@deepseek-ai\dsh'
npm test
```

These test activation/disposal, actual attachment raster validation/normalization/durable reads, and real storage/Connection contracts while keeping inference mocked. They do **not** establish real provider connectivity. See the verification report for actual live-debate results and visual-verification limits.

## Known limitations

* This is an external main panel, not a replacement Chat root/sidebar. The normal DSH outer workspace list remains visible.
* One active run/review at a time. Providers control true server-side cancellation and can still bill already admitted requests.
* No provider-neutral pricing or JSON-response-format SDK; structured output is prompt-requested with validated plaintext fallback.
* No external verification tools. Early issue resolution is participant-reported and cannot prove truth.
* Single-process storage-domain visibility follows DSH's backend. Very large histories are currently sent as full snapshots; pagination is not implemented.
* A browser-controlled authenticated DSH session was not available in this task. The built client was exercised in real Chrome against an explicitly labeled deterministic fetch fixture (including Arabic RTL, math, code, file selection, paste, drop, validation, failed-send draft retention, image-only sends and saved previews). The authenticated production GUI itself was not visually re-verified; screenshots in this repository's verification notes are fixture screenshots, never presented as live-provider or authenticated-GUI evidence.
* The installed web profile currently points at `github:Mhmd7-7/dsh-model-debate`. A local rebuild does not replace that installed copy or invalidate Node's module cache: install the built package/checkout through Plugin Manager (or restart the profile) and refresh the GUI to see these changes live.

Detailed integration findings are in `docs/API-NOTES.md`; test/live evidence is in `docs/VERIFICATION.md`.

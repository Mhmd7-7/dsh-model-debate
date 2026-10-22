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
* v1.1 `npm test` with `DSH_RUNTIME_ROOT` pointing at this installed DSH: **97 passed, 0 failed, 0 skipped**. This includes deterministic virtual-time providers, image admission/security/capability tests, static Client contracts, and actual DSH runtime contract tests.
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

## Visual verification limits

No authenticated browser-control/screenshot tool was exposed. No browser was launched from shell, no personal browser profile/token was inspected, and no screenshot/mock page was fabricated.

The actual connected page confirmed Client registration. That is **not** proof of rendered appearance, successful manual button interactions, responsive geometry, light/dark visual parity, or Arabic RTL layout. Those remain manual verification items. Styling is scoped and theme-token based; source/type checks cover the controls and native-dialog accessibility. A static mobile navigation conflict was identified and corrected, but no genuine screenshot is claimed.

The existing GUI should be refreshed after the final rebuild/install. No same-checkout `dev:web` watcher was verified and no replacement server was started.

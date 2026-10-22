# Model Debate: host API and persistence notes

## Compatibility and discovery

Implementation target: **DeepSeek Harness 0.2.1-rc.2**, **Cordis 4.0.5**, Node.js 22+. Exact Host contracts were independently inspected through `cordis_inspect_list` and `Service.listService` for `llm`, `storageDomain`, `connection`, `tools`, and `settings`. Installed package source resolved remaining Config/lifecycle questions. These are version-specific integration notes, not a promise of compatibility with other DSH releases.

Only the registered `llm` service is used. There is no model-hub routing, direct HTTP model client, invented provider/model ID, credential reader, provider installation, or automatic model substitution. `listProviders()` returns active registered `{id,name}` routes. `listModels(provider)` returns advertised `{provider,id,name}` models. Core routing treats catalog membership as advisory, but Model Debate deliberately treats it as a submission allowlist. Every call/retry rechecks the exact route and advertised model before preparation.

`resolveModelInfo(provider, model, signal)` supplies `reasoning.efforts[].id`, `context.contextWindow` and `inputModalities` when available. Image support conservatively merges advertised and resolved modalities: absent is unknown; any explicit exclusion vetoes a conflicting image claim. Every image dispatch refreshes capability checks and checks `prepared.inputModalities` on the captured adapter generation, preventing DSH's text-only image-placeholder projection. Missing metadata is displayed honestly; it does not create guessed capabilities. Discovery has two bounded windows (provider catalogs, then exact capabilities), each at most `metadataTimeoutMs` by default 5 seconds; asynchronous lookups run with bounded parallelism. A provider `listModels` API has no AbortSignal, so a timed-out backend lookup may continue internally, but cannot hold the page initialization indefinitely. Capability lookup and call preparation receive abort signals.

## Calls, output and failures

`prepareCall(config, signal)` resolves controls and captures one adapter registration. The engine's `onPrepared` callback persists the concrete prepared `{provider,model,maxTokens?,reasoningEffort?}` before `prepared.stream(options)` dispatch. The stream receives (v1.1 appends validated original image blocks after the text part):

```ts
{
  ...prepared.config,
  system,
  messages: [{ role: 'user', content: [{ type: 'text', text: prompt }] }],
  tools: [],
  signal
}
```

No `response_format`/JSON-mode property exists in this SDK's inspected `GenerateOptions`; structured debate output is requested in the prompt and validated by application logic. Reasoning effort uses only an advertised exact ID and is revalidated by `prepareCall`. Credentials and authentication remain entirely inside the owning DSH LLM adapter.

Public text is assembled by block index. `text-delta` appends within its block; a `block-end` text block replaces that block's deltas, avoiding duplicate output. `onText` receives the accumulated public text. Private `reasoning-delta`/reasoning blocks, replay state, and tool chunks are ignored; tool suggestions are never executed. Output is capped at 100,000 characters before application-specific clipping.

`usage` uses actual `{inputTokens,outputTokens,totalTokens?}` when supplied; absence is not invented as zero. `finish.reason.kind === 'stop'` is complete; `max-tokens`, unexpected termination, and tool-call-only completion are incomplete. Error/aborted terminal chunks raise `ModelFailure`, preserving public partial text and known usage. The original AbortSignal is delivered to streaming and cancellation is raced against iterator progress, so a stalled provider iterator cannot prevent Stop from settling. Iterator cleanup is requested without waiting forever for an uncooperative provider; cancellation cannot revoke provider-side billing already incurred.

Provider error messages, bodies, request IDs, stack traces, headers, and private config are never copied to public failures. Known stable codes and numeric retry-after metadata are preserved with generic safe guidance; unknown failures map to nonretryable `REQUEST_FAILED`. Provider-generated answer text itself is not secret-scanned: users must not put credentials in their question or prompts. Retry ownership stays in the engine. `providerRetryPolicy(provider)` supplies retry ceilings/codes/backoff defaults; the adapter performs one call only. Provider `always` retry mode does not override explicit debate retry counts, resource bounds, or deadlines.

## Host policies and local-only meaning

The plugin injects `llm`, `storageDomain`, `connection`, `tools`, `settings`. Its ordinary (nonvolatile) Host Config is a **Schemastery** schema. Cordis accepts any Standard Schema for activation, including Zod, but this DSH version's `settings.describe()` expects Schemastery `meta`/`dict` nodes; plain Zod Config would break that discovery path. Zod is used separately for persisted/application values.

| Host option | Default | Effect |
| --- | --- | --- |
| `localOnly` | `false` | Deny any provider without a verified explicit loopback endpoint. |
| `providerLimits` | `{}` | Per-provider concurrent request maximum; effective run settings take the smaller limit. |
| `providerSpacingMs` | `{}` | Per-provider minimum start spacing; effective run settings take the larger delay. |
| `maxConcurrentRuns` | `1` (only accepted value) | One active debate/review per plugin instance; ensures host limits cover all plugin calls. |
| `metadataTimeoutMs` | `5000` | Bounded catalog/capability/preparation timeout window. |

Host policy is not accepted from the browser/tool settings object. The engine retains effective scheduling limits in each immutable run settings snapshot. User preferences may describe looser future-run limits, but the host clamps them when starting. Plugin policy changes require ordinary configuration reactivation; they are not silently changed by debate presets.

No uniform global DSH `localOnly` service or configuration contract was found in the inspected runtime. This plugin does **not** claim to implement an undocumented global policy. For conservative classification it uses `llm.listConfigurableProviders()` and its `settingsNs`/`settingsPath` addresses, then `settings.describe({redactSecrets:true})` **on the Host only**. It reads only the addressed profile's explicit `baseURL`. Defaults, environment-derived URLs, unknown profiles, ambiguous routes, credentials in URLs, and query/fragment-bearing endpoints are not proof of locality and are denied. Literal `localhost`, `127.0.0.0/8`, and `::1` HTTP(S) endpoints are eligible. Only a boolean locality flag crosses to clients, never endpoints, headers, credentials, config objects, or settings descriptors.

**Loopback is an endpoint restriction, not proof of local computation or a firewall.** A local gateway can forward requests to the Internet; DSH adapters/proxies/redirect handling remain trusted runtime infrastructure. Neither provider names nor model names establish locality, and this feature does not sandbox model providers. Only configure a trusted local inference endpoint when data must remain on the machine.

## Persistence and recovery

The Host opens this ordinary storage-domain declaration (no `defineDomain` import required):

```ts
ctx.storageDomain.open({
  name: 'model_debate', version: 1, layout: 'single',
  tables: {
    sessions: { valueSchema: sessionSchema },
    preferences: { valueSchema: preferencesSchema },
  },
})
```

The JSON backend requires unit names matching `^[a-z][a-z0-9_]*$`; the durable domain name is `model_debate` (underscores), while the plugin and Fetch route retain their hyphenated names. The initial hyphenated domain declaration was rejected in live activation and corrected; no history was written under that invalid name.

`Repository(domain)` initializes synchronously from the already-open domain's table views. `ready` is also an already-resolved promise. Sessions are keyed by their exact ID; preferences use the single key `global`. Exposed methods are `list()`, `get(id)`, `save(session)`, `remove(id)`, `getPreferences()`, `savePreferences(prefs)`, `recover()`; `flush()` drains issued writes for lifecycle teardown. Every boundary clones data and validates writes. Save snapshots are captured when invoked and writes/deletions are serialized so slower older writes cannot overwrite newer ones. Reads reflect completed durable writes. A failed write rejects its own caller without poisoning the queue or falsely committing it to the repository cache.

Startup calls `recover()`: `restoreSession` converts saved `running`/`reviewing` sessions and unfinished tasks to `interrupted`, preserving available transcripts and explicitly noting that no automatic continuation occurs. Recovery is written before accepting requests. Schema/version errors fail opening/initialization instead of silently dropping history. Storage location, backend and durability are owned by DSH's configured storage domain facility; there are no ad-hoc files or session-log events.

Effect disposers are registered in dependency order and run in reverse: unregister tool/Fetch/service, stop/dispose the engine and drain repository writes, then close the domain. The caller owns `Domain.close()`; the facility is not assumed to close it on plugin unload. Unload records interrupted state rather than automatically resuming work.

## Shared browser and agent operations

The custom `modelDebate` Host service is plugin-owned, not a core DSH API. A single validated operation function serves both callers:

* GUI: `ctx.connection.fetch.register({path:'/api/model-debate',methods:['POST'],requestBody:'buffered',fetch})`. The inspected route signature alone did not expose the path constraint: this runtime's registry requires the full `/api/…` path and rejects `/model-debate`. It lives under the existing Connection carrier, not a second unauthenticated HTTP server. Framework trust, authentication and owner admission apply. JSON is checked against a 30 MiB application limit (image inputs themselves are capped at 20 MiB before base64 expansion) and a strict action schema; invalid requests receive a safe failure. Disconnecting a start request does not cancel a persistent debate. Stop owns the run controller.
* Images (v1.1): `ctx.get('attachments')` obtains the optional actual DSH attachment service. `admitPromptContent([{type:'image',mediaType,data,name?},...])` decodes/normalizes and commits the complete validated batch, then session/request state stores only durable `ImageAttachmentRef` values. `readImage(ref)` verifies persisted bytes for selected-session previews and re-runs. No arbitrary references or filesystem paths are accepted from browser or agent callers. Text-only operation remains available without an attachment backend.
* Agent: `ctx.tools.register({name:'model_debate',parameters,output,execute})`. The exact inspected output contract is `output: {schema: JsonSchemaNode, render(args,value): ContentBlock[]}`; execute returns a JSON value, not an invented `{content:...}` tool wrapper. Both UI/tool return `{ok:true,value}` or `{ok:false,error}`. Read actions are concurrency-safe; mutations serialize in the engine. Model-facing snapshot rendering summarizes history; `get` retrieves a full saved debate. Text rendering is capped and explicitly labels truncation.

Supported actions: `snapshot`, `get`, `settings`, `start`, `stop`, `review`, `rename`, `delete`, `select`, `rerun`, `preset-save`, `preset-delete`, `preset-apply`, `export`, `image`. `start` accepts encoded image bytes, never caller-provided attachment references. `image` reads only a zero-based image of an existing saved debate. `rerun` reuses its verified stored images. Start/review/rerun consume configured provider resources only in response to an explicit operation. Stop never implicitly requests a review. Export returns JSON/Markdown text; it does not write arbitrary files. Delete requires an inactive debate; it removes plugin-owned saved history. No action grants broader policy, executes debate-suggested tools, controls a browser, starts another agent, or installs/configures model providers.

## Verification scope

Unit/fake-provider tests and real-DSH smoke checks are separate evidence. A fake adapter does not prove provider connectivity, successful live model answers, browser rendering, or installation. This document records inspected contracts and implemented restrictions; deployment and live-model verification results belong in the parent implementation report. There is no implicit browser control/screenshot capability in this integration. The existing GUI must be refreshed after new built artifacts are installed unless the same-checkout Client development watcher is independently verified.

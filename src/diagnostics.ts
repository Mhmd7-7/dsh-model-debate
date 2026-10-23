import { z } from 'zod';

/** Closed response vocabulary: never store response strings, dynamic field names, content, URLs, or headers. */
export const responseFieldNames = ['type', 'index', 'text', 'blockType', 'block', 'block.type', 'block.text', 'block.id', 'block.name', 'block.arguments', 'id', 'name', 'argumentsDelta', 'usage', 'usage.inputTokens', 'usage.outputTokens', 'usage.totalTokens', 'usage.cacheReadTokens', 'usage.cacheWriteTokens', 'usage.reasoningTokens', 'reason', 'reason.kind', 'reason.failure', 'reason.failure.code', 'reason.failure.status', 'reason.failure.providerRetryAfterMs', 'replayState'] as const;
export const diagnosticCategories = ['pending', 'public-text', 'reasoning-only', 'tool-only', 'empty', 'malformed', 'interrupted', 'provider-error', 'cancelled', 'request-rejected', 'output-limit'] as const;
const count = z.number().int().nonnegative();
export const requestDiagnosticsSchema = z.object({
  version: z.literal(1),
  /** Plugin-generated random ID, not a provider's potentially sensitive request ID. */
  correlationId: z.string().uuid(),
  provider: z.string().min(1).max(200),
  model: z.string().min(1).max(300),
  phase: z.enum(['preparing', 'streaming', 'settled']),
  category: z.enum(diagnosticCategories),
  status: z.number().int().min(100).max(599).optional(),
  finishReason: z.enum(['stop', 'max-tokens', 'tool-calls', 'error', 'aborted', 'unknown']).optional(),
  chunkCount: count,
  chunks: z.object({ textDelta: count, reasoningDelta: count, toolCallDelta: count, blockStart: count, blockEnd: count, usage: count, finish: count, unknown: count, malformed: count }),
  /** Presence only, selected from responseFieldNames; values are never copied. */
  responseFields: z.array(z.enum(responseFieldNames)).max(responseFieldNames.length),
  publicTextLength: count,
  reasoningObserved: z.boolean(),
  toolsObserved: z.boolean(),
  /** Current plugin policy: no tools are advertised, executed, or followed up. */
  toolsPolicy: z.literal('unsupported'),
}).strict();
export type RequestDiagnostics = z.infer<typeof requestDiagnosticsSchema>;
export type DiagnosticCategory = RequestDiagnostics['category'];

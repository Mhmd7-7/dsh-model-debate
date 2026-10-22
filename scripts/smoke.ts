import assert from 'node:assert/strict';
import { fixture, finish } from '../tests/helpers.js';

// Deterministic end-to-end smoke. Real configured-provider evidence is reported
// separately in docs/VERIFICATION.md and the installed debate history.
const f = await fixture();
await finish(f.service, f.clock);
const s = f.repo.get(f.id)!;
assert.equal(s.status, 'completed');
assert.equal(s.messages.length, 9);
assert.ok(s.final && !s.final.incomplete);
console.log(JSON.stringify({ kind: 'deterministic mock smoke (not live provider inference)', status: s.status, rounds: s.round, messages: s.messages.length, requests: s.requests.length, finalReviewCompleted: !!s.final, globalConcurrencyPeak: f.adapter.maxActive }, null, 2));
await f.service.dispose();

// Browser-only deterministic integration fixture. Never connects to configured providers.
import React from 'react';
import { createRoot } from 'react-dom/client';
import { defaults, type DebateSession, type Snapshot } from '../src/state.js';
import { en, ar } from '../src/i18n.js';
const model = (n: number) => ({ provider: 'fixture', model: `vision-${n}`, name: `Vision ${n}`, providerName: 'Fixture', reasoningEfforts: [], local: true, imageSupport: 'supported' as const });
const settings = { ...defaults([model(1), model(2)]), rounds: 2, contextChars: 500000 };
const text = '# نتيجة عربية مع English\n\nهذه **إجابة مهمة** من p1 مع [رابط آمن](https://example.com).\n\n- نقطة أولى\n- Mixed English ونقطة ثانية\n\n> اقتباس عربي موضح\n\n| الاسم | Value |\n| --- | --- |\n| العربية | 42 |\n\nرياضيات $x^2 + y^2 = z^2$ وأيضًا \\(a+b\\).\n\n$$\n\\int_0^1 x^2\\,dx = \\frac{1}{3}\n$$\n\n```python\ndef hello():\n    print("مرحبا English")\n    return 42\n```\n\n<script>window.BAD = true</script>';
const now = Date.now();
const session: DebateSession = { schemaVersion: 1, id: 'fixture-debate', title: 'اختبار العرض والصور — UI fixture', question: 'سؤال عربي مع mixed English', images: [], createdAt: now, updatedAt: now, startedAt: now, endedAt: now, status: 'completed', settings, messages: [{ id: 'm1', participantId: 'p1', provider: 'fixture', model: 'vision-1', role: 'solver', round: 1, turn: 1, stage: 'Independent proposals', timestamp: now, text: JSON.stringify({ text }), incomplete: false, replyTo: [], claims: [], objections: [], revisions: [], evidence: [], resolved: [], unresolved: [], agreement: false }], tasks: [{ id: 't', participantId: 'reviewer', round: 2, attempt: 2, status: 'completed', queuedAt: now, attempts: [{ attempt: 1, correlationId: 'old', status: 'failed', error: 'Fixture server failure', queuedAt: now }, { attempt: 2, correlationId: 'new', status: 'completed', queuedAt: now }] }], issues: [], followUps: [], reviews: [], requests: [], usage: { inputTokens: 1, outputTokens: 1 }, usageUnavailable: false, budgetUsed: 2, budgetEstimated: false, round: 2, stage: 'Final review', stageDeadline: now, deadline: now + 5000, final: { text, provider: 'fixture', model: 'vision-2', timestamp: now, incomplete: false }, reviewError: null, stopReason: null, compression: [] };
const snapshot: Snapshot = { models: [model(1), model(2)], diagnostics: ['DETERMINISTIC UI FIXTURE — not the authenticated DSH GUI and no live providers'], localOnly: false, settings, presets: [], sessions: [session], activeId: session.id, imagePolicy: { available: true, maxImages: 4, maxImageBytes: 10485760, maxTotalBytes: 20971520, mediaTypes: ['image/png','image/jpeg','image/webp','image/gif'] } };
const stored = new Map<string, any>();
const fixture = (window as any).__fixture = { requests: [] as any[], failNext: false, snapshot };
window.fetch = async (_url, init) => {
  const body = JSON.parse(String(init?.body)); fixture.requests.push(body);
  if (body.action === 'snapshot') return Response.json({ ok: true, value: snapshot });
  if (body.action === 'image') { const turn = body.followUpId ? session.followUps.find(t => t.id === body.followUpId) : undefined; const ref = (turn?.images ?? session.images)[body.imageIndex]; return Response.json({ ok: true, value: stored.get(ref.attachmentId) }); }
  if (body.action === 'followup') {
    if (fixture.failNext) { fixture.failNext = false; return Response.json({ ok: false, error: 'Fixture submission failed; draft must remain' }, { status: 400 }); }
    const images = (body.images ?? []).map((image: any, i: number) => { const id = `image-${session.followUps.length}-${i}`; stored.set(id, image); return { attachmentId: id, mediaType: image.mediaType, bytes: atob(image.data).length, width: 96, height: 64, name: image.name }; });
    session.followUps.push({ id: `u-${session.followUps.length}`, text: body.message ?? '', images, timestamp: Date.now(), startRound: ++session.round, budgetStart: 0 });
    return Response.json({ ok: true, value: { id: session.id } });
  }
  return Response.json({ ok: true, value: true });
};
const localeSnapshot = { active: 'ar', locales: [{id:'en',label:'English'},{id:'ar',label:'العربية'}], revision: 1 };
const root = createRoot(document.getElementById('app')!);
(window as any).__ModuleLoader__ = { load(value: any) { const plugin = value.factory((id: string) => { if(id === 'react') return React; throw new Error(id); }); plugin.apply({ effect(fn: any) { fn(); }, locale: { register() { return () => {}; }, bind() { return (key: string, values?: any) => { let text = ar[key] ?? en[key] ?? key; for(const [name,value] of Object.entries(values ?? {})) text = text.replaceAll(`{${name}}`,String(value)); return text; }; }, getSnapshot() { return localeSnapshot; }, subscribe() {return () => {};}, addLanguage() {return () => {};}, setLocale() {} }, layout: { selectPanel() {} }, slots: { inject(_name: any, fn: any) { fn(); }, register(options: any, Component: any) { if(options.name==='main') root.render(<Component/>); return () => {}; } } }); } };
void import('../src/client.js');

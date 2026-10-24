// Browser regression harness for the exact production client bundle, not a live
// DSH session. Network/actions stay inside an in-memory snapshot fixture.
import React from 'react';
import { createRoot } from 'react-dom/client';
import { defaults } from '../src/state.js';
import { en, ar } from '../src/i18n.js';

const w = window as any;
const model = (n: number) => ({ provider: 'fixture', model: `model-${n}`, name: `Model ${n}`, providerName: 'Fixture', reasoningEfforts: ['low', 'high'], local: true, imageSupport: 'supported' });
const config = w.__DEBATE_BROWSER_CONFIG__ ?? {};
const settings = defaults([model(1), model(2)]);
const now = Date.now();
// This synthetic multiline backslash-delimited equation crashed the 1.3.1
// micromark extension and blanked the whole panel, even inside closed details.
const regression = 'Text:\n\\[\nx^2 = 4\n\\]\n\n- العربية **English**\n- Next item';
const session = { schemaVersion: 1, id: 'browser-regression', title: 'Synthetic multiline math regression', question: 'Inspect the equation.', images: [], createdAt: now, updatedAt: now, startedAt: now, endedAt: now, status: 'completed', settings, messages: [], tasks: [], issues: [], followUps: [], reviews: [], requests: [], usage: { inputTokens: 1, outputTokens: 1 }, usageUnavailable: false, budgetUsed: 2, budgetEstimated: false, round: 2, stage: 'Final review', stageDeadline: now, deadline: now, final: { text: regression, provider: 'fixture', model: 'model-1', timestamp: now, incomplete: false }, reviewError: null, stopReason: null, compression: [] };
const snapshot = config.snapshot ?? { settings, models: [model(1), model(2)], presets: [], sessions: [session], activeId: session.id, diagnostics: [], localOnly: false, imagePolicy: { available: true, maxImages: 4, maxImageBytes: 10485760, maxTotalBytes: 20971520, mediaTypes: ['image/png','image/jpeg','image/webp','image/gif'] } };
let requestDelay = config.requestDelayMs ?? 0;
const fixture = w.__debateBrowser = { snapshot, requests: [] as any[], errors: [] as string[], disposers: [] as (() => unknown)[], mounted: true, setRequestDelay: (ms: number) => { requestDelay = ms; }, refresh: () => {}, mount: () => {}, unmount: () => {} };
let locale = { active: config.locale ?? 'en', locales: [{ id: 'en', label: 'English' }, { id: 'ar', label: 'العربية' }], revision: 1 };
const localeListeners = new Set<() => void>();
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
window.fetch = async (url, init) => {
  const body = JSON.parse(String(init?.body));
  fixture.requests.push({ ...body, url: String(url) });
  if (requestDelay) await sleep(requestDelay);
  if (body.action === 'snapshot') return Response.json({ ok: true, value: snapshot });
  if (body.action === 'select') snapshot.activeId = body.id;
  else if (body.action === 'settings') snapshot.settings = structuredClone(body.settings);
  else if (body.action === 'rename') snapshot.sessions.find((s: any) => s.id === body.id).title = body.title;
  else if (body.action === 'delete') { snapshot.sessions = snapshot.sessions.filter((s: any) => s.id !== body.id); if (snapshot.activeId === body.id) snapshot.activeId = null; }
  else if (body.action === 'image') return Response.json({ ok: false, error: 'Image pixels intentionally excluded from this read-only playback.' }, { status: 400 });
  else if (body.action === 'export') return Response.json({ ok: true, value: { filename: 'fixture.json', content: JSON.stringify(snapshot.sessions.find((s: any) => s.id === body.id)), mime: 'application/json' } });
  else return Response.json({ ok: false, error: 'Provider execution is disabled in browser playback.' }, { status: 400 });
  return Response.json({ ok: true, value: { saved: true } });
};
window.addEventListener('error', event => fixture.errors.push(String(event.error?.stack ?? event.message)));
window.addEventListener('unhandledrejection', event => fixture.errors.push(String(event.reason?.stack ?? event.reason)));
const root = createRoot(document.getElementById('app')!);
let Panel: any;
fixture.mount = () => { fixture.mounted = true; root.render(<React.StrictMode><Panel/></React.StrictMode>); };
fixture.unmount = () => { fixture.mounted = false; root.render(null); };
w.__ModuleLoader__ = { load(module: any) {
  const plugin = module.factory((id: string) => { if (id === 'react') return React; throw new Error(`Unknown module ${id}`); });
  plugin.apply({
    effect(fn: () => unknown) { const result = fn(); if (typeof result === 'function') fixture.disposers.push(result as () => unknown); },
    locale: {
      register() { return () => {}; }, addLanguage() { return () => {}; },
      bind() { return (key: string, values?: Record<string, unknown>) => { let text = (locale.active === 'ar' ? ar : en)[key] ?? key; for (const [name, value] of Object.entries(values ?? {})) text = text.replaceAll(`{${name}}`, String(value)); return text; }; },
      getSnapshot() { return locale; }, subscribe(listener: () => void) { localeListeners.add(listener); return () => localeListeners.delete(listener); },
      setLocale(active: string) { locale = { ...locale, active, revision: locale.revision + 1 }; localeListeners.forEach(listener => listener()); },
    },
    layout: { selectPanel(key: string | null) { key === 'model-debate' ? fixture.mount() : fixture.unmount(); } },
    slots: { inject(_slot: string, callback: () => void) { callback(); }, register(options: any, component: any) { if (options.name === 'main') { Panel = component; fixture.mount(); } return () => {}; } },
  });
} };
const script = document.createElement('script'); script.src = 'client.js'; document.head.appendChild(script);

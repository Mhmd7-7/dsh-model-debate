import type { ReactNode, ComponentType } from 'react';
import type { DebateSession, DebateMessage, EncodedImage, ImagePolicy, ImageRef, ModelInfo, Participant, Preset, Settings, Snapshot, Task } from './state.js';
import { settingsSchema, schedulingWarnings } from './state.js';
import { readableText } from './content.js';
import { en, ar, namespace } from './i18n.js';
// @ts-expect-error esbuild loads CSS as an owned inline text resource.
import styleText from './client.css';

type LocaleSnapshot = { active: string; locales: readonly { id: string; label: string }[]; revision: number };
type Dispose = () => void;
type Context = {
  effect: (effect: () => void | Dispose) => unknown;
  locale: { register(ns: string, lang: string, dict: Record<string, string>): Dispose; bind(ns: string): (key: string, values?: Record<string, unknown>) => string; getSnapshot(): LocaleSnapshot; subscribe(fn: () => void): Dispose; setLocale(id: string): void; addLanguage(input: { id: string; label: string; fallback: string }): Dispose };
  layout: { selectPanel(key: string | null): void };
  slots: { inject(slot: string, callback: () => unknown): unknown; register(options: Record<string, unknown>, component: ComponentType<any>): Dispose };
};
declare global { interface Window { __ModuleLoader__: { load(value: { id: string; factory(require: (id: string) => any): unknown }): void } } }

type ViewState = { snapshot: Snapshot | null; error: string | null; loading: boolean };
type DialogState = { kind: 'rename' | 'delete' | 'stop' | 'preset-save' | 'preset-rename' | 'preset-duplicate' | 'preset-delete'; id?: string; name?: string } | null;
const modelKey = (value: { provider: string; model: string }) => JSON.stringify([value.provider, value.model]);
const activeRun = (s: DebateSession) => s.status === 'running' || s.status === 'reviewing';
const clone = <T,>(value: T): T => structuredClone(value);
const IMAGE_TYPES: readonly EncodedImage['mediaType'][] = ['image/png', 'image/jpeg', 'image/webp', 'image/gif'];
const MAX_IMAGES = 4;
const MAX_IMAGE_BYTES = 10 * 1024 * 1024;
const MAX_TOTAL_IMAGE_BYTES = 20 * 1024 * 1024;
type DraftImage = { id: string; encoded: EncodedImage; preview: string; bytes: number };
type ImageDraftState = { images: DraftImage[]; reading: boolean; error: string | null };
function effectiveImagePolicy(policy?: ImagePolicy): ImagePolicy {
  const bounded = (value: number | undefined, ceiling: number) => typeof value === 'number' && Number.isFinite(value) ? Math.max(0, Math.min(ceiling, Math.floor(value))) : 0;
  return { available: policy?.available === true, maxImages: bounded(policy?.maxImages, MAX_IMAGES), maxImageBytes: bounded(policy?.maxImageBytes, MAX_IMAGE_BYTES), maxTotalBytes: bounded(policy?.maxTotalBytes, MAX_TOTAL_IMAGE_BYTES), mediaTypes: IMAGE_TYPES.filter(type => policy?.mediaTypes.includes(type)) };
}
function imageSupportLabel(model?: Pick<ModelInfo, 'imageSupport'>): string {
  return model?.imageSupport === 'supported' ? 'Vision supported' : model?.imageSupport === 'unsupported' ? 'Text-only model' : 'Image support unknown';
}
function formatBytes(bytes: number, locale: string): string {
  const unit = bytes >= 1024 * 1024 ? 'MiB' : bytes >= 1024 ? 'KiB' : 'B';
  return `${(bytes / (unit === 'MiB' ? 1024 * 1024 : unit === 'KiB' ? 1024 : 1)).toLocaleString(locale, { maximumFractionDigits: 1 })} ${unit}`;
}
// Only selected files and allowlisted canonical base64 responses can become image sources.
function safeImageDataUrl(mediaType: unknown, data: unknown, maxBytes = MAX_IMAGE_BYTES): { url: string; bytes: number } | null {
  if (typeof mediaType !== 'string' || !IMAGE_TYPES.includes(mediaType as EncodedImage['mediaType']) || typeof data !== 'string' || !data.length || data.length > Math.ceil(maxBytes / 3) * 4 || data.length % 4 !== 0 || !/^[A-Za-z0-9+/]*={0,2}$/.test(data)) return null;
  try {
    const decoded = atob(data);
    if (!decoded.length || decoded.length > maxBytes || btoa(decoded) !== data) return null;
    return { url: `data:${mediaType};base64,${data}`, bytes: decoded.length };
  } catch { return null; }
}

window.__ModuleLoader__.load({
  id: '@local/dsh-model-debate',
  factory(require) {
    const React: typeof import('react') = require('react');
    const { useCallback, useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } = React;
    return {
      inject: ['slots', 'locale', 'layout'],
      apply(ctx: Context) {
        ctx.effect(() => ctx.locale.register(namespace, 'en', en));
        ctx.effect(() => ctx.locale.register(namespace, 'ar', ar));
        ctx.effect(() => {
          if (!ctx.locale.getSnapshot().locales.some(item => item.id === 'ar')) return ctx.locale.addLanguage({ id: 'ar', label: 'العربية', fallback: 'en' });
        });
        ctx.effect(() => {
          const style = document.createElement('style');
          style.dataset.modelDebate = 'true';
          style.textContent = styleText;
          document.head.appendChild(style);
          return () => style.remove();
        });
        const t = ctx.locale.bind(namespace);
        const listeners = new Set<() => void>();
        const controllers = new Set<AbortController>();
        let view: ViewState = { snapshot: null, error: null, loading: true };
        let alive = true;
        let polling: ReturnType<typeof setInterval> | undefined;
        let flight: Promise<void> | null = null;
        let composeDraft = '';
        let settingsDraft: Settings | null = null;
        let settingsBaseline: string | null = null;
        // Plugin-owned draft survives switching between the Chat and Debate slots.
        let imageDraft: ImageDraftState = { images: [], reading: false, error: null };
        const imageListeners = new Set<() => void>();
        const imageReaders = new Set<FileReader>();
        // Keep pixels for at most one active session, never the entire saved history.
        let previewCacheSession: string | null = null;
        const savedImageCache = new Map<string, string>();
        const publishImageDraft = (next: ImageDraftState) => { if (!alive) return; imageDraft = next; imageListeners.forEach(listener => listener()); };
        const subscribeImages = (fn: () => void) => { imageListeners.add(fn); return () => { imageListeners.delete(fn); }; };
        function validateImageBatch(files: readonly Pick<File, 'type' | 'size'>[], existing: readonly DraftImage[], policy: ImagePolicy): string | null {
          if (!policy.available || !policy.maxImages || !policy.mediaTypes.length) return t('Images unavailable');
          if (existing.length + files.length > policy.maxImages) return t('Image count limit', { count: policy.maxImages });
          if (existing.some(image => !policy.mediaTypes.includes(image.encoded.mediaType)) || files.some(file => !policy.mediaTypes.includes(file.type) || !IMAGE_TYPES.includes(file.type as EncodedImage['mediaType']))) return t('Image type error');
          if (files.some(file => !file.size || file.size > policy.maxImageBytes) || existing.some(image => image.bytes > policy.maxImageBytes)) return t('Image size limit', { size: formatBytes(policy.maxImageBytes, ctx.locale.getSnapshot().active) });
          if (existing.reduce((sum, image) => sum + image.bytes, 0) + files.reduce((sum, file) => sum + file.size, 0) > policy.maxTotalBytes) return t('Image total limit', { size: formatBytes(policy.maxTotalBytes, ctx.locale.getSnapshot().active) });
          return null;
        }
        function readImageFile(file: File): Promise<DraftImage> {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            imageReaders.add(reader);
            const fail = () => { imageReaders.delete(reader); reject(new Error(t('Image read failed', { name: file.name }))); };
            reader.onerror = fail; reader.onabort = fail;
            reader.onload = () => {
              imageReaders.delete(reader);
              const prefix = `data:${file.type};base64,`;
              if (typeof reader.result !== 'string' || !reader.result.startsWith(prefix)) { fail(); return; }
              const data = reader.result.slice(prefix.length);
              const checked = safeImageDataUrl(file.type, data);
              if (!checked || checked.bytes !== file.size) { fail(); return; }
              resolve({ id: crypto.randomUUID(), encoded: { mediaType: file.type as EncodedImage['mediaType'], data, name: file.name.slice(0, 255) }, preview: checked.url, bytes: file.size });
            };
            reader.readAsDataURL(file);
          });
        }
        async function addImageFiles(files: File[], policy: ImagePolicy): Promise<void> {
          if (!files.length || imageDraft.reading || !alive) return;
          const before = imageDraft.images;
          // Validate the entire mixed batch before reading or changing any selected images.
          const error = validateImageBatch(files, before, policy);
          if (error) { publishImageDraft({ ...imageDraft, error }); return; }
          publishImageDraft({ ...imageDraft, reading: true, error: null });
          try {
            const results = await Promise.allSettled(files.map(readImageFile));
            const failed = results.find(result => result.status === 'rejected');
            if (failed?.status === 'rejected') throw failed.reason;
            const images = results.flatMap(result => result.status === 'fulfilled' ? [result.value] : []);
            if (alive) publishImageDraft({ images: [...before, ...images], reading: false, error: null });
          } catch (error) {
            if (alive) publishImageDraft({ images: before, reading: false, error: error instanceof Error ? error.message : t('Image read failed', { name: '' }) });
          }
        }
        const publish = (next: ViewState) => { if (!alive) return; view = next; listeners.forEach(listener => listener()); };
        async function request<T = unknown>(action: string, fields: Record<string, unknown> = {}): Promise<T> {
          if (!alive) throw new Error('Plugin disposed');
          const controller = new AbortController();
          controllers.add(controller);
          try {
            const response = await fetch(new URL('api/model-debate', document.baseURI), { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ action, ...fields }), signal: controller.signal });
            const body = await response.json() as { ok: boolean; value?: T; error?: string };
            if (!response.ok || !body.ok) throw new Error(body.error || `${t('Request failed')} (${response.status})`);
            return body.value as T;
          } finally { controllers.delete(controller); }
        }
        async function refresh(fresh = false): Promise<void> {
          if (!alive) return;
          if (flight) { await flight; if (fresh && alive) return refresh(); return; }
          flight = (async () => {
            try {
              const snapshot = await request<Snapshot>('snapshot');
              if (!alive) return;
              if (previewCacheSession !== snapshot.activeId) { savedImageCache.clear(); previewCacheSession = snapshot.activeId; }
              publish({ snapshot, loading: false, error: null });
              const running = snapshot.sessions.some(activeRun);
              if (running && !polling) polling = setInterval(() => { void refresh(); }, 750);
              if (!running && polling) { clearInterval(polling); polling = undefined; }
            } catch (error) {
              if (alive && !(error instanceof DOMException && error.name === 'AbortError')) publish({ ...view, loading: false, error: error instanceof Error ? error.message : t('Request failed') });
            } finally { flight = null; }
          })();
          await flight;
        }
        const subscribe = (fn: () => void) => { listeners.add(fn); return () => { listeners.delete(fn); }; };
        ctx.effect(() => {
          void refresh();
          return () => { alive = false; if (polling) clearInterval(polling); controllers.forEach(controller => controller.abort()); controllers.clear(); imageReaders.forEach(reader => reader.abort()); imageReaders.clear(); imageListeners.clear(); savedImageCache.clear(); imageDraft = { images: [], reading: false, error: null }; listeners.clear(); };
        });
        function useLocale() { return useSyncExternalStore(fn => ctx.locale.subscribe(fn), () => ctx.locale.getSnapshot(), () => ctx.locale.getSnapshot()); }
        function Icon({ name = 'debate', size = 18 }: { name?: string; size?: number }) {
          const paths: Record<string, ReactNode> = {
            debate: <><path d="M4 4h11a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H9l-5 4V4Z"/><path d="M9 8h5M9 11h3M19 9h1v12l-4-3h-4"/></>,
            image: <><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1"/><path d="m3 17 6-6 4 4 3-3 5 5"/></>, plus: <path d="M12 5v14M5 12h14"/>, chevron: <path d="m9 5 7 7-7 7"/>, settings: <><path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="3"/><circle cx="15" cy="17" r="3"/></>,
            play: <path d="m8 5 11 7-11 7V5Z"/>, stop: <rect x="6" y="6" width="12" height="12" rx="2"/>, check: <path d="m5 12 4 4L19 6"/>, copy: <><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/></>,
            download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/></>, close: <path d="m6 6 12 12M6 18 18 6"/>, trash: <><path d="M3 6h18M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7M14 10v7"/></>,
            edit: <><path d="m15 4 5 5M4 20l5-1L21 7l-5-5L4 14v6Z"/></>, up: <path d="m6 14 6-6 6 6"/>, down: <path d="m6 10 6 6 6-6"/>, clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
            alert: <><path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5M12 17h.01"/></>, retry: <><path d="M3 11a9 9 0 1 1 3 8M3 4v7h7"/></>, globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z"/></>, spark: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"/></>,
          };
          return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.debate}</svg>;
        }
        function Button({ children, icon, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { icon?: string }) {
          return <button type="button" className={`mdb-button ${className}`} {...props}>{icon && <Icon name={icon}/>}<span>{children}</span></button>;
        }
        function IconButton({ label, icon, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { label: string; icon: string }) {
          return <button type="button" className="mdb-icon-button" title={label} aria-label={label} {...props}><Icon name={icon}/></button>;
        }
        function Switcher({ debate = false }: { debate?: boolean }) {
          const locale = useLocale();
          return <div className="mdb-switch" role="group" aria-label={t('Model Debate')} dir={locale.active.startsWith('ar') ? 'rtl' : 'ltr'}><button type="button" aria-pressed={!debate} onClick={() => ctx.layout.selectPanel(null)}>{t('Chat')}</button><button type="button" aria-pressed={debate} onClick={() => ctx.layout.selectPanel('model-debate')}><Icon size={15}/>{t('Debate')}</button></div>;
        }
        function SidebarEntry({ size = 20 }: { size?: number; active?: boolean }) { return <span className="mdb-panel-entry"><Icon size={size}/></span>; }
        function Field({ label, hint, children, className = '' }: { label: string; hint?: string; children: ReactNode; className?: string }) {
          const id = useId();
          return <div className={`mdb-field ${className}`}><label htmlFor={id}>{t(label)}</label>{React.isValidElement(children) ? React.cloneElement(children as React.ReactElement<any>, { id, 'aria-describedby': hint ? `${id}-hint` : undefined }) : children}{hint && <small id={`${id}-hint`}>{t(hint)}</small>}</div>;
        }
        function Toggle({ label, hint, value, onChange }: { label: string; hint?: string; value: boolean; onChange(value: boolean): void }) {
          const id = useId();
          return <label className="mdb-toggle-row" htmlFor={id}><span><strong>{t(label)}</strong>{hint && <small>{t(hint)}</small>}</span><input id={id} type="checkbox" checked={value} onChange={event => onChange(event.target.checked)}/></label>;
        }
        function Status({ status }: { status: string }) { return <span className={`mdb-status mdb-status-${status.replaceAll(' ', '-')}`}><span className="mdb-status-dot"/>{t(status)}</span>; }
        function Plain({ children, className = '' }: { children: ReactNode; className?: string }) { return <div dir="auto" className={`mdb-plaintext ${className}`}>{children}</div>; }
        function ImageSupportBadge({ model }: { model?: Pick<ModelInfo, 'imageSupport'> }) {
          return <span className={`mdb-badge mdb-image-support mdb-image-support-${model?.imageSupport || 'unknown'}`}>{t(imageSupportLabel(model))}</span>;
        }
        function ModelSelect({ models, value, onChange, allowEmpty = false, participants, ...controlProps }: { models: ModelInfo[]; value: { provider: string; model: string } | null; onChange(value: { provider: string; model: string } | null): void; allowEmpty?: boolean; participants?: Participant[]; id?: string; 'aria-describedby'?: string }) {
          const key = value ? modelKey(value) : '';
          const unavailable = !!value && !models.some(m => modelKey(m) === key);
          const participantModels = participants?.filter(p => p.enabled).map(p => models.find(m => modelKey(m) === modelKey(p))).filter((m): m is ModelInfo => !!m) || [];
          const option = (m: ModelInfo) => <option key={modelKey(m)} value={modelKey(m)}>{m.name} · {m.providerName} · {t(imageSupportLabel(m))}</option>;
          return <select {...controlProps} value={key} onChange={event => { const found = models.find(m => modelKey(m) === event.target.value); onChange(found ? { provider: found.provider, model: found.model } : null); }}>
            <option value="" disabled={!allowEmpty}>{t(allowEmpty ? 'Automatic reviewer' : 'Model required')}</option>
            {unavailable && <option value={key}>{t('Unavailable selection')}: {value.provider}/{value.model} · {t('Image support unknown')}</option>}
            {participantModels.length > 0 && <optgroup label={t('From participants')}>{participantModels.map(option)}</optgroup>}
            {participants ? <optgroup label={t('All models')}>{models.map(option)}</optgroup> : models.map(option)}
          </select>;
        }
        function SettingsEditor({ settings: s, models, presets, presetId, onPreset, setSettings, dirty, busy, onSave, onDialog, onApply }: { settings: Settings; models: ModelInfo[]; presets: Preset[]; presetId: string; onPreset(id: string): void; setSettings(s: Settings): void; dirty: boolean; busy: boolean; onSave(): void; onDialog(value: DialogState): void; onApply(preset: Preset): void }) {
          const update = <K extends keyof Settings,>(key: K, value: Settings[K]) => setSettings({ ...s, [key]: value });
          const number = (key: keyof Settings, label: string, hint?: string, unit: 's' | 'ms' | '' = '', nullable = false, min = 0, max?: number) => {
            const value = s[key] as number | null;
            const scale = unit === 's' ? 1000 : 1;
            return <Field label={unit ? `${t(label)} (${t(unit === 's' ? 'Seconds unit' : 'Milliseconds unit')})` : label} hint={hint} key={key}><input type="number" min={min / scale} max={max === undefined ? undefined : max / scale} step={unit === 's' ? 0.1 : 1} value={value === null ? '' : value / scale} placeholder={nullable ? t('Unlimited') : undefined} onChange={event => update(key, (event.target.value === '' && nullable ? null : Math.round(Number(event.target.value) * scale)) as never)}/></Field>;
          };
          const providerKeys = Array.from(new Set([...models.map(m => m.provider), ...Object.keys(s.providerLimits), ...Object.keys(s.providerSpacingMs)])).sort();
          const perProvider = (key: 'providerLimits' | 'providerSpacingMs', label: string) => <div className="mdb-provider-fields"><h4>{t(label)}</h4>{providerKeys.map(provider => <Field key={provider} label={models.find(m => m.provider === provider)?.providerName || provider}><input type="number" min={key === 'providerLimits' ? 1 : 0} max={key === 'providerLimits' ? 20 : 3600000} step="1" value={s[key][provider] ?? ''} placeholder={key === 'providerLimits' ? String(s.concurrency) : '0'} onChange={event => { const next = { ...s[key] }; if (event.target.value === '') delete next[provider]; else next[provider] = Number(event.target.value); update(key, next); }}/></Field>)}</div>;
          const selectedPreset = presets.find(p => p.id === presetId);
          const addParticipant = () => {
            const nextModel = models.find(m => !s.participants.some(p => modelKey(p) === modelKey(m)));
            if (!nextModel) return;
            update('participants', [...s.participants, { id: `p-${crypto.randomUUID()}`, provider: nextModel.provider, model: nextModel.model, enabled: true, role: '', instructions: '', options: {} }]);
          };
          const editParticipant = (id: string, patch: Partial<Participant>) => update('participants', s.participants.map(p => p.id === id ? { ...p, ...patch } : p));
          const move = (index: number, direction: number) => { const next = [...s.participants]; [next[index], next[index + direction]] = [next[index + direction], next[index]]; update('participants', next); };
          return <div className="mdb-settings-editor">
            <section className="mdb-settings-section mdb-presets"><div className="mdb-section-heading"><div><h3>{t('Presets')}</h3><p>{t('Preset hint')}</p></div><Icon name="spark"/></div><div className="mdb-preset-bar"><select aria-label={t('Choose preset')} value={presetId} onChange={event => onPreset(event.target.value)}><option value="">{t('Choose preset')}</option>{presets.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}</select><Button disabled={!selectedPreset || busy} onClick={() => selectedPreset && onApply(selectedPreset)}>{t('Apply')}</Button></div><div className="mdb-toolbar mdb-toolbar-wrap"><Button icon="plus" disabled={busy} onClick={() => onDialog({ kind: 'preset-save' })}>{t('Save preset')}</Button>{selectedPreset && <><IconButton icon="edit" label={t('Rename preset')} disabled={busy} onClick={() => onDialog({ kind: 'preset-rename', id: selectedPreset.id, name: selectedPreset.name })}/><IconButton icon="copy" label={t('Duplicate preset')} disabled={busy} onClick={() => onDialog({ kind: 'preset-duplicate', id: selectedPreset.id, name: `${selectedPreset.name} — ${t('Duplicate')}` })}/><IconButton icon="trash" label={t('Delete preset')} disabled={busy} onClick={() => onDialog({ kind: 'preset-delete', id: selectedPreset.id, name: selectedPreset.name })}/></>}</div></section>
            <section className="mdb-settings-section"><div className="mdb-section-heading"><div><h3>{t('Participants')} <span className="mdb-count">{s.participants.filter(p => p.enabled).length}/{s.participants.length}</span></h3><p>{t('Distinct hint')}</p></div></div>
              <div className="mdb-participants">{s.participants.map((p, index) => {
                const model = models.find(m => modelKey(m) === modelKey(p));
                return <article key={p.id} className={`mdb-participant ${!p.enabled ? 'mdb-participant-disabled' : ''}`}><header><span className="mdb-avatar">{index + 1}</span><span className="mdb-participant-name" dir="auto">{model?.name || p.model || t('Model required')}</span><label className="mdb-inline-toggle"><input type="checkbox" checked={p.enabled} onChange={event => editParticipant(p.id, { enabled: event.target.checked })}/><span>{t('Enabled')}</span></label><div className="mdb-toolbar"><IconButton icon="up" label={t('Move up')} disabled={index === 0} onClick={() => move(index, -1)}/><IconButton icon="down" label={t('Move down')} disabled={index === s.participants.length - 1} onClick={() => move(index, 1)}/><IconButton icon="close" label={t('Remove participant')} onClick={() => update('participants', s.participants.filter(row => row.id !== p.id))}/></div></header>
                  <Field label="Model"><ModelSelect models={models} value={p.provider && p.model ? p : null} onChange={value => value && editParticipant(p.id, { ...value, options: { ...p.options, reasoningEffort: undefined } })}/></Field><div className="mdb-model-identity"><small className="mdb-identity" dir="ltr">{p.provider} / {p.model}</small><ImageSupportBadge model={model}/></div>
                  <Field label="Role"><input value={p.role} maxLength={120} placeholder={t('Role placeholder')} onChange={event => editParticipant(p.id, { role: event.target.value })}/></Field>
                  <details className="mdb-participant-details"><summary>{t('Instructions')} & {t('Generation options')}</summary><Field label="Instructions"><textarea rows={3} dir="auto" maxLength={12000} value={p.instructions} placeholder={t('Instructions placeholder')} onChange={event => editParticipant(p.id, { instructions: event.target.value })}/></Field><div className="mdb-form-grid"><Field label="Max tokens" hint="Max tokens hint"><input type="number" min={64} max={32768} step={1} value={p.options.maxTokens ?? ''} placeholder={t('Automatic cap')} onChange={event => editParticipant(p.id, { options: { ...p.options, maxTokens: event.target.value === '' ? undefined : Number(event.target.value) } })}/></Field><Field label="Reasoning effort" hint="Reasoning hint"><select disabled={!model?.reasoningEfforts.length && !p.options.reasoningEffort} value={p.options.reasoningEffort || ''} onChange={event => editParticipant(p.id, { options: { ...p.options, reasoningEffort: event.target.value || undefined } })}><option value="">{t(model?.reasoningEfforts.length ? 'Provider default' : 'Not advertised')}</option>{p.options.reasoningEffort && !model?.reasoningEfforts.includes(p.options.reasoningEffort) && <option value={p.options.reasoningEffort}>{t('Unavailable selection')}: {p.options.reasoningEffort}</option>}{model?.reasoningEfforts.map(effort => <option key={effort} value={effort}>{effort}</option>)}</select></Field></div><div className="mdb-form-grid mdb-unsupported"><Field label="Temperature"><input disabled placeholder="—"/></Field><Field label="Top p"><input disabled placeholder="—"/></Field><Field label="Stop sequences"><input disabled placeholder="—"/></Field></div><small>{t('Unsupported options')}</small></details>
                </article>;
              })}</div><Button icon="plus" className="mdb-add-participant" disabled={s.participants.length >= 20 || !models.some(m => !s.participants.some(p => modelKey(p) === modelKey(m)))} onClick={addParticipant}>{t('Add participant')}</Button>
            </section>
            <section className="mdb-settings-section"><h3>{t('Debate format')}</h3><Field label="Mode" hint="Mode hint"><select value={s.mode} onChange={event => update('mode', event.target.value as Settings['mode'])}>{['parallel', 'sequential', 'hybrid'].map(value => <option key={value} value={value}>{t(value)}</option>)}</select></Field><div className="mdb-form-grid">{number('rounds', 'Rounds', 'Rounds hint', '', false, 1, 30)}<Field label="Speaking order"><select value={s.speakingOrder} onChange={event => update('speakingOrder', event.target.value as Settings['speakingOrder'])}>{['configured', 'rotating'].map(value => <option key={value} value={value}>{t(value)}</option>)}</select></Field></div><Toggle label="Early stop" hint="Early stop hint" value={s.earlyStop} onChange={value => update('earlyStop', value)}/><Field label="Output language" hint="Output language hint"><select value={s.language} onChange={event => update('language', event.target.value as Settings['language'])}>{['auto', 'ar', 'en'].map(value => <option key={value} value={value}>{t(value)}</option>)}</select></Field></section>
            <section className="mdb-settings-section"><h3>{t('Final reviewer')}</h3><Field label="Model" hint="Reviewer hint"><ModelSelect models={models} participants={s.participants} value={s.reviewer} onChange={value => update('reviewer', value)} allowEmpty/></Field><Field label="Review instructions" hint="Review instructions hint"><textarea rows={3} maxLength={12000} value={s.reviewInstructions} dir="auto" onChange={event => update('reviewInstructions', event.target.value)}/></Field></section>
            <section className="mdb-settings-section"><h3>{t('Time budgets')}</h3><div className="mdb-form-grid">{number('overallMs', 'Overall deadline', 'Overall hint', 's', false, 200, 86400000)}{number('roundMs', 'Round deadline', undefined, 's', false, 100, 3600000)}{number('requestMs', 'Request timeout', undefined, 's', false, 100, 3600000)}{number('reserveReviewMs', 'Review reservation', 'Review reservation hint', 's', false, 100, 3600000)}{number('reviewMs', 'Review timeout', undefined, 's', false, 100, 3600000)}</div></section>
            <details className="mdb-settings-section mdb-advanced"><summary>{t('Advanced settings')}</summary><section><h3>{t('Reply routing')}</h3><Toggle label="Direct replies" hint="Direct replies hint" value={s.directReplies} onChange={value => update('directReplies', value)}/>{number('addressCount', 'Address count', undefined, '', false, 1, 19)}<Toggle label="Quoted context" hint="Quoted context hint" value={s.quotedContext} onChange={value => update('quotedContext', value)}/></section><section><h3>{t('Concurrency limits')}</h3><div className="mdb-form-grid">{number('concurrency', 'Global concurrency', 'Concurrency hint', '', false, 1, 20)}{number('queueLimit', 'Queue limit', 'Queue hint', '', false, 1, 100)}</div>{perProvider('providerLimits', 'Provider concurrency')}<small>{t('Provider concurrency hint')}</small></section><section><h3>{t('Reply limits')}</h3><div className="mdb-form-grid">{number('maxRepliesPerParticipant', 'Participant reply limit', undefined, '', false, 1, 30)}{number('maxReplies', 'Total reply limit', undefined, '', false, 2, 600)}{number('responseChars', 'Response characters', undefined, '', false, 200, 30000)}{number('contextChars', 'Context characters', 'Context hint', '', false, 2000, 500000)}</div></section><section><h3>{t('Pacing')}</h3><p>{t('Pacing hint')}</p><div className="mdb-form-grid">{number('roundCooldownMs', 'Round cooldown', undefined, 'ms', false, 0, 3600000)}{number('globalSpacingMs', 'Global spacing', undefined, 'ms', false, 0, 3600000)}{number('turnDelayMs', 'Turn delay', undefined, 'ms', false, 0, 3600000)}</div>{perProvider('providerSpacingMs', 'Provider spacing')}</section><section><h3>{t('Retries')}</h3><p>{t('Retries hint')}</p><div className="mdb-form-grid">{number('retries', 'Retry count', undefined, '', false, 0, 5)}{number('backoffMs', 'Initial backoff', undefined, 'ms', false, 0, 60000)}{number('backoffMaxMs', 'Maximum backoff', undefined, 'ms', false, 0, 300000)}</div></section><section><h3>{t('Usage budget')}</h3>{number('tokenBudget', 'Token budget', 'Token budget hint', '', true, 1000, 10000000)}<Field label="Cost budget" hint="Cost unavailable"><input disabled value="—" readOnly/></Field></section></details>
            <div className="mdb-settings-save"><span>{dirty ? t('Unsaved settings') : t('Configured')}</span><Button icon="check" className="mdb-button-primary" disabled={busy} onClick={onSave}>{t('Save settings')}</Button></div>
          </div>;
        }
        function Countdown({ session }: { session: DebateSession }) {
          const [now, setNow] = useState(Date.now());
          const running = activeRun(session);
          useEffect(() => { if (!running) return; const timer = setInterval(() => setNow(Date.now()), 250); return () => clearInterval(timer); }, [running]);
          const at = running ? now : session.endedAt || session.updatedAt;
          const duration = (ms: number) => { const seconds = Math.max(0, Math.ceil(ms / 1000)); return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`; };
          const percent = Math.min(100, Math.max(0, (at - session.startedAt) / Math.max(1, session.deadline - session.startedAt) * 100));
          return <div className="mdb-timers"><div className="mdb-timer-pills"><span><Icon name="clock" size={15}/>{t('Elapsed')} <b dir="ltr">{duration(at - session.startedAt)}</b></span>{running && <><span>{t('Overall remaining')} <b dir="ltr">{duration(session.deadline - now)}</b></span><span>{t('Stage remaining')} <b dir="ltr">{duration(session.stageDeadline - now)}</b></span></>}</div><div className="mdb-progress" role="progressbar" aria-label={t('Overall deadline')} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.floor(percent)}><span style={{ width: `${percent}%` }}/></div></div>;
        }
        function MessageCard({ message: m, session }: { message: DebateMessage; session: DebateSession }) {
          const [quote, setQuote] = useState<string | null>(null);
          const participantIndex = session.settings.participants.findIndex(p => p.id === m.participantId);
          const linked = session.messages.filter(item => m.replyTo.includes(item.id));
          return <article className={`mdb-message ${m.incomplete ? 'mdb-message-incomplete' : ''}`} id={`mdb-message-${m.id}`} tabIndex={-1}><header><span className="mdb-avatar">{participantIndex >= 0 ? participantIndex + 1 : <Icon size={16}/>}</span><div className="mdb-message-actor"><strong dir="auto">{m.model}</strong><small dir="auto">{m.role || m.provider} · {m.provider}</small></div><time dateTime={new Date(m.timestamp).toISOString()}>{new Date(m.timestamp).toLocaleTimeString(ctx.locale.getSnapshot().active, { hour: '2-digit', minute: '2-digit' })}</time>{m.incomplete && <span className="mdb-badge mdb-badge-warn">{t('Incomplete')}</span>}</header>
            {linked.length > 0 && <div className="mdb-reply-links"><span>{t('Replies to')}</span>{linked.map(source => <span key={source.id}><a href={`#mdb-message-${source.id}`} onClick={event => { event.preventDefault(); document.getElementById(`mdb-message-${source.id}`)?.focus({ preventScroll: false }); }}>{source.model} · {t('Round')} {source.round}</a><button type="button" aria-expanded={quote === source.id} onClick={() => setQuote(quote === source.id ? null : source.id)}>{t('Quoted source')}</button></span>)}</div>}
            {quote && <blockquote className="mdb-quote"><Plain>{readableText(session.messages.find(source => source.id === quote)! )}</Plain></blockquote>}
            <Plain>{readableText(m) || t('No text')}</Plain>{m.parseWarning && <p className="mdb-inline-warning"><Icon name="alert" size={14}/>{t('Parse warning')}: {m.parseWarning}</p>}
            {(m.claims.length + m.objections.length + m.revisions.length + m.evidence.length + m.unresolved.length > 0 || m.agreement) && <details className="mdb-message-details"><summary>{t('Structured details')}</summary>{m.claims.length > 0 && <section><h4>{t('Claims')}</h4>{m.claims.map(claim => <Plain key={claim.id}><b>{claim.id}</b> — {claim.text}</Plain>)}</section>}{m.objections.length > 0 && <section><h4>{t('Objections')}</h4>{m.objections.map((objection, i) => <div key={i} className="mdb-objection"><Plain><b>{objection.claimId}</b> — {objection.text}</Plain>{objection.evidence && <Plain>{t('Evidence')}: {objection.evidence}</Plain>}{objection.verification && <Plain>{t('Suggested verification')}: {objection.verification}</Plain>}</div>)}</section>}{m.revisions.length > 0 && <section><h4>{t('Revisions')}</h4>{m.revisions.map((revision, i) => <Plain key={i}><b>{revision.claimId}</b> — {revision.text}</Plain>)}</section>}{m.evidence.length > 0 && <section><h4>{t('Evidence')}</h4>{m.evidence.map((evidence, i) => <Plain key={i}>{evidence}</Plain>)}</section>}{m.unresolved.length > 0 && <section><h4>{t('Unresolved items')}</h4>{m.unresolved.map((text, i) => <Plain key={i}>{text}</Plain>)}</section>}{m.agreement && <p>{t('Agreement')}</p>}</details>}
            <details className="mdb-raw"><summary>{t('Original response')}</summary><Plain>{m.text}</Plain></details>
          </article>;
        }
        function TaskActivity({ session }: { session: DebateSession }) {
          const [expanded, setExpanded] = useState(false);
          const current = session.tasks.filter(task => ['queued', 'waiting for cooldown', 'responding'].includes(task.status));
          const shown = expanded ? session.tasks : current.length ? current : session.tasks.slice(-Math.min(session.settings.participants.length, 6));
          const taskName = (task: Task) => task.participantId === 'reviewer' ? session.settings.reviewer?.model || t('Final reviewer') : session.settings.participants.find(p => p.id === task.participantId)?.model || task.participantId;
          return <section className="mdb-activity"><div className="mdb-section-heading"><h3>{t('Tasks')} <span className="mdb-count">{session.tasks.length}</span></h3><button type="button" className="mdb-text-button" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>{expanded ? t('Close') : t('Run details')}</button></div>{shown.length === 0 ? <p>{t('No tasks')}</p> : <div className="mdb-task-list">{shown.map(task => <div key={task.id} className="mdb-task"><div className="mdb-task-line"><strong dir="auto">{taskName(task)}</strong><Status status={task.status}/><small>{t('Round')} {task.round} · {t('Attempt')} {task.attempt}</small></div>{task.error && <Plain className="mdb-error-text">{t('Request error')}: {task.error}</Plain>}{task.partial && <details open={task.status === 'responding'} className="mdb-preview"><summary>{t('Live preview')}</summary><Plain>{task.partial}</Plain><small>{t('Partial output')}</small></details>}</div>)}</div>}</section>;
        }
        function Issues({ session }: { session: DebateSession }) {
          return <details className="mdb-issues"><summary>{t('Issues')} <span className="mdb-count">{session.issues.length}</span></summary><p>{t('Issues hint')}</p>{session.issues.length === 0 ? <p>{t('No issues')}</p> : session.issues.map(issue => <article key={issue.id} className="mdb-issue"><div className="mdb-section-heading"><strong dir="auto">{issue.claimId}</strong><span className={`mdb-badge ${issue.resolved ? 'mdb-badge-success' : 'mdb-badge-warn'}`}>{t(issue.resolved ? 'Participant-resolved' : 'Unverified')}</span></div><Plain>{issue.text}</Plain><small>{t('Raised by')}: {session.settings.participants.find(p => p.id === issue.raisedBy)?.model || issue.raisedBy}</small>{issue.evidence && <Plain>{t('Evidence')}: {issue.evidence}</Plain>}{issue.verification && <Plain>{t('Suggested verification')}: {issue.verification}</Plain>}{issue.resolution && <Plain>{t('Resolution')}: {issue.resolution}</Plain>}</article>)}</details>;
        }
        function SavedImage({ sessionId, image, imageIndex }: { sessionId: string; image: ImageRef; imageIndex: number }) {
          const locale = useLocale();
          const [preview, setPreview] = useState<string | null>(null);
          const [error, setError] = useState(false);
          const [retry, setRetry] = useState(0);
          // Local to the active session: history snapshots never fetch image pixels.
          useEffect(() => {
            let current = true;
            const cacheKey = JSON.stringify([sessionId, imageIndex, image.attachmentId]);
            const cached = savedImageCache.get(cacheKey);
            setPreview(cached || null); setError(false);
            if (cached) return () => { current = false; };
            void request<unknown>('image', { id: sessionId, imageIndex }).then(result => {
              if (!current || !alive) return;
              if (!result || typeof result !== 'object' || !('mediaType' in result) || !('data' in result)) throw new Error('Invalid image response');
              const checked = safeImageDataUrl(result.mediaType, result.data);
              if (!checked || result.mediaType !== image.mediaType || checked.bytes !== image.bytes) throw new Error('Invalid image response');
              if (previewCacheSession === sessionId && savedImageCache.size < MAX_IMAGES) savedImageCache.set(cacheKey, checked.url);
              setPreview(checked.url);
            }).catch(() => { if (current && alive) setError(true); });
            return () => { current = false; };
          }, [sessionId, imageIndex, image.attachmentId, retry]);
          const label = image.name || `${t('Image')} ${imageIndex + 1}`;
          return <figure className="mdb-saved-image">{preview ? <details><summary><img src={preview} alt={label}/><span>{t('Expand image')}</span></summary><img className="mdb-image-original" src={preview} alt={label}/></details> : <div className="mdb-image-placeholder" role="status">{t(error ? 'Image preview failed' : 'Loading image')}{error && <Button icon="retry" onClick={() => setRetry(value => value + 1)}>{t('Retry')}</Button>}</div>}<figcaption><strong dir="auto">{label}</strong><small dir="ltr">{image.width} × {image.height} · {formatBytes(image.bytes, locale.active)} · {image.mediaType}</small>{image.originalDimensions && <small>{t('Original dimensions')}: <bdi>{image.originalDimensions.width} × {image.originalDimensions.height}</bdi></small>}</figcaption></figure>;
        }
        function SessionImages({ session }: { session: DebateSession }) {
          if (!session.images?.length) return null;
          return <section className="mdb-session-images" aria-label={t('Question images')}><h3>{t('Question images')} <span className="mdb-count">{session.images.length}</span></h3><div className="mdb-image-grid">{session.images.map((image, imageIndex) => <SavedImage key={`${session.id}-${image.attachmentId}-${imageIndex}`} sessionId={session.id} image={image} imageIndex={imageIndex}/>)}</div><small>{t('Image export note')}</small></section>;
        }
        function ImageComposer({ draft: images, policy, busy }: { draft: ImageDraftState; policy: ImagePolicy; busy: boolean }) {
          const locale = useLocale();
          const input = useRef<HTMLInputElement>(null);
          return <section className="mdb-image-composer" aria-label={t('Question images')} aria-busy={images.reading}><input ref={input} className="mdb-sr-only" type="file" multiple accept="image/png,image/jpeg,image/webp,image/gif" aria-label={t('Add images')} disabled={busy || images.reading || !policy.available} onChange={event => { const files = Array.from(event.target.files || []); event.target.value = ''; void addImageFiles(files, policy); }}/><div className="mdb-image-toolbar"><Button icon="image" disabled={busy || images.reading || !policy.available} onClick={() => input.current?.click()}>{t('Add images')}</Button><small>{t('Image limits', { count: policy.maxImages, each: formatBytes(policy.maxImageBytes, locale.active), total: formatBytes(policy.maxTotalBytes, locale.active) })}</small>{images.images.length > 0 && <Button disabled={busy || images.reading} onClick={() => publishImageDraft({ images: [], reading: false, error: null })}>{t('Clear images')}</Button>}</div>{!policy.available && <small>{t('Images unavailable')}</small>}{images.images.length > 0 && <><div className="mdb-image-grid">{images.images.map((image, index) => <figure className="mdb-draft-image" key={image.id}><img src={image.preview} alt={image.encoded.name || `${t('Image')} ${index + 1}`}/><figcaption><strong dir="auto">{image.encoded.name || `${t('Image')} ${index + 1}`}</strong><small>{formatBytes(image.bytes, locale.active)}</small></figcaption><IconButton label={`${t('Remove image')}: ${image.encoded.name || index + 1}`} icon="close" disabled={busy || images.reading} onClick={() => publishImageDraft({ ...imageDraft, images: imageDraft.images.filter(item => item.id !== image.id), error: null })}/></figure>)}</div><p className="mdb-image-summary">{t('Image selection summary', { count: images.images.length, size: formatBytes(images.images.reduce((sum, image) => sum + image.bytes, 0), locale.active) })}</p></>}<p className="mdb-image-privacy">{t('Image privacy note')}</p><small>{t('Image input hint')}</small>{images.reading && <p role="status" aria-live="polite">{t('Reading images')}</p>}{images.error && <p className="mdb-error-text" role="alert">{images.error}</p>}</section>;
        }
        function SessionView({ session: s, busy, act, onDialog, onLoad, notify }: { session: DebateSession; busy: boolean; act(action: string, fields?: Record<string, unknown>): Promise<any>; onDialog(value: DialogState): void; onLoad(settings: Settings): void; notify(message: string): void }) {
          const [copied, setCopied] = useState(false);
          const running = activeRun(s);
          useEffect(() => { setCopied(false); }, [s.id]);
          const copy = async () => { try { await navigator.clipboard.writeText(s.final?.text || ''); setCopied(true); } catch { notify(t('Browser copy failed')); } };
          const exportRun = async (format: 'json' | 'markdown') => {
            const result = await act('export', { id: s.id, format }) as { filename: string; content: string; mime: string } | null;
            if (!result) return;
            const url = URL.createObjectURL(new Blob([result.content], { type: result.mime }));
            const a = document.createElement('a'); a.href = url; a.download = result.filename; a.click(); URL.revokeObjectURL(url);
          };
          let previousRound: number | undefined;
          return <div className="mdb-session-view"><section className="mdb-run-heading"><div className="mdb-toolbar mdb-toolbar-wrap"><Status status={s.status}/><span className="mdb-muted">{t('Round')} {s.round}/{s.settings.rounds} · {t('Stage')}: {t(s.stage)}</span></div><h1 dir="auto">{s.title}</h1><details className="mdb-question-detail" open={s.question.length < 350}><summary>{t('Question label')}</summary><Plain>{s.question}</Plain></details><SessionImages session={s}/><Countdown session={s}/><div className="mdb-run-actions"><div className="mdb-toolbar mdb-toolbar-wrap">{running ? <Button icon="stop" className="mdb-button-danger" disabled={busy} onClick={() => onDialog({ kind: 'stop', id: s.id })}>{t('Stop')}</Button> : <><Button icon="spark" className="mdb-button-primary" title={t('Review hint')} disabled={busy || !s.messages.length} onClick={() => { void act('review', { id: s.id }); }}>{t('Review now')}</Button><Button icon="retry" title={t('Run again hint')} disabled={busy} onClick={() => { void act('rerun', { id: s.id }); }}>{t('Run again')}</Button></>}<details className="mdb-export"><summary><Icon name="download" size={16}/>{t('Export')}</summary><div><Button disabled={busy} onClick={() => { void exportRun('json'); }}>{t('Export JSON')}</Button><Button disabled={busy} onClick={() => { void exportRun('markdown'); }}>{t('Export Markdown')}</Button></div></details></div><small>{s.messages.length} {t('Messages')}</small></div>{s.stopReason && <Plain className="mdb-stop-reason">{s.stopReason}</Plain>}</section>
            {s.final ? <section className="mdb-final"><header><div className="mdb-final-title"><span className="mdb-final-mark"><Icon name="spark" size={22}/></span><div><h2>{t('Final answer')}</h2><small dir="auto">{s.final.model} · {s.final.provider}</small></div></div><Button icon={copied ? 'check' : 'copy'} onClick={() => { void copy(); }}>{t(copied ? 'Copied' : 'Copy final')}</Button></header>{s.final.incomplete && <span className="mdb-badge mdb-badge-warn">{t('Incomplete')}</span>}<Plain>{s.final.text}</Plain><footer>{t('Final caveat')}</footer></section> : !running && <section className="mdb-no-final"><Icon name="spark"/><div><h3>{t('No final')}</h3><p>{t('No final hint')}</p></div></section>}
            {s.reviewError && <div className="mdb-alert mdb-alert-error"><Icon name="alert"/><div><strong>{t('Reviewer error')}</strong><Plain>{s.reviewError}</Plain></div></div>}
            <TaskActivity session={s}/><Issues session={s}/>
            <details className="mdb-transcript" open={!s.final}><summary><h2>{t('Transcript')}</h2><span className="mdb-count">{s.messages.length}</span></summary>{s.messages.length === 0 && <div className="mdb-empty-transcript"><span className="mdb-orbit"><Icon size={28}/></span><h3>{t('Awaiting contributions')}</h3><p>{t('Awaiting hint')}</p></div>}{s.messages.map(message => { const separator = previousRound !== message.round; previousRound = message.round; return <React.Fragment key={message.id}>{separator && <div className="mdb-round-separator"><span>{t('Round')} {message.round}</span><i/></div>}<MessageCard message={message} session={s}/></React.Fragment>; })}</details>
            <details className="mdb-run-details"><summary>{t('Run details')}</summary><div className="mdb-usage"><h3>{t('Usage')}</h3><dl><div><dt>{t('Input tokens')}</dt><dd>{s.usage.inputTokens.toLocaleString()}</dd></div><div><dt>{t('Output tokens')}</dt><dd>{s.usage.outputTokens.toLocaleString()}</dd></div><div><dt>{t('Budget accounted')}</dt><dd>{s.budgetUsed.toLocaleString()}{s.budgetEstimated && <small> · {t('Estimated')}</small>}</dd></div></dl>{s.usageUnavailable && <small>{t('Usage unavailable')}</small>}{s.compression.length > 0 && <p>{t('Context compressed')} · {s.compression.length} {t('Compression events')}</p>}</div><details><summary>{t('Original settings')}</summary><p>{t('Original settings hint')}</p><Button onClick={() => onLoad(s.settings)}>{t('Load run settings')}</Button><pre dir="ltr">{JSON.stringify(s.settings, null, 2)}</pre></details><details><summary>{t('Tasks')}</summary>{s.requests.map((item, index) => <details key={`${item.taskId}-${index}`}><summary dir="auto">{item.config.model} · {t('Attempt')} {item.attempt}</summary><Plain>{item.system}</Plain><Plain>{item.prompt}</Plain><pre dir="ltr">{JSON.stringify(item.config, null, 2)}</pre></details>)}</details></details>
          </div>;
        }
        function Dialog({ state, busy, onClose, onConfirm }: { state: NonNullable<DialogState>; busy: boolean; onClose(): void; onConfirm(value: string): Promise<void> }) {
          const ref = useRef<HTMLDialogElement>(null);
          const titleId = useId();
          const [value, setValue] = useState(state.name || '');
          const input = state.kind === 'rename' || ['preset-save', 'preset-rename', 'preset-duplicate'].includes(state.kind);
          const titleKey = ({ rename: 'Rename', delete: 'Delete debate', stop: 'Stop debate', 'preset-save': 'Save preset', 'preset-rename': 'Rename preset', 'preset-duplicate': 'Duplicate preset', 'preset-delete': 'Delete preset' } as const)[state.kind];
          useEffect(() => { const dialog = ref.current; const previous = document.activeElement as HTMLElement | null; dialog?.showModal(); return () => { dialog?.close(); if (previous?.isConnected) previous.focus(); }; }, []);
          return <dialog ref={ref} className="mdb-dialog" aria-labelledby={titleId} onCancel={event => { event.preventDefault(); if (!busy) onClose(); }} onClick={event => { if (event.target === ref.current && !busy) { const rect = ref.current.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose(); } }}><form onSubmit={event => { event.preventDefault(); void onConfirm(value.trim()); }}><header><h2 id={titleId}>{t(titleKey)}</h2><IconButton icon="close" label={t('Close')} disabled={busy} onClick={onClose}/></header>{input ? <Field label={state.kind === 'rename' ? 'New title' : 'Preset name'}><input autoFocus required maxLength={state.kind === 'rename' ? 160 : 100} value={value} dir="auto" onChange={event => setValue(event.target.value)}/></Field> : <p>{t(state.kind === 'delete' ? 'Delete warning' : state.kind === 'stop' ? 'Stop warning' : 'Delete preset warning')}</p>}<footer><Button disabled={busy} onClick={onClose}>{t('Cancel')}</Button><button type="submit" disabled={busy || input && !value.trim()} className={`mdb-button ${input ? 'mdb-button-primary' : 'mdb-button-danger'}`}>{busy ? t('Working') : t(input ? 'Save' : state.kind === 'stop' ? 'Stop' : 'Delete')}</button></footer></form></dialog>;
        }
        function App() {
          const state = useSyncExternalStore(subscribe, () => view, () => view);
          const locale = useLocale();
          const rtl = locale.active.startsWith('ar');
          const snapshot = state.snapshot;
          const [draft, setDraft] = useState<Settings | null>(() => settingsDraft);
          const [question, setQuestion] = useState(() => composeDraft);
          const images = useSyncExternalStore(subscribeImages, () => imageDraft, () => imageDraft);
          const imagePolicy = effectiveImagePolicy(snapshot?.imagePolicy);
          useEffect(() => { settingsDraft = draft; }, [draft]);
          useEffect(() => { composeDraft = question; }, [question]);
          const [busy, setBusy] = useState(false);
          const [notice, setNotice] = useState<{ text: string; error?: boolean } | null>(null);
          const [dialog, setDialog] = useState<DialogState>(null);
          const [settingsOpen, setSettingsOpen] = useState(false);
          const [historyOpen, setHistoryOpen] = useState(false);
          const [search, setSearch] = useState('');
          const [presetId, setPresetId] = useState('');
          const [attempted, setAttempted] = useState(false);
          const composerRef = useRef<HTMLTextAreaElement>(null);
          useEffect(() => { void refresh(); }, []);
          useEffect(() => { if (snapshot && !snapshot.activeId) composerRef.current?.focus(); }, [snapshot?.activeId]);
          useEffect(() => {
            if (!snapshot) return;
            const next = JSON.stringify(snapshot.settings);
            const baseline = settingsBaseline;
            if (next !== baseline || !draft) setDraft(previous => !previous || JSON.stringify(previous) === baseline ? clone(snapshot.settings) : previous);
            settingsBaseline = next;
          }, [snapshot?.settings]);
          const selected = snapshot?.sessions.find(session => session.id === snapshot.activeId) || null;
          const settings = draft || snapshot?.settings;
          const dirty = !!(draft && snapshot && JSON.stringify(draft) !== JSON.stringify(snapshot.settings));
          const validation = useMemo(() => {
            if (!settings || !snapshot) return [];
            const result = settingsSchema.safeParse(settings);
            const errors = result.success ? [] : result.error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`);
            const enabled = settings.participants.filter(p => p.enabled);
            if (enabled.length < 2) errors.push(t('Two participants'));
            if (new Set(enabled.map(modelKey)).size !== enabled.length) errors.push(t('Duplicate identity'));
            if ([...enabled, ...(settings.reviewer ? [settings.reviewer] : [])].some(p => !snapshot.models.some(m => modelKey(m) === modelKey(p)))) errors.push(t('Unavailable model error'));
            if (enabled.some(p => p.options.reasoningEffort && !snapshot.models.find(m => modelKey(m) === modelKey(p))?.reasoningEfforts.includes(p.options.reasoningEffort))) errors.push(t('Unsupported reasoning'));
            if (images.images.length) {
              const imageError = validateImageBatch([], images.images, imagePolicy);
              if (imageError) errors.push(imageError);
              const unsupported = [...enabled, ...(settings.reviewer ? [settings.reviewer] : [])].filter(p => snapshot.models.find(m => modelKey(m) === modelKey(p))?.imageSupport !== 'supported');
              if (unsupported.length) errors.push(t('Image model support required', { models: Array.from(new Set(unsupported.map(p => `${p.provider}/${p.model}`))).join(', ') }));
              if (settings.tokenBudget !== null) errors.push(t('Image token budget unsupported'));
            }
            return Array.from(new Set(errors));
          }, [settings, snapshot?.models, snapshot?.imagePolicy, images.images, locale.revision]);
          const warnings = useMemo(() => settings ? schedulingWarnings(settings) : [], [settings]);
          const notify = (text: string) => setNotice({ text });
          async function act(action: string, fields: Record<string, unknown> = {}): Promise<any> {
            if (busy) return null;
            setBusy(true); setNotice(null);
            try {
              const result = await request<any>(action, fields);
              if (action === 'start' && result?.id) publishImageDraft({ images: [], reading: false, error: null });
              if (['start', 'rerun'].includes(action) && result?.id) await request('select', { id: result.id });
              if (action !== 'export') await refresh(true);
              return result === undefined ? true : result;
            } catch (error) { if (alive) setNotice({ text: error instanceof Error ? error.message : t('Request failed'), error: true }); return null; }
            finally { if (alive) setBusy(false); }
          }
          const saveSettings = async () => {
            const parsed = settingsSchema.safeParse(settings);
            setAttempted(true);
            if (!parsed.success) { setSettingsOpen(true); return; }
            if (await act('settings', { settings: parsed.data })) notify(t('Settings saved'));
          };
          const newDebate = async () => { const result = await act('select', { id: null }); if (result) { setHistoryOpen(false); setAttempted(false); composerRef.current?.focus(); } };
          const start = async () => {
            setAttempted(true);
            if (busy || imageDraft.reading) return;
            if (!question.trim() || validation.length || !settings) { if (validation.length) setSettingsOpen(true); else composerRef.current?.focus(); return; }
            const result = await act('start', { question: question.trim(), settings, ...(images.images.length ? { images: images.images.map(image => image.encoded) } : {}) });
            if (result) publishImageDraft({ images: [], reading: false, error: null });
          };
          const onApply = async (preset: Preset) => { const result = await act('preset-apply', { id: preset.id }); if (result) { setDraft(clone(preset.settings)); setPresetId(preset.id); notify(t('Preset applied')); } };
          const confirmDialog = async (name: string) => {
            if (!dialog || !snapshot || !settings) return;
            let result: unknown;
            if (dialog.kind === 'rename') result = await act('rename', { id: dialog.id, title: name });
            else if (dialog.kind === 'delete') result = await act('delete', { id: dialog.id });
            else if (dialog.kind === 'stop') result = await act('stop', { id: dialog.id });
            else if (dialog.kind === 'preset-delete') { result = await act('preset-delete', { id: dialog.id }); if (presetId === dialog.id) setPresetId(''); }
            else {
              const preset = snapshot.presets.find(p => p.id === dialog.id);
              const nextSettings = dialog.kind === 'preset-save' ? settings : preset?.settings;
              if (!nextSettings) return;
              const resultSettings = settingsSchema.safeParse(nextSettings);
              if (!resultSettings.success) { setNotice({ text: resultSettings.error.issues.map(issue => issue.message).join('\n'), error: true }); return; }
              result = await act('preset-save', { name, settings: nextSettings, ...(dialog.kind === 'preset-rename' ? { id: dialog.id } : {}) });
              if (result) notify(t('Preset saved'));
            }
            if (result) setDialog(null);
          };
          if (!snapshot || !settings) return <div className="mdb-root mdb-initial" dir={rtl ? 'rtl' : 'ltr'}><Switcher debate/><span className="mdb-orbit"><Icon size={32}/></span><h2>{t(state.error ? 'Connection error' : 'Loading')}</h2>{state.error && <><Plain>{state.error}</Plain><Button icon="retry" onClick={() => { void refresh(); }}>{t('Retry')}</Button></>}</div>;
          const histories = snapshot.sessions.filter(session => `${session.title} ${session.question}`.toLocaleLowerCase().includes(search.toLocaleLowerCase())).sort((a, b) => b.createdAt - a.createdAt);
          return <div className={`mdb-root ${settingsOpen ? 'mdb-settings-open' : ''} ${historyOpen ? 'mdb-history-open' : ''}`} dir={rtl ? 'rtl' : 'ltr'} lang={locale.active}>
            <header className="mdb-topbar"><div className="mdb-brand"><Icon size={23}/><strong>{t('Model Debate')}</strong></div><Switcher debate/><div className="mdb-topbar-controls"><label className="mdb-language"><Icon name="globe" size={16}/><span className="mdb-sr-only">{t('Interface language')}</span><select aria-label={t('Interface language')} value={locale.active} onChange={event => { try { ctx.locale.setLocale(event.target.value); } catch (error) { setNotice({ text: String(error), error: true }); } }}>{locale.locales.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label><IconButton icon="settings" label={t('Next-run settings')} aria-expanded={settingsOpen} onClick={() => { setSettingsOpen(!settingsOpen); setHistoryOpen(false); }}/></div></header>
            <div className="mdb-mobile-tabs"><Button icon="debate" aria-expanded={historyOpen} onClick={() => { setHistoryOpen(!historyOpen); setSettingsOpen(false); }}>{t('History')}</Button><Button icon="plus" disabled={busy} onClick={() => { void newDebate(); }}>{t('New debate')}</Button><Button icon="settings" aria-expanded={settingsOpen} onClick={() => { setSettingsOpen(!settingsOpen); setHistoryOpen(false); }}>{t('Settings')}</Button></div>
            <div className="mdb-workspace"><aside className="mdb-history" aria-label={t('History')}><Button icon="plus" className="mdb-button-primary mdb-new-debate" disabled={busy} onClick={() => { void newDebate(); }}>{t('New debate')}</Button><div className="mdb-history-heading"><h2>{t('History')}</h2><span>{snapshot.sessions.length}</span></div>{snapshot.sessions.length > 5 && <input className="mdb-history-search" type="search" placeholder={t('Search history')} aria-label={t('Search history')} value={search} onChange={event => setSearch(event.target.value)}/>}<nav aria-label={t('History')}>{histories.map(session => <div key={session.id} className={`mdb-history-item ${session.id === snapshot.activeId ? 'mdb-history-active' : ''}`}><button type="button" className="mdb-history-select" aria-current={session.id === snapshot.activeId ? 'page' : undefined} disabled={busy} onClick={() => { void act('select', { id: session.id }); setHistoryOpen(false); }}><span className="mdb-history-title" dir="auto">{session.title || t('Untitled debate')}</span><span className="mdb-history-meta"><Status status={session.status}/><time>{new Date(session.createdAt).toLocaleDateString(locale.active, { month: 'short', day: 'numeric' })}</time></span></button><div className="mdb-history-actions"><IconButton icon="edit" label={`${t('Rename')}: ${session.title}`} disabled={busy || activeRun(session)} onClick={() => setDialog({ kind: 'rename', id: session.id, name: session.title })}/><IconButton icon="trash" label={`${t('Delete')}: ${session.title}`} disabled={busy || activeRun(session)} onClick={() => setDialog({ kind: 'delete', id: session.id, name: session.title })}/></div></div>)}</nav>{snapshot.sessions.length === 0 && <div className="mdb-history-empty"><Icon size={25}/><p>{t('No debates yet')}</p></div>}<footer>{t('History hint')}</footer></aside>
              <main className="mdb-main" aria-label={t('Model Debate')}><div className="mdb-main-inner">{(notice || state.error) && <div className={`mdb-alert ${notice?.error || state.error ? 'mdb-alert-error' : 'mdb-alert-success'}`} role={notice?.error || state.error ? 'alert' : 'status'}><Icon name={notice?.error || state.error ? 'alert' : 'check'}/><Plain>{notice?.text || state.error}</Plain>{state.error ? <Button onClick={() => { void refresh(); }}>{t('Retry')}</Button> : <IconButton icon="close" label={t('Dismiss')} onClick={() => setNotice(null)}/>}</div>}
                {selected ? <SessionView key={selected.id} session={selected} busy={busy} act={act} onDialog={setDialog} onLoad={value => { setDraft(clone(value)); setSettingsOpen(true); }} notify={notify}/> : <div className="mdb-compose"><div className="mdb-hero"><span className="mdb-hero-symbol"><Icon size={38}/><span className="mdb-hero-mini"><Icon name="spark" size={17}/></span></span><p className="mdb-eyebrow">{t('Workspace eyebrow')}</p><h1>{t('Workspace title')}</h1><p>{t('Workspace subtitle')}</p></div><div className="mdb-compose-stats"><button type="button" onClick={() => setSettingsOpen(true)}><strong>{settings.participants.filter(p => p.enabled).length}</strong><span>{t('Enabled participants')}</span></button><button type="button" onClick={() => setSettingsOpen(true)}><strong>{settings.rounds}</strong><span>{t('Rounds')}</span></button><button type="button" onClick={() => setSettingsOpen(true)}><strong>{t(settings.mode)}</strong><span>{t('Mode')}</span></button></div><form className="mdb-composer" onSubmit={event => { event.preventDefault(); void start(); }} onPaste={event => { const files = Array.from(event.clipboardData.items).filter(item => item.kind === 'file').map(item => item.getAsFile()).filter((file): file is File => !!file); if (files.length) { event.preventDefault(); if (!busy) void addImageFiles(files, imagePolicy); } }} onDragOver={event => { if (event.dataTransfer.types.includes('Files')) event.preventDefault(); }} onDrop={event => { if (!event.dataTransfer.types.includes('Files')) return; event.preventDefault(); if (!busy) void addImageFiles(Array.from(event.dataTransfer.files), imagePolicy); }}><label htmlFor="mdb-question">{t('Question label')}</label><textarea ref={composerRef} id="mdb-question" dir="auto" rows={7} maxLength={30000} value={question} placeholder={t('Question placeholder')} onChange={event => setQuestion(event.target.value)} aria-invalid={attempted && !question.trim()} onKeyDown={event => { if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) { event.preventDefault(); void start(); } }}/><ImageComposer draft={images} policy={imagePolicy} busy={busy}/><footer><small>{t('Question hint')}</small><button type="submit" className="mdb-button mdb-button-primary" disabled={busy || images.reading || !!validation.length || !snapshot.models.length}><Icon name="play"/>{t(images.reading ? 'Reading images' : busy ? 'Starting' : 'Start debate')}</button></footer></form>{attempted && !question.trim() && <p className="mdb-error-text" role="alert">{t('Question required')}</p>}
                  {validation.length > 0 && <div className="mdb-alert mdb-alert-warn"><Icon name="alert"/><div><strong>{t('Validation errors')}</strong><ul>{validation.map(error => <li key={error}>{error}</li>)}</ul><button type="button" className="mdb-text-button" onClick={() => setSettingsOpen(true)}>{t('Settings')}</button></div></div>}
                  {warnings.length > 0 && <details className="mdb-scheduling"><summary>{t('Scheduling warnings')} <span className="mdb-count">{warnings.length}</span></summary><ul>{warnings.map(warning => <li key={warning}>{warning}</li>)}</ul></details>}
                  <p className="mdb-model-policy">{snapshot.localOnly && <><Icon name="check" size={15}/><strong>{t('Local only')}</strong> · </>}{t('Models policy')}</p>{snapshot.models.length < 2 && <div className="mdb-alert mdb-alert-warn"><Icon name="alert"/><div><strong>{t('No models')}</strong><p>{t('No models hint')}</p><Button icon="retry" onClick={() => { void refresh(); }}>{t('Refresh')}</Button></div></div>}
                </div>}
                {snapshot.diagnostics.length > 0 && <details className="mdb-diagnostics"><summary>{t('Diagnostics')} <span className="mdb-count">{snapshot.diagnostics.length}</span></summary>{snapshot.diagnostics.map((item, i) => <Plain key={i}>{item}</Plain>)}</details>}
              </div></main>
              <aside className="mdb-settings" aria-label={t('Next-run settings')}><header className="mdb-settings-heading"><div><h2>{t('Next-run settings')}</h2><p>{t('Immutable hint')}</p></div><IconButton icon="close" label={t('Close')} onClick={() => setSettingsOpen(false)}/></header>{attempted && validation.length > 0 && <div className="mdb-alert mdb-alert-warn"><div><strong>{t('Validation errors')}</strong><ul>{validation.map(error => <li key={error}>{error}</li>)}</ul></div></div>}<SettingsEditor settings={settings} models={snapshot.models} presets={snapshot.presets} presetId={presetId} onPreset={setPresetId} setSettings={setDraft} dirty={dirty} busy={busy} onSave={() => { void saveSettings(); }} onDialog={setDialog} onApply={preset => { void onApply(preset); }}/></aside>
            </div>{dialog && <Dialog key={`${dialog.kind}-${dialog.id || ''}`} state={dialog} busy={busy} onClose={() => setDialog(null)} onConfirm={confirmDialog}/>}</div>;
        }
        ctx.slots.inject('conversation.header.leading', () => ctx.slots.register({ name: 'conversation.header.leading' }, () => <Switcher/>));
        ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: 'model-debate' }, App));
        ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({ name: 'sidebar.panellist', id: 'model-debate', order: -10, label: () => t('Model Debate') }, SidebarEntry));
      },
    };
  },
});

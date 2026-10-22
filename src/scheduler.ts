import type { Settings, TaskStatus } from './state.js';

export class Cancelled extends Error { constructor(public code: 'STOPPED' | 'DEADLINE' = 'STOPPED') { super(code === 'DEADLINE' ? 'Stage or overall deadline reached' : 'Run stopped'); } }
export interface Clock { now(): number; setTimeout(fn: () => void, ms: number): unknown; clearTimeout(id: unknown): void; }
export const realClock: Clock = { now: () => Date.now(), setTimeout: (fn, ms) => setTimeout(fn, Math.max(0, ms)), clearTimeout: id => clearTimeout(id as ReturnType<typeof setTimeout>) };
export function sleep(ms: number, signal: AbortSignal, deadline: number, clock = realClock): Promise<void> {
  if (signal.aborted) return Promise.reject(new Cancelled());
  if (clock.now() >= deadline) return Promise.reject(new Cancelled('DEADLINE'));
  return new Promise((resolve, reject) => {
    const end = Math.min(clock.now() + ms, deadline);
    const cleanup = () => { clock.clearTimeout(timer); signal.removeEventListener('abort', cancel); };
    const cancel = () => { cleanup(); reject(new Cancelled()); };
    const timer = clock.setTimeout(() => { cleanup(); end >= deadline ? reject(new Cancelled('DEADLINE')) : resolve(); }, end - clock.now());
    signal.addEventListener('abort', cancel, { once: true });
  });
}
interface Ticket { provider: string; deadline: number; signal: AbortSignal; readyAt: number; resolve(release: () => void): void; reject(error: Error): void; status(status: TaskStatus): void; abort(): void; }
/** One central admission queue: spacing regulates starts, never holds a request slot. */
export class RequestGate {
  private active = 0;
  private activeBy = new Map<string, number>();
  private nextGlobal = 0;
  private nextProvider = new Map<string, number>();
  private queue: Ticket[] = [];
  private timer: unknown;
  constructor(private settings: Settings, private clock: Clock = realClock) {}
  acquire(provider: string, signal: AbortSignal, deadline: number, status: Ticket['status'], readyAt = 0): Promise<() => void> {
    if (signal.aborted) return Promise.reject(new Cancelled());
    if (this.clock.now() >= deadline) return Promise.reject(new Cancelled('DEADLINE'));
    return new Promise((resolve, reject) => {
      const t: Ticket = { provider, signal, deadline, readyAt, resolve, reject, status, abort: () => { this.remove(t); reject(new Cancelled()); this.pump(); } };
      this.queue.push(t); signal.addEventListener('abort', t.abort, { once: true }); this.pump();
    });
  }
  private remove(t: Ticket): void { this.queue = this.queue.filter(x => x !== t); t.signal.removeEventListener('abort', t.abort); }
  private pump(): void {
    this.clock.clearTimeout(this.timer); this.timer = undefined;
    const now = this.clock.now(); let wake = Infinity;
    for (const t of [...this.queue]) {
      if (t.signal.aborted || now >= t.deadline) { this.remove(t); t.reject(new Cancelled(t.signal.aborted ? 'STOPPED' : 'DEADLINE')); continue; }
      wake = Math.min(wake, t.deadline);
      const earliest = Math.max(t.readyAt, this.nextGlobal, this.nextProvider.get(t.provider) ?? 0);
      const capacity = this.active < this.settings.concurrency && (this.activeBy.get(t.provider) ?? 0) < (this.settings.providerLimits[t.provider] ?? this.settings.concurrency);
      if (now < earliest) { t.status('waiting for cooldown'); wake = Math.min(wake, earliest); continue; }
      if (!capacity) { t.status('queued'); continue; }
      this.remove(t); this.active++; this.activeBy.set(t.provider, (this.activeBy.get(t.provider) ?? 0) + 1);
      this.nextGlobal = now + this.settings.globalSpacingMs; this.nextProvider.set(t.provider, now + (this.settings.providerSpacingMs[t.provider] ?? 0));
      let released = false;
      t.resolve(() => { if (released) return; released = true; this.active--; this.activeBy.set(t.provider, Math.max(0, (this.activeBy.get(t.provider) ?? 1) - 1)); this.pump(); });
    }
    if (this.queue.length && Number.isFinite(wake)) this.timer = this.clock.setTimeout(() => this.pump(), Math.max(1, wake - this.clock.now()));
  }
  dispose(): void { this.clock.clearTimeout(this.timer); for (const t of [...this.queue]) { this.remove(t); t.reject(new Cancelled()); } }
}

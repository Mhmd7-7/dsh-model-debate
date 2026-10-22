import { preferencesSchema, restoreSession, sessionSchema, type DebateSession, type Preferences } from './state.js';

export interface DomainTable<T> {
  get(key: string): T | undefined;
  entries(): IterableIterator<[string, T]>;
  put(key: string, value: T): Promise<void>;
  delete(key: string): Promise<boolean>;
}
export interface RepositoryDomain {
  table(name: 'sessions'): DomainTable<DebateSession>;
  table(name: 'preferences'): DomainTable<Preferences>;
  close(): Promise<void>;
}

/** Detached, validated snapshots over the already-open DSH storage domain. */
export class Repository {
  readonly ready: Promise<void> = Promise.resolve();
  private readonly sessions: DomainTable<DebateSession>;
  private readonly preferences: DomainTable<Preferences>;
  private readonly cache = new Map<string, DebateSession>();
  private prefs?: Preferences;
  private pending: Promise<void> = Promise.resolve();
  constructor(domain: RepositoryDomain) {
    this.sessions = domain.table('sessions'); this.preferences = domain.table('preferences');
    for (const [id, value] of this.sessions.entries()) {
      const session = sessionSchema.parse(value);
      if (id !== session.id) throw new Error('Stored debate identity does not match its record key.');
      this.cache.set(id, structuredClone(session));
    }
    const prefs = this.preferences.get('global');
    if (prefs !== undefined) this.prefs = structuredClone(preferencesSchema.parse(prefs));
  }
  list(): DebateSession[] { return [...this.cache.values()].sort((a, b) => b.updatedAt - a.updatedAt || a.id.localeCompare(b.id)).map(value => structuredClone(value)); }
  get(id: string): DebateSession | undefined { const value = this.cache.get(id); return value === undefined ? undefined : structuredClone(value); }
  getPreferences(): Preferences | undefined { return this.prefs === undefined ? undefined : structuredClone(this.prefs); }
  private enqueue(operation: () => Promise<void>): Promise<void> {
    const result = this.pending.then(operation);
    // A failed write rejects its own caller without poisoning subsequent writes.
    this.pending = result.catch(() => undefined);
    return result;
  }
  save(session: DebateSession): Promise<void> {
    // Snapshot at invocation, not later when a previous disk write finally completes.
    const copy = structuredClone(sessionSchema.parse(session));
    return this.enqueue(async () => {
      await this.sessions.put(copy.id, structuredClone(copy));
      this.cache.set(copy.id, copy);
    });
  }
  remove(id: string): Promise<void> { return this.enqueue(async () => { await this.sessions.delete(id); this.cache.delete(id); }); }
  savePreferences(prefs: Preferences): Promise<void> {
    const copy = structuredClone(preferencesSchema.parse(prefs));
    return this.enqueue(async () => { await this.preferences.put('global', structuredClone(copy)); this.prefs = copy; });
  }
  recover(): Promise<void> {
    return this.enqueue(async () => {
      for (const [id, value] of this.cache) {
        if (value.status !== 'running' && value.status !== 'reviewing') continue;
        const recovered = restoreSession(structuredClone(value));
        recovered.updatedAt = Math.max(recovered.updatedAt, recovered.endedAt ?? Date.now());
        await this.sessions.put(id, structuredClone(recovered));
        this.cache.set(id, recovered);
      }
    });
  }
  /** Drain issued writes before the owning plugin closes the domain. */
  flush(): Promise<void> { return this.pending; }
}

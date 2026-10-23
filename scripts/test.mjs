import { spawn } from 'node:child_process';
import { cp, mkdir, readdir, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const output = resolve('node_modules/.cache/model-debate-tests');
const smoke = process.argv[2] === '--smoke';
async function run(args) {
  await new Promise((done, reject) => {
    const child = spawn(process.execPath, args, { stdio: 'inherit' });
    child.once('error', reject);
    child.once('exit', code => code === 0 ? done() : reject(new Error(`Test command exited with ${code}`)));
  });
}
await mkdir(output, { recursive: true });
await run([require.resolve('typescript/bin/tsc'), '--project', 'tsconfig.json', '--noEmit', 'false', '--outDir', output]);
// Static source-contract tests and build-style helpers use import.meta.url. Keep
// their relative resources beside emitted JS; never copy personal runtime data.
for (const path of ['src', 'locale', 'package.json', 'icon.svg', 'scripts/markdown-styles.mjs']) {
  await cp(path, resolve(output, path), { recursive: true });
}
if (smoke) {
  await run([resolve(output, 'scripts/smoke.js')]);
} else {
  // The explicit current source list avoids stale compiled tests after renames.
  const tests = (await readdir('tests')).filter(path => path.endsWith('.test.ts')).sort().map(path => resolve(output, 'tests', path.replace(/\.ts$/, '.js')));
  // No per-file subprocess pipes: confinement forbids Windows named pipes.
  const isolation = process.allowedNodeEnvironmentFlags.has('--test-isolation') ? '--test-isolation=none'
    : process.allowedNodeEnvironmentFlags.has('--experimental-test-isolation') ? '--experimental-test-isolation=none' : null;
  if (isolation) {
    await run(['--test', isolation, ...process.argv.slice(2), ...tests]);
  } else {
    // Earliest Node 22 releases predate isolation flags. One explicit ESM entry
    // imports the tests in-process; node:test still reports and sets failure exit.
    const entry = resolve(output, 'test-entry.mjs');
    await writeFile(entry, tests.map(path => `await import(${JSON.stringify(pathToFileURL(path).href)});`).join('\n'));
    await run([...process.argv.slice(2), entry]);
  }
}

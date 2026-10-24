// Reproducible exact-production-bundle browser check; never starts a server.
// Requires Python Playwright + installed Chrome. Optional local saved snapshot is
// supplied explicitly by --saved and is never copied into distribution/docs.
import { spawn } from 'node:child_process';
import { mkdir, copyFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
async function run(command, args) {
  await new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit' });
    child.once('error', reject);
    child.once('exit', code => code === 0 ? resolve() : reject(new Error(`Browser check command exited with ${code}`)));
  });
}
await mkdir('node_modules/.cache/panel-review', { recursive: true });
await copyFile('dist/client.js', 'node_modules/.cache/panel-review/client.js');
await run(process.execPath, [require.resolve('esbuild/bin/esbuild'), 'scripts/client-browser-harness.tsx', '--bundle', '--platform=browser', '--format=iife', '--outfile=node_modules/.cache/panel-review/harness.js']);
await run('python', ['scripts/verify-client-browser.py', ...process.argv.slice(2)]);

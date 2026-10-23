import { spawn } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import { buildMarkdownStyles } from './markdown-styles.mjs';

const require = createRequire(import.meta.url);
// The CLI wrapper resolves esbuild's installed platform binary itself. Inherited
// stdio avoids named-pipe spawning, which the DSH Windows file sandbox prohibits.
async function build(args) {
  await new Promise((done, reject) => {
    const child = spawn(process.execPath, [require.resolve('esbuild/bin/esbuild'), ...args], { stdio: 'inherit' });
    child.once('error', reject);
    child.once('exit', code => code === 0 ? done() : reject(new Error(`esbuild exited with ${code}`)));
  });
}
await mkdir('dist', { recursive: true });
await mkdir('node_modules/.cache/model-debate', { recursive: true });
const styleModule = resolve('node_modules/.cache/model-debate/markdown-styles.js');
// An injected module keeps embedded fonts out of Windows' command-line limit.
await writeFile(styleModule, `export const __MODEL_DEBATE_MARKDOWN_CSS__ = ${JSON.stringify(await buildMarkdownStyles())};\n`);
await build(['src/index.ts', '--outfile=dist/index.js', '--bundle', '--platform=node', '--format=esm', '--target=node22', '--packages=external', '--sourcemap']);
await build(['src/client.tsx', '--outfile=dist/client.js', '--bundle', '--platform=browser', '--format=iife', '--target=es2022', '--sourcemap', '--loader:.css=text', '--external:react', `--inject:${styleModule}`]);
const manifest = JSON.parse(await readFile('package.json', 'utf8'));
for (const path of ['dist/index.js', 'dist/client.js', 'cordis.patch.yml', 'icon.svg', 'locale/en.json', 'locale/ar.json']) await readFile(path);
await writeFile('dist/build-info.json', JSON.stringify({ plugin: manifest.version, dsh: '0.2.1-rc.2', cordis: '4.0.5', builtAt: new Date().toISOString() }, null, 2));
console.log('Host and native DSH module-loader Client bundles built.');

import { build } from 'esbuild';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
await build({ entryPoints: ['src/index.ts'], outfile: 'dist/index.js', bundle: true, platform: 'node', format: 'esm', target: 'node22', packages: 'external', sourcemap: true });
await build({ entryPoints: ['src/client.tsx'], outfile: 'dist/client.js', bundle: true, platform: 'browser', format: 'iife', target: 'es2022', sourcemap: true, loader: { '.css': 'text' }, external: ['react'] });
const manifest = JSON.parse(await readFile('package.json', 'utf8'));
for (const path of ['dist/index.js', 'dist/client.js', 'cordis.patch.yml', 'icon.svg', 'locale/en.json', 'locale/ar.json']) await readFile(path);
await writeFile('dist/build-info.json', JSON.stringify({ plugin: manifest.version, dsh: '0.2.1-rc.2', cordis: '4.0.5', builtAt: new Date().toISOString() }, null, 2));
console.log('Host and native DSH module-loader Client bundles built.');

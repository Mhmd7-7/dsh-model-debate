import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import postcss from 'postcss';

const require = createRequire(import.meta.url);

/** Produce one owned, scoped stylesheet with no external font/network requests. */
export async function buildMarkdownStyles() {
  const katexDirectory = dirname(require.resolve('katex'));
  const source = await readFile(join(katexDirectory, 'katex.css'), 'utf8');
  const css = postcss.parse(source, { from: join(katexDirectory, 'katex.css'), map: false });
  const fonts = new Map();
  for (const match of source.matchAll(/url\((fonts\/[^)]+\.woff2)\)/g)) {
    if (!fonts.has(match[1])) fonts.set(match[1], (await readFile(join(katexDirectory, match[1]))).toString('base64'));
  }
  css.walkRules(rule => {
    if (rule.parent?.type === 'atrule' && rule.parent.name === 'font-face') return;
    rule.selectors = rule.selectors.map(selector => `.mdb-markdown ${selector}`);
  });
  css.walkDecls(declaration => {
    if (declaration.prop === 'src') {
      // Supported browser target is es2022; embedding legacy TTF/WOFF fallbacks
      // triples the bundle size for no benefit. Every KaTeX font ships WOFF2.
      const source = declaration.value.match(/url\((fonts\/[^)]+\.woff2)\)\s*format\("woff2"\)/);
      if (!source || !fonts.has(source[1])) throw new Error('KaTeX font declaration has no WOFF2 source.');
      declaration.value = `url(data:font/woff2;base64,${fonts.get(source[1])}) format("woff2")`;
    }
    if (declaration.prop === 'font-family') {
      // Avoid redefining the host application's global KaTeX font-face names.
      declaration.value = declaration.value.replace(/KaTeX_/g, 'MDB_KaTeX_');
    }
    if (declaration.prop === 'font-display') declaration.value = 'swap';
  });
  const ownStyles = await readFile(new URL('../src/markdown.css', import.meta.url), 'utf8');
  return `${css.toString()}\n${ownStyles}`;
}

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import type { Nodes } from 'mdast';
import { createMarkdownRenderer, parseMarkdown, safeMarkdownUrl } from '../src/markdown.js';

const Markdown = createMarkdownRenderer(React);
const render = (source: string, labels?: Readonly<Record<string, string>>) => renderToStaticMarkup(React.createElement(Markdown, { children: source, labels }));
function nodes(source: string): Nodes[] {
  const result: Nodes[] = [];
  const queue: Nodes[] = [parseMarkdown(source)];
  while (queue.length) {
    const node = queue.shift()!;
    result.push(node);
    if ('children' in node) queue.unshift(...node.children);
  }
  return result;
}

test('Arabic mixed GFM renders headings, emphasis, lists, quotes and tables as semantic elements', () => {
  const source = '# مقارنة **النماذج**\n\nنص عربي مع **bold** و*مائل* و~~محذوف~~.\n\n> اقتباس موثوق؟\n\n1. الأول\n2. الثاني\n\n- [x] تم\n- [ ] لاحقاً\n\n| النموذج | النتيجة |\n| :--- | ---: |\n| Alpha | **جيد** |\n\n[مصدر](https://example.org/path?q=1 "reference")';
  const html = render(source);
  assert.match(html, /<h1 dir="auto">مقارنة <strong>النماذج<\/strong><\/h1>/);
  assert.match(html, /<p dir="auto">نص عربي مع <strong>bold<\/strong>/);
  assert.match(html, /<em>مائل<\/em>/); assert.match(html, /<del>محذوف<\/del>/);
  assert.match(html, /<blockquote dir="rtl">/); assert.match(html, /<ol dir="rtl" start="1">/);
  assert.match(html, /type="checkbox" disabled=""/); assert.match(html, /checked=""/);
  assert.match(html, /<table><thead><tr><th dir="auto" scope="col" style="text-align:left">/);
  assert.match(html, /<tbody><tr><td dir="auto" style="text-align:left">Alpha<\/td>/);
  assert.match(html, /href="https:\/\/example.org\/path\?q=1" title="reference" rel="noopener noreferrer nofollow"/);
});

test('inline and display KaTeX use LTR islands in Arabic paragraphs and retain accessible MathML', () => {
  const html = render(String.raw`العربية $E = mc^2$ وسط النص و \(\frac{1}{2}\) ثم.

$$
\sum_{n=1}^{4} n = 10
$$

\[\int_0^1 x\,dx = \frac{1}{2}\]`);
  assert.equal((html.match(/class="katex"/g) ?? []).length, 4);
  assert.match(html, /<p dir="auto">العربية <span dir="ltr" class="mdb-math">/);
  assert.match(html, /<div dir="ltr" class="mdb-math mdb-math-display">/);
  assert.match(html, /<span dir="ltr" class="mdb-math mdb-math-display">/);
  assert.match(html, /<math xmlns="http:\/\/www.w3.org\/1998\/Math\/MathML"/);
  assert.match(html, /<annotation encoding="application\/x-tex">\\frac\{1\}\{2\}<\/annotation>/);
});

test('Arabic unit labels inside TeX use Unicode fallback without disabling trust restrictions', () => {
  const html = render(String.raw`الإجمالي $20\,\text{ريال}$ والمتغير $س + ص$.`);
  assert.equal((html.match(/class="katex"/g) ?? []).length, 2);
  assert.doesNotMatch(html, /mdb-math-fallback/);
  assert.match(html, /ريال/);
  assert.doesNotMatch(render(String.raw`$\text{ريال}\href{https://evil.example}{click}$`), /<a /);
});

test('display math retains actual closing-fence state inside quotes and lists', () => {
  for (const source of ['> $$\n> x^2\n> $$', '- $$\n  x\n  $$', '$$x^2$$', 'قبل $$x^2$$ بعد']) {
    assert.match(render(source), /class="katex"/, source);
    assert.doesNotMatch(render(source), /mdb-math-fallback/, source);
  }
  assert.match(render('> $$\n> x^2'), /mdb-math-fallback/);
});

test('HTML is literal text and unsafe links, remote images and TeX trust commands never execute', () => {
  const source = String.raw`<script>alert("x")</script>

<img src=x onerror=alert(1)>

[bad](javascript:alert%281%29) [data](data:text/html,test) [safe](https://example.org)

![tracker](https://evil.example/track.png)

$\href{javascript:alert(1)}{click}$ $\includegraphics{https://evil.example/a.png}$ $\htmlClass{injected}{x}$

$\text{<script>evil</script>}$`;
  const html = render(source);
  assert.match(html, /&lt;script&gt;/);
  assert.match(html, /&lt;img src=x onerror=alert\(1\)&gt;/);
  assert.doesNotMatch(html, /<(?:script|img|iframe|object|style)\b/i);
  assert.doesNotMatch(html, /href="(?:javascript|data):/i);
  assert.doesNotMatch(html, /src="https:\/\/evil/);
  assert.doesNotMatch(html, /class="injected"/);
  assert.equal((html.match(/<a /g) ?? []).length, 1);
  assert.match(html, /mdb-image-alt">tracker<\/span>/);
});

test('URL allowlist rejects protocol obfuscation, controls and backslashes', () => {
  for (const url of ['javascript:alert(1)', 'JavaScript:alert(1)', 'java\nscript:alert(1)', 'vbscript:x', 'data:text/plain,x', '//evil.example', '\\evil', 'https:\\evil', '\u0000https://evil', 'j\u0009avascript:x', 'file:///secret', 'a:b', 'https://x/ a']) {
    assert.equal(safeMarkdownUrl(url), null, url);
  }
  for (const url of ['https://example.org/a?b=1#c', 'http://localhost:8080', 'mailto:a@example.org', '/docs/a', './relative', '../relative', '#section', 'https://مثال.إختبار']) {
    assert.equal(safeMarkdownUrl(url), url, url);
  }
  assert.doesNotMatch(render('[x](javascript&#x3A;alert%281%29)'), /<a /);
  assert.doesNotMatch(render('[x](java&#x09;script:alert%281%29)'), /<a /);
});

test('reference links use the first definition and remain protocol checked', () => {
  const html = render('[مرجع][ref] و [آخر][unsafe]\n\n[ref]: https://example.org "وثيقة"\n[ref]: javascript:evil\n[unsafe]: javascript:evil');
  assert.match(html, /href="https:\/\/example.org" title="وثيقة"/);
  assert.equal((html.match(/<a /g) ?? []).length, 1);
  assert.doesNotMatch(html, /href="javascript/);
});

test('footnote definitions remain visible without injecting anchor IDs or clobbering the page', () => {
  const html = render('نص[^a]\n\n[^a]: توضيح **مهم** مع $x$');
  assert.match(html, /\[\^a\]/);
  assert.match(html, /class="mdb-footnote"><strong>\[\^a\]: <\/strong><p dir="auto">توضيح <strong>مهم<\/strong>/);
  assert.match(html, /class="katex"/);
  assert.doesNotMatch(html, /\sid=/);
});

test('fenced/indented/inline code preserves indentation, backslashes, TeX markers and HTML as text', () => {
  const source = String.raw`نص  فيه   مسافات
سطر ثان

` + '```python\n' + String.raw`if ready:
    path = "C:\temp\file"
    latex = "\(x\) $y$ \[z\]"
    html = "<script>evil</script>"` + '\n```\n\n' + String.raw`    \frac{1}{2}
    $not_math$

` + '`' + String.raw`\(code\) $not_math$` + '`';
  const html = render(source);
  assert.equal(nodes(source).filter(node => node.type === 'inlineMath' || node.type === 'math').length, 0);
  assert.match(html, /<pre dir="ltr" class="mdb-code-block"><code dir="ltr" data-language="python">if ready:\n    path/);
  assert.ok(html.includes(String.raw`C:\temp\file`));
  assert.ok(html.includes(String.raw`\(x\) $y$ \[z\]`));
  assert.match(html, /&lt;script&gt;evil&lt;\/script&gt;/);
  assert.ok(html.includes('نص  فيه   مسافات\nسطر ثان'));
  assert.match(html, /<code dir="ltr" class="mdb-inline-code">\\\(code\\\) \$not_math\$<\/code>/);
});

test('backslash-delimited math uses parser tokens without changing escaped delimiters or paths', () => {
  const source = String.raw`\(\alpha + \beta\) و \[x^2\] و \\(literal\\) و \$cash و C:\Users\name`;
  const math = nodes(source).filter(node => node.type === 'inlineMath');
  assert.deepEqual(math.map(node => node.type === 'inlineMath' ? node.value : ''), [String.raw`\alpha + \beta`, 'x^2']);
  const html = render(source);
  assert.ok(html.includes(String.raw`\(literal\)`));
  assert.ok(html.includes(String.raw`C:\Users\name`));
  assert.ok(html.includes('$cash'));
  // A doubled backslash is a TeX line break, not the start of a closing fence.
  const incomplete = render(String.raw`\(a\\)`);
  assert.match(incomplete, /mdb-math-fallback/);
  assert.doesNotMatch(incomplete, /class="katex"/);
});

test('incomplete streaming constructs are readable and may be replaced by a later snapshot', () => {
  for (const source of [String.raw`العربية $\frac{1}{`, String.raw`العربية \(\frac{1}{`, '$$\n\\frac{1}{2}', String.raw`\[x`, '```js\n  x = "<script>"', '[link](javascript:', '**جزء', '| أ | ب |\n| --- |']) {
    assert.doesNotThrow(() => render(source), source);
    assert.ok(render(source).length > 0);
    assert.doesNotMatch(render(source), /<(?:script|img|iframe)\b/);
  }
  const incomplete = '$$\n\\frac{1}{2}';
  assert.match(render(incomplete), /mdb-math-fallback/);
  assert.doesNotMatch(render(incomplete), /class="katex"/);
  assert.match(render(incomplete + '\n$$'), /class="katex"/);
  assert.doesNotMatch(render(String.raw`\(x`), /class="katex"/);
  assert.match(render(String.raw`\(x\)`), /class="katex"/);
  const source = String.raw`## جواب عربي

**مهم**: \(\frac{1}{2}\) و $x^2$.

| اسم | قيمة |
| --- | --- |
| أ | 2 |

` + '```js\n  const path = "C:\\file";\n```';
  for (let index = 0; index <= source.length; index++) assert.doesNotThrow(() => render(source.slice(0, index)), `stream prefix ${index}`);
});

test('invalid/oversize math and recursive macros fall back without sharing definitions between renders', () => {
  assert.match(render(String.raw`$\frac{$`), /mdb-math-fallback/);
  assert.match(render('$' + 'x'.repeat(12001) + '$'), /mdb-math-fallback/);
  assert.match(render(String.raw`$\def\a{\a}\a$`), /mdb-math-fallback/);
  assert.match(render(String.raw`$\gdef\localmacro{1}\localmacro$`), /class="katex"/);
  assert.match(render(String.raw`$\localmacro$`), /mdb-math-fallback/);
});

test('participant labels replace exact AST text tokens only, never identifiers within code/math/URLs', () => {
  const labels = { p1: 'Alpha **not Markdown**', '9f2d5d00-0011-4a11-8000-abcdefabcdef': 'بيتا' };
  const html = render(String.raw`p1، (p1) xp1 p10 p1-extra العربيةp1 p1العربية m-1 c-p1

9f2d5d00-0011-4a11-8000-abcdefabcdef

` + '`p1` $p1$ [p1](https://example.org/p1)\n\n<p1>', labels);
  assert.ok(html.includes('Alpha **not Markdown**، (Alpha **not Markdown**) xp1 p10 p1-extra العربيةp1 p1العربية m-1 c-p1'));
  assert.match(html, /<p dir="auto">بيتا<\/p>/);
  assert.match(html, /<code dir="ltr" class="mdb-inline-code">p1<\/code>/);
  assert.match(html, /<annotation encoding="application\/x-tex">p1<\/annotation>/);
  assert.match(html, /href="https:\/\/example.org\/p1"/);
  assert.match(html, /&lt;p1&gt;/);
  assert.doesNotMatch(html, /<strong>not Markdown/);
});

test('RTL list markers and quote borders follow first authored prose despite nested auto paragraphs', () => {
  const html = render('- **عربي** مع English\n- English ثم عربي\n\n> **اقتباس**\n\n1. $x$ ثم العربية');
  assert.match(html, /<ul dir="rtl"><li dir="rtl"><p dir="auto"><strong>عربي/);
  assert.match(html, /<li dir="ltr"><p dir="auto">English/);
  assert.match(html, /<blockquote dir="rtl">/);
  assert.match(html, /<ol dir="rtl" start="1"><li dir="rtl">/);
  assert.match(render('- p1', { p1: 'نموذج عربي' }), /<ul dir="rtl"><li dir="rtl">/);
});

test('scoped styles preserve prose whitespace and isolate code and math direction', async () => {
  const css = await readFile(new URL('../src/markdown.css', import.meta.url), 'utf8');
  assert.match(css, /white-space: pre-wrap/); assert.match(css, /white-space: pre;/);
  assert.match(css, /unicode-bidi: isolate/); assert.match(css, /direction: ltr/);
  assert.match(css, /overflow-x: auto/); assert.match(css, /padding-inline-start/);
  assert.doesNotMatch(css, /#[0-9a-f]{3,8}\b|rgba?\(/i);
});

test('external plugin stylesheet embeds local fonts, prefixes KaTeX selectors and never touches host fonts', async () => {
  // @ts-expect-error Build-only JavaScript helper intentionally has no TS declaration.
  const { buildMarkdownStyles } = await import('../scripts/markdown-styles.mjs');
  const css: string = await buildMarkdownStyles();
  assert.match(css, /\.mdb-markdown \.katex/);
  assert.match(css, /font-family: "MDB_KaTeX_Main"/);
  assert.match(css, /url\(data:font\/woff2;base64,/);
  assert.doesNotMatch(css, /url\((?:fonts\/|https?:)/);
  assert.doesNotMatch(css, /font-family: "KaTeX_/);
  assert.ok(css.length < 600000, `embedded stylesheet size: ${css.length}`);
});

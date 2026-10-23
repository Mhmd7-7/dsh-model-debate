import type { ReactNode, ReactElement } from 'react';
import type { Root, Nodes, Definition, Table } from 'mdast';
import type { Construct, State, Token } from 'micromark-util-types';
import { unified, type Processor } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import katex from 'katex';

// Build-time CSS includes scoped KaTeX rules and embedded fonts. No React runtime
// import is permitted here: DSH supplies React only inside the ModuleLoader factory.
declare const __MODEL_DEBATE_MARKDOWN_CSS__: string;
export const markdownStyleText = typeof __MODEL_DEBATE_MARKDOWN_CSS__ === 'string' ? __MODEL_DEBATE_MARKDOWN_CSS__ : '';
export type MarkdownProps = { children: string; className?: string; labels?: Readonly<Record<string, string>> };

function replaceKnownLabels(text: string, labels?: Readonly<Record<string, string>>): string {
  if (!labels) return text;
  const entries = Object.entries(labels).filter(([id, label]) => id.length > 0 && label.length > 0).sort(([a], [b]) => b.length - a.length);
  const word = /[\p{L}\p{N}\p{M}_-]/u;
  let result = '';
  for (let index = 0; index < text.length;) {
    // Use code points so an astral letter beside an identifier is still a boundary.
    const before = Array.from(text.slice(Math.max(0, index - 2), index)).at(-1) ?? '';
    const match = entries.find(([id]) => text.startsWith(id, index) && !word.test(before) && !word.test(String.fromCodePoint(text.codePointAt(index + id.length) ?? 32)));
    if (match) { result += match[1]; index += match[0].length; }
    else { const character = String.fromCodePoint(text.codePointAt(index)!); result += character; index += character.length; }
  }
  return result;
}

// Tokenize TeX delimiters, rather than rewriting backslashes in the whole source.
// As a micromark text construct this never runs inside fenced/indented/inline code,
// and normal Markdown escaping consumes \\ before it can become a math opener.
declare module 'micromark-util-types' {
  interface TokenTypeMap { debateLatexMath: 'debateLatexMath'; mathFlowFence: 'mathFlowFence' }
  interface Token { debateMathClosed?: boolean }
}
declare module 'mdast' {
  interface Data { debateMathDisplay?: boolean; debateMathClosed?: boolean; debateMathRaw?: string }
}
const latexConstruct: Construct = {
  name: 'debateLatexMath',
  tokenize(effects, ok, nok) {
    let close: number;
    let token: Token;
    let previousLineEnding = false;
    const finish: State = code => { effects.exit('debateLatexMath'); return ok(code); };
    const body: State = code => {
      if (code === null) return finish(code); // Keep incomplete streaming math literal.
      if (code === 92) { effects.consume(code); return afterSlash; }
      // Do not consume another paragraph when a delimiter is not closed.
      const lineEnding = code === -5 || code === -4 || code === -3;
      if (lineEnding && previousLineEnding) return finish(code);
      previousLineEnding = lineEnding || (previousLineEnding && (code === 32 || code === -1 || code === -2));
      effects.consume(code);
      return body;
    };
    const afterSlash: State = code => {
      if (code === close) { token.debateMathClosed = true; effects.consume(code); return finish; }
      if (code === 92) { effects.consume(code); return body; }
      return body(code);
    };
    const open: State = code => {
      if (code !== 40 && code !== 91) return nok(code);
      close = code === 40 ? 41 : 93;
      effects.consume(code);
      return body;
    };
    return code => {
      token = effects.enter('debateLatexMath');
      effects.consume(code);
      return open;
    };
  },
};
function remarkLatexDelimiters(this: Processor) {
  const data = this.data();
  (data.micromarkExtensions ??= []).push({ text: { 92: latexConstruct } });
  (data.fromMarkdownExtensions ??= []).push({
    beforeEnter(token) {
      // Observe actual closing-fence tokens, not source lines (which may contain
      // quote/list prefixes). An unfinished flow node has no closing fence.
      if (token.type === 'mathFlowFence' && this.data.mathFlowInside) {
        const node = [...this.stack].reverse().find(node => node.type === 'math');
        if (node?.type === 'math') node.data = { ...node.data, debateMathClosed: true };
      }
    },
    enter: {
      debateLatexMath(token) { this.enter({ type: 'inlineMath', value: '' }, token); },
    },
    exit: {
      debateLatexMath(token) {
        const raw = this.sliceSerialize(token);
        const node = this.stack.at(-1);
        if (node?.type === 'inlineMath') {
          const display = raw[1] === '[';
          const closed = token.debateMathClosed === true;
          node.value = raw.slice(2, closed ? -2 : undefined);
          node.data = { debateMathDisplay: display, debateMathClosed: closed, debateMathRaw: raw };
        }
        this.exit(token);
      },
    },
  });
}
const parser = unified().use(remarkParse).use(remarkGfm).use(remarkMath).use(remarkLatexDelimiters).freeze();

/** Parsing is stateless: every streaming snapshot may be incomplete or replaced. */
export function parseMarkdown(source: string): Root { return parser.parse(source); }

/** Links are inert unless their protocol is explicitly allowed; images never load. */
export function safeMarkdownUrl(value: string): string | null {
  const url = value.trim();
  // Disallow obfuscated protocols, network-path references and backslash URL quirks.
  if (!url || /[\u0000-\u0020\u007f-\u009f\\]/.test(url) || url.startsWith('//')) return null;
  const scheme = /^([a-z][a-z0-9+.-]*):/i.exec(url);
  if (scheme) return /^(https?|mailto)$/i.test(scheme[1]) ? url : null;
  // Relative paths/fragment links are okay, but no colon in the first path segment.
  return url.split(/[/?#]/, 1)[0].includes(':') ? null : url;
}

/** dir=auto ignores descendants that establish their own direction (such as
 * paragraphs). Lists/quotes therefore need a first-strong direction of their
 * authored prose, not the browser's empty-container fallback to interface LTR. */
function proseDirection(node: Nodes, labels?: Readonly<Record<string, string>>): 'rtl' | 'ltr' | 'auto' {
  const queue: Nodes[] = [node];
  while (queue.length) {
    const current = queue.pop()!;
    if (current.type === 'text') {
      const text = replaceKnownLabels(current.value, labels);
      const first = /[\p{L}\u200e\u200f\u061c]/u.exec(text)?.[0];
      if (first) {
        const code = first.codePointAt(0)!;
        return first === '\u200f' || first === '\u061c' || (code >= 0x0590 && code <= 0x08ff) || (code >= 0xfb1d && code <= 0xfdff) || (code >= 0xfe70 && code <= 0xfefc) || (code >= 0x1e900 && code <= 0x1e95f) ? 'rtl' : 'ltr';
      }
    }
    // Code and mathematical islands have their own LTR direction and should not
    // determine the marker/border side of surrounding Arabic prose.
    if ('children' in current) for (let index = current.children.length - 1; index >= 0; index--) queue.push(current.children[index]);
  }
  return 'auto';
}

function sourceFor(node: Nodes, source: string): string {
  const start = node.position?.start.offset;
  const end = node.position?.end.offset;
  return start !== undefined && end !== undefined ? source.slice(start, end) : 'value' in node ? node.value : '';
}
/** Create once inside window.__ModuleLoader__.load({factory(require) { ... }}).
 * Returned component accepts a string only; attribution/structured data/raw provider
 * output remain the caller's responsibility and should not be passed as HTML.
 */
export function createMarkdownRenderer(React: typeof import('react')) {
  const h = React.createElement;
  function Markdown({ children: source, className = '', labels }: MarkdownProps): ReactElement {
    const root = parseMarkdown(source);
    const definitions = new Map<string, Definition>();
    const queue: Nodes[] = [root];
    while (queue.length) {
      const node = queue.pop()!;
      if (node.type === 'definition' && !definitions.has(node.identifier.toUpperCase())) definitions.set(node.identifier.toUpperCase(), node);
      if ('children' in node) for (let index = node.children.length - 1; index >= 0; index--) queue.push(node.children[index]);
    }
    function math(node: Extract<Nodes, { type: 'inlineMath' | 'math' }>, key: string): ReactNode {
      const raw = sourceFor(node, source);
      const display = node.type === 'math' || node.data?.debateMathDisplay === true || raw.startsWith('$$');
      const block = node.type === 'math';
      const tag = block ? 'div' : 'span';
      const props = { key, dir: 'ltr', className: `mdb-math${display ? ' mdb-math-display' : ''}` };
      // TeX errors and unfinished blocks remain readable, with original delimiters.
      const fallback = () => h(tag, { ...props, className: `${props.className} mdb-math-fallback` }, raw);
      if (node.data?.debateMathClosed === false || (block && node.data?.debateMathClosed !== true) || node.value.length > 12000) return fallback();
      try {
        // The only HTML sink is KaTeX's own output, not Markdown/model HTML.
        // No shared macros: a definition in one answer cannot affect another.
        const html = katex.renderToString(node.value, {
          displayMode: display, output: 'htmlAndMathml', throwOnError: true,
          trust: false,
          // Arabic units/labels use KaTeX's Unicode fallback; this does not relax
          // trust-gated URL/HTML commands or malformed-TeX error handling.
          strict: code => code === 'unknownSymbol' || code === 'unicodeTextInMathMode' || code === 'symbolNotInFont' ? 'ignore' : 'error',
          maxExpand: 1000, maxSize: 20,
          macros: Object.create(null), globalGroup: false,
        });
        return h(tag, { ...props, dangerouslySetInnerHTML: { __html: html } });
      } catch { return fallback(); }
    }
    function link(url: string, title: string | null | undefined, children: ReactNode[], key: string): ReactNode {
      const href = safeMarkdownUrl(url);
      return href ? h('a', { key, href, title: title || undefined, rel: 'noopener noreferrer nofollow', dir: 'auto' }, ...children)
        : h('span', { key, className: 'mdb-inert-link', dir: 'auto' }, ...children);
    }
    function table(node: Table, key: string): ReactNode {
      const rows = node.children.map((row, rowIndex) => h('tr', { key: `${key}-${rowIndex}` }, ...row.children.map((cell, column) =>
        h(rowIndex === 0 ? 'th' : 'td', { key: column, dir: 'auto', scope: rowIndex === 0 ? 'col' : undefined, style: node.align?.[column] ? { textAlign: node.align[column]! } : undefined }, ...renderChildren(cell, `${key}-${rowIndex}-${column}`)))));
      return h('div', { key, className: 'mdb-table-scroll' }, h('table', null, h('thead', null, rows[0]), rows.length > 1 ? h('tbody', null, ...rows.slice(1)) : null));
    }
    function renderChildren(node: Extract<Nodes, { children: unknown }>, key: string, depth = 0): ReactNode[] {
      return node.children.map((child, index) => render(child, `${key}-${index}`, depth + 1));
    }
    function render(node: Nodes, key: string, depth = 0): ReactNode {
      // Bound adversarially deep nesting without dropping the original content.
      if (depth > 80) return h('span', { key, dir: 'auto' }, sourceFor(node, source));
      const children = () => 'children' in node ? renderChildren(node, key, depth) : [];
      switch (node.type) {
        case 'root': return h(React.Fragment, { key }, ...children());
        case 'text': return replaceKnownLabels(node.value, labels);
        case 'paragraph': return h('p', { key, dir: 'auto' }, ...children());
        case 'heading': return h(`h${node.depth}`, { key, dir: 'auto' }, ...children());
        case 'strong': return h('strong', { key }, ...children());
        case 'emphasis': return h('em', { key }, ...children());
        case 'delete': return h('del', { key }, ...children());
        case 'break': return h('br', { key });
        case 'thematicBreak': return h('hr', { key });
        case 'blockquote': return h('blockquote', { key, dir: proseDirection(node, labels) }, ...children());
        case 'list': return h(node.ordered ? 'ol' : 'ul', { key, dir: proseDirection(node, labels), start: node.ordered ? node.start ?? 1 : undefined }, ...children());
        case 'listItem': return h('li', { key, dir: proseDirection(node, labels), className: typeof node.checked === 'boolean' ? 'mdb-task-item' : undefined },
          typeof node.checked === 'boolean' ? h('input', { type: 'checkbox', checked: node.checked, disabled: true, tabIndex: -1, 'aria-label': node.checked ? 'Completed' : 'Not completed' }) : null, ...children());
        case 'inlineCode': return h('code', { key, dir: 'ltr', className: 'mdb-inline-code' }, node.value);
        case 'code': return h('pre', { key, dir: 'ltr', className: 'mdb-code-block' }, h('code', { dir: 'ltr', ...(node.lang ? { 'data-language': node.lang } : {}) }, node.value));
        case 'inlineMath': case 'math': return math(node, key);
        case 'link': return link(node.url, node.title, children(), key);
        case 'linkReference': {
          const definition = definitions.get(node.identifier.toUpperCase());
          return definition ? link(definition.url, definition.title, children(), key) : h('span', { key }, ...children());
        }
        // Remote images can track the reader; show the authored alt text instead.
        case 'image': case 'imageReference': return h('span', { key, dir: 'auto', className: 'mdb-image-alt' }, node.alt || sourceFor(node, source));
        case 'table': return table(node, key);
        case 'definition': return null;
        case 'footnoteDefinition': return h('div', { key, dir: 'auto', className: 'mdb-footnote' }, h('strong', null, `[^${node.identifier}]: `), ...children());
        case 'footnoteReference': return h('span', { key }, sourceFor(node, source));
        // Raw HTML is deliberately shown as text, never parsed or executed.
        case 'html': return h('span', { key, className: 'mdb-literal-html', dir: 'auto' }, node.value);
        default: return h('span', { key, dir: 'auto' }, sourceFor(node, source));
      }
    }
    return h('div', { className: `mdb-markdown${className ? ` ${className}` : ''}`, dir: 'auto' }, ...renderChildren(root, 'markdown'));
  }
  return React.memo(Markdown);
}

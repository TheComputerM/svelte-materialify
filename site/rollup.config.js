import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/';
import pkg from './package.json';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
  (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
  (warning.code === 'CIRCULAR_DEPENDENCY' &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);

loadLanguages(['bash', 'scss']);
const preprocess = [
  mdsvex({
    extension: '.svx',
    layout: './src/helpers/MDXLayout.svelte',
    remarkPlugins: [
      require('remark-sectionize'),
      [
        require('remark-class-names'),
        {
          classMap: {
            'heading[depth=1]': 'heading text-h3 mb-4',
            'heading[depth=2]': 'heading text-h4 mb-3',
            'heading[depth=3]': 'heading text-h5 mb-2',
            'link': 'app-link'
          },
        },
      ],
      require('remark-external-links'),
      require('remark-slug'),
      [
        require('remark-autolink-headings'),
        {
          content: {
            type: 'element',
            tagName: 'i',
            properties: { className: ['mdi', 'mdi-pound'] },
          },
        },
      ],
    ],
    highlight: {
      highlighter: (code, lang) => {
        if (lang && Prism.languages[lang]) {
          const parsed = Prism.highlight(code, Prism.languages[lang]);
          const escaped = parsed
            .replace(/{/g, '&#123;')
            .replace(/}/g, '&#125;');
          const langTag = 'language-' + lang;
          const codeTag = `<code class=${langTag}>${escaped}</code>`;
          const pre = `<pre class=${langTag}>${codeTag}</pre>`;
          return `<Components.CodeBlock lang='${lang}'>${pre}</Components.CodeBlock>`;
        } else {
          const escaped = code.replace(/{/g, '&#123;').replace(/}/g, '&#125;');
          const pre = `<pre><code>${escaped}</code></pre>`;
          return `<Components.CodeBlock>${pre}</Components.CodeBlock>`;
        }
      },
    },
  }),
  sveltePreprocess({
    scss: {
      includePaths: ['theme'],
    },
    postcss: {
      plugins: [require('autoprefixer')],
    },
  }),
];
const extensions = ['.svelte', '.svx'];

function getCurrentDateAndTime() {
  const d = new Date();
  return `${d.toLocaleDateString()} ${d.toLocaleTimeString().toUpperCase()}`;
}

const replaced = {
  'process.env.NODE_ENV': JSON.stringify(mode),
  __CurrentDateAndTime__: getCurrentDateAndTime(),
};

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        'process.browser': true,
        ...replaced,
      }),
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        extensions,
        preprocess,
      }),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs(),

      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          babelHelpers: 'runtime',
          exclude: ['node_modules/@babel/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        'process.browser': false,
        ...replaced,
      }),
      svelte({
        generate: 'ssr',
        hydratable: true,
        dev,
        extensions,
        preprocess,
      }),
      resolve({
        dedupe: ['svelte'],
      }),
      commonjs(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules
    ),
    preserveEntrySignatures: 'strict',
    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        ...replaced,
      }),
      commonjs(),
      !dev && terser(),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },
};

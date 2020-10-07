const webpack = require('webpack');
const WebpackModules = require('webpack-modules');
const path = require('path');
const config = require('sapper/config/webpack.js');
const sveltePreprocess = require('svelte-preprocess');
const { mdsvex } = require('mdsvex');
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');
const pkg = require('./package.json');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const alias = {
  '@': path.resolve(__dirname, 'src'),
};
const extensions = ['.mjs', '.js', '.json', '.svelte', '.html', '.svx'];
const mainFields = ['svelte', 'module', 'browser', 'main'];
loadLanguages(['bash', 'scss', 'typescript']);
const preprocess = [
  mdsvex({
    extension: '.svx',
    layout: './src/components/layout/Layout.svelte',
    remarkPlugins: [
      require('remark-sectionize'),
      [
        require('remark-class-names'),
        {
          classMap: {
            'heading[depth=1]': 'heading text-h3 mb-4',
            'heading[depth=2]': 'heading text-h4 mb-3',
            'heading[depth=3]': 'heading text-h5 mb-2',
            'heading[depth=4]': 'heading text-h6 mb-2',
            link: 'app-link',
          },
        },
      ],
      [
        require('remark-external-links'),
        {
          rel: ['noopener', 'noreferrer'],
        },
      ],
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
        function escape(text) {
          return `{@html \`${text.replace(/`/g, '&#96;')}\`}`;
        }

        if (lang && Prism.languages[lang]) {
          const parsed = Prism.highlight(code, Prism.languages[lang]);
          const escaped = escape(parsed);
          const langTag = `language-${lang}`;
          const codeTag = `<code class=${langTag}>${escaped}</code>`;
          const pre = `<pre class=${langTag}>${codeTag}</pre>`;
          return `<Components.Markup lang='${lang}'>${pre}</Components.Markup>`;
        }
        const escaped = escape(code);
        const pre = `<pre><code>${escaped}</code></pre>`;
        return `<Components.Markup>${pre}</Components.Markup>`;
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

module.exports = {
  client: {
    entry: config.client.entry(),
    output: config.client.output(),
    resolve: { alias, extensions, mainFields },
    module: {
      rules: [
        {
          test: /\.(svelte|html|svx)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              dev,
              preprocess,
              hydratable: true,
              hotReload: false, // pending https://github.com/sveltejs/svelte/issues/2377
            },
          },
        },
      ],
    },
    mode,
    plugins: [
      // pending https://github.com/sveltejs/svelte/issues/2377
      // dev && new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
    ].filter(Boolean),
    devtool: dev && 'inline-source-map',
  },

  server: {
    entry: config.server.entry(),
    output: config.server.output(),
    target: 'node',
    resolve: { alias, extensions, mainFields },
    externals: Object.keys(pkg.dependencies).concat('encoding'),
    module: {
      rules: [
        {
          test: /\.(svelte|html|svx)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              css: false,
              preprocess,
              generate: 'ssr',
              hydratable: true,
              dev,
            },
          },
        },
      ],
    },
    mode,
    plugins: [new WebpackModules()],
    performance: {
      hints: false, // it doesn't matter if server.js is large
    },
  },

  serviceworker: {
    entry: config.serviceworker.entry(),
    output: config.serviceworker.output(),
    mode,
  },
};

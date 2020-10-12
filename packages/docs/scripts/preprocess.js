const { mdsvex } = require('mdsvex');
const sveltePreprocess = require('svelte-preprocess');
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');

loadLanguages(['bash', 'scss', 'typescript']);
module.exports = [
  mdsvex({
    layout: './src/components/doc/Layout.svelte',
    remarkPlugins: [
      require('remark-sectionize'),
      require('remark-capitalize'),
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
          content: {
            type: 'element',
            tagName: 'i',
            properties: { className: ['mdi', 'mdi-open-in-new'] },
          },
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

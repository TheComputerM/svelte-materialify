import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/';

loadLanguages(['bash', 'scss', 'typescript']);

const alias = {
  javascript: 'js',
  bash: 'sh',
  shell: 'sh',
  typescript: 'ts',
};

function formatLanguage(lang) {
  return alias[lang] || lang;
}

export default [
  mdsvex({
    extensions: ['.md'],
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
          return `<Components.Markup lang='${formatLanguage(
            lang,
          )}'>${escaped}</Components.Markup>`;
        }
        const escaped = escape(code);
        return `<Components.Markup>${escaped}</Components.Markup>`;
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

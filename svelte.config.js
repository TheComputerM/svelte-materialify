const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: [
        'packages/svelte-materialify/src',
        'packages/svelte-materialify/theme',
      ],
    },
    postcss: {
      plugins: [require('autoprefixer')],
    },
  }),
};

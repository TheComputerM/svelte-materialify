const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ['src', 'packages/svelte-materialify/theme'],
    },
    postcss: {
      plugins: [require('autoprefixer')],
    },
  }),
};

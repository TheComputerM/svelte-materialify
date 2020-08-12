const sveltePreprocess = require("svelte-preprocess");
module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ["src", "theme"],
    },
    postcss: {
      plugins: [require("autoprefixer")],
    },
  }),
};

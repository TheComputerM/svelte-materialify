const Prism = require('prismjs');
require('prism-svelte');

module.exports = {
  name: 'examples',
  transform(code, id) {
    if (id.includes('examples')) {
      const highlighted = Prism.highlight(code, Prism.languages.svelte, 'svelte');
      const output = `<script context="module">export const source = ${JSON.stringify(
        highlighted,
      )}</script>`;
      return {
        code: `${code}\n${output}`,
        map: { mappings: '' },
      };
    }
    return null;
  },
};

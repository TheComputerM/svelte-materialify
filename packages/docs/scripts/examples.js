import Prism from 'prismjs';
import 'prism-svelte';

export default {
  name: 'examples',
  transform(code, id) {
    if (id.includes('examples')) {
      // some files still have CRLF line-endings, that's why the last 3 replaces aren't combined
      // when that's solved, do .replace('</script>\n', '</script>\n\n<MaterialApp>') instead
      const codeWithMaterialAppAdded = `${code
        .replace(' } from \'svelte-materialify/src\'', ', MaterialApp } from \'svelte-materialify/src\'')
        .replace('</script>', '</script>\n\n<MaterialApp>')
        .replace('<MaterialApp>\n', '<MaterialApp>')
        .replace('<MaterialApp>\r\n', '<MaterialApp>')}</MaterialApp>`;
      const highlighted = Prism.highlight(codeWithMaterialAppAdded, Prism.languages.svelte, 'svelte');
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

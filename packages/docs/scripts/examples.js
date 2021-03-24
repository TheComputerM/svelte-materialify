import Prism from 'prismjs';
import 'prism-svelte';

export default {
  name: 'examples',
  transform(code, id) {
    if (id.includes('examples')) {
      // some files still have CRLF line-endings, that's why the last 3 replaces aren't combined
      // when that's solved, do .replace('</script>\n', '</script>\n\n<MaterialApp>') instead
      const codeWithInject1 = code
        .replace(' } from \'svelte-materialify/src\'', ', MaterialApp } from \'svelte-materialify\'')
        .replace('</script>', '</script>\n\n<MaterialApp>')
        .replace('<MaterialApp>\n', '<MaterialApp>')
        .replace('<MaterialApp>\r\n', '<MaterialApp>');
      const codeWithInject2 = codeWithInject1.includes('<MaterialApp>') ? `${codeWithInject1}</MaterialApp>` : codeWithInject1;
      const highlighted = Prism.highlight(codeWithInject2, Prism.languages.svelte, 'svelte');
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

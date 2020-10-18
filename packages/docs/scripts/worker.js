import { rollup } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import path from 'path';

export default {
  async load(id) {
    if (id.endsWith('.worker.js')) {
      const bundle = await rollup({
        input: id,
        plugins: [
          resolve({
            browser: true,
            dedupe: ['svelte'],
          }),
          commonjs(),
          terser(),
        ],
      });

      const { output } = await bundle.generate({
        format: 'esm',
        name: 'app',
      });

      const referenceId = this.emitFile({
        type: 'asset',
        name: path.basename(id).replace('.worker', ''),
        source: output[0].code,
      });
      return `export default import.meta.ROLLUP_FILE_URL_${referenceId};`;
    }
    return null;
  },
};

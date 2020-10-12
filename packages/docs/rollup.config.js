import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import dynamic from '@rollup/plugin-dynamic-import-vars';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup';
import pkg from './package.json';

const path = require('path');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

// eslint-disable-next-line no-shadow
const onwarn = (warning, onwarn) =>
  (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
  (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);
const extensions = ['.svelte', '.svx'];
const replaced = {
  'process.env.NODE_ENV': JSON.stringify(mode),
  CURRENT_DATE: new Date().toISOString().substring(0, 10),
};
const preprocess = require('./scripts/preprocess');
const examples = require('./scripts/examples');

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      alias({
        entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      }),
      replace({
        'process.browser': true,
        ...replaced,
      }),
      examples,
      svelte({
        dev,
        hydratable: true,
        emitCss: true,
        extensions,
        preprocess,
      }),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs(),
      dynamic({
        include: '**/*.svelte',
      }),

      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          babelHelpers: 'runtime',
          exclude: ['node_modules/@babel/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      alias({
        entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      }),
      replace({
        'process.browser': false,
        ...replaced,
      }),
      examples,
      svelte({
        generate: 'ssr',
        hydratable: true,
        dev,
        extensions,
        preprocess,
      }),
      resolve({
        dedupe: ['svelte'],
      }),
      commonjs(),
      dynamic({
        include: '**/*.svelte',
      }),
    ],
    external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),
    preserveEntrySignatures: 'strict',
    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
      }),
      commonjs(),
      !dev && terser(),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },
};

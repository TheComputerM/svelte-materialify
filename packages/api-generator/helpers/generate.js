/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const globby = require('globby');
const sveltedoc = require('sveltedoc-parser');
const jsonFormat = require('json-format');
const rollup = require('rollup');
const json = require('@rollup/plugin-json');
const { terser } = require('rollup-plugin-terser');

const defaults = {
  defaultVersion: 3,
};

async function generateJSON(filename) {
  const doc = await sveltedoc.parse({ filename, ...defaults });
  const name = path.basename(filename, '.svelte');
  await fs.writeFile(
    `./src/${name}.json`,
    jsonFormat(doc, { type: 'space', size: 2 }),
    (err) => {
      if (err) throw err;
      console.log(`${name}.json has been saved`);
    },
  );
}

function createIndex(acc, val, i) {
  // eslint-disable-next-line no-param-reassign
  if (i === 1) acc = '';
  const name = path.basename(val, '.svelte');
  const str = `export { default as ${name} } from './${name}.json';\n`;
  return acc + str;
}

async function build() {
  const bundle = await rollup.rollup({
    input: './src/index.js',
    plugins: [json(), terser()],
  });
  await bundle.write({ file: './dist/index.js' });
}

(async () => {
  const paths = await globby('../svelte-materialify/src/**/*.svelte');
  paths.forEach(generateJSON);
  await fs.writeFile('./src/index.js', paths.reduce(createIndex), (err) => {
    if (err) throw err;
    console.log('index.js has been saved');
  });
  build();
})();

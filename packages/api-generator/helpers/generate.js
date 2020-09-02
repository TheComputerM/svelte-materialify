/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const globby = require('globby');
const sveltedoc = require('sveltedoc-parser');
const jsonFormat = require('json-format');
const rollup = require('rollup');
const json = require('@rollup/plugin-json');
const { terser } = require('rollup-plugin-terser');

const defaults = { defaultVersion: 3 };

const format = {
  type: 'space',
  size: 2,
};

async function generateJSON(filename) {
  const doc = await sveltedoc.parse({
    filename,
    ...defaults,
  });
  const name = path.basename(filename, '.svelte');
  await fs.writeFile(`./src/${name}.json`, jsonFormat(doc, format), (err) => {
    if (err) throw err;
    console.log(`${name}.json has been saved`);
  });
}

function createIndex(paths) {
  let output = "export { default as all } from './all.json';\n";
  paths.forEach((filename) => {
    const name = path.basename(filename, '.svelte');
    output += `export { default as ${name} } from './${name}.json';\n`;
  });
  return output;
}

async function build() {
  const bundle = await rollup.rollup({
    input: './src/index.js',
    plugins: [json(), terser()],
  });
  await bundle.write({
    file: './dist/index.js',
    format: 'es',
  });
}

(async () => {
  const paths = await globby('../svelte-materialify/src/**/*.svelte');
  await fs.writeFile(
    './src/all.json',
    jsonFormat({ names: paths.map((filename) => path.basename(filename, '.svelte')) }, format),
    (err) => {
      if (err) throw err;
      console.log('all.json has been saved');
    },
  );
  paths.forEach(generateJSON);
  await fs.writeFile('./src/index.js', createIndex(paths), (err) => {
    if (err) throw err;
    console.log('index.js has been saved');
  });
  build();
})();

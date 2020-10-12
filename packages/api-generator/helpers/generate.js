/* eslint-disable no-console */
const { writeFile, existsSync } = require('fs');
const { basename } = require('path');
const globby = require('globby');
const sveltedoc = require('sveltedoc-parser');
const fmt = require('json-format');
const rollup = require('rollup');
const json = require('@rollup/plugin-json');
const { terser } = require('rollup-plugin-terser');
const extractTypeDoc = require('./type-doc-extractor');

const defaults = { defaultVersion: 3 };

const format = {
  type: 'space',
  size: 2,
};

function addTypeDocToSvelteDoc(componentName, svelteDoc) {
  const typeFile = `../svelte-materialify/@types/${componentName}.d.ts`;
  if (existsSync(typeFile)) {
    const typeDoc = extractTypeDoc(typeFile);
    if (typeDoc.length === 1) {
      typeDoc[0].members.forEach((member) => {
        const propDoc = svelteDoc.data.find((prop) => prop.name === member.name);
        if (member.description) {
          propDoc.description = member.description;
        }
      });
    }
  }
}

async function generateJSON(filename) {
  const doc = await sveltedoc.parse({ filename, ...defaults });
  const name = basename(filename, '.svelte');
  addTypeDocToSvelteDoc(name, doc);
  await writeFile(`./src/${name}.json`, fmt(doc, format), (err) => {
    if (err) throw err;
    console.log(`${name}.json has been saved`);
  });
}

async function indexjs(paths) {
  let output = "export { default as all } from './all.json';\n";
  paths.forEach((name) => {
    output += `export { default as ${name} } from './${name}.json';\n`;
  });
  await writeFile('./src/index.js', output, (err) => {
    if (err) throw err;
    console.log('index.js has been saved');
  });
}

async function build() {
  const bundle = await rollup.rollup({
    input: './src/index.js',
    plugins: [json(), terser()],
  });
  await bundle.write({
    file: './dist/index.js',
    format: 'umd',
    name: 'svelte-materialify-api',
  });
}

(async () => {
  let paths = await globby('../svelte-materialify/src/**/*.svelte');
  paths.forEach(generateJSON);
  paths = paths.map((name) => basename(name, '.svelte'));
  await writeFile('./src/all.json', fmt({ names: paths }, format), (err) => {
    if (err) throw err;
    console.log('all.json has been saved');
  });
  indexjs(paths);
  build();
})();

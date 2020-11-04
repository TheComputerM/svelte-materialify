/* eslint-disable no-console */
const { preprocess } = require('svelte/compiler');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const sveltePreprocess = require('svelte-preprocess');
const process = require('process');
const del = require('del');

const BASE = process.cwd();
const processor = sveltePreprocess({
  scss: {
    includePaths: [path.join(BASE, 'theme')],
  },
  postcss: {
    plugins: [require('cssnano')()],
  },
});

del.sync(['dist/**']);
glob('src/**/*.svelte', {}, async (_, files) => {
  // eslint-disable-next-line no-restricted-syntax
  for await (const file of files) {
    const source = fs.readFileSync(path.join(BASE, file), 'utf-8');
    const filename = path.basename(file);
    const dirname = path.dirname(file);
    process.chdir(path.join(BASE, dirname));
    const { code } = await preprocess(source, processor, { filename });
    const outFolder = path.join(BASE, path.dirname(file.replace('src', 'dist')));
    fs.mkdirSync(outFolder, { recursive: true });
    fs.writeFileSync(path.join(outFolder, filename), code);
  }
});

process.chdir(BASE);

glob('src/**/*.js', {}, (_, files) => {
  files.forEach((file) => {
    const outFolder = path.join(BASE, path.dirname(file.replace('src', 'dist')));
    const filename = path.basename(file);
    fs.mkdirSync(outFolder, { recursive: true });
    fs.copyFileSync(path.join(BASE, file), path.join(outFolder, filename));
  });
});

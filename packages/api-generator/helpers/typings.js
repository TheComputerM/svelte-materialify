/* eslint-disable no-console */

const { writeFile, readFileSync } = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const { registerHelpers } = require('./handlebars');

const TYPINGS_PATH = path.resolve('../svelte-materialify/src');

const headerPath = './templates/header.handlebars';
const templatePath = './templates/component.handlebars';

registerHelpers(Handlebars);

const headerTemplate = readFileSync(headerPath, 'utf8');
const compiledHeader = Handlebars.compile(headerTemplate);
const headerContent = {
  imports: [
    "import { SvelteComponentTyped } from 'svelte'",
    "import { TransitionConfig, blur, crossfade, draw, fade, fly, scale, slide } from 'svelte/transition'",
    "import { RippleOptions } from './@types/Ripple'",
  ],
};

const template = readFileSync(templatePath, 'utf8');
const compiledTemplate = Handlebars.compile(template);

/**
 * @param {Promise<Object[]>} promises promises for sveltedoc-parser generated objects
 * @param {boolean} save save the declaration in a separate file
 * @returns {Promise<{ name: string; content: string }[]>}
 */
async function generateTypings(promises, save = false) {
  const docs = await promises;

  const templates = docs.map((doc) => compiledTemplate(doc));

  const declarations = [{
    name: '__header__',
    content: compiledHeader(headerContent),
  }];

  declarations.push(...templates.map(
    (t, i) => ({ name: docs[i].name, content: t }),
  ));

  if (save) {
    const promisesOfSavedFiles = declarations.map(
      ({ name, content }) => new Promise((resolve, reject) => {
        writeFile(`${TYPINGS_PATH}/${name}.d.ts`, content, (err) => {
          if (err) reject(err);
          console.log(`${name}.d.ts has been saved`);
          resolve({ name, content });
        });
      }),
    );

    return Promise.all(promisesOfSavedFiles);
  }

  return Promise.resolve(declarations);
}

module.exports = {
  generateTypings,
  TYPINGS_PATH,
};

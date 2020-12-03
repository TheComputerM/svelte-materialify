/* eslint-disable no-console */

const { writeFile, readFileSync, existsSync, mkdirSync } = require('fs');
const Handlebars = require('handlebars');
const { registerHelpers } = require('./handlebars');

const typingsPath = './@types';
const templatePath = './templates/component.handlebars';

if (!existsSync(typingsPath)) {
  mkdirSync(typingsPath);
}

registerHelpers(Handlebars);

const template = readFileSync(templatePath, 'utf8');
const compiledTemplate = Handlebars.compile(template);

/**
 * @returns {Promise<{ name: string; content: string }>}
 */
async function generateTypings(doc) {
  const declaration = compiledTemplate(doc);

  return new Promise((resolve, reject) => {
    writeFile(`${typingsPath}/${doc.name}.d.ts`, declaration, (err) => {
      if (err) reject(err);
      console.log(`${doc.name}.d.ts has been saved`);
      resolve({ name: doc.name, content: declaration });
    });
  });
}

module.exports = generateTypings;

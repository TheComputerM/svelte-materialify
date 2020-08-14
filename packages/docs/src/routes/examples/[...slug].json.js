/* eslint-disable import/prefer-default-export */
const fs = require('fs');
const path = require('path');
const Prism = require('prismjs');

const base = './src/examples';

function getFiles(dir, output = {}) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      output[file] = {};
      getFiles(filePath, output[file]);
    } else if (path.extname(file) === '.svelte') {
      const name = path.basename(file, '.svelte');
      const raw = fs.readFileSync(filePath).toString();
      const highlighted = Prism.highlight(raw, Prism.languages.html);
      output[name] = {
        code: highlighted,
        path: filePath,
      };
    }
  });
  return output;
}

const examples = getFiles(base);

export function get(req, res, next) {
  const [type, file] = req.params.slug;
  const output = examples[type][file];
  if (output) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(output));
  } else {
    next();
  }
}

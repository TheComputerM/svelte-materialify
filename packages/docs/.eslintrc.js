const deepmerge = require('deepmerge');

module.exports = deepmerge(require('../../.eslintrc.js'), {
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
  globals: {
    ClipboardJS: 'readonly',
  },
});

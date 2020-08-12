const deepmerge = require('deepmerge');

module.exports = deepmerge(require('../../.eslintrc.js'), {
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-param-reassign': ['error', { props: false }],
  },
  globals: {
    ClipboardJS: 'readonly',
  },
});

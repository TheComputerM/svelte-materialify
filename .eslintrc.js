module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': 'off',
        'import/no-duplicates': 'off',
        'import/no-mutable-exports': 'off',
        'import/prefer-default-export': 'off',
        'import/order': 'off',
      },
    },
    {
      files: ['**/tests/**/*.js'],
      env: { jest: true },
      rules: { 'import/no-unresolved': ['error', { ignore: ['^@s/'] }] },
    },
    {
      files: ['packages/docs/**/*.{js,svelte}'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'no-return-assign': ['error', 'except-parens'],
        'no-param-reassign': ['error', { props: false }],
      },
      globals: { ClipboardJS: 'readonly' },
    },
  ],
  extends: ['eslint:recommended', 'airbnb-base'],
  settings: { 'svelte3/ignore-styles': () => true },
  rules: {
    camelcase: 'off',
    'object-curly-newline': [
      'error',
      {
        ImportDeclaration: { consistent: true },
        ExportDeclaration: { consistent: true },
      },
    ],
    'operator-linebreak': ['error', 'none', { overrides: { '=': 'after' } }],
    'no-nested-ternary': 'off',
    'import/no-extraneous-dependencies': 'off',
    'global-require': 'off',
  },
};

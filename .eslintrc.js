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
      files: ['tests/**/*.js'],
      env: { jest: true },
      rules: {
        'import/no-unresolved': ['error', { ignore: ['^@s/'] }],
      },
    },
  ],
  extends: ['eslint:recommended', 'airbnb-base'],
  settings: {
    'svelte3/ignore-styles': () => true,
  },
  rules: {
    camelcase: ['error', { allow: ['[_][a-z]{1,5}$'] }],
    'no-nested-ternary': 'off',
    'import/no-extraneous-dependencies': 'off',
    'global-require': 'off',
  },
};

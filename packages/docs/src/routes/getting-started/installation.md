---
title: Getting Started with Svelte Materialify
description: Here is how you can install Svelte Materialify with the tools and frameworks you love.
keywords: quick start, svelte materialify templates, installing materialify, install svelte materialify
related:
  - components/alerts
  - components/buttons
  - styles/content
---

# Installation

Get Started with Svelte Materialify, the best material UI component library for Svelte.

If you want to try out svelte materialify and tinker with it, visit the [REPL playground](https://svelte.dev/repl/2c55788d8ffd4458bfe9bcb5f58956db).

You can also **optionally** add [focus-visible](https://github.com/WICG/focus-visible), if you want keyboard focused styles.

```html
<script src="https://unpkg.com/focus-visible@latest/dist/focus-visible.min.js"></script>
```

## Install with Default Styles

If you want a fast and basic setup, without custom SCSS/SASS, then only installing `svelte-materialify` should be fine:

```shell
$ npm i svelte-materialify
```

## Install with Custom Styles

If you want finer control over Svelte Materialify, install all its peer dependencies:

```shell
$ npm i -D svelte-materialify svelte-preprocess sass postcss
```

Now create a **\_material-theme.scss** file. Let's put it in a folder called **theme**.

Include the folder path in the `sveltePreprocess` function in your **rollup.config.js**:

```js
svelte({
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ['theme'],
    },
  }),
  ...
```

For better intellisense, you can instead create a **svelte.config.js** and add it to the root of the project:

```js
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ['theme'],
    },
  }),
};
```
Now you can import this file from your main config file, like shown below:
### Rollup

```js
const { preprocess } = require('./svelte.config');

export default {
  // some config...,
  plugins: [
    svelte({ preprocess }),
    // more plugins...
  ],
};
```

### Webpack

```js
const { preprocess } = require('./svelte.config');

module.exports = {
  // some config...
  module: {
    rules: [
      {
        test: /.(svelte|html)$/,
        use: {
          loader: 'svelte-loader',
          options: {
            // svelte options...,
            preprocess,
          },
        },
      },
    ],
  },
};
```

### Integrations

Learn how to integrate svelte materialify with existing frameworks.

#### Sapper

Add the preprocessor for both client and server bundles:

```js
const { preprocess } = require('./svelte.config');

export default {
  client: {
    plugins: [
      svelte({
        preprocess,
        // ...
      }),
  },
  server: {
    plugins: [
      svelte({
        preprocess,
        // ...
      }),
    ],
  },
};
```

#### Sveltekit

See: https://github.com/TheComputerM/sveltekit-materialify
## Templates

Basic setup done for you:

### Sveltekit

```
npx degit TheComputerM/sveltekit-materialify my-sveltematerialify-project

cd my-sveltematerialify-project

npm install
npm run dev
```

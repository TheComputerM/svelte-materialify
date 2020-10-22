---
title: Getting Started with Svelte Materialify
related:
  - components/alerts
  - components/buttons
  - styles/content
---

# Installation

Get Started with Svelte Materialify, the best material UI component library for Svelte

## Advanced Install

If you want finer control over Svelte Materialify and installation you want to install all its peer dependencies. Follow this guide for SSR.

```shell
$ npm i -D svelte-materialify svelte-preprocess sass postcss
```

```html
<script>
  // In a svelte file
  // Import Everything from svelte-materialify/src
  import * as S from 'svelte-materialify/src';
  // OR
  import { Button } from 'svelte-materialify/src';
  // Import a single component
</script>
```

<Components.Alert type='info'>
Now you can use SCSS and SASS in your styles.
</Components.Alert>

Then create a **\_material-theme.scss** file and place it in any folder, lets put it in a folder called **theme**. Then include the path in the preprocess function in your **rollup.config.js** (likewise follow the same in webpack but for svelte-loader).

Now add a **svelte.config.js** to add to the root of the project to provide better intellisense.

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

### Svelte

```js
const { preprocess } = require('./svelte.config');

export default {
  // ...,
  plugins: [
    svelte({ preprocess }),
    // ...
  ],
};
```

### Sapper Integration

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

Now _you_ can also use scss styles in your own components. Learn more about
[svelte-preprocess](https://github.com/sveltejs/svelte-preprocess/blob/master/docs/usage.md).

## Minimal Install

<Components.Alert type="danger">
Use Advanced Installation, minimal installation is very, very broken and very unoptimised.
</Components.Alert>

If you want to try out svelte materialify and tinker with it, visit the [repl playground](https://svelte.dev/repl/2c55788d8ffd4458bfe9bcb5f58956db).

If want a fast and basic setup then only installing `svelte-materialify` should be fine.

```shell
$ npm i svelte-materialify
```

And then in your svelte files, import the compiled module for svelte materialify

```html
<script>
  // In a svelte file
  // Import Everything
  import * as S from 'svelte-materialify';
  // OR
  import { Button } from 'svelte-materialify';
  // Import a single component
</script>
```

We can also **optionally** add [focus-visible](https://github.com/WICG/focus-visible), if you want keyboard focused styles.

```html
<script src="https://unpkg.com/focus-visible@latest/dist/focus-visible.min.js"></script>
```

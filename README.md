<p align="center">
  <a href="https://svelte-materialify.vercel.app/" target="_blank">
    <img alt="Svelte Materialify Logo" width="100" src="logo/logo.svg">
  </a>
</p>

<h1 align="center">Svelte Materialify</h1>

<p align="center">
  <a href="https://github.com/thecomputerm/svelte-materialify/actions?query=workflow%3ACI">
    <img src="https://github.com/thecomputerm/svelte-materialify/workflows/CI/badge.svg" alt="CI badge">
  </a>
  <a href="https://www.npmjs.com/package/svelte-materialify">
    <img src="https://img.shields.io/npm/dt/svelte-materialify.svg" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/svelte-materialify">
    <img src="https://img.shields.io/npm/dm/svelte-materialify.svg" alt="Downloads">
  </a>
  <br>
  <a href="https://github.com/thecomputerm/svelte-materialify/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/svelte-materialify.svg" alt="License">
  </a>
  <br>
  <a href="https://www.npmjs.com/package/svelte-materialify">
    <img src="https://img.shields.io/npm/v/svelte-materialify.svg" alt="Version">
  </a>
</p>

**Currently In Active Development**

A better Material UI design framework for Svelte with full support for light / dark themes and customisability.

This is still in development. To contribute, please read [CONTRIBUTING.md](./CONTRIBUTING.md) and open a PR.

There are currently more than **50+** different components are more are planned to arrive soon.

## Website

Website is located at [https://svelte-materialify.vercel.app/](https://svelte-materialify.vercel.app/), it is still in development.

# Installation

Get Started with Svelte Materialify, the best material UI component library for Svelte

## Minimal Install

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

## Advanced Install

If you want finer control over Svelte Materialify and installation you want to install all its peer dependencies. Follow this guide for SSR.

```shell
$ npm i -D svelte-materialify svelte-preprocess sass postcss
```

```html
<script>
  // In a svelte file
  // Import Everything
  import * as S from 'svelte-materialify/src';
  // OR
  import { Button } from 'svelte-materialify/src';
  // Import a single component
</script>
```

Then create a **\_material-theme.scss** file and place it in any folder, lets put it in a folder called **theme**. Then include the path in the preprocess function in your **rollup.config.js** (likewise follow the same in webpack but for svelte-loader).

### Svelte

```js
import sveltePreprocess from 'svelte-preprocess';

const preprocess = sveltePreprocess({
  scss: {
    includePaths: ['theme'],
  },
});

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
import sveltePreprocess from "svelte-preprocess";

const preprocess = sveltePreprocess({
  scss: {
    includePaths: ["theme"],
  }
});

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

## Thanks:

- **[Shriji](https://github.com/peopledrivemecrazy)** for the logos.
- **[MDsveX](https://github.com/pngwn/MDsveX)**
- **[Vuetify](https://vuetifyjs.com/)**
- **[Material Design](https://material.io/components/)**

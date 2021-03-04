---
title: Material App
description: The material app component is a wrapper which provides all components inside it with styles and helpers
keywords: material app, svelte materialify material component, svelte material component
related:
  - getting-started/installation
  - getting-started/usage
  - components/buttons
---

# Material App

This component is the base for Svelte Materialify and helps you to bootstrap your app. All other svelte materialify components are required to be inside of this component in order for them to properly inherit styles and helpers. `MaterialApp` should ideally only be used once inside your app.

<Components.Alert type="warning">
If you don't want our css utility classes or typography styles, use <code>MaterialAppMin</code> instead! It only provides ress.css, theming and colors.
</Components.Alert>

## API

- [MaterialApp](/api/MaterialApp/)
- [MaterialAppMin](/api/MaterialAppMin/)

## Usage

The default theme is the light theme, this is how ideally your base layout should look. It is also recommended that you store the theme variable in a store and can access it in any component you want and also if you want your user selected theme to be saved, use [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

```html
<script>
  import { MaterialApp } from 'svelte-materialify';
  let theme = 'light';

  function toggleTheme() {
    if (theme === 'light') theme = 'dark';
    else theme = 'light';
  }
</script>

<MaterialApp {theme}>
  <button on:click="{toggleTheme}">Toggle Theme</button>
  ...
</MaterialApp>
```

## Manually set themes

Suppose if you want your `div` to be dark themed no matter what the theme of the app is then add the class `theme--dark` to the `div` or `theme--light` if you want it to be light themed.

```html
<MaterialApp {theme}>
  <!-- this div will have dark theme no matter the value of {theme} -->
  <div class="theme--dark">...</div>
</MaterialApp>
```

## Remove css helpers, defaults and typography

If you want to use your own heading styles, fonts, etc. and just want theming and colors out of the box:

```html
<!-- Min version -->
<MaterialAppMin {theme}>
  ...
</MaterialAppMin>
```

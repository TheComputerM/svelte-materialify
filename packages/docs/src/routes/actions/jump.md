---
title: Jump action
description: The Jump action allowsyou to smoot scroll to any position
keywords: jump action, svelte jump action, svelte materialify jump
related:
  - components/buttons
  - components/expansion-panels
  - styles/colors
---

<style>
  :global(html) {
    scroll-behavior: auto !important;
  }
</style>

# Jump

This action allows you to smooth scroll to any position using [jump.js](http://callmecavs.com/jump.js/).

## Usage

The default behavior is to bind to the window. If no additional configuration options are needed, you can simply pass your callback function. This is the options you can pass through and thier default values.

```js
{
  target: '', // can be a number, selector, or and element
  duration: 1000,
  offset: 0,
  callback: () => {},
  easing: () => {} // any easing function
}
```

<Components.Example file="Jump/usage" />

---
title: Icon Component
description: The icon component is compatible with multiple common icon fonts such as Material Design Icons, Font Awesome and more.
keywords: icons, svelte materialify icon, svelte icon component
related:
  - components/buttons
  - components/cards
---

<script>
  import Playground from '@/playground/Icon.svelte';
</script>

<svelte:head>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" />
</svelte:head>

# Icons

The `Icon` component allows to provide visual context to various aspects of your application. It is iconset agnostic, so you can use any icon from any vendor you like.

:warning: Don't use a webfont, like we are doing here. Use a library which just exports svg path data.

We recommend the @mdi/js library:
`npm install @mdi/js`
See: [Material Design Icons](https://materialdesignicons.com/).

## Playground

Icons come in two themes (light and dark), and can have any size.

<Playground />

## API

- [Icon](/api/Icon/)

## Examples

Below is a collection of simple to complex examples.

### Icon size and spinning

You can specify if the icon should spin.
<Components.Example file="Icon/types" />

### Color

Using color helpers you can change the color of an icon from the standard dark and light themes.
<Components.Example file="Icon/color" />

### SVG

You can easily use SVG icons instead of icon fonts.
<Components.Example file="Icon/svg" />

### Disabled

Disable the icon using the `disabled` prop.
<Components.Example file="Icon/disabled" />

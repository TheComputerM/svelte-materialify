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

# Icons

The `Icon` component allows to provide visual context to various aspects of your application. It is iconset agnostic, so you can use any icon from any vendor you like.

<Components.Alert type="info">
It's best to use a library which just exports SVG path data, instead of a webfont.
</Components.Alert>

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

You can specify icon size and if the icon should spin.
<Components.Example file="Icon/types" />

### Color

Using color helpers you can change the color of an icon from the standard dark and light themes.
<Components.Example file="Icon/color" />

### Icon Font File

If you really need to, you can easily use Icon font files instead of SVGs.
For example, with `mdi` or `fa` webfonts:

```html
<div class="d-flex justify-space-between">
  <Icon class="mdi mdi-home" />
  <Icon spin class="mdi mdi-refresh" />
  <Icon class="fa fa-award" />
  <Icon class="fa fa-camera" />
</div>
```

(We haven't imported these font files, because the site would get bloated by them.)

### Disabled

Disable the icon using the `disabled` prop.
<Components.Example file="Icon/disabled" />

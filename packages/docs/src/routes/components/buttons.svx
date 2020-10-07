---
title: Button Component
related:
  - components/button-groups
  - components/alerts
  - api/Button
---

<script>
  import Playground from '@/playground/Button.svelte';
</script>

# Button

The `Button` component replaces the standard html button with a material deisgn theme and a multitude of options. Any color helper class can be used to alter the background or text color.

## Playground

Buttons in their simplest form contain uppercase text, a slight elevation, hover effect, and a ripple effect on click.
<Playground />

## API

- [Button](/api/Button/)

## Examples

Below is a collection of simple to complex examples.

### Raised

This is the default one
<Components.Example file="Button/raised" />

### Depressed

These are just buttons with no box shadow
<Components.Example file="Button/depressed" />

### Block

Big bois
<Components.Example file="Button/block" />

### Floating Action Buttons

Floating buttons are rounded and usually contain an icon.
<Components.Example file="Button/fab" />

### Icon

Icons can be used for the primary content of a button.
<Components.Example file="Button/icon" />

### Outlined

Outlined buttons inherit their borders from the current color applied.
<Components.Example file="Button/outlined" />

### Rounded

Rounded buttons behave the same as regular buttons but have rounded edges.
<Components.Example file="Button/rounded" />

### Text

Text buttons have no box shadow and no background. Only on hover is the container for the button shown.
<Components.Example file="Button/text" />

### Tile

Tile buttons behave the same as regular buttons but have no border radius.
<Components.Example file="Button/tile" />

### Sizing

Buttons can be given different sizing options to fit a multitude of scenarios. We do not set font sizes for icons as different icon packs look differently
<Components.Example file="Button/sizing" />

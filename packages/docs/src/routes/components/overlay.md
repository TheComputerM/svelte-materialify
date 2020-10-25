---
title: Overlay Component
description: The overlay component makes it easy to create a scrim or hovering effect over components or your entire application.
keywords: overlays, svelte materialify overlay, svelte overlay component
related:
  - components/cards
  - components/dialog
---

# Overlays

The `Overlay` component is used to provide emphasis on a particular element or parts of it. It signals to the user of a state change within the application and can be used for creating loaders, dialogs and more.

## Usage

In its simplest form, the Overlay component will add a dimmed layer over your application.

<Components.Example file="Overlay/usage" />

## API

- [Overlay](/api/Overlay/)

## Examples

### Absolute

**absolute** overlays are positioned absolutely and contained inside of their parent element.
<Components.Example file="Overlay/absolute" />

### Opacity

**opacity** allows you to customize the transparency of `Overlay` components.
<Components.Example file="Overlay/opacity" />

### Color

You can change the color of the overlay using the `color` prop.
<Components.Example file="Overlay/color" />

### Loader

Using the `Overlay` as a background, add a progress component to easily create a custom loader.
<Components.Example file="Overlay/loader" />

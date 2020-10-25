---
title: Snackbar Component
description: The snackbar component informs user of a process that your application has performed is will perform. It can be temporary and often contains actions.
keywords: snackbars, svelte materialify snackbar, svelte snackbar component
related:
  - components/buttons
  - styles/colors
  - components/selects
---

# Snackbars

The `Snackbar` component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.

## API

- [Snackbar](/api/Snackbar/)

## Examples

Below are some simple and complex examples.

### Timeout

The timeout property lets you customize the delay before the `Snackbar` is hidden.
<Components.Example file="Snackbar/timeout" />

### Variants

Apply different styles to the snackbar using props such as text, outlined, and more.
<Components.Example file="Snackbar/variants" />

### Actions

Add different actions to the snackbar.
<Components.Example file="Snackbar/actions" />

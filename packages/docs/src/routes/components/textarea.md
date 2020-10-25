---
title: Textarea Component
description: The textarea component is a text field that accepts lengthy textual input from users.
keywords: textareas, svelte materialify textarea, svelte textarea component
related:
  - components/selects
  - components/text-field
---

# Textarea

Textarea components are used for collecting large amounts of textual data.

## API

- [Textarea](/api/Textarea/)

## Usage

<Components.Example file="Textarea/variants" />

## Examples

### Icons

You can add icons to the text field with `prepend`, `append`, `prepend-outer` and `append-outer` slots.
<Components.Example file="Textarea/icons" />

### Grow

When using the `autogrow` prop, textarea's will automatically increase in size when the contained text exceeds its size.
<Components.Example file="Textarea/grow" />

### Counter

The `counter` prop informs the user of a character limit for the Textarea.
<Components.Example file="Textarea/counter" />

### No Resize

Textarea's have the option to remain the same size regardless of their content's size, using the `noResize` prop.
<Components.Example file="Textarea/noResize" />

---
title: Select Component
description: The select component provides a list of options that a user can make selections from.
keywords: selects, svelte materialify select, svelte select component
related:
  - components/autocomplete
  - components/checkboxes
---

# Selects

Select fields components are used for collecting user provided information from a list of options.

## API

- [Select](/api/Select/)

## Examples

Below is a collection of simple to complex examples.

### Basic

This is a basic example on how to use `Select`.
<Components.Example file="Select/basic" />

### Name-Value

If you want the `name` that the user sees to differ from the `value` in code, your items should be defined like this:
```js
const items = [
    { name: 'Foo!', value: 'foo' },
    { name: 'Bar!', value: 'bar' }
]
```
as an example:
<Components.Example file="Select/namevalue" />

### Disabled

You cannot use disabled `Select`.
<Components.Example file="Select/disabled" />

### Multiple

You can chose multiple options.
<Components.Example file="Select/multiple" />

### Icons

Use a custom prepended or appended icon.
<Components.Example file="Select/icons" />

### Chips

A select can utilize `Chip` as the display for selected items.
<Components.Example file="Select/chips" />

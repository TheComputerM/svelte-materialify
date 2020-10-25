---
title: Progress circular Component
description: The progress circular component is useful for displaying a visual indicator of numerical data in a circle.
keywords: progress circular, svelte materialify progress circular, svelte progress circular component, circular progress
related:
  - components/cards
  - components/progress-linear
  - components/lists
---

# Progress Circular

The `ProgressCircular` component is used to convey data circularly to users. It also can be put into an indeterminate state to portray loading.

## Usage

By default, progress circular uses the applications secondary color.
<Components.Example file="ProgressCircular/usage" />

## API

- [ProgressCircular](/api/ProgressCircular/)

## Examples

### Color

Alternate colors can be applied to `ProgressCircular` using the `color` prop.
<Components.Example file="ProgressCircular/color" />

### Indeterminate

Using the `indeterminate` prop, a `ProgressCircular` continues to animate indefinitely.
<Components.Example file="ProgressCircular/indeterminate" />

### Rotate

The `rotate` prop gives you the ability to customize the `ProgressCircular`'s origin.
<Components.Example file="ProgressCircular/rotate" />

### Size

The `size` and `width` props allow you to easily alter the size and width of the `ProgressCircular` component.
<Components.Example file="ProgressCircular/size" />

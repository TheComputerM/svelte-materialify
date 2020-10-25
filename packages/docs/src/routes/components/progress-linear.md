---
title: Progress Linear
description: The progress-linear component is useful for displaying a visual indicator of numerical data in a straight line.
keywords: progress linear, svelte materialify progress linear, svelte progress linear component, linear progress
related:
  - components/cards
  - components/progress-circular
  - components/lists
---

# Progress Linear

The `ProgressLinear` component is used to convey data visually to users. They can also represent an indeterminate amount, such as loading or processing.

## Usage

In its simplest form, `ProgressLinear` displays a horizontal progress bar. Use the **value** prop to control the progress.
<Components.Example file="ProgressLinear/usage" />

## API

- [ProgressLinear](/api/ProgressLinear/)

## Examples

### Indeterminate

Using the **indeterminate** prop, `ProgressLinear` continuously animates.
<Components.Example file="ProgressLinear/indeterminate" />

### Reversed

Displays reversed progress
<Components.Example file="ProgressLinear/reversed" />

### Stream

The stream property works with `buffer` to convey to the user that there is some action taking place. You can use any combination of `buffer` and `value` to achieve your design.
<Components.Example file="ProgressLinear/stream" />

### Striped

This applies a striped background over the value portion of the `ProgressLinear`.
<Components.Example file="ProgressLinear/striped" />

### Slots

You can display anything inside the progress bar.
<Components.Example file="ProgressLinear/slots" />

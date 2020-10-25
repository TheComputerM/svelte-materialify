---
title: Windows Component
description: The window component is a wrapper container that allows transitioning between content. It serves as the baseline for tabs and carousels.
keywords: windows, svelte materialify window, svelte window component
related:
  - components/carousels
  - components/steppers
  - components/tabs
---

# Windows

The `Window` component provides the baseline functionality for transitioning content from 1 pane to another. Other components such as `Tabs`, `Carousel` and `Stepper` utilize this component at their core.

## Examples

Below is a collection of simple to complex examples.

## API

- [Window](/api/Window/)
- [WindowItem](/api/WindowItem/)

### Basic

Here is a basic example on how to use `Window`.
<Components.Example file="Windows/basic" />

### Vertical

`Window` can be vertical. Vertical windows have Y axis transition instead of X axis transition.

<Components.Example file="Windows/vertical" />

### Reverse

Reverse `Window` always displays reverse transition.
<Components.Example file="Windows/reverse" />

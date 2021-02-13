---
title: FluidGrid
description: Svelte Materialify supports the 12 point Material Design grid for laying out and controlling breakpoints for your application.
keywords: grids, svelte materialify grid, layout component, flex component
related:
  - components/container
  - components/row
  - components/col
---

<script>
  import Playground from '@/playground/FluidGrid.svelte';
</script>

<style lang="scss">
  @mixin make-item-rule {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 12px;
    background-color: var(--theme-dividers);
  }
  :global(.example .s-fluid-grid.item > div:not(.item)) {
    @include make-item-rule;
  }
  :global(.playground .s-fluid-grid.item > div:not(.item)) {
    @include make-item-rule;
  }
</style>

# Fluid Grid

Svelte Materialify comes with a 12 column grid system built using flexbox. The grid is used to create specific layouts within an application’s content. It contains 5 types of media breakpoints that are used for targeting specific screen sizes or orientations, **xs**, **sm**, **md**, **lg** and **xl**.

## Playground

<Playground />

## API

- [FluidGrid](/api/FluidGrid/)

## Usage

The `FluidGrid` component is used to layout, align and space content.
It is heavily inspired by the [Material-UI Grid](https://material-ui.com/components/grid/).

<Components.Example file="FluidGrid/usage" />

## Examples

### Basic grid

<Components.Example file="FluidGrid/basic" />

### Grid with breakpoints

<Components.Example file="FluidGrid/breakpoints" />

### Auto-layout

<Components.Example file="FluidGrid/autolayout" />

### Nested grid

<Components.Example file="FluidGrid/nested" />

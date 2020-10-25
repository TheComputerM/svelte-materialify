---
title: Grid
description: Svelte Materialify supports the 12 point Material Design grid for laying out and controlling breakpoints for your application.
keywords: grids, svelte materialify grid, layout component, flex component
related:
  - styles/flex
  - styles/display-helpers
---

<style>
  :global(.example .s-col) {
    border: thin solid var(--theme-dividers);
  }
</style>

# Grid

Svelte Materialify comes with a 12 column grid system built using flexbox. The grid is used to create specific layouts within an application’s content. It contains 5 types of media breakpoints that are used for targeting specific screen sizes or orientations, **xs**, **sm**, **md**, **lg** and **xl**.

## Usage

The Svelte Materialify grid is heavily inspired by the [Bootstrap Grid](https://getbootstrap.com/docs/4.0/layout/grid/). It is integrated by using a series of containers, rows, and columns to layout and align content.

<Components.Example file="Grid/usage" />

## API

- [Container](/api/Container/)
- [Row](/api/Row/)
- [Col](/api/Col/)

## Sub-components

### Container

`Container` provides the ability to center and horizontally pad your site’s contents. You can also use the fluid prop to fully extend the container across all viewport and device sizes.

### Row

`Row` is a wrapper component for `Col`. It utilizes flex properties to control the layout and flow of its inner columns. It uses a standard gutter of 24px. This can be reduced with the `dense` prop or removed completely with `noGutters`.

### Col

`Col` is a content holder that must be a direct child of `Row`.

## Caveats

<Components.Alert>
All the columns here have a thin border to help you see them properly, however this is not the case for when you use them.
</Components.Alert>

<Components.Alert>

Breakpoints based props on grid components work in an `andUp` fashion. With this in mind the **xs** breakpoint is assumed and has been removed from the props context. This applies to **offset**, **justify**, **align**, and **single** breakpoint props on `Col`.

<br />

- Props like **justify-sm** and **justify-md** exist, but **justify-xs** does not, it is simply **justify**.
- The **xs** prop does not exist on Col. The equivalent to this is the `cols` prop.

</Components.Alert>

## Examples

### Align

Change the vertical alignment of flex items and their parents using the **align** and **align-self** helper classes.
<Components.Example file="Grid/align" />

### Breakpoint sizing

Columns will automatically take up an equal amount of space within their parent container. This can be modified using the **cols** prop. You can also utilize the **sm**, **md**, **lg**, and **xl** props to further define how the column will be sized in different viewport sizes.
<Components.Example file="Grid/breakpoint" />

### Offsets

Offsets are useful for compensating for elements that may not be visible yet, or to control the position of content. Just as with breakpoints, you can set an offset for any available sizes. This allows you to fine tune your application layout precisely to your needs.
<Components.Example file="Grid/offset" />

### Margin Helpers

Using the [auto margin helper utilities](/styles/spacing/) you can force sibling columns away from each other.
<Components.Example file="Grid/margin" />

---
title: Tooltip
related:
  - components/badges
  - components/icons
  - components/menus
---

# Tooltips

The `Tooltip` component is useful for conveying information when a user hovers over an element. You can also programmatically control the display of tooltips through a `bind:active`. When activated, tooltips display a text label identifying an element, such as a description of its function.

## API

- [Tooltip](/api/Tooltip/)

## Usage

<Components.Example file="Tooltip/variants" />

## Caveats

<Components.Alert type="info">

In order for Tooltip to be positioned correctly a position prop (`top`|`bottom`|`left`|`right`) is required

</Components.Alert>

## Examples

### Alignment

A tooltip can be aligned to any of the four sides of the activator element.

<Components.Example file="Tooltip/alignment" />

### Visibility

Tooltip visibility can be programmatically changed using `bind:active`.

<Components.Example file="Tooltip/visibility" />

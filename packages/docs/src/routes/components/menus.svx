---
title: Menu Component
related:
  - components/lists
  - components/buttons
  - api/Menu
---

# Menus

The `Menu` component shows a menu at the position of the element used to activate it.

## API

- [Menu](/api/Menu/)

## Usage

Remember to put the element that activates the menu in the activator slot.
<Components.Example file="Menu/basic" />

## Examples

Below is a collection of simple to complex examples.

### Absolute Position

Menus can also be placed absolutely on top of the activator element using the `absolute` prop. Try clicking anywhere on the image.
<Components.Example file="Menu/absolute" />

### Hover

Menus can be accessed using hover instead of clicking with the `hover` prop.
<Components.Example file="Menu/hover" />

### Offsets

Menu can be offset by the **X** and **Y** axis to make the activator visible.
<Components.Example file="Menu/offsets" />

### Close on content click

You can choose the close or not close the menu when the content inside it has been clicked.
<Components.Example file="Menu/contentClick" />

### Transitions

You can use different transitions for when the menu is opening and closing using the inbuilt svelte transitions and easing functions.
<Components.Example file="Menu/transitions" />

---
title: Slide Group Component
description: The slide group component is similar to item groups in that you can make selectable content out of elements but does so in a single line fashion.
keywords: slide groups, slideable groups, svelte materialify slide group, svelte slide group component
related:
  - components/icons
  - components/carousels
  - components/tabs
---

# Slide Group

The SlideGroup component is used to display pseudo paginated information. It uses [ItemGroup](/components/item-groups/) at its core and provides a baseline for components such as v-tabs.

## API

- [SlideGroup](/api/SlideGroup/)
- [SlideItem](/api/SlideItem/)

## Examples

Below is a collection of simple to complex examples.

### Active Class

Active class can be customized.
<Components.Example file="SlideGroup/activeClass" />

### Multiple

You can select multiple items.
<Components.Example file="SlideGroup/multiple" />

### Mandatory

At least 1 item must be selected.
<Components.Example file="SlideGroup/mandatory" />

### Center Active

Active item is always centered.
<Components.Example file="SlideGroup/centerActive" />

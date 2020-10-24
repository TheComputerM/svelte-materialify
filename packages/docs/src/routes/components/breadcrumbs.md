---
title: Breadcrumbs Component
description: The breadcrumbs component is a navigational helper for pages. It can accept a Material Icons icon or characters as a divider.
keywords: breadcrumbs, svelte materialify breadcrumb, svelte breadcrumb component
related:
  - components/switches
  - components/buttons
  - components/navigation-drawer
---

<script>
  import Playground from '@/playground/Breadcrumbs.svelte';
</script>

# Breadcrumbs

The `Breadcrumbs` component is a navigational helper for pages. It can accept a Material Icons icon or text characters as a divider. An array of objects can be passed to the items property of the component. Additionally, slots exists for more control of the breadcrumbs.

## Playground

By default, breadcrumbs use a text divider. This can be any string.
<Playground />

## API

- [Breadcrumbs](/api/Breadcrumbs/)

The array of item in the `items` prop.

```ts
type items = Array<item>;
type item = {
  disabled?: false;
  href?: '';
  text: '';
  class?: '';
  props?: {};
};
```

## Examples

Below is a collection of simple to complex examples.

### Basic

Basic examples for breadcrumbs.
<Components.Example file="Breadcrumbs/basic" />

### Custom Divider

Breadcrumbs separator can be set using `divider` slot. You can also use material icons as dividers.
<Components.Example file="Breadcrumbs/customDivider" />

### Slots

You can use the default slot to customize each breadcrumb item. Remember to add class `s-breadcrumb-item` to each item to add the default styles.
<Components.Example file="Breadcrumbs/slots" />

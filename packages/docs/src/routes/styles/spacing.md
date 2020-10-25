---
title: Spacing
description: Spacing helper classes allow you to apply margin or padding to any element in increments from 1 to 5.
keywords: spacing helper classes, spacing classes, svelte materialify spacing
related:
  - styles/elevation/
  - styles/content/
  - components/grid/
---

# Spacing

Update your layout without creating new classes. Spacing helpers are useful for modifying the padding and margin of an element.

## Playground

Use the playground to get a feel for what the different helper classes can do. For an explanation of how they work, see the How it works section below.
<Components.Example file="spacing/playground" />

## How it works

The helper classes apply **margin** or **padding** to an element ranging from <u>0 to 16</u>. Each size increment was designed to align with common Material Design spacings. These classes can be applied using the following format `{property}{direction}-{size}`.

Where _property_ can be:

- `m`: applies margin
- `m`: applies padding

<br />

Where _direction_ can be:

- `t`: for top
- `b`: for bottom
- `l`: for left
- `r`: for right
- `a`: for all directions

<br />

Where _size_ can be:

<ul>
  <li><code>0</code>: sets margin or padding to 0px</li>
  {#each Array(16) as _, i}
  <li>
    <code>{i+1}</code>: sets margin or padding to {(i+1)*4}px
  </li>
  {/each}
  {#each Array(16) as _, i}
  <li>
    <code>n{i+1}</code>: sets margin or padding to -{(i+1)*4}px
  </li>
  {/each}
</ul>

## Breakpoints

You can also use these helper classes to apply **margin** or **padding** at a given breakpoint also using the following syntax: `{property}{direction}-{breakpoint}-{size}`. This does not apply to _xs_ as it is inferred; e.g. `ma-xs-2` equals `ma-2`.

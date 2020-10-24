---
title: Avatar Component
description: The avatar component is used to control the size and border radius of an image. It can be used with numerous components to provide better visual context.
keywords: avatars, svelte materialify avatar, svelte avatar component
related:
  - components/badges
  - components/lists
  - components/radio
---

<script>
  import Playground from '@/playground/Avatar.svelte';
</script>

# Avatars

The `v-avatar` component is typically used to display circular user profile pictures. This component will allow you to dynamically size and add a border radius of responsive images, icons, and text. A tile variation is available for displaying an avatar without border radius.

## Playground

Avatars in their simplest form display content within a circular container.

<Playground />

## API

- [Avatar](/api/Avatar/)

## Examples

Below is a collection of simple to complex examples.

### Size

The `size` prop allows you to define the height and width of avatar. This prop scales both evenly with an aspect ratio of 1. height and width props will override this prop.

<Components.Example file="Avatar/size" />

### Tile

The `tile` prop removes the border radius from v-avatar leaving you with a simple square avatar.

<Components.Example file="Avatar/tile" />

### Types

You can add text, images and icons to the avatar.

<Components.Example file="Avatar/types" />

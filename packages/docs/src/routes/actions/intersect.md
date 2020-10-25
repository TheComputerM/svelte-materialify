---
title: Intersection action
description: The Intersection action calls a function when an element is scrolled into viewport
keywords: intersect action, svelte intersect action, svelte materialify intersect
related:
  - actions/mutate
  - actions/click-outside
---

# Intersect

The `Intersect` action utilizes the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API). It provides an easy-to-use interface for detecting when elements are visible within the user's viewport. This is also used for the [Lazy](/components/lazy/) component.

## Usage

<Components.Example file="Intersect/usage" />

## Polyfill

While the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) is not available in IE11 by default, it can be implemented using a [polyfill](https://github.com/w3c/IntersectionObserver).

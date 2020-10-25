---
title: Float
description: Float helper classes allow you to control the float property of an element based upon the viewport size.
keywords: float helper classes, float classes, svelte materialify float
---

# Float

Applies a custom float across any breakpoint with responsive float utilities.

## Classes

Floats can also be applied on a per breakpoint (viewport) basis. Here is a list of all the available support classes:

<Components.Example file="float/float" />

<ul class='font-weight-bold'>
  {#each ['-', '-sm-', '-md-', '-lg-', '-xl-'] as bp}
    <li>.float{bp}left</li>
    <li>.float{bp}right</li>
    <li>.float{bp}none</li>
  {/each}
</ul>

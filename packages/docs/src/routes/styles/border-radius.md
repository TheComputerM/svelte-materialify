---
title: Border Radius
description: Use border utilities to quickly style the border-radius of any element.
keywords: border radius classes, radius utilities, svelte materialify radius helper classes
related:
  - getting-started/usage
  - styles/text-and-typography
---

# Border Radius

Use border utilities to quickly style the border-radius of any element.

## Usage

The helper classes are of format: `rounded-{side|corner}-{size}`, for more details see the examples below.

<Components.Alert type='info'>
The sizes sm, lg, and xl correlate to the border radius size and are not affected by breakpoints.
</Components.Alert>

## Customizing

You can configure the border radius helper classes by overriding the `$rounded` variable in the \_material-theme.scss file. By default `$border-radius-root` will have a default value of 0.25rem.

```scss
$rounded: map-deep-merge(
  (
    0: 0,
    'sm': $border-radius-root / 2,
    null: $border-radius-root,
    'lg': $border-radius-root * 2,
    'xl': $border-radius-root * 6,
    'pill': 9999px,
    'circle': 50%,
  ),
  $rounded
);
```

## Examples

### Different sizes and types

The rounded helper classes allow you to modify the border radius of an element. Use the `.rounded-sm`, `.rounded`, `.rounded-lg`, and `.rounded-xl` to add a border radius of varying size.
<Components.Example file="border-radius/sizes" />

### Sides

Use these helper classes to add border radius to specific sides.
<Components.Example file="border-radius/side" />

### Corners

Use these helper classes to add border radius to specific corners.
<Components.Example file="border-radius/corner" />

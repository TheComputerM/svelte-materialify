---
title: Ripple action
related:
  - components/buttons
  - components/expansion-panels
  - styles/colors
---

# Ripple

The `Ripple` action is used to show action from a user. It can be applied to any block level element. Numerous components come with the ripple directive built in, such as the `Button`, `Tab` and many more.

## Usage

Here are the default options for the ripple. You can customise them as you like.

```js
{
  color: 'currentColor',
  class: '',
  opacity: 0.1,
  centered: false,
  spreadingDuration: '.4s',
  spreadingDelay: '0s',
  spreadingTimingFunction: 'linear',
  clearingDuration: '1s',
  clearingDelay: '0s',
  clearingTimingFunction: 'ease-in-out',
}
```

## Examples

Below is a collection of simple to complex examples.

### Centered

Center the Ripple.
<Components.Example file="Ripple/center" />

### Custom Color

Change the color of the Ripple
<Components.Example file="Ripple/customColor" />

### Ripple in components

Many components who internally use the Ripple action expose a `ripple` prop to customise it.
<Components.Example file="Ripple/components" />

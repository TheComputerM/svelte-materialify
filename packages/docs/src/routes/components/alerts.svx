---
title: Alert Component
related:
  - components/buttons
  - components/icons
  - api/Alert
---

<script>
  import Playground from '@/playground/Alert.svelte';
</script>

# Alert

The `Alert` component is used to convey important information to the user through the use contextual types icons and color. Many parts of an alert such as `border`, `icon`, and `color` can also be customized to fit almost any situation.

## Playground

Alerts in their simplest form are a flat sheets of paper that display a message.
<Playground />

## API

- [Alert](/api/Alert/)

## Examples

Below is a collection of simple to complex examples.

### Colors

Diffrent colors and variations of the `Alert`.
<Components.Example file="Alert/colors" />

### Border

Add a border using the `border` prop to either **left**, **right**, **top** or **bottom**.
<Components.Example file="Alert/border" />

### Colored Border

The `coloredBorder` prop removes the alert background in order to accent the `border` prop.
<Components.Example file="Alert/coloredBorder" />

### Dense

The `dense` prop decreases the height of the alert to create a simple and compact style. When combined with the `border` prop the border thickness will be decreased to stay consistent with the style.
<Components.Example file="Alert/dense" />

### Dismissible

There is inbuilt dismiss functionality in `Alert`. You can also change the icon of the close button and call a function when the alert has been closed.
<Components.Example file="Alert/dismissible" />

### Icon

The icon slot allows you to and an icon at the beginning og the Alert. It will inherit the color and style of the Alert.
<Components.Example file="Alert/icon" />

### Outlined

The `outlined` prop inverts the style of an alert, inheriting the currently applied color, applying it to the text and border, and making its background transparent.
<Components.Example file="Alert/outlined" />

### Transition

Use the `transition` prop to set the type of transition and use the `transitionOpts` prop to specify the options for the transition
<Components.Example file="Alert/transition" />

### Text

The `text` prop is a simple alert variant that applies a reduced opacity background of the provided color. Similar to other styled props, text can be combined with other props like `dense`, `border`, and `outlined` to create a unique and customized component.
<Components.Example file="Alert/text" />

---
title: Number Field Component
description: The number field component accepts numeric input from users.
keywords: number fields, svelte materialify number field, svelte number field component, svelte number input component
related:
  - components/selects
  - components/sliders
  - api/NumberField
---

# Number Fields

Number fields components are used for collecting numerical input from users.

<Components.Alert type='info'>
Any property which is not in the API list will be directly forwarded to the input element.
</Components.Alert>

## API

- [NumberField](/api/NumberField/)

## Usage

### Value

The `value` property on a `NumberField` is a number, not a string. (This is unlike HTML `<input type="number" />`, but is like Svelte's normal [numeric binding](https://svelte.dev/tutorial/numeric-inputs).)

### Basic Use

<Components.Example file="NumberField/variants" />


## Examples

### Built-In Validation

Number fields accept the html `min`, `max`, and `step` properties and show validation hints as needed.
<Components.Example file="NumberField/validation" />

### Custom Validation

In addition to the `min`, `max`, and `step` props, `NumberField` exposes validation through the `rules` prop. The prop accepts a array of callbacks with the input value as an arguement. The callback should return a string message if validation fails, or `false` if it passes. By default this runs a check whenever the user types something, to delay the validation till the input loses focus use `validateOnBlur`.

```js
const rules = [
  (value) => {
    if (condition) return 'Error Message';
    return false;
  },
];
```

<Components.Example file="NumberField/customValidation" />

### Dense

You can reduces the number field height with `dense` prop.
<Components.Example file="NumberField/dense" />

### Disabled and Readonly

Number fields can be `disabled` or `readonly`.
<Components.Example file="NumberField/disabled" />

### Icons

You can add icons to the number field with `prepend`, `append`, `prepend-outer` and `append-outer` slots.
<Components.Example file="NumberField/icons" />

### Clearable

When `clearable`, you can customize the clear icon with clear-icon.
<Components.Example file="NumberField/clearable" />

### Label

Number field label can be defined in the default slot.
<Components.Example file="NumberField/label" />



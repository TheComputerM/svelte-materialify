---
title: CSS Reset
---

# CSS Reset

Base reset styles for Svelte Materialify

Svelte Materialify uses [ress](https://github.com/filipelinhares/ress) because it is more
modern and is built on top of normalize.css

## Reset features

1. Apply `box-sizing: border-box;` in all elements.
2. Reset `padding` and `margin` in all elements.
3. Specify `background-repeat: no-repeat` in all elements and pseudo elements.
4. Inherit `text-decoration` and `vertical-align` to `::before` and `::after`.
5. Remove the `outline` when hovering in all browsers.
6. Specify `font-family: monospace` in code elements.
7. Reset `border-radius` in input elements.
8. Specify font inheritance of form elements.
9. Remove the default button styling in all browsers.
10. Specify textarea resizability to vertical.
11. Apply `cursor: pointer` to button elements.
12. Apply `tab-size: 4` in `html`.
13. Style `select` like a standard input.
14. Style `cursor` by aria attributes.
15. Hide content from screens but not screenreaders.

More information can be found over at [ress.css](https://github.com/filipelinhares/ress)

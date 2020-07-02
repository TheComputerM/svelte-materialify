# This is still in development and does not have proper documentation

We use SCSS preprocessor and BEM-CSS naming style.

To create a component you must:
- Add a folder named `<your-component>` to `src/components`
- Make sure that there are the following files:
  - `<your-component>.svelte`
  - `index.js`
  - `_index.scss`
  - `_variables.scss`
  `index.js` exports your component, `_variables.scss` contains the variables you need to style the component and `_index.scss` contains the component styles.
- Make a PR.

If you get stuck, you can refer to the button component.

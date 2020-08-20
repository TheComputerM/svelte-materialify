<script>
  import { onMount } from 'svelte';

  // Classes to add to button group.
  let classes = '';
  export { classes as class };

  // Does not remove box shadow.
  export let elevated = false;

  // Remove border.
  export let borderless = false;

  // Remove border radius.
  export let tile = false;

  // Add border radius to the first and last button.
  export let rounded = false;

  // Identifies buttons as active with this class.
  export let activeClass = 'active';

  // Array or string with the active button(s) value.
  export let value = [];

  // Allows you to select buttons.
  export let selectable = false;

  // Forces a value to always be selected (if available).
  export let mandatory = false;

  // Allow multiple selections, makes the value prop an array.
  export let multiple = false;

  // Maximun number of selections.
  export let max = Infinity;

  // Styles to apply to button group.
  export let style = null;

  let group;
  let buttons;

  function click(e) {
    const button = e.target.closest('.s-btn');
    const btnValue = button.value || button.textContent;
    const isActive = button.classList.contains(activeClass);

    if (isActive) {
      if (multiple) {
        if (mandatory) {
          if (value.length !== 1) {
            button.classList.remove(activeClass);
            value.splice(value.indexOf(btnValue), 1);
            value = value;
          }
        } else {
          button.classList.remove(activeClass);
          value.splice(value.indexOf(btnValue), 1);
          value = value;
        }
      } else if (!mandatory) {
        value = '';
        button.classList.remove(activeClass);
      }
    } else if (multiple && value.length < max) {
      value = [...value, btnValue];
      button.classList.add(activeClass);
    } else {
      value = btnValue;
      buttons.forEach((btn) => btn.classList.remove(activeClass));
      button.classList.add(activeClass);
    }
  }

  if (selectable) {
    onMount(() => {
      buttons = group.querySelectorAll('.s-btn');
      buttons.forEach((button) => {
        button.addEventListener('click', click, { passive: true });
        if (button.classList.contains(activeClass)) {
          const btnValue = button.value || button.textContent;
          if (multiple) value.push(btnValue);
          else value = btnValue;
        }
      });

      return () => {
        buttons.forEach((button) => {
          button.removeEventListener('click', click);
        });
      };
    });
  }
</script>

<style lang="scss" src="./ButtonGroup.scss">

</style>

<div
  class="s-btn-group {classes}"
  class:elevated
  class:borderless
  class:tile
  class:rounded
  bind:this={group}
  {style}>
  <slot />
</div>

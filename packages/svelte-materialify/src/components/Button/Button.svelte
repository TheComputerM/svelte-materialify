<script>
  import Ripple from '../../actions/Ripple';

  // Classes to add to the button
  let classes = '';
  export { classes as class };

  // Designates the button as a floating-action-button
  export let fab = false;

  // Designates the button as icon
  export let icon = false;

  // Makes button take 100% of the space
  export let block = false;

  /**
   * Determines the size of the button
   * @type {x-small|small|default|large|x-large}
  */
  export let size = 'default';

  // Removed the border radius if true.
  export let tile = false;

  // Makes the background transparent.
  export let text = false;

  // Removes the button box shadow.
  export let depressed = false;

  // Makes the background transparent and applies a thin border.
  export let outlined = false;

  // Applies a large border radius on the button.
  export let rounded = false;

  // Removes the ability to click or target the component.
  export let disabled = null;

  // Make the button active
  export let active = false;

  /**
   * Specifies the type of button
   * @type {button|reset|submit}
  */
  export let type = 'button';

  // Options for the ripple directive
  export let ripple = {};

  // Styles for component
  export let style = null;
</script>

<style lang="scss" src="./Button.scss">

</style>

<button
  class="s-btn size-{size} {classes}"
  class:fab
  class:icon
  class:block
  class:tile
  class:text={text || icon}
  class:depressed={depressed || text || disabled || outlined || icon}
  class:outlined
  class:rounded
  class:disabled
  class:active
  {type}
  {style}
  {disabled}
  aria-disabled={disabled}
  use:Ripple={ripple}
  on:click
  {...$$restProps}>
  <span class="s-btn__content">
    <slot />
  </span>
</button>

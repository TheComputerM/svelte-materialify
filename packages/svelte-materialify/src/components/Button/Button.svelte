<script>
  import Ripple from '../../actions/Ripple';
  import Class from '../../internal/Class';

  let klass = '';
  export { klass as class };
  export let fab = false;
  export let icon = false;
  export let block = false;
  /**
   * The size of the button.
   * @type {'x-small' | 'small' | 'default' | 'large' | 'x-large'}
   */
  export let size = 'default';
  export let tile = false;
  export let text = false;
  export let depressed = false;
  export let outlined = false;
  export let rounded = false;
  /**
   * @type {boolean}
   */
  export let disabled = null;
  export let active = false;
  export let activeClass = 'active';
  export let type = 'button';
  /**
   * @type {RippleOptions}
   */
  export let ripple = {};
  /**
   * @type {string}
   */
  export let style = null;
</script>

<style lang="scss" src="./Button.scss" global>
</style>

<button
  class="s-btn size-{size} {klass}"
  class:fab
  class:icon
  class:block
  class:tile
  class:text={text || icon}
  class:depressed={depressed || text || disabled || outlined || icon}
  class:outlined
  class:rounded
  class:disabled
  use:Class={[active && activeClass]}
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

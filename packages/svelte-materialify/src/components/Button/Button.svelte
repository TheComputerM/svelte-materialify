<script>
  import Ripple from '../../actions/Ripple';
  import Class from '../../internal/Class';

  let klass = '';
  export { klass as class };
  export let fab = false;
  export let icon = false;
  export let block = false;
  export let size = 'default';
  export let tile = false;
  export let text = false;
  export let depressed = false;
  export let outlined = false;
  export let rounded = false;
  export let disabled = null;
  export let active = false;
  export let activeClass = 'active';
  export let type = 'button';
  export let ripple = {};
  export let style = null;
  export let button = null;
</script>

<style lang="scss" src="./Button.scss" global>
</style>

<button
  bind:this={button}
  class="s-btn size-{size} {klass}"
  class:s-btn--fab={fab}
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

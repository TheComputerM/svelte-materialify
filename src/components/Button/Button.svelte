<script>
  import Ripple from "../../actions/Ripple";

  let classes = "";
  export let fab = false;
  export let icon = false;
  export let block = false;
  export let size = "default";
  export let tile = false;
  export let text = false;
  export let depressed = false;
  export let outlined = false;
  export let rounded = false;
  export let disabled = false;
  export let type = "button";
  export let style = undefined;
  export let form = undefined;
  export let name = undefined;
  export let value = undefined;
  export let ripple = {};
  export { classes as class };
</script>

<style lang="scss" src="./index.scss">

</style>

<button
  class="s-btn size-{size}
  {classes}"
  class:fab
  class:icon
  class:block
  class:tile
  class:text={text || icon}
  class:depressed={depressed || text || disabled || outlined || icon}
  class:outlined
  class:rounded
  class:disabled
  {type}
  {style}
  {form}
  {name}
  {value}
  {disabled}
  use:Ripple={ripple}
  on:click>
  <span class="text-button">
    <slot />
  </span>
</button>

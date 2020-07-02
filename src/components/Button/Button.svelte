<script>
  import clsx from "../../utils/clsx";
  import Ripple from "../../actions/Ripple";

  let classes = "";
  export let elevation = false;
  export let fab = false;
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
  export {classes as class};
  export let ripple = {};

  $: props = clsx(
    {
      "s-btn--fab": fab,
      "s-btn--block": block,
      "s-btn--tile": tile,
      "s-btn--text": text,
      "s-btn--depressed": depressed,
      "s-btn--outlined": outlined,
      "s-btn--rounded": rounded,
      "s-btn--disabled": disabled
    },
    elevation ? `elevation-${elevation}` : "",
    `s-btn--size-${size}`
  );
</script>

<style type="scss">
  @import "./index";
</style>

<button
  class="s-btn {props} {classes}"
  {type}
  {style}
  {form}
  {name}
  {value}
  {disabled}
  use:Ripple={ripple}
  on:click
  >
  <span class="s-btn__content text-button">
    <slot />
  </span>
</button>

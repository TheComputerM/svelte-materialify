<script>
  import Ripple from "../../actions/Ripple";

  let classes = "";
  export let active = false;
  export let ripple = {};
  export let style = undefined;
  export { classes as class };
</script>

<style lang="scss" src="./ListItem.scss">

</style>

<div
  role="listitem"
  class="s-list-item {classes}"
  class:active
  aria-selected={active}
  {style}
  on:click
  use:Ripple={ripple}>
  <slot name="left" />
  <div class="content">
    <div class="title">
      <slot />
    </div>
    <div class="subtitle">
      <slot name="subtitle" />
    </div>
  </div>
  <slot name="right" />
</div>

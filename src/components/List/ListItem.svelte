<script>
  import { getContext } from "svelte";
  import Ripple from "../../actions/Ripple";

  let partOfList = getContext("partOfList") ?? false;

  let classes = "";
  export let active = false;
  export let activeClass = "active";
  export let disabled = false;
  export let ripple = {active: partOfList};
  export let style = undefined;
  export { classes as class };
</script>

<style lang="scss" src="./ListItem.scss">

</style>

<div
  role="listitem"
  tabindex={partOfList ? 0 : -1}
  class="s-list-item {classes} {active ? activeClass : ''}"
  class:link={partOfList}
  class:disabled
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

<script>
  import { getContext } from 'svelte';
  import Ripple from '../../actions/Ripple';

  let disabled = false;
  let flat = false;
  let dense = false;
  const ListItemOptions = getContext('ListItemOptions');
  const hasParentList = ListItemOptions !== undefined;
  if (hasParentList) {
    disabled = ListItemOptions.disabled;
    flat = ListItemOptions.flat;
    dense = ListItemOptions.dense;
  }

  let classes = '';
  export let active = false;
  export let activeClass = 'active';
  export { disabled, flat, dense };
  export let link = hasParentList;
  export let ripple = { active: hasParentList };
  export let style = null;
  export { classes as class };
</script>

<style lang="scss" src="./ListItem.scss">

</style>

<div
  role="listitem"
  tabindex={hasParentList ? 0 : -1}
  class="s-list-item {classes} {active ? activeClass : ''}"
  class:link
  class:disabled
  aria-selected={active}
  {style}
  on:click
  use:Ripple={ripple}>
  <slot name="left" />
  <div class="s-list-item__content">
    <div class="s-list-item__title">
      <slot />
    </div>
    <div class="s-list-item__subtitle">
      <slot name="subtitle" />
    </div>
  </div>
  <slot name="right" />
</div>

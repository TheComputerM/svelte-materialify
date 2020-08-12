<script>
  import { getContext, onDestroy } from 'svelte';
  import Ripple from '../../actions/Ripple';

  const hasParentList = getContext('hasParentList');
  const hasParentListGroup = getContext('hasParentListGroup');
  const ListItemOptions = getContext('ListItemOptions');

  let classes = '';
  export let activeClass = '';
  export let active = false;
  export let dense = null;
  export let disabled = null;
  export let flat = null;
  export let link = hasParentListGroup;
  export let selectable = !hasParentListGroup;
  export let ripple = { active: hasParentListGroup };
  export { classes as class };

  if (hasParentList || hasParentListGroup) {
    const unsubscribe = ListItemOptions.subscribe((value) => {
      dense = dense ?? value.dense;
      disabled = disabled ?? value.disabled;
      flat = flat ?? value.flat;
    });
    onDestroy(unsubscribe);
  }

  const role = hasParentList
    ? 'listitem'
    : hasParentListGroup
      ? 'option'
      : null;
</script>

<style lang="scss" src="./ListItem.scss">

</style>

<div
  {role}
  aria-selected={role === 'option' ? active : null}
  class="s-list-item {[classes, active ? activeClass : ''].join(' ')}"
  class:active
  class:dense
  class:disabled
  class:flat
  class:link
  class:selectable
  use:Ripple={ripple}
  on:click>
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

<script>
  import { getContext, onDestroy } from 'svelte';
  import Ripple from '../../actions/Ripple';

  let klass = '';
  export { klass as class };
  export let activeClass = '';
  export let active = false;
  export let dense = null;
  export let disabled = null;
  export let selectable = false;
  export let ripple = false;
  const role = getContext('S_ListItemRole');

  const ListItemRipple = getContext('S_ListItemRipple');
  const ListItemDense = getContext('S_ListDense');

  ripple = ListItemRipple == null ? ripple : ListItemRipple;
  dense = ListItemDense == null ? dense : ListItemDense;

  const ListOptions = getContext('S_ListOptions');

  let ListOptionsUnsub = () => {};
  if (ListOptions) {
    ListOptionsUnsub = ListOptions.subscribe(
      ({ disabled: parentDisabled, dense: parentDense }) => {
        disabled = parentDisabled == null ? disabled : parentDisabled;
        dense = parentDense == null ? dense : parentDense;
      },
    );
  }

  onDestroy(ListOptionsUnsub);
</script>

<style lang="scss" src="./ListItem.scss">

</style>

<div
  class="s-list-item {klass}
  {active ? activeClass : ''}"
  {role}
  aria-selected={role === 'option' ? active : null}
  class:active
  class:dense
  class:disabled
  class:selectable
  class:link={ripple}
  use:Ripple={ripple}
  on:click
  {...$$restProps}>
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

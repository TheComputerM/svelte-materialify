<script>
  import { setContext, getContext } from 'svelte';
  import { writable } from 'svelte/store';
  import contextKey from './context';

  export let container = false;
  export let item = false;
  export let spacing = null;
  export let direction = null;
  export let justify = null;
  export let alignItems = null;
  export let xs = null;
  export let sm = null;
  export let md = null;
  export let lg = null;
  export let xl = null;
  export let style = null;

  let parentSpacingStore;
  let childSpacingStore;

  if (item) {
    parentSpacingStore = getContext(contextKey);
  }
  if (container) {
    childSpacingStore = writable(spacing);
    const { set, update, ...readonly } = childSpacingStore;
    setContext(contextKey, readonly);
  }
  $: if (childSpacingStore) {
    childSpacingStore.set(spacing);
  }

  function breakpointClass(name, value) {
    if (Number.isInteger(value)) {
      return `${name}-${value}`;
    }
    if (value) {
      return `${name}-auto`;
    }
    return null;
  }

  let classes;
  $: classes = [
    container && spacing > 0 && `container-spacing-${spacing}`,
    item && $parentSpacingStore > 0 && `item-spacing-${$parentSpacingStore}`,
    container && direction && `flex-${direction}`,
    container && justify && `justify-${justify}`,
    container && alignItems && `align-${alignItems}`,
    breakpointClass('xs', xs),
    breakpointClass('sm', sm),
    breakpointClass('md', md),
    breakpointClass('lg', lg),
    breakpointClass('xl', xl),
  ].filter((x) => x !== false);
</script>

<style lang="scss" src="./FluidGrid.scss">
</style>

<div class="s-fluid-grid {classes.join(' ')}" class:container class:item {style}>
  <slot />
</div>

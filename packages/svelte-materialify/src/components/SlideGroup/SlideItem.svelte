<script>
  import { getContext } from 'svelte';
  import { SLIDE_GROUP } from './SlideGroup.svelte';
  import { ITEM_GROUP } from '../ItemGroup/ItemGroup.svelte';
  import Class from '../../internal/Class';

  const click = getContext(SLIDE_GROUP);
  const { select, values, inheritedActiveClass, index } = getContext(ITEM_GROUP);

  let active;
  let item;

  let klass = '';
  export { klass as class };
  export let activeClass = inheritedActiveClass;
  export let value = index();
  export let disabled = null;

  $: active = $values.includes(value);

  function selectItem({ target }) {
    if (!disabled) {
      click(target);
      select(value);
    }
  }
</script>

<style global>
  .s-slide-item {
    display: inline-flex;
    flex: 0 1 auto;
  }
</style>

<div
  bind:this={item}
  class="s-slide-item {klass}"
  use:Class={[active && activeClass]}
  on:click={selectItem}>
  <slot {active} />
</div>

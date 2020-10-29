<script>
  import { getContext } from 'svelte';
  import { SLIDE_GROUP } from './SlideGroup.svelte';
  import { ITEM_GROUP } from '../ItemGroup/ItemGroup.svelte';
  import Class from '../../internal/Class';

  const moveGroup = getContext(SLIDE_GROUP);
  const ITEM = getContext(ITEM_GROUP);

  let active;
  let itemElement;

  let klass = '';
  export { klass as class };
  export let activeClass = ITEM.activeClass;
  export let value = ITEM.index();
  export let disabled = null;

  ITEM.register((values) => {
    active = values.includes(value);
  });

  function selectItem() {
    if (!disabled) {
      moveGroup(itemElement);
      ITEM.select(value);
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
  bind:this={itemElement}
  class="s-slide-item {klass}"
  use:Class={[active && activeClass]}
  on:click={selectItem}>
  <slot {active} />
</div>

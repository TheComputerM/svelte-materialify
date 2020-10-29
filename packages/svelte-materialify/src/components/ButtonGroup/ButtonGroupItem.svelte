<script>
  import { getContext } from 'svelte';
  import Button from '../Button';
  import { ITEM_GROUP } from '../ItemGroup/ItemGroup.svelte';

  const ITEM = getContext(ITEM_GROUP);

  let active;

  let klass = '';
  export { klass as class };
  export let value = ITEM.index();
  export let activeClass = ITEM.activeClass;
  export let disabled = null;

  ITEM.register((values) => {
    active = values.includes(value);
  });

  function click() {
    if (!disabled) ITEM.select(value);
  }
</script>

<style lang="scss" src="./ButtonGroupItem.scss" global>
</style>

<Button
  class="s-btn-group-item {klass}"
  {activeClass}
  {active}
  {disabled}
  on:click={click}
  on:click>
  <slot />
</Button>

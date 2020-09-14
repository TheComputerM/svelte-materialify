<script>
  import { getContext } from 'svelte';
  import Button from '../Button';
  import { ITEM_GROUP } from '../ItemGroup/ItemGroup.svelte';

  const { select, register, index, _activeClass } = getContext(ITEM_GROUP);

  let active;

  let klass = '';
  export { klass as class };
  export let value = index();
  export let activeClass = _activeClass;
  export let disabled = null;

  register((values) => {
    active = values.includes(value);
  });

  function click() {
    if (!disabled) select(value);
  }
</script>

<style lang="scss" src="./ButtonGroupItem.scss" global>
</style>

<Button
  class="s-btn-group-item {active ? activeClass : ''} {klass}"
  active={active && activeClass === 'active'}
  {disabled}
  on:click={click}
  on:click>
  <slot />
</Button>

<script>
  import { getContext } from 'svelte';
  import Button from '../Button';
  import { ITEM_GROUP } from '../ItemGroup/ItemGroup.svelte';
  import { BUTTON_GROUP } from './ButtonGroup.svelte';

  const { select, values, inheritedActiveClass, index } = getContext(ITEM_GROUP);
  const props = getContext(BUTTON_GROUP);

  let active;

  let klass = '';
  export { klass as class };
  export let value = index();
  export let activeClass = inheritedActiveClass;
  export let disabled = null;

  $: active = $values.includes(value);

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
  on:click
  {...props}>
  <slot />
</Button>

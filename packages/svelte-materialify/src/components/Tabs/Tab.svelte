<script>
  import { getContext, onMount } from 'svelte';
  import { SLIDE_GROUP } from '../SlideGroup/SlideGroup.svelte';
  import { ITEM_GROUP } from '../ItemGroup/ItemGroup.svelte';
  import { TABS } from './Tabs.svelte';
  import Class from '../../internal/Class';
  import Ripple from '../../actions/Ripple';

  let tab;
  const click = getContext(SLIDE_GROUP);
  const ITEM = getContext(ITEM_GROUP);
  const { ripple, registerTab } = getContext(TABS);

  let klass = '';
  export { klass as class };
  export let value = ITEM.index();
  export let activeClass = ITEM.activeClass;
  export let disabled = false;

  let active;
  ITEM.register((values) => {
    active = values.includes(value);
  });

  function selectTab({ target }) {
    if (!disabled) {
      click(target);
      ITEM.select(value);
    }
  }

  onMount(() => {
    registerTab(tab);
  });
</script>

<style lang="scss" src="./Tab.scss" global>
</style>

<button
  bind:this={tab}
  class="s-tab s-slide-item {klass}"
  role="tab"
  aria-selected={active}
  tabindex={disabled ? -1 : 0}
  class:disabled
  class:active
  use:Class={[active && activeClass]}
  on:click={selectTab}
  on:click
  use:Ripple={ripple}>
  <slot />
</button>

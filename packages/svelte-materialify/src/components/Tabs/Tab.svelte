<script>
  import { getContext } from 'svelte';
  import { SLIDE_GROUP } from '../SlideGroup/SlideGroup.svelte';
  import { ITEM_GROUP } from '../ItemGroup/ItemGroup.svelte';
  import { TABS } from './Tabs.svelte';
  import Class from '../../internal/Class';
  import Ripple from '../../actions/Ripple';

  const click = getContext(SLIDE_GROUP);
  const { select, register, index } = getContext(ITEM_GROUP);
  const { ripple } = getContext(TABS);

  let klass = '';
  export { klass as class };
  export let value = index();
  export let activeClass = '';
  export let disabled = null;

  let active;
  register((values) => {
    active = values.includes(value);
  });

  function selectTab({ target }) {
    if (!disabled) {
      click(target);
      select(value);
    }
  }
</script>

<style lang="scss" src="./Tab.scss" global>
</style>

<button
  class="s-tab s-slide-item {klass}"
  role="tab"
  aria-selected={active}
  tabindex={disabled ? -1 : 0}
  class:disabled
  class:active
  use:Class={[active && activeClass]}
  on:click={selectTab}
  use:Ripple={ripple}>
  <slot />
</button>

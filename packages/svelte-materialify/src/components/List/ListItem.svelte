<script>
  import { getContext } from 'svelte';
  import Ripple from '../../actions/Ripple';
  import Class from '../../internal/Class';

  const role = getContext('S_ListItemRole');

  let klass = '';
  export { klass as class };
  export let activeClass = 'active';
  export let value = null;
  export let active = false;
  export let dense = false;
  export let disabled = null;
  export let multiline = false;
  export let link = role;
  export let selectable = !link;
  export let ripple = getContext('S_ListItemRipple') || role || false;
  export let style = null;

  const Group = getContext('S_ListItemGroup');
  let click = () => {};

  if (Group) {
    const { select, register, index } = getContext(Group);
    value = value || index();
    register((values) => {
      active = values.includes(value);
    });
    click = () => {
      if (!disabled) select(value);
    };
  }
</script>

<style lang="scss" src="./ListItem.scss" global>
</style>

<div
  class="s-list-item {klass}"
  use:Class={[active && activeClass]}
  {role}
  tabindex={link ? 0 : -1}
  aria-selected={role === 'option' ? active : null}
  class:dense
  class:disabled
  class:multiline
  class:link
  class:selectable
  use:Ripple={ripple}
  on:click={click}
  on:click
  {style}>
  <slot name="prepend" />
  <div class="s-list-item__content">
    <div class="s-list-item__title">
      <slot />
    </div>
    <div class="s-list-item__subtitle">
      <slot name="subtitle" />
    </div>
  </div>
  <slot name="append" />
</div>

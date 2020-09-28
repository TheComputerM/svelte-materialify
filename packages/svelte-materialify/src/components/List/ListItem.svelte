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
  export let selectable = !role;
  export let multiline = false;
  export let ripple = getContext('S_ListItemRipple') || !selectable || false;

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
  aria-selected={role === 'option' ? active : null}
  class:dense
  class:disabled
  class:selectable
  class:multiline
  class:link={!selectable}
  use:Ripple={ripple}
  on:click={click}
  on:click>
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

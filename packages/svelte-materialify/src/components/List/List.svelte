<script>
  import { setContext, getContext } from 'svelte';

  let klass = '';
  export { klass as class };
  export let dense = null;
  export let disabled = null;
  export let flat = false;
  export let rounded = false;
  export let nav = false;
  export let outlined = false;
  export let style = null;

  let role = null;
  if (!getContext('S_ListItemRole')) {
    setContext('S_ListItemRole', 'listitem');
    role = 'list';
  }
</script>

<style lang="scss" src="./List.scss" global>
</style>

<div
  {role}
  class="s-list {klass}"
  aria-disabled={disabled}
  class:dense
  class:disabled
  class:flat
  class:nav
  class:outlined
  class:rounded
  {style}>
  <slot />
</div>

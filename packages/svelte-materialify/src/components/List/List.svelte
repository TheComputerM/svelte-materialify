<script>
  import { setContext, getContext } from 'svelte';
  import { writable } from 'svelte/store';

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

  const ListOptions = writable({ disabled, dense });
  $: ListOptions.set({ disabled, dense });

  setContext('S_ListOptions', ListOptions);
  setContext('S_ListDense', dense);
</script>

<style lang="scss" src="./List.scss">

</style>

<div
  {role}
  class="s-list {klass}"
  class:dense
  class:disabled
  class:flat
  class:nav
  class:outlined
  class:rounded
  {style}>
  <slot />
</div>

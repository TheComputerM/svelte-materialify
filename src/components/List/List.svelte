<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  let classes = '';
  export let dense = null;
  export let disabled = null;
  export let flat = null;
  export let nav = false;
  export let outlined = false;
  export let rounded = false;
  export let style = null;
  export { classes as class };

  const ListItemOptions = writable({ dense, disabled, flat });
  setContext('ListItemOptions', ListItemOptions);
  setContext('hasParentList', true);
</script>

<style lang="scss" src="./List.scss">

</style>

<div
  role="list"
  class="s-list {classes}"
  class:dense
  class:disabled
  class:nav
  class:outlined
  class:rounded
  {style}>
  <slot />
</div>

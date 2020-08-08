<script>
  import { slide as slideTransition } from 'svelte/transition';
  import { setContext, getContext } from 'svelte';

  let classes = 'primary-text';
  export let active = true;
  export let slide = {};
  export let offset = false;
  export let disabled = false;
  export let flat = false;
  export let dense = false;
  export let style = '';
  export { classes as class };

  if (getContext('ListItemOptions') === undefined) {
    setContext('ListItemOptions', { disabled, flat, dense });
  }
</script>

<style lang="scss" src="./ListGroup.scss">

</style>

{#if active}
  <div
    role="listbox"
    class="s-list-group {classes}"
    class:offset
    class:disabled
    transition:slideTransition={slide}
    style="--offset:{offset};{style}">
    <slot />
  </div>
{/if}

<script>
  import { slide } from 'svelte/transition';
  import { getContext, setContext } from 'svelte';

  const hasParentList = getContext('hasParentList');
  const ListItemOptions = getContext('ListItemOptions');

  let classes = '';
  export let activeClass = 'primary-text';
  export let active = false;
  export let transition = slide;
  export let transitionOpts = {};
  export let offset = null;
  export let disabled = null;
  export let style = '';
  export { classes as class };

  if (hasParentList) {
    $ListItemOptions.disabled = disabled == null ? $ListItemOptions.disabled : disabled;
  }

  setContext('hasParentListGroup', true);
</script>

<style lang="scss" src="./ListGroup.scss">

</style>

{#if active}
  <div
    transition:transition={transitionOpts}
    role={hasParentList ? 'group' : 'listbox'}
    aria-disabled={disabled}
    class="s-list-group {[classes, active ? activeClass : ''].join(' ')}"
    class:offset
    style="--offset: {offset};{style}">
    <slot />
  </div>
{/if}

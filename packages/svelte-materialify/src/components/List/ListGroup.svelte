<script>
  import { slide } from 'svelte/transition';
  import { getContext, setContext, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';

  let klass = 'primary-text';
  export { klass as class };
  export let activeClass = '';
  export let active = true;
  export let transition = slide;
  export let transitionOpts = {};
  export let offset = null;
  export let disabled = null;
  export let ripple = true;
  export let style = '';

  setContext('S_ListItemRipple', ripple);

  const ListOptions = writable({ disabled });
  $: ListOptions.set({ disabled });

  let role = null;
  const ListItemRole = getContext('S_ListItemRole');
  if (ListItemRole == null) {
    role = 'listbox';
    setContext('S_ListItemRole', 'option');
  } else if (ListItemRole === 'listitem') role = 'group';

  const InheritListOptions = getContext('S_ListOptions');
  let ListOptionsUnsub = () => {};
  if (InheritListOptions == null) setContext('S_ListOptions', { ListOptions });
  else {
    ListOptionsUnsub = InheritListOptions.subscribe(({ disabled: parentDisabled }) => {
      disabled = parentDisabled == null ? disabled : parentDisabled;
    });
  }

  onDestroy(ListOptionsUnsub);
</script>

<style lang="scss" src="./ListGroup.scss">
</style>

{#if active}
  <div
    transition:transition={transitionOpts}
    {role}
    aria-disabled={disabled}
    class="s-list-group {klass} {active ? activeClass : ''}"
    class:offset
    style="--offset: {offset};{style}">
    <slot />
  </div>
{/if}

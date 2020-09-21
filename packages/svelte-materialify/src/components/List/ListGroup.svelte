<script>
  import { slide } from 'svelte/transition';
  import { onMount, setContext } from 'svelte';
  import Style from '../../internal/Style';

  let klass = 'primary-text';
  export { klass as class };
  export let active = true;
  export let eager = false;
  export let transition = slide;
  export let transitionOpts = {};
  export let offset = null;
  export let disabled = null;
  export let ripple = {};
  export let style = null;

  setContext('S_ListItemRipple', ripple);
  const tempActive = active;
  active = eager;

  function toggle() {
    active = !active;
  }

  if (eager) {
    onMount(() => {
      active = tempActive;
    });
  }
</script>

<style lang="scss" src="./ListGroup.scss" global>
</style>

<slot name="activator" {toggle} {active} />
{#if active}
  <div
    transition:transition={transitionOpts}
    role="group"
    aria-disabled={disabled}
    class="s-list-group {klass}"
    class:offset
    {style}
    use:Style={{ 'list-group-offset': offset }}>
    <slot />
  </div>
{/if}

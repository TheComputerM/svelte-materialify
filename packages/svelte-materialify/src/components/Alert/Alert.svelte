<script>
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';

  const dispatch = createEventDispatcher();

  import Button from '../Button/Button.svelte';

  let classes = '';
  export let visible = true;
  export let transition = fade;
  export let transitionOpts = { duration: 0 };
  export let dense = false;
  export let outlined = false;
  export let text = false;
  export let tile = false;
  export let dismissible = false;
  export let border = false;
  export let coloredBorder = false;
  export { classes as class };

  export function dismiss() {
    visible = false;
    dispatch('dismiss', {
      visible,
    });
  }
</script>

<style lang="scss" src="./index.scss">

</style>

{#if visible}
  <div
    role="alert"
    class="s-alert {classes}"
    transition:transition={transitionOpts}
    class:dense
    class:outlined
    class:text
    class:tile
    class:coloredBorder>
    <div class="s-alert__wrapper">
      <slot name="icon" />
      <div class="s-alert__content">
        <slot />
      </div>
      {#if dismissible}
        <Button icon on:click={dismiss}>
          <slot name="close">✖</slot>
        </Button>
      {/if}
      {#if border}
        <div class="s-alert__border border-{border}" />
      {/if}
    </div>
  </div>
{/if}

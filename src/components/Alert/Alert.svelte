<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  import Button from '../Button/Button.svelte';

  let classes = '';
  export let visible = true;
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
    class:dense
    class:outlined
    class:text
    class:tile>
    <div class="s-alert__wrapper">
      <slot name="icon" />
      <div class="s-alert__content">
        <slot />
      </div>
      {#if dismissible}
        <Button icon on:click={dismiss}>
          <slot name="closeIcon">✖</slot>
        </Button>
      {/if}
      {#if border}
        <div
          class="s-alert__border border-{border}"
          class:colored={coloredBorder} />
      {/if}
    </div>
  </div>
{/if}

<script>
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';

  const dispatch = createEventDispatcher();

  import Button from '../Button';

  let klass = '';
  export { klass as class };
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

  function dismiss() {
    visible = false;
    /**
     * Triggered when alert is dismissed.
     * @returns Nothing
     */
    dispatch('dismiss');
  }
</script>

<style lang="scss" src="./Alert.scss" global>
</style>

{#if visible}
  <div
    role="alert"
    class="s-alert {klass}"
    transition:transition={transitionOpts}
    on:introstart
    on:outrostart
    on:introend
    on:outroend
    class:dense
    class:outlined
    class:text
    class:tile
    class:colored-border={coloredBorder}>
    <div class="s-alert__wrapper">
      <!-- Slot for icon at beginning of alert. -->
      <slot name="icon" />
      <div class="s-alert__content">
        <slot />
      </div>
      {#if dismissible}
        <Button icon on:click={dismiss}>
          <!-- Slot for close button icon. -->
          <slot name="close">✖</slot>
        </Button>
      {/if}
      {#if border}
        <div class="s-alert__border border-{border}" />
      {/if}
    </div>
  </div>
{/if}

<script>
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';

  const dispatch = createEventDispatcher();

  import Button from '../Button/Button.svelte';

  // Classes to add to alert.
  let klass = '';
  export { klass as class };

  // Is the alert active/dismissed.
  export let visible = true;

  // Alert transition function.
  export let transition = fade;

  // Alert transition function options.
  export let transitionOpts = { duration: 0 };

  // Makes alert dense.
  export let dense = false;

  // Adds a thin border to alert.
  export let outlined = false;

  // Applies the defined color to text and a low opacity background of the same.
  export let text = false;

  // Removes the component's border-radius.
  export let tile = false;

  // Adds a close icon that can hide the alert.
  export let dismissible = false;

  /**
   * The location of the border
   * @type {left|right|top|bottom|false}
  */
  export let border = false;

  // Applies the defined color to the alert's border.
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

<style lang="scss" src="./Alert.scss">

</style>

{#if visible}
  <div
    role="alert"
    class="s-alert {klass}"
    transition:transition={transitionOpts}
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

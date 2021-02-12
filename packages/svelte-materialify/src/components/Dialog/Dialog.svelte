<script>
  import Overlay from '../Overlay';
  import Style from '../../internal/Style';
  import { scale } from 'svelte/transition';

  let klass = '';
  export { klass as class };
  export let active = false;
  export let persistent = false;
  export let disabled = false;
  export let width = 500;
  export let fullscreen = false;
  export let transition = scale;
  export let overlay = {};
  let dialog = null;
  let focusedBefore = null;
  function close() {
    if (!persistent) active = false;
  }
  $: visible = active && !disabled;
  $: if (visible && dialog) {
    focusedBefore = document.activeElement;
    dialog.focus();
  } else if (focusedBefore) {
    focusedBefore.focus();
  }
</script>

<style lang="scss" src="./Dialog.scss" global>
</style>

<svelte:window on:keydown={(e) => e.key === 'Escape' && close()} />

{#if visible}
  <div role="dialog" class="s-dialog" use:Style={{ 'dialog-width': width }}>
    <div
      tabindex="0"
      role="document"
      bind:this={dialog}
      class="s-dialog__content {klass}"
      class:fullscreen
      transition:transition={{ duration: 300, start: 0.1 }}
      on:introstart
      on:outrostart
      on:introend
      on:outroend>
      <slot />
    </div>
  </div>
{/if}
<Overlay {...overlay} active={visible} on:click={close} />

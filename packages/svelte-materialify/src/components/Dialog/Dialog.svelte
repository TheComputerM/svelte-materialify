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

  function close() {
    if (!persistent) active = false;
  }
  $: visible = active && !disabled;
</script>

<style lang="scss" src="./Dialog.scss" global>
</style>

{#if visible}
  <div role="document" class="s-dialog" use:Style={{ 'dialog-width': width }}>
    <div
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

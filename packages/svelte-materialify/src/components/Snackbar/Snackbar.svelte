<script>
  import { scale } from 'svelte/transition';
  import Style from '../../internal/Style';

  let klass = '';
  export { klass as class };
  export let absolute = false;
  export let active = true;
  export let top = false;
  export let left = false;
  export let bottom = false;
  export let right = false;
  export let center = false;
  export let offsetX = '8px';
  export let offsetY = '8px';
  export let outlined = false;
  export let text = false;
  export let rounded = false;
  export let tile = false;
  export let timeout = false;
  export let transition = scale;
  export let style = '';

  $: {
    if (active && timeout) {
      setTimeout(() => {
        active = false;
      }, timeout);
    }
  }
</script>

<style lang="scss" src="./Snackbar.scss" global>
</style>

<div
  class="s-snackbar__wrapper"
  class:absolute
  class:top
  class:left
  class:bottom
  class:right
  class:center
  use:Style={{ 'snackbar-x': offsetX, 'snackbar-y': offsetY }}>
  {#if active}
    <div
      transition:transition
      on:introstart
      on:outrostart
      on:introend
      on:outroend
      class="s-snackbar {klass}"
      class:outlined
      class:text
      class:rounded
      class:tile
      {style}>
      <slot />
    </div>
  {/if}
</div>

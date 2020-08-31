<script>
  import { fade } from 'svelte/transition';

  let klass = '';
  export let active = true;
  export let opacity = 0.46;
  export let color = 'rgb(33, 33, 33)';
  export let zIndex = 5;
  export let absolute = false;
  export let fadeOptions = {};
  export let style = '';
  export { klass as class };
</script>

<style lang="scss" src="./Overlay.scss">

</style>

{#if active}
  <div
    class="s-overlay {klass}"
    style="z-index:{zIndex};{style}"
    class:absolute
    transition:fade={fadeOptions}
    on:click>
    <div
      class="s-overlay__scrim"
      style="opacity:{opacity};background-color:{color};border-color:{color}" />
    <div class="s-overlay__content">
      <slot />
    </div>
  </div>
{/if}

<script>
  import ProgressLinear from '../ProgressLinear';

  let klass = '';
  export { klass as class };
  export let flat = false;
  export let tile = false;
  export let outlined = false;
  export let raised = false;
  export let shaped = false;
  export let hover = false;
  export let link = false;
  export let loading = false;
  export let disabled = false;
  export let style = null;
</script>

<style lang="scss" src="./Card.scss" global>
</style>

<div
  class="s-card {klass}"
  class:flat
  class:tile
  class:outlined
  class:raised
  class:shaped
  class:hover
  class:link
  class:disabled
  {style}>
  {#if loading}
    <slot name="progress">
      <ProgressLinear indeterminate />
    </slot>
  {/if}
  <slot />
</div>

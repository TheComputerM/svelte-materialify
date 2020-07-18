<script>
  let classes = "";
  export let flat = false;
  export let tile = false;
  export let outlined = false;
  export let raised = false;
  export let shaped = false;
  export let hover = false;
  export let link = false;
  export let disabled = false;
  export let style = undefined;
  export { classes as class };
</script>

<style lang="scss" src="./Card.scss">

</style>

<div
  class="s-card {classes}"
  class:flat
  class:tile
  class:outlined
  class:raised
  class:shaped
  class:hover
  class:link
  class:disabled
  {style}>
  <slot />
</div>

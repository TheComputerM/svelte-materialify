<script>
  let classes = '';
  export let dense = false;
  export let fixedHeader = false;
  export let style = null;
  export { classes as class };
</script>

<style lang="scss" src="./Table.scss">

</style>

<div class="s-table-wrapper {classes}" {style}>
  <table class="s-table " class:dense class:fixed-header={fixedHeader}>
    <slot />
  </table>
</div>

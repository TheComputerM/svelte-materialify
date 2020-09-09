<script>
  let klass = '';
  export let dense = false;
  export let fixedHeader = false;
  export let style = null;
  export { klass as class };
</script>

<style lang="scss" src="./Table.scss">
</style>

<div class="s-table {klass}" {style}>
  <table class:dense class:fixed-header={fixedHeader}>
    <slot />
  </table>
</div>

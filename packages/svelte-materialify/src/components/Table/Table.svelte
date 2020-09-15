<script>
  let klass = '';
  export let dense = false;
  export let fixedHeader = false;
  export let style = null;
  export { klass as class };
</script>

<style lang="scss" src="./Table.scss" global>
</style>

<div class="s-table__wrapper {klass}" {style}>
  <table class="s-table" class:dense class:fixed-header={fixedHeader}>
    <slot />
  </table>
</div>

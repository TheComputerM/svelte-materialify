<script>
  let klass = '';
  export { klass as class };
</script>

<style lang="scss" src="./DataTable.scss" global>
</style>

<div class="s-tbl {klass}">
  <table>
    <slot />
  </table>
</div>

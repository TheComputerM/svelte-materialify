<script>
  let klass = '';
  export { klass as class };
</script>

<style lang="scss" src="./DataTableRow.scss" global>
</style>

<tr class="s-tbl-row {klass}">
  <slot />
</tr>

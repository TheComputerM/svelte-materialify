<script>
  let klass = '';
  export { klass as class };

  export let numeric = false;
</script>

<style lang="scss" src="./DataTableCell.scss" global>
</style>

<td class="s-tbl-cell {klass}" class:numeric>
  <slot />
</td>

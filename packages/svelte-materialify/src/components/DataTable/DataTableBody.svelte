<script>
  let klass = '';
  export { klass as class };
</script>

<style lang="scss" src="./DataTableBody.scss" global>
</style>

<tbody class="s-tbl-body {klass}">
  <slot />
</tbody>

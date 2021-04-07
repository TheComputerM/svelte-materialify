<script>
  let klass = '';
  export { klass as class };
</script>

<style lang="scss" src="./DataTableHead.scss" global>
</style>

<thead class="s-tbl-head {klass}">
  <slot />
</thead>

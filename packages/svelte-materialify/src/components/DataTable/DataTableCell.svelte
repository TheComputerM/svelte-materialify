<script>
  import { getContext } from 'svelte';

  let klass = '';
  export { klass as class };

  export let numeric = false;

  const isTableHead = getContext('is-table-head') === true;
</script>

<style lang="scss" src="./DataTableCell.scss" global>
</style>

{#if isTableHead}
  <th class="s-tbl-cell {klass}" class:numeric>
    <slot />
  </th>
{:else}
  <td class="s-tbl-cell {klass}" class:numeric>
    <slot />
  </td>
{/if}

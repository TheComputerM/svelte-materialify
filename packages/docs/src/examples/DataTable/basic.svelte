<script>
  import {
    DataTable,
    DataTableHead,
    DataTableRow,
    DataTableCell,
    DataTableBody,
  } from 'svelte-materialify/src';
</script>

<DataTable>
  <DataTableHead>
    <DataTableRow>
      <DataTableCell>Dessert</DataTableCell>
      <DataTableCell numeric>Carbs (g)</DataTableCell>
      <DataTableCell numeric>Protein (g)</DataTableCell>
      <DataTableCell>Comments</DataTableCell>
    </DataTableRow>
  </DataTableHead>
  <DataTableBody>
    <DataTableRow>
      <DataTableCell>Frozen yogurt</DataTableCell>
      <DataTableCell numeric>24</DataTableCell>
      <DataTableCell numeric>4.0</DataTableCell>
      <DataTableCell>Super tasty</DataTableCell>
    </DataTableRow>
    <DataTableRow>
      <DataTableCell>Ice cream sandwich</DataTableCell>
      <DataTableCell numeric>37</DataTableCell>
      <DataTableCell numeric>4.33333333333</DataTableCell>
      <DataTableCell>I like ice cream more</DataTableCell>
    </DataTableRow>
    <DataTableRow>
      <DataTableCell>Eclair</DataTableCell>
      <DataTableCell numeric>24</DataTableCell>
      <DataTableCell numeric>6.0</DataTableCell>
      <DataTableCell>New filing flavor</DataTableCell>
    </DataTableRow>
  </DataTableBody>
</DataTable>

<script>
  import { Table } from 'svelte-materialify/src';

  const data = [
    {
      name: 'Frozen Yogurt',
      calories: 159,
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
    },
    {
      name: 'Eclair',
      calories: 262,
    },
    {
      name: 'Cupcake',
      calories: 305,
    },
    {
      name: 'Gingerbread',
      calories: 356,
    },
    {
      name: 'Jelly bean',
      calories: 375,
    },
    {
      name: 'Lollipop',
      calories: 392,
    },
    {
      name: 'Honeycomb',
      calories: 408,
    },
    {
      name: 'Donut',
      calories: 452,
    },
    {
      name: 'KitKat',
      calories: 518,
    },
  ];
</script>

<Table fixedHeader style="height:400px">
  <thead>
    <tr>
      <th>Hello</th>
      <th>There</th>
    </tr>
  </thead>
  <tbody>
    {#each data as row}
      <tr>
        <td>{row.name}</td>
        <td>{row.calories}</td>
      </tr>
    {/each}
  </tbody>
</Table>

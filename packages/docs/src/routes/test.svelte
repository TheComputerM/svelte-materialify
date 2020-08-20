<script>
  import Layout from '../helpers/Markdown/MDXLayout.svelte';
  import { Table } from 'svelte-materialify/src';
</script>

<Layout title='lo'>
  <Table dense style="border: thin solid var(--theme-dividers)">
    <thead>
      <tr>
        <th>Header A</th>
        <th>Header B</th>
        <th>Header C</th>
        <th>Header D</th>
      </tr>
    </thead>
    <tbody>
      {#each [1, 2, 3, 4, 5] as n}
        <tr>
          <td>Cell A{n}</td>
          <td>Cell B{n}</td>
          <td>Cell C{n}</td>
          <td>Cell D{n}</td>
        </tr>
      {/each}
    </tbody>
  </Table>
</Layout>

<script>
  import Switch from 'svelte-materialify/src/components/Switch';

  const values = [false, true];
</script>

<Switch bind:checked={values[0]} inset>Inset {values[0]}</Switch>
<Switch bind:checked={values[1]} inset>Inset {values[1]}</Switch>

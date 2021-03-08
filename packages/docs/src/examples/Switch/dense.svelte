<script>
  import { Switch } from 'svelte-materialify/src';

  const values = [false, true];
</script>

<Switch bind:checked={values[0]} dense>Dense {values[0]}</Switch>
<Switch bind:checked={values[1]} dense>Dense {values[1]}</Switch>

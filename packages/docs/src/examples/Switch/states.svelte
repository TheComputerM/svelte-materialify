<script>
  import { Switch } from 'svelte-materialify/src';
</script>

<Switch checked>On</Switch>
<Switch checked={false}>Off</Switch>
<Switch disabled>Disabled</Switch>
<Switch disabled checked>Disabled On</Switch>

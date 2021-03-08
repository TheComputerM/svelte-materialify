<script>
  import { Switch } from 'svelte-materialify/src';

  let group = ['2'];
</script>

<br />
<div class="d-flex justify-space-around">
  <Switch bind:group value="1">Value 1</Switch>
  <Switch bind:group value="2">Value 2</Switch>
  <Switch bind:group value="3">Value 3</Switch>
  <Switch bind:group value="4">Value 4</Switch>
</div>
<br />
<div class="text-center">Value: {group}</div>

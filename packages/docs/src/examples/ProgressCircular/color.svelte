<script>
  import { ProgressCircular } from 'svelte-materialify/src';
</script>

<div class="d-flex justify-center">
  <ProgressCircular value={10} color="primary" />
  <div class="pl-2" />
  <ProgressCircular value={25} color="indigo" />
  <div class="pl-2" />
  <ProgressCircular value={50} color="success" />
  <div class="pl-2" />
  <ProgressCircular value={75} color="red" />
  <div class="pl-2" />
  <ProgressCircular value={100} color="pink" />
</div>

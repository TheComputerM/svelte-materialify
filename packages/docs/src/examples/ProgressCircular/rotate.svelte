<script>
  import { ProgressCircular } from 'svelte-materialify/src';
</script>

<div class="d-flex justify-center">
  <ProgressCircular rotate={0} value={10} color="primary" />
  <div class="pl-2" />
  <ProgressCircular rotate={25} value={10} color="indigo" />
  <div class="pl-2" />
  <ProgressCircular rotate={50} value={10} color="success" />
  <div class="pl-2" />
  <ProgressCircular rotate={75} value={10} color="red" />
</div>

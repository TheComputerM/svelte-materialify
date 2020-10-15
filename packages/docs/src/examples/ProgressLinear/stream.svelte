<script>
  import { ProgressLinear } from 'svelte-materialify/src';
</script>

<ProgressLinear buffer={0} stream />
<br />
<ProgressLinear value={20} buffer={20} stream />
<br />
<ProgressLinear value={25} buffer={50} stream />

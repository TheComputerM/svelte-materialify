<script>
  import { Radio } from 'svelte-materialify/src';

  let group;
  let disabledGroup = null;
</script>

<Radio bind:group value={1}>On</Radio>
<Radio bind:group value={2}>Off</Radio>
<Radio bind:group value={3} disabled>Disabled</Radio>
<Radio bind:group={disabledGroup} disabled>Disabled On</Radio>

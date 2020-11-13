<script>
  import { TextField, Overlay, ProgressCircular, Icon } from 'svelte-materialify/src';

  let active = false;
</script>

<TextField
  on:keypress={(e) => {
    if (e.key === 'Enter') active = true;
  }}>
  Email
  <div slot="prepend">
    <Icon class="mdi mdi-email" />
  </div>
</TextField>

<Overlay
  {active}
  on:click={() => {
    active = false;
  }}>
  <ProgressCircular color="primary" indeterminate size={128} />
</Overlay>

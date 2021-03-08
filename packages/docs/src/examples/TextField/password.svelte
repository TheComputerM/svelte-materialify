<script>
  import { TextField, Icon } from 'svelte-materialify/src';
  import { mdiEyeOff, mdiEye } from '@mdi/js';

  let show = false;
</script>

<TextField type={show ? 'text' : 'password'}>
  Password
  <div
    slot="append"
    on:click={() => {
      show = !show;
    }}>
    <Icon path={show ? mdiEyeOff : mdiEye} />
  </div>
</TextField>

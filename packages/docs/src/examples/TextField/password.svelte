<script>
  import TextField from 'svelte-materialify/src/components/TextField';
  import Icon from 'svelte-materialify/src/components/Icon';
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

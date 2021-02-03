<script>
  import { TextField, Icon } from 'svelte-materialify';

  let show = false;
</script>

<TextField type={show ? 'text' : 'password'}>
  Password
  <div
    slot="append"
    on:click={() => {
      show = !show;
    }}>
    <Icon class="mdi mdi-{show ? 'eye-off' : 'eye'}" />
  </div>
</TextField>

<script>
  import TextField from 'svelte-materialify/src/components/TextField';
  import Icon from 'svelte-materialify/src/components/Icon';

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

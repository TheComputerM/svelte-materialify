<script>
  import { Avatar, Icon } from 'svelte-materialify/src';
  import { mdiAccountCircle } from '@mdi/js';
</script>

<div class="d-flex justify-space-around">
  <Avatar class="primary-color">
    <Icon path={mdiAccountCircle} />
  </Avatar>
  <Avatar><img src="https://picsum.photos/200" alt="Avatar" /></Avatar>
  <Avatar class="red white-text"><b>MS</b></Avatar>
</div>

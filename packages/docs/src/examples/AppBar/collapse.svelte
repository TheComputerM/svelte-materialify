<script>
  import { AppBar, Checkbox, Button, Icon } from 'svelte-materialify/src';
  import { mdiMenu } from '@mdi/js';
  let collapsed = false;
</script>

<AppBar {collapsed} class="primary-color theme--dark">
  <div slot="icon">
    <Button depressed fab text>
      <Icon path={mdiMenu} />
    </Button>
  </div>
  <span slot="title">Title</span>
  <div style="flex-grow:1" />
  <Checkbox bind:checked={collapsed} />
</AppBar>

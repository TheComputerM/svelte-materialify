<script>
  import { AppBar, Checkbox, Button, Icon } from 'svelte-materialify/src';

  let collapsed = false;
</script>

<AppBar {collapsed} class="primary-color theme--dark">
  <div slot="icon">
    <Button depressed fab text>
      <Icon class="mdi mdi-menu" />
    </Button>
  </div>
  <span slot="title">Title</span>
  <div style="flex-grow:1" />
  <Checkbox bind:checked={collapsed} />
</AppBar>

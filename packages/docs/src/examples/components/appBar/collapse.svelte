<script>
  import { AppBar, Checkbox, Button, Icon } from 'svelte-materialify/src';

  let collapsed = false;
</script>

<AppBar {collapsed}>
  <div slot="icon">
    <Button depressed fab>
      <Icon class="mdi mdi-menu" />
    </Button>
  </div>
  <span slot="title">Title</span>
  <div style="flex-grow:1" />
  <Checkbox bind:checked={collapsed} />
</AppBar>

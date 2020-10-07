<script>
  import { AppBar, Button, Icon } from 'svelte-materialify/src';
</script>

<AppBar dense>
  <div slot="icon">
    <Button fab depressed>
      <Icon class="mdi mdi-menu" />
    </Button>
  </div>
  <span slot="title">Title</span>
  <div style="flex-grow:1" />
  <Button>Item</Button>
  <Button fab depressed>
    <Icon class="mdi mdi-magnify" />
  </Button>
</AppBar>

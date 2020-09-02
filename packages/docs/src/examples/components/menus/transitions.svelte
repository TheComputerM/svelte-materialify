<script>
  import { Menu, Button, List, ListItem } from 'svelte-materialify/src';

  import { scale } from 'svelte/transition';
  import { elasticOut } from 'svelte/easing';
</script>

<div class="d-flex justify-center">
  <Menu right transition={scale} inOpts={{ easing: elasticOut, duration: 500 }}>
    <div slot="activator">
      <Button class="primary-color">Activate</Button>
    </div>
    <List>
      <ListItem>Option 1</ListItem>
      <ListItem>Option 2</ListItem>
      <ListItem>This is Cool</ListItem>
    </List>
  </Menu>
</div>

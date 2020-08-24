<script>
  import {
    Menu, Button, List, ListItem,
  } from 'svelte-materialify/src';
</script>

<div class="d-flex justify-center">
  <Menu>
    <div slot="activator">
      <Button>Activate</Button>
    </div>
    <List>
      <ListItem>Option 1</ListItem>
      <ListItem>Option 2</ListItem>
      <ListItem>This is Cool</ListItem>
    </List>
  </Menu>
</div>

<script>
  import { Menu, List, ListItem, Ripple } from 'svelte-materialify/src';
</script>

<div class="d-flex justify-center">
  <Menu absolute>
    <div use:Ripple slot="activator">
      <img src="https://picsum.photos/600/400" alt="Click Here" />
    </div>
    <List>
      <ListItem>Option 1</ListItem>
      <ListItem>Option 2</ListItem>
      <ListItem>This is Cool</ListItem>
    </List>
  </Menu>
</div>

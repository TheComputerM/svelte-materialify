<script>
  import { Menu, Button, List, ListItem, Switch } from 'svelte-materialify/src';

  let x = false;
  let y = false;
</script>

<Switch bind:checked={x}>Offset X</Switch>
<Switch bind:checked={y}>Offset Y</Switch>

<br />
<div class="d-flex justify-center">
  <Menu offsetX={x} offsetY={y}>
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

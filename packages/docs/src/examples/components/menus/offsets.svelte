<script>
  import {
    Menu, Button, List, ListItem, Checkbox,
  } from 'svelte-materialify/src';

  let x = false;
  let y = false;
</script>

<Checkbox bind:checked={x}>Offset X</Checkbox>

<Checkbox bind:checked={y}>Offset Y</Checkbox>
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

<script>
  import {
    Menu,
    Button,
    List,
    ListItem,
    Checkbox,
  } from 'svelte-materialify/src';

  let closeOnClick = false;
</script>

<Checkbox bind:checked={closeOnClick}>Close on Click</Checkbox>
<br />
<div class="d-flex justify-center">
  <Menu {closeOnClick} bottom>
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

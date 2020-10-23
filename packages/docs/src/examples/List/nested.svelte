<script>
  import { List, ListGroup, ListItem, Icon } from 'svelte-materialify/src';

  let active = false;
</script>

<div class="d-flex justify-center">
  <List class="elevation-2" style="width:300px">
    <ListItem>
      <span slot="prepend">
        <Icon class="mdi mdi-home" />
      </span>
      Home
    </ListItem>
    <ListGroup bind:active offset={72}>
      <span slot="prepend">
        <Icon class="mdi mdi-cog" />
      </span>
      <span slot="activator"> Actions </span>
      <span slot="append">
        <Icon class="mdi mdi-chevron-up" rotate={active ? 0 : 180} />
      </span>
      <ListItem>Create</ListItem>
      <ListItem>Read</ListItem>
      <ListItem>Write</ListItem>
      <ListItem>Delete</ListItem>
    </ListGroup>
  </List>
</div>

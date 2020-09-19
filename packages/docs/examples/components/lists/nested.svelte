<script>
  import { List, ListGroup, ListItem, Icon } from 'svelte-materialify/src';
</script>

<div class="d-flex justify-center">
  <List class="elevation-2" style="width:300px">
    <ListItem>
      <span slot="prepend">
        <Icon class="mdi mdi-home" />
      </span> Home
    </ListItem>
    <ListGroup offset="72px">
      <span slot="activator" let:toggle let:active>
        <ListItem on:click={toggle}>
          <span slot="prepend">
            <Icon class="mdi mdi-cog" />
          </span> Actions <span slot="append">
            <Icon class="mdi mdi-chevron-up" rotate={active ? 0 : 180} />
          </span>
        </ListItem>
      </span>
      <ListItem>Create</ListItem>
      <ListItem>Read</ListItem>
      <ListItem>Write</ListItem>
      <ListItem>Delete</ListItem>
    </ListGroup>
  </List>
</div>

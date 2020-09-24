<script>
  import {
    List,
    Subheader,
    ListItemGroup,
    ListItem,
    Checkbox,
    Divider,
  } from 'svelte-materialify/src';

  let values = [];
</script>

<div class="d-flex justify-center">
  <List class="elevation-2" style="width:400px">
    <Subheader>General</Subheader>
    <ListItem selectable>Profile Photo</ListItem>
    <ListItem selectable>Show your status</ListItem>
    <Divider />
    <Subheader>Notifications</Subheader>
    <ListItemGroup multiple bind:value={values}>
      <ListItem>
        <span slot="prepend">
          <Checkbox checked={values.includes(0)} />
        </span>
        Notifications
        <span slot="subtitle"> Allow Notifications </span>
      </ListItem>
      <ListItem>
        <span slot="prepend">
          <Checkbox checked={values.includes(1)} />
        </span>
        Sound
        <span slot="subtitle"> Hangouts sound. </span>
      </ListItem>
      <ListItem>
        <span slot="prepend">
          <Checkbox checked={values.includes(2)} />
        </span>
        Invites
        <span slot="subtitle"> Notify when invited. </span>
      </ListItem>
    </ListItemGroup>
  </List>
</div>

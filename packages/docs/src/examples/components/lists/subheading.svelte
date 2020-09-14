<script>
  import { List, Subheader, ListItem, Checkbox, Divider } from 'svelte-materialify/src';
</script>

<div class="d-flex justify-center">
  <List class="elevation-2" style="width:400px">
    <Subheader>General</Subheader>
    <ListItem selectable>Profile Photo</ListItem>
    <ListItem selectable>Show your status</ListItem>
    <Divider />
    <Subheader>Notifications</Subheader>
    <ListItem>
      <span slot="left">
        <Checkbox />
      </span> Notifications <span slot="subtitle"> Allow Notifications </span>
    </ListItem>
    <ListItem>
      <span slot="left">
        <Checkbox />
      </span> Sound <span slot="subtitle"> Hangouts sound. </span>
    </ListItem>
    <ListItem>
      <span slot="left">
        <Checkbox />
      </span> Invites <span slot="subtitle"> Notify when invited. </span>
    </ListItem>
  </List>
</div>

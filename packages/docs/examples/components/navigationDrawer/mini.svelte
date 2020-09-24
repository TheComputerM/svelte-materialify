<script>
  import {
    NavigationDrawer,
    List,
    ListItem,
    Avatar,
    Divider,
    Icon,
  } from 'svelte-materialify/src';

  let mini = true;
  function mouseenter() {
    mini = false;
  }
  function mouseleave() {
    mini = true;
  }
</script>

<div class="d-inline-block" on:mouseenter={mouseenter} on:mouseleave={mouseleave}>
  <NavigationDrawer {mini}>
    <ListItem>
      <span slot="prepend" class="ml-n2">
        <Avatar size={40}><img src="//picsum.photos/200" alt="profile" /></Avatar>
      </span> Mudit Somani
    </ListItem>
    <Divider />
    <List dense>
      <ListItem>
        <span slot="prepend">
          <Icon class="mdi mdi-home-city" />
        </span> Home
      </ListItem>
      <ListItem>
        <span slot="prepend">
          <Icon class="mdi mdi-account" />
        </span> Account
      </ListItem>
      <ListItem>
        <span slot="prepend">
          <Icon class="mdi mdi-account-group" />
        </span> Users
      </ListItem>
    </List>
  </NavigationDrawer>
</div>

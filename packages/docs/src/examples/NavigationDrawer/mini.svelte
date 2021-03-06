<script>
  import {
    NavigationDrawer,
    List,
    ListItem,
    Avatar,
    Divider,
    Icon,
  } from 'svelte-materialify/src';
  import { mdiHomeCity, mdiAccount, mdiAccountGroup } from '@mdi/js';

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
      </span>
      Mudit Somani
    </ListItem>
    <Divider />
    <List dense nav>
      <ListItem>
        <span slot="prepend">
          <Icon path={mdiHomeCity} />
        </span>
        Home
      </ListItem>
      <ListItem>
        <span slot="prepend">
          <Icon path={mdiAccount} />
        </span>
        Account
      </ListItem>
      <ListItem>
        <span slot="prepend">
          <Icon path={mdiAccountGroup} />
        </span>
        Users
      </ListItem>
    </List>
  </NavigationDrawer>
</div>

<script>
  import Playground from '@shared/Playground.svelte';
  import {
    NavigationDrawer,
    List,
    ListItem,
    Icon,
    Avatar,
    Divider,
  } from 'svelte-materialify/src';

  const controls = {
    mini: { type: 'switch' },
    right: { type: 'switch' },
    color: { type: 'select', items: ['teal', 'red', 'green', 'blue'], mandatory: true },
  };

  let values = {
    mini: false,
    right: false,
    color: ['teal'],
  };
</script>

<Playground {controls} bind:values cols={12} block>
  <div style="position:relative;height:350px;">
    <NavigationDrawer
      absolute
      right={values.right}
      mini={values.mini}
      class="{values.color} theme--dark rounded">
      <ListItem class="mt-2">
        <span slot="prepend" class="ml-n2">
          <Avatar size={40}><img src="//picsum.photos/50" alt="profile" /></Avatar>
        </span>
        Application
        <span slot="subtitle"> Subtitle </span>
      </ListItem>
      <Divider />
      <List dense nav>
        <ListItem>
          <span slot="prepend">
            <Icon class="mdi mdi-view-dashboard" />
          </span>
          Dashboard
        </ListItem>
        <ListItem>
          <span slot="prepend">
            <Icon class="mdi mdi-account-box" />
          </span>
          Account
        </ListItem>
        <ListItem>
          <span slot="prepend">
            <Icon class="mdi mdi-gavel" />
          </span>
          Admin
        </ListItem>
      </List>
    </NavigationDrawer>
  </div>
</Playground>

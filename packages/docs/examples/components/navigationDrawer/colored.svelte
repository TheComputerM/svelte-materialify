<script>
  import { NavigationDrawer, List, ListItem, Button, Icon } from 'svelte-materialify/src';
</script>

<div class="d-flex justify-center">
  <NavigationDrawer style="height:350px" class="primary-color theme--dark">
    <List>
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
    <span slot="append" class="pa-2">
      <Button block>Logout</Button>
    </span>
  </NavigationDrawer>
</div>

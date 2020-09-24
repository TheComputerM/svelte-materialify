<script>
  import {
    NavigationDrawer,
    List,
    ListItem,
    Button,
    Icon,
    Overlay,
  } from 'svelte-materialify/src';

  let active = false;

  function close() {
    active = false;
  }
  function open() {
    active = true;
  }
</script>

<div style="position:relative;height:350px;" class="d-flex align-center justify-center">
  <Button class="pink white-text" on:click={open}>Toggle</Button>
  <NavigationDrawer absolute {active}>
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
  </NavigationDrawer>
  <Overlay index={1} {active} on:click={close} absolute />
</div>

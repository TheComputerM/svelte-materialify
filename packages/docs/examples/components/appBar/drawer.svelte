<script>
  import {
    AppBar,
    Button,
    Icon,
    NavigationDrawer,
    Overlay,
  } from 'svelte-materialify/src';

  let active = false;
  function toggleNavigation() {
    active = !active;
  }
</script>

<div style="position:relative;height:250px">
  <AppBar>
    <div slot="icon">
      <Button fab depressed on:click={toggleNavigation}>
        <Icon class="mdi mdi-menu" />
      </Button>
    </div>
    <span slot="title"> Click The Menu </span>
  </AppBar>
  <NavigationDrawer absolute {active}>Content</NavigationDrawer>
  <Overlay {active} absolute on:click={toggleNavigation} index={3} />
</div>

<script>
  import {
    AppBar,
    Button,
    Icon,
    NavigationDrawer,
    Overlay,
  } from 'svelte-materialify/src';
  import { mdiMenu } from '@mdi/js';

  let active = false;
  function toggleNavigation() {
    active = !active;
  }
</script>

<div style="position:relative;height:250px">
  <AppBar>
    <div slot="icon">
      <Button fab depressed on:click={toggleNavigation}>
        <Icon path={mdiMenu} />
      </Button>
    </div>
    <span slot="title"> Click The Menu </span>
  </AppBar>
  <NavigationDrawer style="position: relative" {active}>Content</NavigationDrawer>
  <Overlay {active} absolute on:click={toggleNavigation} index={1} />
</div>

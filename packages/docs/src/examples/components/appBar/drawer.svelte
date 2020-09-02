<script>
  import { AppBar, Button, Icon, NavigationDrawer, Overlay } from 'svelte-materialify/src';

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
  {#if active}
    <NavigationDrawer absolute>Content</NavigationDrawer>
  {/if}
  <Overlay {active} absolute on:click={toggleNavigation} zIndex={3} />
</div>

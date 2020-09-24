<script>
  export let navigation;
  export let sidenav;

  import { Button, NavigationDrawer, List, Overlay } from 'svelte-materialify/src/';

  import LeftNavigationDrawer from './LeftNavigationDrawer.svelte';
  import RightNavigationDrawer from './RightNavigationDrawer.svelte';
</script>

<NavigationDrawer
  active={navigation || sidenav}
  style="height:100vh;"
  fixed
  clipped
  borderless>
  <br />
  <div class="d-flex justify-center">
    <Button outlined rounded class="blue-text" size="small">Become A Sponsor</Button>
  </div>
  <br />
  <List nav dense>
    <LeftNavigationDrawer />
  </List>
</NavigationDrawer>
<Overlay
  index="3"
  active={!navigation && sidenav}
  on:click={() => (sidenav = false)}
  fadeOptions={{ duration: 250 }} />

{#if navigation}
  <NavigationDrawer
    style="height:100vh;background:var(--theme-surface)"
    right
    fixed
    clipped
    borderless>
    <RightNavigationDrawer />
  </NavigationDrawer>
{/if}

<script>
  export let mobile;
  export let sidenav;

  import { Button, NavigationDrawer, List, Overlay } from 'svelte-materialify/src/';
  import routes from '@/util/routes';

  import LeftNavigationDrawer from './LeftNavigationDrawer.svelte';
  import RightNavigationDrawer from './RightNavigationDrawer.svelte';
</script>

<NavigationDrawer
  active={!mobile || sidenav}
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
    {#each routes as route}
      <LeftNavigationDrawer item={route} />
    {/each}
  </List>
</NavigationDrawer>
<Overlay index="3" active={mobile && sidenav} on:click={() => (sidenav = false)} />

{#if !mobile}
  <NavigationDrawer
    style="height:100vh;background:var(--theme-surface)"
    right
    fixed
    clipped
    borderless>
    <RightNavigationDrawer />
  </NavigationDrawer>
{/if}

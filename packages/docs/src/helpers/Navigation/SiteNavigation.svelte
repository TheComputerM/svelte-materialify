<script>
  export let theme;
  export let navigation;

  import { mdiGithub, mdiWeatherSunny, mdiWeatherNight, mdiMenu } from '@mdi/js';
  import {
    AppBar,
    Icon,
    Button,
    NavigationDrawer,
    List,
    Overlay,
  } from 'svelte-materialify/src/';
  import { theme as themeStore } from '../stores';

  import LeftNavigationDrawer from './LeftNavigationDrawer.svelte';
  import RightNavigationDrawer from './RightNavigationDrawer.svelte';

  let sidenav = false;

  function toggleTheme() {
    if (theme === 'light') theme = 'dark';
    else theme = 'light';
    themeStore.set(theme);
  }
</script>

<AppBar fixed style="width:100%">
  <div slot="icon">
    {#if !navigation}
      <Button fab depressed on:click={() => (sidenav = !sidenav)} aria-label="Open Menu">
        <Icon path={mdiMenu} />
      </Button>
    {/if}
  </div>
  <a href="/" slot="title" rel="external" class="text--primary"> Svelte Materialify </a>
  <div style="flex-grow:1" />
  <a
    href="https://github.com/TheComputerM/svelte-materialify"
    target="_blank"
    rel="noopener">
    <Button class="white-text grey darken-3" aria-label="GitHub" fab={!navigation}>
      <Icon path={mdiGithub} class={navigation ? 'mr-3' : ''} />
      {#if navigation}GitHub{/if}
    </Button>
  </a>
  <Button fab depressed on:click={toggleTheme} aria-label="Toggle Theme">
    <Icon path={theme === 'light' ? mdiWeatherNight : mdiWeatherSunny} />
  </Button>
</AppBar>

<NavigationDrawer active={navigation || sidenav} style="height:100vh;" fixed clipped>
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
    noBorder>
    <RightNavigationDrawer />
  </NavigationDrawer>
{/if}

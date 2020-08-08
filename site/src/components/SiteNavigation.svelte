<script>
  export let theme;
  export let navigation;

  import {
    AppBar,
    Icon,
    Button,
    NavigationDrawer,
    List,
    Divider,
    Overlay,
  } from "svelte-materialify/src/";

  import LeftNavigationDrawer from "./LeftNavigationDrawer.svelte";
  import RightNavigationDrawer from "./RightNavigationDrawer.svelte";

  let sidenav = false;

  function toggleTheme() {
    if (theme === "light") theme = "dark";
    else theme = "light";

    window.localStorage.setItem("theme", theme);
  }
</script>

<AppBar fixed style="width:100%">
  <div slot="icon">
    {#if !navigation}
      <Button fab depressed on:click={() => (sidenav = !sidenav)}>
        <Icon class="mdi mdi-menu" />
      </Button>
    {/if}
  </div>
  <a href="/" slot="title" class="text--primary">Svelte Materialify</a>
  <div style="flex-grow:1" />
  <a href="https://github.com/TheComputerM/svelte-materialify" target="_blank">
    <Button class="white-text grey darken-3">
      <Icon class="mdi mdi-github mr-3" />
      GitHub
    </Button>
  </a>
  <Button fab depressed on:click={toggleTheme} ripple={{ active: 'false' }}>
    <Icon class="mdi mdi-weather-{theme === 'light' ? 'night' : 'sunny'}" />
  </Button>
</AppBar>

<NavigationDrawer
  style="height:100vh;{!(navigation || sidenav) ? 'transform:translateX(-100%)' : ''}"
  fixed
  clipped>
  <br />
  <div class="d-flex justify-center">
    <Button outlined rounded class="blue-text" size="small">
      Become A Sponsor
    </Button>
  </div>
  <br />
  <List nav dense>
    <LeftNavigationDrawer />
  </List>
</NavigationDrawer>
<Overlay
  zIndex="3"
  active={!navigation && sidenav}
  on:click={() => (sidenav = false)}
  fadeOptions={{ duration: 250 }} />

{#if navigation}
  <NavigationDrawer style="height:100vh;" right fixed clipped>
    <RightNavigationDrawer />
  </NavigationDrawer>
{/if}

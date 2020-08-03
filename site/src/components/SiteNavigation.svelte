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
  import components from "../helpers/components";

  let sidenav = false;

  function toggleTheme() {
    if (theme === "light") theme = "dark";
    else theme = "light";

    window.localStorage.setItem("theme", theme);
  }

  let links = [
    { text: "Getting Started", href: "/", icon: "speedometer" },
    {
      text: "Components",
      href: "/components/",
      icon: "view-dashboard",
      items: (() => {
        let out = [];
        for (let component of components) {
          out.push({
            text: component,
            href: "/components/" + component.replace(/ /g, "-").toLowerCase(),
          });
        }
        return out;
      })(),
    },
  ];
</script>

<style>
  a {
    text-decoration: none;
  }
</style>

<AppBar fixed style="width:100%">
  <div slot="left">
    {#if !navigation}
      <Button fab depressed on:click={() => (sidenav = !sidenav)}>
        <Icon class="mdi mdi-menu" />
      </Button>
    {/if}
  </div>
  <span slot="title">Svelte Materialify</span>
  <div slot="right">

    <a
      href="https://github.com/TheComputerM/svelte-materialify"
      target="_blank">
      <Button class="white-text grey darken-3">
        <Icon class="mdi mdi-github mr-3" />
        GitHub
      </Button>
    </a>
    <Button fab depressed on:click={toggleTheme} ripple={{ active: 'false' }}>
      <Icon class="mdi mdi-weather-{theme === 'light' ? 'night' : 'sunny'}" />
    </Button>
  </div>
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
    <LeftNavigationDrawer items={links} />
  </List>
</NavigationDrawer>
{#if sidenav}
  <Overlay
    zIndex="3"
    on:click={() => (sidenav = false)}
    fadeOptions={{ duration: 250 }} />
{/if}

{#if navigation}
  <NavigationDrawer style="height:100vh;" right fixed clipped>
    <Button>Hello</Button>
  </NavigationDrawer>
{/if}

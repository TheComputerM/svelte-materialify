<script>
  export let segment;
  export let theme;
  export let navigation;

  import {
    AppBar,
    Icon,
    Button,
    NavigationDrawer,
    List,
    ListGroup,
    ListItem,
    Divider,
    Overlay,
  } from "svelte-materialify/src/";

  let components = ["Alerts", "Avatars", "Buttons"];
  let sidenav = false;

  function toggleTheme() {
    if (theme === "light") theme = "dark";
    else theme = "light";
  }

  function currentPage(link) {
    return segment === link ? true : false
  }
</script>

<style>
  a {
    text-decoration: none;
  }
</style>

<AppBar fixed style="width:100%">
  <div slot="left">
    {#if !navigation}
      <Button
        fab
        depressed
        on:click={() =>
          sidenav = !sidenav
        }>
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
    <ListGroup>
      <ListItem active={currentPage(undefined)}>
        <div slot="left">
          <Icon class="mdi mdi-speedometer" />
        </div>
        Getting Started
      </ListItem>
      <ListItem active={currentPage('components')}>
        <div slot="left">
          <Icon class="mdi mdi-view-dashboard" />
        </div>
        Components
        <div slot="right">
          <Icon class="mdi mdi-chevron-down" />
        </div>
      </ListItem>
      <ListGroup offset="64px">
        {#each components as component}
          <ListItem>{component}</ListItem>
        {/each}
      </ListGroup>
    </ListGroup>
  </List>
</NavigationDrawer>

{#if navigation}
  <NavigationDrawer style="height:100vh;" right fixed clipped>
    <Button>Hello</Button>
  </NavigationDrawer>
{/if}

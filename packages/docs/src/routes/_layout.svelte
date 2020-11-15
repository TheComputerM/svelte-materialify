<script>
  import { onMount } from 'svelte';
  import { mdiGithub, mdiDiscord } from '@mdi/js';
  import { MaterialApp, AppBar, Button, Icon } from 'svelte-materialify/src';
  import SiteNavigation from '@/components/navigation/SiteNavigation.svelte';
  import Loading from '@/components/navigation/Loading.svelte';
  import { theme } from '@/util/stores';

  export let segment;

  let sidenav = false;
  let breakpoints = {};
  let mobile = false;

  function checkMobile() {
    mobile = window.matchMedia(breakpoints['md-and-down']).matches;
  }

  function toggleTheme() {
    if ($theme === 'light') theme.set('dark');
    else theme.set('light');
  }

  onMount(() => {
    theme.set(window.localStorage.getItem('theme') || 'light');
    const unsubscribe = theme.subscribe((value) => {
      window.localStorage.setItem('theme', value);
    });

    import('svelte-materialify/src/utils/breakpoints').then(({ default: data }) => {
      breakpoints = data;
      checkMobile();
    });

    return unsubscribe;
  });
</script>

<style>
  a {
    color: inherit;
  }
  main {
    padding-top: 56px;
  }
  .navigation-enabled {
    padding: 56px 256px 0 256px;
  }
</style>

<svelte:window on:resize={checkMobile} />

<svelte:head>
  <link rel="stylesheet" href="prism/material-light.css" disabled={$theme === 'dark'} />
  <link rel="stylesheet" href="prism/material-dark.css" disabled={$theme === 'light'} />
</svelte:head>

<MaterialApp theme={$theme}>
  <AppBar
    fixed
    style="width:100%"
    class={segment === undefined ? 'primary-color theme--dark' : ''}>
    <div slot="icon">
      {#if mobile && segment !== undefined}
        <Button
          fab
          depressed
          on:click={() => (sidenav = !sidenav)}
          aria-label="Open Menu">
          <Icon class="mdi mdi-menu" />
        </Button>
      {/if}
    </div>
    <a href="/" slot="title" rel="external" class="text--primary"> Svelte Materialify </a>
    <div style="flex-grow:1" />
    <a
      href="https://github.com/TheComputerM/svelte-materialify"
      target="_blank"
      rel="noopener">
      <Button class="white-text grey darken-3" aria-label="GitHub" fab={mobile}>
        <Icon path={mdiGithub} class={!mobile ? 'mr-3' : ''} />
        {#if !mobile}GitHub{/if}
      </Button>
    </a>
    <a href="https://discord.gg/dKGmnhf" target="_blank" rel="noopener">
      <Button text fab>
        <Icon path={mdiDiscord} />
      </Button>
    </a>
    <Button fab text on:click={toggleTheme} aria-label="Toggle Theme">
      <Icon class="mdi mdi-weather-{$theme === 'light' ? 'night' : 'sunny'}" />
    </Button>
  </AppBar>

  {#if segment !== undefined}
    <SiteNavigation {mobile} bind:sidenav />
  {/if}

  <main class:navigation-enabled={!mobile && segment !== undefined}>
    {#if segment !== undefined}
      <Loading />
    {/if}
    <slot />
  </main>
</MaterialApp>

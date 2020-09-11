<script>
  import { onMount } from 'svelte';
  import { mdiGithub, mdiWeatherSunny, mdiWeatherNight, mdiMenu } from '@mdi/js';
  import { MaterialApp, AppBar, Button, Icon } from 'svelte-materialify/src';
  import SiteNavigation from '../helpers/Navigation/SiteNavigation.svelte';
  import Loading from '../helpers/Navigation/Loading.svelte';
  import { theme } from '../helpers/stores';

  export let segment;

  let sidenav = false;
  let breakpoints = {};
  let navigation = false;

  function checkMobile() {
    navigation = !window.matchMedia(breakpoints['md-and-down']).matches;
  }

  function toggleTheme() {
    if ($theme === 'light') theme.set('dark');
    else theme.set('light');
  }

  onMount(async () => {
    theme.set(window.localStorage.getItem('theme') || 'light');
    const unsubscribe = theme.subscribe((value) => {
      window.localStorage.setItem('theme', value);
    });

    breakpoints = await import('svelte-materialify/src/utils/breakpoints');
    breakpoints = breakpoints.default;
    checkMobile();

    return unsubscribe;
  });
</script>

<style>
  main {
    padding-top: 56px;
  }
  .navigation-enabled:not(.index-page) {
    padding: 56px 256px 0 256px;
  }
</style>

<svelte:window on:resize={checkMobile} />

<svelte:head>
  {#if $theme === 'light'}
    <link rel="stylesheet" href="prism/material-light.css" />
  {:else}
    <link rel="stylesheet" href="prism/material-dark.css" />
  {/if}
</svelte:head>

<MaterialApp theme={$theme}>
  <AppBar
    fixed
    style="width:100%"
    class={segment === undefined ? 'primary-color theme--dark' : ''}>
    <div slot="icon">
      {#if !navigation && segment !== undefined}
        <Button
          fab
          depressed
          on:click={() => (sidenav = !sidenav)}
          aria-label="Open Menu">
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
    <Button fab text on:click={toggleTheme} aria-label="Toggle Theme">
      <Icon path={theme === 'light' ? mdiWeatherNight : mdiWeatherSunny} />
    </Button>
  </AppBar>

  {#if segment !== undefined}
    <SiteNavigation {navigation} {sidenav} />
  {/if}

  <main class:navigation-enabled={navigation} class:index-page={segment === undefined}>
    {#if segment !== undefined}
      <Loading />
    {/if}
    <slot />
  </main>
</MaterialApp>

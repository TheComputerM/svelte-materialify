<script>
  import { onMount } from 'svelte';
  import { MaterialApp } from 'svelte-materialify/src';
  import SiteNavigation from '../helpers/Navigation/SiteNavigation.svelte';
  import Loading from '../helpers/Navigation/Loading.svelte';
  import { theme } from '../helpers/stores';

  export let segment;

  let breakpoints = {};
  let navigation = false;

  function checkMobile() {
    navigation = !window.matchMedia(breakpoints['md-and-down']).matches;
  }

  onMount(async () => {
    theme.set(window.localStorage.getItem('theme') || 'light');
    const unsubscribe = theme.subscribe((value) => {
      window.localStorage.setItem('theme', value);
    });

    breakpoints = await import('svelte-materialify/src/utils/breakpoints');
    breakpoints = breakpoints.default;
    checkMobile();

    return () => {
      unsubscribe();
    };
  });
</script>

<style>
  main {
    padding-top: 56px;
  }
  .navigation-enabled {
    padding: 56px 256px 0 256px;
  }
  .index-page {
    padding: 0;
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
  {#if segment !== undefined}
    <SiteNavigation bind:theme={$theme} {navigation} />
  {/if}
  <main
    class:navigation-enabled={navigation}
    class:index-page={segment === undefined}>
    {#if segment !== undefined}
      <Loading />
    {/if}
    <slot />
  </main>
</MaterialApp>

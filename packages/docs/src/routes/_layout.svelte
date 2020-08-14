<script>
  import { onMount } from 'svelte';
  import SiteNavigation from '../helpers/Navigation/SiteNavigation.svelte';
  import { theme as themeStore } from '../helpers/stores';

  export let segment;

  let breakpoints = {};
  let navigation = false;

  function checkMobile() {
    navigation = !window.matchMedia(breakpoints['md-and-down']).matches;
  }

  onMount(async () => {
    $themeStore = window.localStorage.getItem('theme') || 'light';
    const unsubscribe = themeStore.subscribe((value) => {
      window.localStorage.setItem('theme', value);
      checkMobile();
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
  {#if $themeStore === 'light'}
    <link rel="stylesheet" href="prism/material-light.css" />
  {:else}
    <link rel="stylesheet" href="prism/material-dark.css" />
  {/if}
</svelte:head>

<div class="s-app theme--{$themeStore}">
  {#if segment !== undefined}
    <SiteNavigation bind:theme={$themeStore} {navigation} />
  {/if}
  <main
    class:navigation-enabled={navigation}
    class:index-page={segment === undefined}>
    <slot />
  </main>
</div>

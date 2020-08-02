<script>
  import { onMount } from "svelte";
  import SiteNavigation from "../components/SiteNavigation.svelte";
  import { MaterialApp, Container } from "svelte-materialify/src/";

  export let segment;

  let breakpoints = {};
  onMount(async () => {
    breakpoints = await import("svelte-materialify/src/utils/breakpoints");
    checkMobile();
  });

  let theme = "light";
  let navigation = true;

  async function checkMobile() {
    navigation = !window.matchMedia(breakpoints.default["md-and-down"]).matches;
  }
</script>

<svelte:window on:resize={checkMobile}></svelte:window>

<MaterialApp {theme}>
  <SiteNavigation bind:theme {segment} {navigation} />
  <main style={navigation ? "padding:56px 256px 0 256px" : "padding-top:56px"}>
    <Container>
      <slot />
    </Container>
  </main>
</MaterialApp>

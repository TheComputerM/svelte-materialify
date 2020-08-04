<script>
  import { onMount } from "svelte";
  import SiteNavigation from "../components/SiteNavigation.svelte";
  import { Container } from "svelte-materialify/src/";

  export const segment = '';

  let breakpoints = {};
  let theme = "light";
  let navigation = true;

  function checkMobile() {
    navigation = !window.matchMedia(breakpoints["md-and-down"]).matches;
  }

  onMount(async () => {
    theme = window.localStorage.getItem('theme') || "light";
    breakpoints = await import("svelte-materialify/src/utils/breakpoints");
    breakpoints = breakpoints.default;
    checkMobile();
  });
</script>

<svelte:window on:resize={checkMobile}></svelte:window>

<div class="s-app theme--{theme}">
  <SiteNavigation bind:theme {navigation} />
  <main style={navigation ? "padding:56px 256px 0 256px" : "padding-top:56px"}>
    <Container>
      <slot />
    </Container>
  </main>
</div>

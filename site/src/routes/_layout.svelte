<script>
  import Nav from "../components/Nav.svelte";
  import { MaterialApp } from "svelte-materialify/src/";

  export let segment;
  let theme = "light"
</script>

<MaterialApp theme={theme}>
  <Nav {segment} bind:theme={theme} />
  <slot />
</MaterialApp>

<script>
  import Nav from "../components/Nav.svelte";
  import { MaterialApp } from "svelte-materialify/src/";

  let theme = "light";
</script>

<MaterialApp theme={theme}>
  <Nav bind:theme={theme} />
  <slot />
</MaterialApp>

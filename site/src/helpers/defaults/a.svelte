<script>
  import { Icon } from "svelte-materialify/src";
  export let href = "";
</script>

<a {href}>
  <slot />
  <Icon class="mdi mdi-open-in-new" size="inherit" />
</a>

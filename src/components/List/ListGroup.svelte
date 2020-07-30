<script>
  import { setContext } from 'svelte';
  setContext("partOfList", true);

  let classes = "";
  export let style = undefined;
  export { classes as class };
</script>

<style lang="scss" src="./ListGroup.scss">

</style>

<div role="listbox" class="s-list-group {classes}" {style}>
  <slot />
</div>

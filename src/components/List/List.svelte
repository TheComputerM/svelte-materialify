<script>
  export let outlined = false;
  export let nav = false;
  export let rounded = false;
  export let dense = false;
  export let flat = false;
  export let disabled = false;
</script>

<style lang="scss" src="./List.scss">

</style>

<div
  role="list"
  class="s-list"
  class:outlined
  class:nav
  class:rounded
  class:dense
  class:flat
  class:disabled>
  <slot />
</div>

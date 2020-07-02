<script>
  let classes;
  export let inactive = false;
  export let size;
  export {classes as class};
  export let style;
</script>

<style type="scss">
  @import "./index";
</style>

<i class="s-icon s-icon--size-{size} {classes}" class:inactive {style}>
  <slot />
</i>

<script>
  let classes = "";
  export let style = undefined;
  export { classes as class };
</script>

<style lang="scss" src="./CardSubtitle.scss">

</style>

<div class="s-card-subtitle {classes}" {style}>
  <slot />
</div>

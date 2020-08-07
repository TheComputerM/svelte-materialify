<script>
  let classes = '';
  export let style = null;
  export { classes as class };
</script>

<style lang="scss" src="./CardTitle.scss">

</style>

<div class="s-card-title {classes}" {style}>
  <slot />
</div>

<script>
  let classes = '';
  export let style = null;
  export { classes as class };
</script>

<style lang="scss" src="./CardActions.scss">

</style>

<div class="s-card-actions {classes}" {style}>
  <slot />
</div>

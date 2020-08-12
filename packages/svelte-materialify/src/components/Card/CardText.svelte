<script>
  let classes = '';
  export let style = null;
  export { classes as class };
</script>

<style lang="scss" src="./CardText.scss">

</style>

<div class="s-card-text {classes}" {style}>
  <slot />
</div>

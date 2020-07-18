<script>
  let classes = "";
  export let style = undefined;
  export { classes as class };
</script>

<style lang="scss" src="./CardText.scss">

</style>

<div class="s-card-text {classes}" {style}>
  <slot />
</div>

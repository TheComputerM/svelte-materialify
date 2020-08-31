<script>
  let klass = '';
  export let style = null;
  export { klass as class };
</script>

<style lang="scss" src="./CardText.scss">

</style>

<div class="s-card-text {klass}" {style}>
  <slot />
</div>

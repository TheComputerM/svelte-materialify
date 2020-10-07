<script>
  let klass = '';
  export { klass as class };
  export let style = null;
</script>

<style lang="scss" src="./CardText.scss" global>
</style>

<div class="s-card-text {klass}" {style}>
  <slot />
</div>

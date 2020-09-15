<script>
  let klass = '';
  export let style = null;
  export { klass as class };
</script>

<style lang="scss" src="./CardActions.scss" global>
</style>

<div class="s-card-actions {klass}" {style}>
  <slot />
</div>

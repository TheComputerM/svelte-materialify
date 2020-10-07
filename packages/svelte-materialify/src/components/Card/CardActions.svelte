<script>
  let klass = '';
  export { klass as class };
  export let style = null;
</script>

<style lang="scss" src="./CardActions.scss" global>
</style>

<div class="s-card-actions {klass}" {style}>
  <slot />
</div>

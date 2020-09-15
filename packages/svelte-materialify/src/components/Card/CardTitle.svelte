<script>
  let klass = '';
  export let style = null;
  export { klass as class };
</script>

<style lang="scss" src="./CardTitle.scss" global>
</style>

<div class="s-card-title {klass}" {style}>
  <slot />
</div>

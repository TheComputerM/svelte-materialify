<script>
  let klass = '';
  export { klass as class };
  export let style = null;
</script>

<style lang="scss" src="./CardTitle.scss" global>
</style>

<div class="s-card-title {klass}" {style}>
  <slot />
</div>

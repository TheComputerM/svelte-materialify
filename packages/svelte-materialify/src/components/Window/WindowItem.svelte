<script>
  let klass = '';
  export { klass as class };
  export let style = null;
</script>

<style lang="scss" src="./WindowItem.scss" global>
</style>

<div class="s-window-item {klass}" {style}>
  <slot />
</div>

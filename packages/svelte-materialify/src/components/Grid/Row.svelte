<script>
  let klass = '';
  export let dense = false;
  export let noGutters = false;
  export { klass as class };
  export let style = null;
</script>

<style lang="scss" src="./Row.scss" global>
</style>

<div class="s-row {klass}" class:dense class:no-gutters={noGutters} {style}>
  <slot />
</div>

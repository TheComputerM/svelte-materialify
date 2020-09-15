<script>
  let klass = '';
  export let dense = false;
  export let noGutters = false;
  export { klass as class };
</script>

<style lang="scss" src="./Row.scss" global>
</style>

<div class="s-row {klass}" class:dense class:no-gutters={noGutters}>
  <slot />
</div>

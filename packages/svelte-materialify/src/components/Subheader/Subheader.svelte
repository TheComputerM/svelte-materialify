<script>
  let klass = '';
  export let inset = false;
  export let style = null;
  export { klass as class };
</script>

<style lang="scss" src="./Subheader.scss">
</style>

<div class="s-subheader {klass}" class:inset {style}>
  <slot />
</div>

<script>
  let klass = '';
  export let style = null;
  export { klass as class };
</script>

<style lang="scss" src="./CardSubtitle.scss" global>
</style>

<div class="s-card-subtitle {klass}" {style}>
  <slot />
</div>

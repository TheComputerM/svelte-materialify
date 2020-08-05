<script>
  let classes = '';
  export let inset = false;
  export let vertical = false;
  export let style = null;
  export { classes as class };
</script>

<style lang="scss" src="./index.scss">

</style>

<hr
  class="s-divider {classes}"
  role="separator"
  aria-orientation={vertical ? 'vertical' : 'horizontal'}
  class:inset
  class:vertical
  {style} />

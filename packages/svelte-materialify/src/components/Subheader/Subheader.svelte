<script>
  let classes = '';
  export let inset = false;
  export let style = null;
  export { classes as class };
</script>

<style lang="scss" src="./index.scss"></style>

<div class="s-subheader {classes}" class:inset {style}>
  <slot></slot>
</div>

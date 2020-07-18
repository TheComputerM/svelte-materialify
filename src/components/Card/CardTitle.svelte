<script>
  let classes = "";
  export let style = undefined;
  export {classes as class};
</script>

<style lang="scss" src="./CardTitle.scss"></style>

<div class="s-card-title {classes}" {style}>
  <slot></slot>
</div>

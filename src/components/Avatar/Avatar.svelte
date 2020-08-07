<script>
  let classes = '';
  export let size = '48px';
  export let tile = false;
  export { classes as class };
</script>

<style lang="scss" src="./index.scss"></style>

<div style="height:{size};width:{size}" class="s-avatar {classes}" class:tile>
  <slot></slot>
</div>

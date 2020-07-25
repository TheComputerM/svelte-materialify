<script>
  export let outlined = false;
  export let nav = false;
  export let dense = false;
</script>

<style lang="scss" src="./List.scss"></style>

<div role="list" class="s-list" class:outlined class:nav class:dense>
  <slot></slot>
</div>

<script>
  import { setContext } from 'svelte';

  setContext('partOfList', true);

  let classes = 'primary-text';
  export let offset = false;
  export let disabled = false;
  export let style = '';
  export { classes as class };
</script>

<style lang="scss" src="./ListGroup.scss">

</style>

<div
  role="listbox"
  class="s-list-group {classes}"
  class:offset
  class:disabled
  style="--offset:{offset};{style}">
  <slot />
</div>

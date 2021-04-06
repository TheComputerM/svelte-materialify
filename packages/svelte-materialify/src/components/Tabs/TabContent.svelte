<script>
  import WindowItem from '../Window/WindowItem.svelte';

  let klass = '';
  export { klass as class };
  export let style = '';
</script>

<div class="s-tab-content {klass}" role="tabpanel" {style}>
  <WindowItem>
    <slot />
  </WindowItem>
</div>

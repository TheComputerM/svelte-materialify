<script>
  let klass = '';
  export { klass as class };
  export let style = null;
</script>

<div class="s-tab-content s-window-item {klass}" role="tabpanel" {style}>
  <slot />
</div>

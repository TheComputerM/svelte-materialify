<script context="module">
  const icons = {
    info: 'information',
    danger: 'alert',
    warning: 'alert-octagram',
    success: 'check',
  };
</script>

<script>
  import { Alert, Icon } from 'svelte-materialify/src';

  export let type = 'info';
  const icon = icons[type];
</script>

<style global>
  .s-alert--doc p {
    margin-bottom: 0 !important;
  }
</style>

<svelte:options immutable={true} />

<Alert class="s-alert--doc {type}-text" border="left" text>
  <div slot="icon">
    <Icon class="mdi mdi-{icon}" />
  </div>
  <slot />
</Alert>

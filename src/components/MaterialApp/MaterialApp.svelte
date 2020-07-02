<script>
  export let theme = "light";
</script>

<style type="scss" global>
  @import "../../styles/global";
</style>

<div class="theme--{theme}">
  <slot />
</div>

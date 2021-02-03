<script>
  export let theme = 'light';
</script>

<style type="scss" src="./MaterialApp.scss" global>
</style>

<div class="s-app theme--{theme}">
  <slot />
</div>

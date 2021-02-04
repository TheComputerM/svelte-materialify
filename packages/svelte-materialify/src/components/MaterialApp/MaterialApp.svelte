<script>
  export let theme = 'light';
</script>

<style lang="scss" src="./MaterialApp.scss" global>
</style>

<div class="s-app theme--{theme}">
  <slot />
</div>

<script>
  // Classes to add to avatar.
  let klass = '';
  export { klass as class };

  // Height and width of the avatar.
  export let size = '48px';

  // Removes border radius
  export let tile = false;

  // Styles for avatar
  export let style = '';
</script>

<style lang="scss" src="./Avatar.scss">

</style>

<div
  style="height:{size};width:{size};{style}"
  class="s-avatar {klass}"
  class:tile>
  <slot />
</div>

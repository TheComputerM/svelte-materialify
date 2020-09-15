<script>
  import Style from '../../internal/Style';

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

<style lang="scss" src="./Avatar.scss" global>
</style>

<div class="s-avatar {klass}" class:tile use:Style={{ 'avatar-size': size }} {style}>
  <slot />
</div>

<script>
  import Style from '../../internal/Style';

  let klass = '';
  export { klass as class };
  export let size = 48;
  export let tile = false;
  export let style = null;
</script>

<style lang="scss" src="./Avatar.scss" global>
</style>

<div class="s-avatar {klass}" class:tile use:Style={{ 'avatar-size': size }} {style}>
  <slot />
</div>

<script>
  import Style from '../../internal/Style';

  let klass = '';
  export let size = '24px';
  export let rotate = 0;
  export let disabled = false;
  export let path = null;
  export let title = null;
  export let style = null;
  export { klass as class };
</script>

<style type="scss" src="./Icon.scss">

</style>

<i
  aria-hidden="true"
  class="s-icon {klass}"
  {title}
  class:disabled
  use:Style={{ 'icon-size': size, 'icon-rotate': `${rotate}deg` }}
  {style}>
  {#if path}
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <path d={path}>
        {#if title}
          <title>{title}</title>
        {/if}
      </path>
    </svg>
  {/if}
  <slot />
</i>

<script>
  import Style from '../../internal/Style';

  let klass = '';
  export { klass as class };
  export let size = '24px';
  export let width = size;
  export let height = size;
  export let viewWidth = '24';
  export let viewHeight = '24';
  export let rotate = 0;
  export let spin = false;
  export let disabled = false;
  export let path = null;
  export let label = null;
  export let style = null;
  $: {
    width = size;
    height = size;
  }
</script>

<style type="scss" src="./Icon.scss" global>
</style>

<i
  aria-hidden="true"
  class="s-icon {klass}"
  class:spin
  aria-label={label}
  class:disabled
  use:Style={{ 'icon-size': size, 'icon-rotate': `${rotate}deg` }}
  aria-disabled={disabled}
  {style}>
  {#if path}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {width}
      {height}
      viewBox="0 0 {viewWidth} {viewHeight}">
      <path d={path}>
        {#if label}
          <title>{label}</title>
        {/if}
      </path>
    </svg>
  {/if}
  <slot />
</i>

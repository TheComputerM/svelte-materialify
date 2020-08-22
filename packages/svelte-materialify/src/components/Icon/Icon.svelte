<script>
  let classes = '';
  export let disabled = false;
  export let size = '24px';
  export let path = null;
  export let title = null;
  export let rotate = '0deg';
  export let style = '';
  export { classes as class };
</script>

<style type="scss" src="./Icon.scss">

</style>

<i
  aria-hidden="true"
  style="font-size: {size};transform: rotate({rotate});{style}"
  class="s-icon {classes}"
  {title}
  class:disabled>
  {#if path}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24">
      <path d={path}>
        {#if title}
          <title>{title}</title>
        {/if}
      </path>
    </svg>
  {/if}
  <slot />
</i>

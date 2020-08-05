<script>
  let classes = '';
  export let width = '256px';
  export let fixed = false;
  export let right = false;
  export let mini = false;
  export let clipped = false;
  export let miniWidth = '56px';
  export let clippedHeight = '56px';
  export let style = '';
  export { classes as class };

  if (mini) width = miniWidth;
  const clippedStyle = `top:${clippedHeight};max-height:calc(100% - ${clippedHeight});`;
</script>

<style lang="scss" src="./index.scss">

</style>

<aside
  class="s-navigation-drawer {classes}"
  class:fixed
  class:right
  class:mini
  class:clipped
  on:hover
  style="width:{width};{clipped ? clippedStyle : ''};{style}">
  <slot name="prepend" />
  <div class="content">
    <slot />
  </div>
  <slot name="append" />
  <div class="border" />
</aside>

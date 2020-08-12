<script>
  let classes = '';
  export let value = 0;
  export let active = true;
  export let indeterminate = false;
  export let height = '4px';
  export let backgroundOpacity = 0.3;
  export let backgroundColor = 'primary-color';
  export let color = 'primary-color';
  export let buffer = 100;
  export let reversed = false;
  export let stream = false;
  export let rounded = false;
  export let striped = false;
  export let style = '';
  export { classes as class };
</script>

<style lang="scss" src="./index.scss">

</style>

<div
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow={value}
  class="s-progress-linear {classes}"
  class:inactive={!active}
  class:reversed
  class:rounded
  style="height:{height};{style}">
  <div
    class="background {backgroundColor}"
    style="opacity:{backgroundOpacity};{reversed ? 'right' : 'left'}:{value}%;width:{buffer - value}%" />

  {#if indeterminate}
    <div class={color}>
      <div class="indeterminate long" />
      <div class="indeterminate short" />
    </div>
  {:else}
    <div class="determinate {color}" class:striped style="width:{value}%" />
  {/if}

  <div class="s-progress-linear__content">
    <slot />
  </div>

  {#if stream}
    <div class="stream {color}" style="width:{100 - buffer}%" />
  {/if}
</div>

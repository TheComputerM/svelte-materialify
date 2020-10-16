<script>
  import BackgroundColor from '../../internal/BackgroundColor';

  let klass = '';
  export { klass as class };
  export let value = 0;
  export let active = true;
  export let indeterminate = false;
  export let height = '4px';
  export let backgroundColor = 'primary';
  export let backgroundOpacity = 0.3;
  export let color = backgroundColor;
  export let buffer = 100;
  export let reversed = false;
  export let stream = false;
  export let rounded = false;
  export let striped = false;
  export let style = '';
</script>

<style lang="scss" src="./ProgressLinear.scss">
</style>

<div
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow={value}
  class="s-progress-linear {klass}"
  class:inactive={!active}
  class:reversed
  class:rounded
  style="height:{height};{style}">
  <div
    use:BackgroundColor={backgroundColor}
    class="background"
    style="opacity:{backgroundOpacity};{reversed ? 'right' : 'left'}:{value}%;width:{buffer - value}%" />

  {#if indeterminate}
    <div use:BackgroundColor={color}>
      <div class="indeterminate long" />
      <div class="indeterminate short" />
    </div>
  {:else}
    <div
      use:BackgroundColor={color}
      class="determinate"
      class:striped
      style="width:{value}%" />
  {/if}

  <div class="s-progress-linear__content">
    <slot />
  </div>

  {#if stream}
    <div class="stream {color}" style="width:{100 - buffer}%" />
  {/if}
</div>

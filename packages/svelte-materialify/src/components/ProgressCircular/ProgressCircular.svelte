<script>
  import TextColor from '../../internal/TextColor';

  let klass = '';
  export { klass as class };
  export let indeterminate = false;
  export let color = 'secondary';
  export let rotate = 0;
  export let size = 32;
  export let value = 0;
  export let width = 4;
  export let style = '';

  const radius = 20;
  const circumference = 2 * 3.1416 * radius;
  const viewBoxSize = radius / (1 - Number(width) / +size);
  const strokeWidth = (Number(width) / +size) * viewBoxSize * 2;
  const strokeDashOffset = ((100 - value) / 100) * circumference;

  const circleProps = {
    fill: 'transparent',
    cx: 2 * viewBoxSize,
    cy: 2 * viewBoxSize,
    r: radius,
    'stroke-width': strokeWidth,
    'stroke-dasharray': circumference,
  };
</script>

<style lang="scss" src="./ProgressCircular.scss">
</style>

<div
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow={value}
  use:TextColor={color}
  class="s-progress-circular {klass}"
  class:indeterminate
  style="width:{size}px;height:{size}px;{style}">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="{viewBoxSize}
    {viewBoxSize}
    {2 * viewBoxSize}
    {2 * viewBoxSize}"
    style="transform: rotate({rotate}deg)">
    {#if !indeterminate}
      <circle class="underlay" {...circleProps} stroke-dashoffset="0" />
    {/if}

    <circle class="overlay" {...circleProps} stroke-dashoffset={strokeDashOffset} />
  </svg>

  <div class="s-progress-circular__content">
    <slot />
  </div>
</div>

<script>
  export let indeterminate = false;
  export let rotate = 0;
  export let size = 32;
  export let value = 0;
  export let width = 4;

  let radius = 20;
  let circumference = 2 * 3.1416 * radius;
  let viewBoxSize = radius / (1 - Number(width) / +size);
  let strokeWidth = (Number(width) / +size) * viewBoxSize * 2;
  let strokeDashOffset = ((100 - value) / 100) * circumference;

  let circleProps = {
    fill: "transparent",
    cx: 2 * viewBoxSize,
    cy: 2 * viewBoxSize,
    r: radius,
    "stroke-width": strokeWidth,
    "stroke-dasharray": circumference,
  };
</script>

<style lang="scss" src="./index.scss">

</style>

<div
  class="s-progress-circular"
  class:indeterminate
  role="progressbar"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow={value}
  style="width:{size}px;height:{size}px">

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

    <circle
      class="overlay"
      {...circleProps}
      stroke-dashoffset={strokeDashOffset} />
  </svg>

  <div class="content">
    <slot></slot>
  </div>
</div>

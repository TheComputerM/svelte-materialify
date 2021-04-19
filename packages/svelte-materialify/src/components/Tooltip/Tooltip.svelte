<script>
  import { onMount } from 'svelte';
  import BackgroundColor from '../../internal/BackgroundColor';

  let klass = '';
  export { klass as class };
  export let color = 'default';
  export let active = false;
  export let top = false;
  export let bottom = false;
  export let left = false;
  export let right = false;

  let innerWidth;
  let innerHeight;
  let scrollX;
  let scrollY;
  let activator;
  let tooltip;

  const calcXOverflow = (calculatedLeft, width) => {
    const xOverflow = calculatedLeft + width - innerWidth + 12;
    let newLeft = calculatedLeft;

    if ((!left || right) && xOverflow > 0) {
      newLeft = Math.max(calculatedLeft - xOverflow, 0);
    } else {
      newLeft = Math.max(calculatedLeft, 12);
    }

    return newLeft + scrollX;
  };

  const calcYOverflow = (calculatedTop) => {
    const toTop = scrollY + innerHeight;
    const tooltipHeight = tooltip.offsetHeight;
    const totalHeight = calculatedTop + tooltipHeight;
    const isOverflowing = toTop < totalHeight;
    let newTop = calculatedTop;

    // If overflowing bottom and offset
    if (isOverflowing && activator.top > tooltipHeight) {
      newTop = scrollY + (activator.top - tooltipHeight);
      // If overflowing bottom
    } else if (isOverflowing) {
      newTop = toTop - tooltipHeight - 12;
      // If overflowing top
    } else if (calculatedTop < scrollY) {
      newTop = scrollY + 12;
    }

    return newTop < 12 ? 12 : newTop;
  };

  const calculateLeft = () => {
    const activatorLeft = activator.getBoundingClientRect().x + scrollX;
    let calculatedLeft = 0;

    if (top || bottom) {
      calculatedLeft =
        activatorLeft + activator.offsetWidth / 2 - tooltip.offsetWidth / 2;
    } else if (left || right) {
      calculatedLeft =
        activatorLeft +
        (right ? activator.offsetWidth : -tooltip.offsetWidth) +
        (right ? 10 : -10);
    }

    return `${calcXOverflow(calculatedLeft, tooltip.offsetWidth)}px`;
  };

  const calculateTop = () => {
    const activatorTop = activator.getBoundingClientRect().y + scrollY;
    let calculatedTop = 0;

    if (top || bottom) {
      calculatedTop =
        activatorTop +
        (bottom ? activator.offsetHeight : -tooltip.offsetHeight) +
        (bottom ? 10 : -10);
    } else if (left || right) {
      calculatedTop =
        activatorTop + activator.offsetHeight / 2 - tooltip.offsetHeight / 2;
    }

    return `${calcYOverflow(calculatedTop)}px`;
  };

  const updateTooltipPosition = () => {
    tooltip.style.left = calculateLeft();
    tooltip.style.top = calculateTop();
  };

  const handleMouseEnter = () => {
    active = true;
  };

  const handleMouseLeave = () => {
    active = false;
  };

  const handleResize = () => {
    if (active) {
      updateTooltipPosition();
    }
  };

  const handleActiveUpdate = () => ({
    update: () => {
      if (active) {
        updateTooltipPosition();
      }
    },
  });
  onMount(() => {
    document.body.appendChild(tooltip);
    updateTooltipPosition();

    return () => document.body.removeChild(tooltip);
  });
</script>

<style lang="scss" src="./Tooltip.scss" global>
</style>

<svelte:window
  bind:innerWidth
  bind:innerHeight
  bind:scrollX
  bind:scrollY
  on:resize={handleResize} />

<div
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  bind:this={activator}
  class="s-tooltip__wrapper">
  <!-- Slot for the element that display the tooltip -->
  <slot />
</div>

<span
  bind:this={tooltip}
  class="s-tooltip {klass}"
  class:active
  class:bottom
  class:top
  class:left
  class:right
  use:handleActiveUpdate={active}
  use:BackgroundColor={color}>
  <!-- Slot for the content of the tooltip -->
  <slot name="tip" />
</span>

<script>
  import ClickOutside from '../../actions/ClickOutside';
  import { onMount, setContext, createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';

  // Classes to add to menu.
  let klass = '';
  export { klass as class };

  // The menu's active state.
  export let active = false;

  // Makes the menu appear where the mouse was clicked.
  export let absolute = false;

  // The transition function for the menu.
  export let transition = fade;

  // Options for the transition when menu opens.
  export let inOpts = { duration: 250 };

  // Options for the transition when menu closes.
  export let outOpts = { duration: 200 };

  // Offsets the menu on x-axis when true.
  export let offsetX = false;

  // Offsets the menu on y-axis when true.
  export let offsetY = true;

  // Offsets the menu on x-axis by some value.
  export let nudgeX = 0;

  // Offsets the menu on y-axis by some value.
  export let nudgeY = 0;

  // Designates whether menu should open on activator click.
  export let openOnClick = true;

  // Designates whether menu should open and close on activator hover.
  export let hover = false;

  // Designates if menu should close on outside-activator click.
  export let closeOnClickOutside = true;

  // Designates if menu should close when its content is clicked.
  export let closeOnClick = true;

  // Aligns the component with respect to its bottom.
  export let bottom = false;

  // Aligns the component with respect to its right.
  export let right = false;

  // Removed the border radius.
  export let tile = false;

  // Disables the menu.
  export let disabled = false;

  // The z-index of the menu
  export let zIndex = 8;

  // Styles for the menu.
  export let style = '';

  let origin = 'top left';
  let position;
  let wrapper;
  const dispatch = createEventDispatcher();
  const align = { x: right ? 'right' : 'left', y: bottom ? 'bottom' : 'top' };

  setContext('S_ListItemRole', 'menuitem');
  setContext('S_ListItemRipple', true);

  // For opening the menu
  function open(posX = 0, posY = 0) {
    active = true;
    const rect = wrapper.getBoundingClientRect();
    let x = nudgeX;
    let y = nudgeY;
    if (absolute) {
      x += posX;
      y += posY;
    } else {
      if (offsetX) x += rect.width;
      if (offsetY) y += rect.height;
    }

    position = `${align.y}:${y}px;${align.x}:${x}px`;
    origin = `${align.y} ${align.x}`;
    /**
     * Event when menu is opened.
     * @returns Nothing
     */
    dispatch('open');
  }

  // For closing the menu.
  function close() {
    active = false;
    /**
     * Event when menu is closed.
     * @returns Nothing
     */
    dispatch('close');
  }

  // When the activator slot is clicked.
  function triggerClick(e) {
    if (!disabled) {
      if (active) {
        close();
      } else if (openOnClick) {
        open(e.offsetX, e.offsetY);
      }
    }
  }

  // When the menu itself is clicked.
  function menuClick() {
    if (active && closeOnClick) close();
  }

  // When user clicked somewhere outside the menu.
  function clickOutsideMenu() {
    if (active && closeOnClickOutside) close();
  }

  onMount(() => {
    const trigger = wrapper.querySelector("[slot='activator']");
    // Opening the menu if active is set to true.
    if (active) open();

    trigger.addEventListener('click', triggerClick, { passive: true });
    if (hover) {
      wrapper.addEventListener('mouseenter', open, { passive: true });
      wrapper.addEventListener('mouseleave', close, { passive: true });
    }

    return () => {
      trigger.removeEventListener('click', triggerClick);
      if (hover) {
        wrapper.removeEventListener('mouseenter', open);
        wrapper.removeEventListener('mouseleave', close);
      }
    };
  });
</script>

<style lang="scss" src="./Menu.scss" global>
</style>

<div
  class="s-menu__wrapper"
  bind:this={wrapper}
  use:ClickOutside
  on:clickOutside={clickOutsideMenu}>
  <!-- Slot for the trigger/activator. -->
  <slot name="activator" />

  {#if active}
    <div
      class="s-menu {klass}"
      role="menu"
      class:tile
      on:click={menuClick}
      in:transition={inOpts}
      out:transition={outOpts}
      style="{position};transform-origin:{origin};z-index:{zIndex};{style}">
      <slot />
    </div>
  {/if}
</div>

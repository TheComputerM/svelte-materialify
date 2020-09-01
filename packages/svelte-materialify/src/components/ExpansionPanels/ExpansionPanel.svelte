<script context="module">
  const down = 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z';
</script>

<script>
  import { getContext, onDestroy, onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import Icon from '../Icon';

  // Classes to add to the panel.
  let klass = '';
  export { klass as class };

  // Options for the slide transition.
  export let slideOpts = {};

  // Make the panel readonly.
  export let readonly = false;

  // Disable the panel.
  export let disabled = false;

  // Styles to add to the panel.
  export let style = null;

  let panel;
  let index;
  let active = false;

  const {
    Value,
    Disabled,
    selectPanel,
    checkIfActive,
  } = getContext('S_ExpansionPanel');

  function toggle() {
    selectPanel(index);
  }

  // Inheriting the disabled value from parent.
  const unsub1 = Disabled.subscribe((x) => {
    disabled = x == null ? disabled : x;
  });

  // Checking if panel is active everytime the value has changed.
  const unsub2 = Value.subscribe(() => {
    active = checkIfActive(index);
  });

  onMount(() => {
    index = Array.from(panel.parentNode.children).indexOf(panel);
  });

  onDestroy(() => {
    unsub1();
    unsub2();
  });
</script>

<style lang="scss" src="./ExpansionPanel.scss">

</style>

<div
  bind:this={panel}
  class="s-expansion-panel {klass}"
  aria-expanded={active}
  class:active
  class:readonly
  class:disabled
  {style}>
  <button
    type="button"
    class="s-expansion-panel__header"
    tabindex={disabled ? -1 : null}
    on:click={toggle}>
    <!-- Slot for the title of panel. -->
    <slot name="header" />
    <div class="s-expansion-panel__icon">
      <!-- Slot for the icon at the right of the header. -->
      <slot name="icon" {active}>
        <Icon {disabled} path={down} rotate={active ? 180 : 0} />
      </slot>
    </div>
  </button>
  {#if active}
    <div class="s-expansion-panel__content" transition:slide={slideOpts}>
      <slot />
    </div>
  {/if}
</div>

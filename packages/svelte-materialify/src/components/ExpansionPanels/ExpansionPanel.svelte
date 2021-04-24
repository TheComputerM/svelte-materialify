<script>
  import { getContext } from 'svelte';
  import { EXPANSION_PANELS } from './ExpansionPanels.svelte';
  import { slide } from 'svelte/transition';
  import Icon from '../Icon';
  import down from '../../internal/Icons/down';

  export let active = false;
  export let single = false

  if(!single) {

    const { values, Disabled, selectPanel, index } = getContext(EXPANSION_PANELS);

    const value = index();

    // Inheriting the disabled value from parent.
    $: disabled = $Disabled == null ? disabled : $Disabled;

    // Checking if panel is active everytime the value has changed.
    $: active = $values.includes(value);

    function toggle() {
      selectPanel(value);
    }
  }

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

</script>

<style lang="scss" src="./ExpansionPanel.scss" global>
</style>

<div
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
    <div
      class="s-expansion-panel__content"
      transition:slide={slideOpts}
      on:introstart
      on:outrostart
      on:introend
      on:outroend>
      <slot />
    </div>
  {/if}
</div>

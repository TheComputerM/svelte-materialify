<script context="module">
  const down = 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z';
</script>

<script>
  import { getContext, createEventDispatcher, onDestroy } from 'svelte';
  import { slide } from 'svelte/transition';
  import Icon from '../Icon';

  // Classes to add to the panel.
  let classes = '';
  export { classes as class };

  // Options for the slide transition.
  export let slideOpts = {};

  // Make the panel readonly.
  export let readonly = false;

  // Disable the panel.
  export let disabled = false;

  // Styles to add to the panel.
  export let style = null;

  let active = false;
  let mandatory;
  let multiple;
  let panel;
  let index;
  let PanelContainer;
  let ActivePanels;
  let Settings;

  ({ PanelContainer, ActivePanels, Settings } = getContext('PanelOptions'));

  const dispatch = createEventDispatcher();

  const SettingsUnsub = Settings.subscribe(
    ({ Multiple, Mandatory, Disabled }) => {
      if (Disabled != null) disabled = Disabled;
      mandatory = Mandatory;
      multiple = Multiple;
    },
  );

  const PanelContainerUnsub = PanelContainer.subscribe((x) => {
    if (x) {
      const panels = x.querySelectorAll('.s-expansion-panel');
      index = Array.from(panels).indexOf(panel);
      if ($ActivePanels.includes(index)) active = true;
      PanelContainerUnsub();
    }
  });

  const ActivePanelsUnsub = ActivePanels.subscribe((x) => {
    if (x.includes(index)) active = true;
    else active = false;
    /**
     * Event triggered when the state of the panel has changed.
     * @returns {active,index}
    */
    dispatch('change', { active, index });
  });

  function toggle() {
    if ($ActivePanels.includes(index)) {
      if (!(mandatory && $ActivePanels.length === 1)) {
        ActivePanels.update((x) => x.filter((i) => i !== index));
      }
    } else if (multiple) {
      ActivePanels.update((x) => [...x, index]);
    } else {
      ActivePanels.set([index]);
    }
  }

  onDestroy(() => {
    SettingsUnsub();
    ActivePanelsUnsub();
  });
</script>

<style lang="scss" src="./ExpansionPanel.scss">

</style>

<div
  bind:this={panel}
  class="s-expansion-panel {classes}"
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
        <Icon {disabled} path={down} rotate={active ? '180deg' : '0deg'} />
      </slot>
    </div>
  </button>
  {#if active}
    <div class="s-expansion-panel__content" transition:slide={slideOpts}>
      <slot />
    </div>
  {/if}
</div>

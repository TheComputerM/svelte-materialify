<script>
  import { onMount, onDestroy, setContext } from 'svelte';
  import { writable } from 'svelte/store';

  // Classes to add to panel container.
  let classes = '';
  export { classes as class };

  // 0 based indices of the active panels.
  export let value = [];

  // Make multiple panels active at the same time.
  export let multiple = false;

  // Make is necessary for at least one panel to be selected.
  export let mandatory = false;

  // Accordion style panels.
  export let accordion = false;

  // Make panels popout when active.
  export let popout = false;

  // Make panels inset when active.
  export let inset = false;

  // Remove shadow from panels.
  export let flat = false;

  // Remove border radius from panels.
  export let tile = false;

  // Disable all the panels.
  export let disabled = null;

  // Styles to add to the panel container.
  export let style = null;

  let panelContainer;
  const PanelContainer = writable();
  const ActivePanels = writable(value);
  const Settings = writable({
    Multiple: multiple,
    Mandatory: mandatory,
    Disabled: disabled,
  });

  const unsubscribe = ActivePanels.subscribe((x) => {
    value = x;
  });
  $: ActivePanels.set(value);
  $: Settings.set({
    Multiple: multiple,
    Mandatory: mandatory,
    Disabled: disabled,
  });

  setContext('PanelOptions', {
    PanelContainer,
    ActivePanels,
    Settings,
  });

  onMount(() => {
    PanelContainer.set(panelContainer);
  });

  onDestroy(unsubscribe);
</script>

<style lang="scss" src="./ExpansionPanels.scss">

</style>

<div
  bind:this={panelContainer}
  class="s-expansion-panels {classes}"
  class:accordion
  class:popout
  class:inset
  class:flat
  class:tile
  {style}>
  <slot />
</div>

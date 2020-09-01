<script>
  import { createEventDispatcher, setContext } from 'svelte';
  import { writable } from 'svelte/store';

  // Classes to add to panel container.
  let klass = '';
  export { klass as class };

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

  const dispatch = createEventDispatcher();
  const Value = writable(value);
  const Disabled = writable(disabled);

  $: Value.set(value);
  $: Disabled.set(disabled);

  setContext('S_ExpansionPanel', {
    Value,
    Disabled,
    selectPanel: (index) => {
      if (value.includes(index)) {
        if (!(mandatory && value.length === 1)) {
          value.splice(value.indexOf(index), 1);
          value = value;
          dispatch('change', { index, active: false });
        }
      } else {
        if (multiple) {
          value.push(index);
          value = value;
        } else {
          value = [index];
        }
        dispatch('change', { index, active: true });
      }
    },
    checkIfActive: (index) => {
      if (value.includes(index)) return true;
      return false;
    },
  });
</script>

<style lang="scss" src="./ExpansionPanels.scss">

</style>

<div
  class="s-expansion-panels {klass}"
  class:accordion
  class:popout
  class:inset
  class:flat
  class:tile
  {style}>
  <slot />
</div>

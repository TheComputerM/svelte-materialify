<script context="module">
  import uid from '../../internal/uid';
</script>

<script>
  import TextColor from '../../internal/TextColor';

  // Add class to switch wrapper.
  let klass = '';
  export { klass as class };

  // Color of the switch when active.
  export let color = 'primary';

  // The value for the switch.
  export let value = null;

  // Combines components into a single group.
  export let group = [];

  // Get/Set checked state.
  export let checked = false;

  // make switch inset.
  export let inset = false;

  // Makes the switch dense.
  export let dense = false;

  // Disables the switch.
  export let disabled = false;

  // Id for switch.
  export let id = null;

  // Styles to add to switch.
  export let style = null;

  // The <input/> element of the switch.
  export let inputElement = null;

  id = id || `s-switch-${uid(5)}`;

  const hasValidGroup = Array.isArray(group);
  if (hasValidGroup && value) {
    if (group.indexOf(value) >= 0) checked = true;
  }

  function groupUpdate() {
    if (hasValidGroup && value) {
      const i = group.indexOf(value);
      if (i < 0) {
        group.push(value);
      } else {
        group.splice(i, 1);
      }
      group = group;
    }
  }
</script>

<style lang="scss" src="./Switch.scss" global>
</style>

<div class="s-switch {klass}" {style}>
  <div
    class="s-switch__wrapper"
    class:dense
    class:inset
    class:disabled
    use:TextColor={checked && color}>
    <input
      type="checkbox"
      bind:this={inputElement}
      role="switch"
      aria-checked={checked}
      bind:checked
      {id}
      {disabled}
      {value}
      on:change={groupUpdate}
      on:change />
    <div class="s-switch__track" />
    <div class="s-switch__thumb" />
  </div>
  <label for={id}>
    <slot />
  </label>
</div>

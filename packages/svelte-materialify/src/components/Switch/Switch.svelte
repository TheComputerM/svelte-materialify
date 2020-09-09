<script context="module">
  import uid from 'uid';
</script>

<script>
  // Add class to switch wrapper.
  let klass = '';
  export { klass as class };

  // Classes to add to switch when checked.
  export let activeClass = 'primary-text';

  // The value for the switch.
  export let value = null;

  // Combines components into a single group.
  export let group = [];

  // Get/Set checked state.
  export let checked = false;

  // Makes the switch dense.
  export let dense = false;

  // Disables the switch.
  export let disabled = false;

  // Id for switch.
  export let id = null;

  // Styles to add to switch.
  export let style = null;

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

<style lang="scss" src="./Switch.scss">
</style>

<div class="s-switch {klass}" class:dense class:disabled {style}>
  <div class="s-switch__wrapper">
    <div class="s-switch__track {checked ? activeClass : ''}" />
    <input
      type="checkbox"
      role="switch"
      aria-checked={checked}
      bind:checked
      {id}
      {disabled}
      {value}
      on:change={groupUpdate}
      on:change />
    <div class="s-switch__thumb {checked ? activeClass : ''}" />
  </div>
  <label for={id}>
    <slot />
  </label>
</div>

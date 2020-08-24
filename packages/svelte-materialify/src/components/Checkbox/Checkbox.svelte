<script context="module">
  const uuid = () => {
    const output = Math.round(Math.random() * 4999 + 1000);
    return output;
  };

  const check = 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z';
  const dash = 'M4,10.5L4,13.5L20,13.5L20,10.5L4,10.5Z';
</script>

<script>
  import Ripple from '../../actions/Ripple';

  // Add class to checkbox wrapper.
  let classes = '';
  export { classes as class };

  // Class to add to checkbox when it is checked or indeterminate.
  export let activeClass = 'primary-text';

  // Get/Set checked state.
  export let checked = false;

  // Get/Set indeterminate state.
  export let indeterminate = false;

  // Make the checkbox disabled.
  export let disabled = false;

  // The value for the checkbox.
  export let value = null;

  // Combines components into a single group.
  export let group = null;

  // Id for the checkbox, defaults to a random uuid.
  export let id = null;

  // Styles to add to checkbox wrapper.
  export let style = null;

  id = id || `s-checkbox-${uuid()}`;

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

<style lang="scss" src="./Checkbox.scss">

</style>

<div class="s-checkbox {classes}" {style}>
  <div
    class="s-checkbox__wrapper {checked || indeterminate ? activeClass : ''}"
    use:Ripple={{ centered: true }}>
    <input
      type="checkbox"
      role="checkbox"
      bind:checked
      bind:indeterminate
      {id}
      {disabled}
      {value}
      on:change={groupUpdate}
      on:change />
    <div class="s-checkbox__background">
      {#if checked || indeterminate}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path d={checked ? check : dash} />
        </svg>
      {/if}
    </div>
  </div>
  <label for={id}>
    <slot />
  </label>
</div>

<script context="module">
  const uuid = () => {
    const output = Math.round(Math.random() * 4999 + 1000);
    return output;
  };
</script>

<script>
  import Ripple from '../../actions/Ripple';

  // Add class to radio wrapper.
  let classes = '';
  export { classes as class };

  // Class to add to radio when it is checked.
  export let activeClass = 'primary-text';

  // Disables the radio.
  export let disabled = false;

  // Bind radio to a group.
  export let group = [];

  // Value for the radio.
  export let value = null;

  // Id for the checkbox.
  export let id = null;

  // Styles for the radio wrapper.
  export let style = null;

  id = id || `s-radio-${uuid()}`;
  $: active = group === value;
</script>

<style lang="scss" src="./Radio.scss">

</style>

<div class="s-radio" {style}>
  <div
    class="s-radio__wrapper {classes}
    {active ? activeClass : ''}"
    class:disabled
    use:Ripple={{ centered: true }}>
    <input
      type="radio"
      role="radio"
      aria-selected={active}
      bind:group
      {id}
      {value}
      {disabled} />
    <div class="s-radio__background" />
  </div>
  <label for={id}>
    <slot />
  </label>
</div>

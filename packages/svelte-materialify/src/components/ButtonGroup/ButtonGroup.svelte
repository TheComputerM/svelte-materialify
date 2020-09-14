<script>
  import ItemGroup from '../ItemGroup';

  // Classes to add to button group.
  let klass = '';
  export { klass as class };

  // Does not remove box shadow.
  export let elevated = false;

  // Remove border.
  export let borderless = false;

  // Remove border radius.
  export let tile = false;

  // Add border radius to the first and last button.
  export let rounded = false;

  // Identifies buttons as active with this class.
  export let activeClass = 'active';

  // Array or string with the active button(s) value.
  export let value = [];

  // Forces a value to always be selected (if available).
  export let mandatory = false;

  // Allow multiple selections, makes the value prop an array.
  export let multiple = false;

  // Maximun number of selections.
  export let max = Infinity;

  // Styles to apply to button group.
  export let style = null;
</script>

<style lang="scss" src="./ButtonGroup.scss" global>
</style>

<ItemGroup on:change bind:value {activeClass} {multiple} {mandatory} {max}>
  <div
    class="s-btn-group {klass}"
    class:elevated
    class:borderless
    class:tile
    class:rounded
    {style}>
    <slot />
  </div>
</ItemGroup>

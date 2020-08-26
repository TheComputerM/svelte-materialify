<script context="module">
  const uuid = () => {
    const output = Math.round(Math.random() * 4999 + 1000);
    return output;
  };
</script>

<script>
  import Input from '../Input';

  export let value = '';
  export let filled = false;
  export let solo = false;
  export let outlined = false;
  export let flat = false;
  export let dense = false;
  export let rounded = false;
  export let disabled = false;
  export let readonly = false;
  export let placeholder = null;
  // export let helper = "";
  export let id = null;

  id = id || `s-input-${uuid()}`;
  let focused = false;
  let labelActive = !!placeholder;

  function onFocus() {
    focused = true;
    labelActive = true;
  }

  function onBlur() {
    focused = false;
    if (!value && !placeholder) labelActive = false;
  }

  $: inputClasses = {
    filled,
    solo,
    outlined,
    flat,
    rounded,
    dense,
    readonly,
    disabled,
  };
</script>

<style lang="scss" src="./TextField.scss">

</style>

<Input class="s-text-field" classes={inputClasses}>
  <div slot="prepend">
    <slot name="prepend-outer" />
  </div>
  <div class="s-text-field__wrapper" class:focused>
    <slot name="prepend" />
    <label for={id} class:active={labelActive}>
      <slot />
    </label>
    <input
      type="text"
      bind:value
      {placeholder}
      {id}
      on:focus={onFocus}
      on:blur={onBlur} />
    <slot name="append" />
  </div>
  <div slot="append">
    <slot name="append-outer" />
  </div>
</Input>

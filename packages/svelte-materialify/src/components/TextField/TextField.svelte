<script context="module">
  const uuid = () => {
    const output = Math.round(Math.random() * 4999 + 1000);
    return output;
  };
  const clearIcon = 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z';
</script>

<script>
  import Input from '../Input';
  import Icon from '../Icon';

  export let value = '';
  export let color = null;
  export let filled = false;
  export let solo = false;
  export let outlined = false;
  export let flat = false;
  export let dense = false;
  export let rounded = false;
  export let clearable = false;
  // export let disabled = false;
  // export let readonly = false;
  export let placeholder = null;
  // export let helper = "";
  export let id = null;

  id = id || `s-input-${uuid()}`;
  let labelActive = !!placeholder || value;

  function onFocus() {
    labelActive = true;
  }

  function onBlur() {
    if (!value && !placeholder) labelActive = false;
  }

  function clear() {
    value = '';
    if (!placeholder) labelActive = false;
  }
</script>

<style lang="scss" src="./TextField.scss">

</style>

<Input class="s-text-field" {color}>
  <div slot="prepend">
    <slot name="prepend-outer" />
  </div>
  <div
    class="s-text-field__wrapper"
    class:filled
    class:solo
    class:outlined
    class:flat
    class:rounded
    class:dense>
    <slot name="prepend" />
    <div class="s-text-field__input">
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
    </div>

    {#if clearable && value !== ''}
      <div on:click={clear} style="cursor:pointer">
        <slot name="clear-icon">
          <Icon path={clearIcon} />
        </slot>
      </div>
    {/if}

    <slot name="append" />
  </div>
  <div slot="append">
    <slot name="append-outer" />
  </div>
</Input>

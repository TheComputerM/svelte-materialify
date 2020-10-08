<script context="module">
  import uid from 'uid';

  const clearIcon =
    'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z';
</script>

<script>
  import Input from '../Input';
  import Icon from '../Icon';

  let klass = '';
  export { klass as class };
  export let value = '';
  export let color = 'primary';
  export let filled = false;
  export let solo = false;
  export let outlined = false;
  export let flat = false;
  export let dense = false;
  export let rounded = false;
  export let clearable = false;
  export let readonly = false;
  export let disabled = false;
  export let placeholder = null;
  export let hint = '';
  export let counter = false;
  export let rules = [];
  export let validateOnBlur = false;
  export let error = false;
  export let id = `s-input-${uid(5)}`;
  export let style = null;

  let focused = false;
  $: labelActive = !!placeholder || value || focused;
  let messages = [];

  function checkRules() {
    messages = rules.map((r) => r(value)).filter((r) => typeof r === 'string');
    if (messages.length) error = true;
    else {
      error = false;
    }
  }

  function onFocus() {
    focused = true;
  }

  function onBlur() {
    focused = false;
    if (validateOnBlur) checkRules();
  }

  function clear() {
    value = '';
  }

  function onInput() {
    if (!validateOnBlur) checkRules();
  }
</script>

<Input
  class="s-text-field {klass}"
  {color}
  {readonly}
  {disabled}
  {dense}
  {value}
  {hint}
  {counter}
  {messages}
  {error}
  {style}>
  <!-- Slot for prepend outside the input. -->
  <span slot="prepend-outer">
    <slot name="prepend-outer" />
  </span>
  <div
    class="s-text-field__wrapper"
    class:filled
    class:solo
    class:outlined
    class:flat
    class:rounded>
    <!-- Slot for prepend inside the input. -->
    <slot name="prepend" />

    <div class="s-text-field__input">
      <label for={id} class:active={labelActive}>
        <slot />
      </label>
      <slot name="content" />
      <input
        type="text"
        bind:value
        {placeholder}
        {id}
        {readonly}
        {disabled}
        on:focus={onFocus}
        on:blur={onBlur}
        on:input={onInput}
        on:focus
        on:blur
        on:input
        on:change
        {...$$restProps} />
    </div>

    {#if clearable && value !== ''}
      <div on:click={clear} style="cursor:pointer">
        <!-- Slot for the icon when `clearable` is true. -->
        <slot name="clear-icon">
          <Icon path={clearIcon} />
        </slot>
      </div>
    {/if}

    <!-- Slot for append inside the input. -->
    <slot name="append" />
  </div>
  <!-- Slot for append outside the input. -->
  <span slot="append-outer">
    <slot name="append-outer" />
  </span>
</Input>

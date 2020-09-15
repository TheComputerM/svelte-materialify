<script context="module">
  import uid from 'uid';

  const clearIcon =
    'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z';
</script>

<script>
  import Input from '../Input';
  import Icon from '../Icon';

  // Value of the text input.
  export let value = '';

  // The color of the input when active.
  export let color = null;

  // Changes the variant of the input to filled.
  export let filled = false;

  // Changes the variant of the input to solo.
  export let solo = false;

  // Changes the variant of the input to outlined.
  export let outlined = false;

  // Removes any shadow from the input.
  export let flat = false;

  // Reduces the input height.
  export let dense = false;

  // Adds a border radius to the input.
  export let rounded = false;

  // Add input clear functionality.
  export let clearable = false;

  // Puts input in readonly state.
  export let readonly = false;

  // Disable the input.
  export let disabled = false;

  // The input placeholder content.
  export let placeholder = null;

  // Hint text.
  export let hint = '';

  /**
   * Creates counter for input length.
   * @type {number}
   */
  export let counter = false;

  /**
   * An array of functions which take input value as arguement and return error message.
   * @type {Array}
   */
  export let rules = [];

  // Delays validation till blur.
  export let validateOnBlur = false;

  // Error state of the input.
  export let error = false;

  // Id of the text input.
  export let id = null;

  id = id || `s-input-${uid(5)}`;
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
  class="s-text-field"
  {color}
  {readonly}
  {disabled}
  {dense}
  {value}
  {hint}
  {counter}
  {messages}
  {error}>
  <div slot="prepend">
    <!-- Slot for prepend outside the input. -->
    <slot name="prepend-outer" />
  </div>
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
  <div slot="append">
    <!-- Slot for append outside the input. -->
    <slot name="append-outer" />
  </div>
</Input>

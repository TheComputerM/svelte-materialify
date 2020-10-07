<script context="module">
  import uid from 'uid';

  const clearIcon =
    'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z';
</script>

<script>
  import Input from '../Input';
  import Icon from '../Icon';

  export let value = '';
  export let color = 'primary';
  export let filled = false;
  export let solo = false;
  export let outlined = false;
  export let flat = false;
  export let rounded = false;
  export let clearable = false;
  export let readonly = false;
  export let rows = 5;
  export let autogrow = false;
  export let noResize = false;
  export let disabled = false;
  export let placeholder = null;
  export let hint = '';
  export let counter = false;
  export let rules = [];
  export let validateOnBlur = false;
  export let error = false;
  export let id = null;

  id = id || `s-input-${uid(5)}`;
  let labelActive = !!placeholder || value;
  let textarea;
  let messages = [];

  function checkRules() {
    messages = rules.map((r) => r(value)).filter((r) => typeof r === 'string');
    if (messages.length) error = true;
    else {
      error = false;
    }
  }

  function onFocus() {
    labelActive = true;
  }

  function onBlur() {
    if (!value && !placeholder) labelActive = false;
    if (validateOnBlur) checkRules();
  }

  function clear() {
    value = '';
    if (!placeholder) labelActive = false;
  }

  function onInput() {
    if (!validateOnBlur) checkRules();
    if (autogrow) {
      textarea.style.height = 0;
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }
</script>

<Input
  class="s-text-field s-textarea"
  {color}
  {readonly}
  {disabled}
  {value}
  {hint}
  {counter}
  {messages}
  {error}>
  <!-- Slot for prepend outside the input. -->
  <span slot="append-outer">
    <slot name="append-outer" />
  </span>
  <div
    class="s-text-field__wrapper"
    class:filled
    class:solo
    class:outlined
    class:flat
    class:rounded
    class:autogrow
    class:no-resize={noResize || autogrow}>
    <!-- Slot for prepend inside the input. -->
    <slot name="prepend" />

    <div class="s-text-field__input">
      <label for={id} class:active={labelActive}>
        <slot />
      </label>
      <textarea
        bind:this={textarea}
        type="text"
        bind:value
        {rows}
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
  <span slot="prepend-outer">
    <slot name="prepend-outer" />
  </span>
</Input>

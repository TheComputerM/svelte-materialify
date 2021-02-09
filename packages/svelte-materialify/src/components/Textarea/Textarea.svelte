<script>
  import Input from '../Input';
  import Icon from '../Icon';
  import uid from '../../internal/uid';
  import clearIcon from '../../internal/Icons/close';

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
  export let errorCount = 1;
  export let messages = [];
  export let validateOnBlur = false;
  export let error = false;
  export let success = false;
  export let id = `s-input-${uid(5)}`;
  export let style = null;
  export let textarea = null;

  let labelActive = !!placeholder || value;
  let errorMessages = [];

  function checkRules() {
    errorMessages = rules.map((r) => r(value)).filter((r) => typeof r === 'string');
    if (errorMessages.length) error = true;
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
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }
</script>

<Input
  class="s-text-field s-textarea"
  {color}
  {readonly}
  {disabled}
  {error}
  {success}
  {style}>
  <!-- Slot for prepend outside the input. -->
  <slot slot="prepend-outer" name="prepend-outer" />
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

  <div slot="messages">
    <div>
      <span>{hint}</span>
      {#each messages as message}<span>{message}</span>{/each}
      {#each errorMessages.slice(0, errorCount) as message}<span>{message}</span>{/each}
    </div>
    {#if counter}<span>{value.length} / {counter}</span>{/if}
  </div>

  <!-- Slot for append outside the input. -->
  <slot slot="append-outer" name="append-outer" />
</Input>

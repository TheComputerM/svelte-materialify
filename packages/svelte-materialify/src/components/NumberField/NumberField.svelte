<script>
  /**
   * A numeric input field.
   * 
   * @component NumberField
   */

import Input from '../Input';
  import Icon from '../Icon';
  import uid from '../../internal/uid';
  import clearIcon from '../../internal/Icons/close';

  let klass = '';
  /**
   * Class name(s) to add to the Input element
   * @type {string}
   */
  export { klass as class };
  /**
   * The value of the NumberField
   * @type {number}
   */
  export let value = null;
  /**
   * The lowest allowed number.
   * @type {number}
   */
  export let min = null;
  /**
   * The highest allowed number.
   * @type {number}
   */
  export let max = null;
  /**
   * The number by which to increment the value.
   * @type {number}
   */
  export let step = null;
  export let color = 'primary';
  /**
   * Whether the background is filled or not
   * @type {boolean}
   */
  export let filled = false;
  /**
   * Whether to display only the value, and not the label, if a value is present
   * @type {boolean}
   */
  export let solo = false;
  /**
   * Whether to outline the input area with a stroke.
   * @type {boolean}
   */
  export let outlined = false;
  /**
   * Use a flat/2-d display
   * @type {boolean}
   */
  export let flat = false;
  /**
   * Use a tighter (denser) layout
   * @type {boolean}
   */
  export let dense = false;
  /**
   * Round the edges
   * @type {boolean}
   */
  export let rounded = false;
  /**
   * Include an "x" to click and clear the input
   * @type {boolean}
   */
  export let clearable = false;
  /**
   * Restrict the field from user editing
   * @type {boolean}
   */
  export let readonly = false;
  export let disabled = false;
  /**
   * Placeholder value until input occurs
   * @type {string}
   */
  export let placeholder = null;
  /**
   * Hints just below the input
   * @type {string}
   */
  export let hint = '';
  /**
   * Additional messages to display just below the input
   * @type {string[]}
   */
  export let messages = [];
  /**
   * Array of callbacks used to validate the input; return a string to show error
   * rules = [ (value) => errorMessage || false ]
   * @type {function}
   */
  export let rules = [];
  /**
   * The maximum number of error messages to show at any given time.
   * @type {number}
   */
  export let errorCount = 1;
  /**
   * When true, wait until blur to check validation.
   * When false, validate on input
   * @type {boolean}
   */
  export let validateOnBlur = false;
  /**
   * Whether validation has failed/whether to apply error class
   * @readonly
   * @type {error}
   */
  export let error = false;
  /**
   * Whether to apply the success clas
   * @type {boolean}
   */
  export let success = false;
  export let id = `s-input-${uid(5)}`;
  /**
   * @type {string}
   */
  export let style = null;
  /**
   * @type {HTMLInputElement}
   */
  export let inputElement = null;

  let focused = false;
  $: labelActive = !!placeholder || value !== null || focused;
  let errorMessages = [];

  export function validate() {
    errorMessages = rules.map((r) => r(value)).filter((r) => typeof r === 'string');
    if (!inputElement.checkValidity()) {
      if (inputElement.badInput) {
        errorMessages.push('Please enter a number.');
      }
      if (inputElement.validity.rangeUnderflow) {
        errorMessages.push(`Must be ${min} or greater.`);
      }
      if (inputElement.validity.rangeOverflow) {
        errorMessages.push(`Must be ${max} or less.`);
      }
      if (inputElement.validity.stepMismatch) {
        errorMessages.push(`Must be an increment of ${step}`);
      }
      if (inputElement.validity.tooLong) {
        errorMessages.push('Too long.');
      }
      if (inputElement.validity.tooShort) {
        errorMessages.push('Too short.');
      }
    }
    if (errorMessages.length) error = true;
    else {
      error = false;
    }
    return error;
  }

  function onFocus() {
    focused = true;
  }

  function onBlur() {
    focused = false;
    if (validateOnBlur) validate();
  }

  function clear() {
    value = null;
  }

  function onInput() {
    if (!validateOnBlur) validate();
  }
</script>

<Input
  class="s-text-field {klass}"
  {color}
  {dense}
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
    class:rounded>
    <!-- Slot for prepend inside the input. -->
    <slot name="prepend" />

    <div class="s-text-field__input">
      <label for={id} class:active={labelActive}>
        <slot />
      </label>
      <slot name="content" />
      <!-- keypress Event is deprecated. Use keydown or keyup instead -->
      <input
        type=number
        bind:this={inputElement}
        bind:value
        {placeholder}
        {id}
        {readonly}
        {disabled}
        {min}
        {max}
        {step}
        on:focus={onFocus}
        on:blur={onBlur}
        on:input={onInput}
        on:focus
        on:blur
        on:input
        on:change
        on:keypress
        on:keydown
        on:keyup
        {...$$restProps} />
    </div>

    {#if clearable && value !== null}
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
  </div>

  <!-- Slot for append outside the input. -->
  <slot slot="append-outer" name="append-outer" />
</Input>
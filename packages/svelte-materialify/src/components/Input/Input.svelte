<script>
  let klass = '';
  export { klass as class };
  export let value = null;
  export let color = null;
  export let dense = false;
  export let readonly = false;
  export let disabled = false;
  export let counter = false;
  export let hint = '';
  export let messages = [];
  export let messagesCount = 1;
  export let error = false;
</script>

<style lang="scss" src="./Input.scss">
</style>

<div
  class="s-input {klass}"
  class:dense
  class:error
  class:readonly
  class:disabled
  style="--input-active-color:{color}">
  <slot name="prepend" />
  <div class="s-input__control">
    <div class="s-input__slot">
      <slot />
    </div>
    <div class="s-input__details">
      <div class="s-input__messages">
        {hint}
        {#each messages as message, i}
          {#if i < messagesCount}<span>{message}</span>{/if}
        {/each}
      </div>
      {#if counter}
        <div class="s-input__counter">{value.length} / {counter}</div>
      {/if}
    </div>
  </div>
  <slot name="append" />
</div>

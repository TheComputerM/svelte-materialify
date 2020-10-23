<script>
  import TextColor from '../../internal/TextColor';

  let klass = '';
  export { klass as class };
  export let color = null;
  export let dense = false;
  export let readonly = false;
  export let disabled = false;
  export let error = false;
  export let success = false;
  export let style = null;
</script>

<style lang="scss" global>
  @use "./Input.scss";
</style>

<div
  class="s-input {klass}"
  class:dense
  class:error
  class:success
  class:readonly
  class:disabled
  {style}
  use:TextColor={success ? 'success' : error ? 'error' : color}>
  <slot name="prepend-outer" />
  <div class="s-input__control">
    <div class="s-input__slot">
      <slot />
    </div>
    <div class="s-input__details">
      <slot name="messages" />
    </div>
  </div>
  <slot name="append-outer" />
</div>

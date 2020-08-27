<script>
  let classes = '';
  export { classes as class };
  export let color = null;
  export let disabled = false;
  export let messages = [];
</script>

<style lang="scss" src="./Input.scss">

</style>

<div class="s-input {classes}" class:disabled style="--input-active-color:{color}">
  <slot name="prepend" />
  <div class="s-input__control">
    <slot />
    <div class="s-input__messages">
      {#each messages as message}
        <span>{message}</span>
      {/each}
    </div>
  </div>
  <slot name="append" />
</div>

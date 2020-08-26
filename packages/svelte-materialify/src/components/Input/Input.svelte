<script context="module">
  function classnames(obj) {
    let out = '';
    Object.keys(obj).forEach((element) => {
      if (obj[element]) out += `${element} `;
    });
    return out;
  }
</script>

<script>
  let klass = '';
  export { klass as class };
  export let classes = {};
  export let disabled = false;
  export let messages = [];
</script>

<style lang="scss" src="./Input.scss">

</style>

<div class="s-input {klass} {classnames(classes)}" class:disabled>
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

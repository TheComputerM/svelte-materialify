<script>
  let classes = '';
  export let height = '56px';
  export let tile = false;
  export let flat = false;
  export let dense = false;
  export let prominent = false;
  export let fixed = false;
  export let absolute = false;
  export let collapsed = false;
  export let style = '';
  export { classes as class };

  $: if (dense) height = '48px';
  else if (prominent) height = '128px';
</script>

<style lang="scss" src="./index.scss">

</style>

<header
  class="s-app-bar {classes}"
  style="height:{height};{style}"
  class:tile
  class:flat
  class:dense
  class:prominent
  class:fixed
  class:absolute
  class:collapsed>
  <div class="s-app-bar__wrapper">
    <slot name="icon" />
    {#if !collapsed}
      <div class="s-app-bar__title">
        <slot name="title" />
      </div>
    {/if}
    <slot />
  </div>
  <slot name="extension" />
</header>

<script>
  import Style from '../../internal/Style';

  let klass = '';
  export { klass as class };
  export let height = '56px';
  export let tile = false;
  export let flat = false;
  export let dense = false;
  export let prominent = false;
  export let fixed = false;
  export let absolute = false;
  export let collapsed = false;
  export let style = '';
</script>

<style lang="scss" src="./AppBar.scss" global>
</style>

<header
  class="s-app-bar {klass}"
  class:tile
  class:flat
  class:dense
  class:prominent
  class:fixed
  class:absolute
  class:collapsed
  use:Style={{ 'app-bar-height': height }}
  {style}>
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

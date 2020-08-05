<script>
  let classes = '';
  export let inactive = false;
  export let size = '24px';
  export let md = false;
  export let style = '';
  export { classes as class };
</script>

<style type="scss" src="./index.scss">

</style>

<i
  aria-hidden="true"
  style="font-size:{size};{style}"
  class="s-icon {classes}"
  class:material-icons={md}
  class:inactive>
  <slot />
</i>

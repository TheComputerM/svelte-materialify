<script>
  let classes = "";
  export let inactive = false;
  export let size = "24px";
  export { classes as class };
</script>

<style type="scss" src="./index.scss">

</style>

<i style="--size:{size}" class="s-icon {classes}" class:inactive>
  <slot />
</i>

<script>
  let classes = "";
  export let opacity = 0.46;
  export let color = "rgb(33, 33, 33)";
  export let absolute = false;
  export let zIndex = 5;
  export { classes as class };
</script>

<style lang="scss" src="./index.scss">

</style>

<div class="s-overlay {classes}" style="z-index:{zIndex}" class:absolute>
  <div
    class="scrim"
    style="opacity:{opacity};background-color:{color};border-color:{color}" />
  <div class="content">
    <slot />
  </div>
</div>

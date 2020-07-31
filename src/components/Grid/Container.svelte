<script>
  let classes = "";
  export let fluid = false;
  export let style = undefined;
  export { classes as class };
</script>

<style lang="scss">
  @import "../../styles/variables";

  .s-container {
    width: 100%;
    padding: $container-padding-x;
    margin-right: auto;
    margin-left: auto;
    @media #{map-get($display-breakpoints, "md-and-up")} {
      max-width: map-get($container-max-widths, "md");
    }
    @media #{map-get($display-breakpoints, "lg-and-up")} {
      max-width: map-get($container-max-widths, "lg");
    }
    @media #{map-get($display-breakpoints, "xl-only")} {
      max-width: map-get($container-max-widths, "xl");
    }
    &.fluid {
      max-width: 100%;
    }
  }
</style>

<div class="s-container {classes}" class:fluid {style}>
  <slot />
</div>

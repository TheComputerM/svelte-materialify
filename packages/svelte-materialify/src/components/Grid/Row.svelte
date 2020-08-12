<script>
  let classes = '';
  export let dense = false;
  export let noGutters = false;
  export { classes as class };
</script>

<style lang="scss">
  @import "../../styles/variables";

  .s-row {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin-right: -$grid-gutter / 2;
    margin-left: -$grid-gutter / 2;

    &.dense {
      margin-right: -$form-grid-gutter / 2;
      margin-left: -$form-grid-gutter / 2;

      :global {
        > .s-col {
          padding: $form-grid-gutter / 2;
        }
      }
    }

    &.no-gutters {
      margin-right: 0;
      margin-left: 0;

      :global {
        > .s-col {
          padding: 0;
        }
      }
    }
  }
</style>

<div class="s-row {classes}" class:dense class:no-gutters={noGutters}>
  <slot />
</div>

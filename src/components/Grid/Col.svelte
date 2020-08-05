<script>
  let classes = '';
  export let cols = false;
  export let sm = false;
  export let md = false;
  export let lg = false;
  export let xl = false;
  export let offset = false;
  export let offset_sm = false;
  export let offset_md = false;
  export let offset_lg = false;
  export let offset_xl = false;
  export let style = null;
  export { classes as class };

  function classnames(objects) {
    return Object.keys(objects)
      .map((i) => `${i}-${objects[i]}`)
      .join(' ');
  }

  $: settings = classnames({
    cols,
    sm,
    md,
    lg,
    xl,
    offset,
    'offset-sm': offset_sm,
    'offset-md': offset_md,
    'offset-lg': offset_lg,
    'offset-xl': offset_xl,
  });
</script>

<style lang="scss">
  @import "../../styles/tools/breakpoints";
  @import "../../styles/variables";

  @mixin make-col($size) {
    flex: 0 0 percentage($size / $grid-columns);
    max-width: percentage($size / $grid-columns);
  }

  @mixin make-col-offset($size) {
    $num: $size / $grid-columns;

    margin-left: if($num == 0, 0, percentage($num));
  }

  .s-col {
    width: 100%;
    padding: $grid-gutter / 2;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }

  @for $i from 1 through $grid-columns {
    .col-#{$i} {
      @include make-col($i);
    }
  }

  @for $i from 1 through $grid-columns - 1 {
    .offset-#{$i} {
      @include make-col-offset($i);
    }
  }

  @include create_breakpoints using ($screen_size) {
    .#{$screen_size}-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
    }
    @for $i from 1 through $grid-columns {
      .#{$screen_size}-#{$i} {
        @include make-col($i);
      }
    }
    @for $i from 0 through $grid-columns - 1 {
      .offset-#{$screen_size}-#{$i} {
        @include make-col-offset($i);
      }
    }
  }
</style>

<div class="s-col {settings} {classes}" {style}>
  <slot />
</div>

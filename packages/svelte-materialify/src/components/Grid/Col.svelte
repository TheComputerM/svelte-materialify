<script>
  import Class from '../../internal/Class';

  let klass = '';
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
  export { klass as class };
</script>

<style lang="scss" src="./Col.scss" global>
</style>

<div
  class="s-col {klass}"
  use:Class={[cols && `col-${cols}`, sm && `sm-${sm}`, md && `md-${md}`, lg && `lg-${lg}`, xl && `xl-${xl}`, offset && `offset-${offset}`, offset_sm && `offset-sm-${offset_sm}`, offset_md && `offset-md-${offset_md}`, offset_lg && `offset-lg-${offset_lg}`, offset_xl && `offset-xl-${offset_xl}`]}
  {style}>
  <slot />
</div>

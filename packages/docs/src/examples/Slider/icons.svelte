<script>
  import { Slider, Icon } from 'svelte-materialify/src';
</script>

<Slider>
  <span slot="prepend-outer">
    <Icon class="mdi mdi-plus" />
  </span>
  Icon
  <span slot="append-outer">
    <Icon class="mdi mdi-minus" />
  </span>
</Slider>

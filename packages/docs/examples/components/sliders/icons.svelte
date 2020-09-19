<script>
  import { Slider, Icon } from 'svelte-materialify/src';
</script>

<Slider>
  <span slot="prepend">
    <Icon class="mdi mdi-plus" />
  </span> Icon <span slot="append">
    <Icon class="mdi mdi-minus" />
  </span>
</Slider>

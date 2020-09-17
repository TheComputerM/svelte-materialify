<script>
  import { Slider, TextField, Subheader } from 'svelte-materialify/src';

  const min = -50;
  const max = 90;
  let slider = 40;
  let range = [-20, 70];
</script>

<Subheader>Default Slider</Subheader>
<Slider {min} {max} bind:value={slider} hint="Hint Text">
  <span slot="append">
    <TextField bind:value={slider} />
  </span>
</Slider>

<Subheader>Range</Subheader>
<Slider {min} {max} bind:value={range}>
  <span slot="prepend">
    <TextField bind:value={range[0]} />
  </span>
  <span slot="append">
    <TextField bind:value={range[1]} />
  </span>
</Slider>

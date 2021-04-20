<script>
  import { Slider, TextField, Subheader } from 'svelte-materialify/src';

  const min = -50;
  const max = 90;
  let slider = 40;
  let range = [-20, 70];
</script>

<Subheader>Default Slider</Subheader>
<Slider {min} {max} bind:value={slider}>
  <span slot="append-outer">
    <TextField bind:value={slider} />
  </span>
</Slider>

<Subheader>Range</Subheader>
<Slider {min} {max} bind:value={range}>
  <span slot="prepend-outer">
    <TextField bind:value={range[0]} />
  </span>
  <span slot="append-outer">
    <TextField class="ml-3" bind:value={range[1]} />
  </span>
</Slider>

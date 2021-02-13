<script>
  import { FluidGrid } from 'svelte-materialify/src';
</script>

<FluidGrid container spacing={3}>
  <FluidGrid item xs>
    <div>xs</div>
  </FluidGrid>
  <FluidGrid item xs>
    <div>xs</div>
  </FluidGrid>
  <FluidGrid item xs>
    <div>xs</div>
  </FluidGrid>
</FluidGrid>

<FluidGrid container spacing={3}>
  <FluidGrid item xs>
    <div>xs</div>
  </FluidGrid>
  <FluidGrid item xs={6}>
    <div>xs=6</div>
  </FluidGrid>
  <FluidGrid item xs>
    <div>xs</div>
  </FluidGrid>
</FluidGrid>

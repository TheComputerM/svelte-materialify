<script>
  import { FluidGrid } from 'svelte-materialify/src';
</script>

<FluidGrid container spacing={3}>
  <FluidGrid item xs={12}>
    <div>xs=12</div>
  </FluidGrid>
  <FluidGrid item xs={12} sm={6}>
    <div>xs=12 sm=6</div>
  </FluidGrid>
  <FluidGrid item xs={12} sm={6}>
    <div>xs=12 sm=6</div>
  </FluidGrid>
  <FluidGrid item xs={6} sm={3}>
    <div>xs=6 sm=3</div>
  </FluidGrid>
  <FluidGrid item xs={6} sm={3}>
    <div>xs=6 sm=3</div>
  </FluidGrid>
  <FluidGrid item xs={6} sm={3}>
    <div>xs=6 sm=3</div>
  </FluidGrid>
  <FluidGrid item xs={6} sm={3}>
    <div>xs=6 sm=3</div>
  </FluidGrid>
</FluidGrid>

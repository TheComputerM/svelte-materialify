<script>
  import { FluidGrid } from 'svelte-materialify/src';
</script>

<FluidGrid container spacing={1}>
  {#each Array(3) as _}
    <FluidGrid container item xs={12} spacing={3}>
      <FluidGrid item xs={4}>
        <div>xs=4</div>
      </FluidGrid>
      <FluidGrid item xs={4}>
        <div>xs=4</div>
      </FluidGrid>
      <FluidGrid item xs={4}>
        <div>xs=4</div>
      </FluidGrid>
    </FluidGrid>
  {/each}
</FluidGrid>

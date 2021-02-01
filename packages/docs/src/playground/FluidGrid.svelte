<script>
  import Playground from '@/components/doc/Playground.svelte';
  import { FluidGrid } from 'svelte-materialify/src';

  const controls = {
    spacing: {
      type: 'slider',
      min: 0,
      max: 16,
      step: 1,
      thumb: true,
      persistentThumb: true,
    },
    direction: {
      type: 'select',
      items: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    justify: {
      type: 'select',
      items: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'],
    },
    alignItems: {
      type: 'select',
      items: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
  };

  let values = {
    spacing: 3,
    direction: 'row',
    justify: 'center',
    alignItems: 'start',
  };
</script>

<Playground {controls} bind:values>
  <FluidGrid
    container
    bind:spacing={values.spacing}
    bind:direction={values.direction}
    bind:justify={values.justify}
    bind:alignItems={values.alignItems}
    style="width: 100%;">
    <FluidGrid item>
      <div class="rounded" style="width: 150px; padding: 10px 0px; font-size: 1em;">
        1
      </div>
    </FluidGrid>
    <FluidGrid item>
      <div class="rounded" style="width: 150px; padding: 20px 0px; font-size: 2em;">
        2
      </div>
    </FluidGrid>
    <FluidGrid item>
      <div class="rounded" style="width: 150px; padding: 30px 0px; font-size: 3em;">
        3
      </div>
    </FluidGrid>
  </FluidGrid>
</Playground>

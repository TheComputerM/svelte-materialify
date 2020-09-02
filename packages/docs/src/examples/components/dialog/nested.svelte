<script>
  import { Button, Dialog } from 'svelte-materialify/src';

  let active1;
  let active2;
</script>

<div class="text-center">
  <Button on:click={() => (active1 = true)}>Open Dialog 1</Button>
  <Button on:click={() => (active2 = true)}>Open Dialog 2</Button>
</div>

<Dialog class="pa-4 text-center" bind:active={active1}>
  <Button on:click={() => (active2 = true)}>Open Dialog 2</Button>
  <br /><br />
  <p>This is Dialog 1</p>
</Dialog>

<Dialog class="pa-4 text-center" bind:active={active2}>
  <p>This is Dialog 2</p>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quia possimus tempore maxime vel,
    fugiat neque ab accusamus numquam incidunt?
  </p>
</Dialog>

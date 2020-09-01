<script>
  import { Button, Dialog } from 'svelte-materialify/src';

  let active = false;

  function open() {
    active = true;
  }
</script>

<div class="text-center">
  <Button on:click={open}>Open Dialog</Button>
</div>

<Dialog class="pa-4" bind:active>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam quia
  esse impedit libero mollitia tempore nisi dolore ut, quasi incidunt sunt
  sapiente vero iusto necessitatibus eius nulla dignissimos laboriosam.
</Dialog>

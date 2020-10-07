<script>
  import { Snackbar, Button } from 'svelte-materialify/src';

  let snackbar = false;
</script>

<div class="text-center pa-3">
  <Button
    on:click={() => {
      snackbar = true;
    }}>
    Click
  </Button>
</div>

<Snackbar class="justify-space-between" bind:active={snackbar} right top timeout={3000}>
  Timeout is 3secs
  <Button
    text
    on:click={() => {
      snackbar = false;
    }}>
    Dismiss
  </Button>
</Snackbar>

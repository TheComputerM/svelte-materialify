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

<Snackbar class="flex-column" bind:active={snackbar} bottom center timeout={3000}>
  Here are some actions
  <div class="mt-1">
    <Button text class="success-text">Accept</Button>
    <Button
      class="red-text"
      text
      on:click={() => {
        snackbar = false;
      }}>
      Dismiss
    </Button>
  </div>
</Snackbar>

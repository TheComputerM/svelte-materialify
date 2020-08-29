<script>
  import { Chip, Button } from 'svelte-materialify/src';

  let active = true;
  let timesClosed = 0;
</script>

<div class="d-flex justify-center">
  {#if !active}
    <Button on:click={() => (active = true)}>Reset</Button>
  {/if}
  <Chip
    close
    bind:active
    on:close={() => {
      timesClosed += 1;
    }}>
    Closable
  </Chip>
</div>
<div class="text-center">Times Closed: {timesClosed}</div>

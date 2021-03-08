<script>
  import { scale } from 'svelte/transition';
  import { Alert, Button } from 'svelte-materialify/src';

  let alert = true;
</script>

<div class="d-flex justify-center">
  <Button class="primary-color" on:click={() => (alert = !alert)}>Toggle</Button>
</div>
<br />
{#if alert}
  <Alert
    class="primary-color"
    transition={scale}
    transitionOpts={{ duration: 500 }}
    bind:visible={alert}>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem molestiae voluptates
    et quae rem autem quasi officia odit suscipit dolor.
  </Alert>
{/if}

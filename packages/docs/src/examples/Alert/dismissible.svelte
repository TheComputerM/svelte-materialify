<script>
  import { Alert, Icon, Button } from 'svelte-materialify/src';
  import { mdiAlertCircle } from '@mdi/js';

  let timesDismissed = 0;
  let alert = true;

  function reset() {
    alert = true;
  }

  function onDismiss() {
    timesDismissed += 1;
  }
</script>

{#if alert}
  <Alert class="primary-color" dismissible bind:visible={alert} on:dismiss={onDismiss}>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem molestiae voluptates
    et quae rem autem quasi officia odit suscipit dolor.
  </Alert>

  <Alert class="primary-color" dismissible bind:visible={alert} on:dismiss={onDismiss}>
    <div slot="close">
      <Icon path={mdiAlertCircle} />
    </div>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem molestiae voluptates
    et quae rem autem quasi officia odit suscipit dolor.
  </Alert>
{:else}
  <div class="text-center">
    <Button class="primary-color" on:click={reset}>Reset</Button>
    <br />
    <span>Times Dismissed: {timesDismissed}</span>
  </div>
{/if}

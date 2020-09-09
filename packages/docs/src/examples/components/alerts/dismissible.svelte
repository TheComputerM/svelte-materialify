<script>
  import Alert from 'svelte-materialify/src/components/Alert';
  import Icon from 'svelte-materialify/src/components/Icon';
  import Button from 'svelte-materialify/src/components/Button';

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
      <Icon class="mdi mdi-alert-circle" />
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

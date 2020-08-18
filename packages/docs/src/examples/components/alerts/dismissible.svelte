<script>
  import Alert from 'svelte-materialify/src/components/Alert';
  import Icon from 'svelte-materialify/src/components/Icon';
  import Button from 'svelte-materialify/src/components/Button';

  let alert = true;
</script>

{#if alert}
  <Alert class="primary-color" dismissible bind:visible={alert}>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem molestiae
    voluptates et quae rem autem quasi officia odit suscipit dolor.
  </Alert>
  <Alert class="primary-color" dismissible bind:visible={alert}>
    <div slot="close">
      <Icon class="mdi mdi-alert-circle" />
    </div>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem molestiae
    voluptates et quae rem autem quasi officia odit suscipit dolor.
  </Alert>
{:else}
  <Button class="primary-color" on:click={() => (alert = true)}>Reset</Button>
{/if}

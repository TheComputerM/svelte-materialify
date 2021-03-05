<script>
  import { Button, Overlay, ProgressCircular, Icon } from 'svelte-materialify/src';
  import { mdiOpenInNew } from '@mdi/js';
  let active = false;
</script>

<div class="text-center">
  <Button
    class="primary-color"
    on:click={() => {
      active = true;
    }}>
    Launch Application
    <Icon path={mdiOpenInNew} class="ml-2" />
  </Button>
</div>

<Overlay
  {active}
  on:click={() => {
    active = false;
  }}>
  <ProgressCircular color="white" indeterminate size={128} />
</Overlay>

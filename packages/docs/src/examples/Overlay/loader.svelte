<script>
  import { Button, Overlay, ProgressCircular, Icon } from 'svelte-materialify/src';

  let active = false;
</script>

<div class="text-center">
  <Button
    class="primary-color"
    on:click={() => {
      active = true;
    }}>
    Launch Application
    <Icon class="mdi mdi-open-in-new ml-2" />
  </Button>
</div>

<Overlay
  {active}
  on:click={() => {
    active = false;
  }}>
  <ProgressCircular color="white" indeterminate size={128} />
</Overlay>

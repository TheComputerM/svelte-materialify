<script>
  import { Button, Overlay } from 'svelte-materialify/src';

  let active = false;
</script>

<style>
  div {
    margin: 0 auto;
    height: 250px;
    width: 200px;
    padding-top: 16px;
    position: relative;
  }
</style>

<div class="elevation-2 text-center">
  <Button
    class="green white-text"
    on:click={() => {
      active = true;
    }}>
    Show Overlay
  </Button>
  <Overlay
    absolute
    {active}
    on:click={() => {
      active = false;
    }} />
</div>

<script>
  import { Button, Window, WindowItem } from 'svelte-materialify/src';

  let window;
</script>

<style lang="scss">
  .slide {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
</style>

<Window bind:this={window} vertical>
  <WindowItem>
    <div class="slide red">
      <h4>Window Item 1</h4>
    </div>
  </WindowItem>
  <WindowItem>
    <div class="slide green">
      <h4>Window Item 2</h4>
    </div>
  </WindowItem>
  <WindowItem>
    <div class="slide blue">
      <h4>Window Item 3</h4>
    </div>
  </WindowItem>
</Window>
<br />
<div class="d-flex justify-space-between">
  <Button on:click={window.previous}>Left</Button>
  <Button on:click={window.next}>Right</Button>
</div>

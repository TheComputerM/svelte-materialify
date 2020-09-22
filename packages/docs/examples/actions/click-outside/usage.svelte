<script>
  import { ClickOutside } from 'svelte-materialify/src';

  let active = false;

  function click() {
    active = true;
  }

  function clickOutside() {
    active = false;
  }
</script>

<style>
  div {
    margin: 12px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
  }
</style>

<div
  class="elevation-4 rounded text-h6"
  class:primary-color={active}
  class:white-text={active}
  use:ClickOutside
  on:clickOutside={clickOutside}
  on:click={click}>
  Click {active ? 'Outside' : 'Me'}
</div>

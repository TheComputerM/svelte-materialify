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

<div
  class="elevation-4 rounded text-h6"
  style="margin: 12px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;"
  class:primary-color={active}
  class:white-text={active}
  use:ClickOutside
  on:clickOutside={clickOutside}
  on:click={click}>
  Click
  {active ? 'Outside' : 'Me'}
</div>

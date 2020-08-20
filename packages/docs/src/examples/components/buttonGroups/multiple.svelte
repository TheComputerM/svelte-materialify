<script>
  import { ButtonGroup, Button } from "svelte-materialify/src";
  let value;
</script>

<div class="text-center">
  <ButtonGroup selectable multiple activeClass="primary-color" bind:value>
    <Button value="left">Left</Button>
    <Button value="center">Center</Button>
    <Button class="primary-color" value="right">Right</Button>
    <Button value="justify">Justify</Button>
  </ButtonGroup>
  <br />
  Value: {value}
</div>

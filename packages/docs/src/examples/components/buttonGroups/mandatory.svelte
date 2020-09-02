<script>
  import { ButtonGroup, Button } from 'svelte-materialify/src';

  let value1;
  let value2;
</script>

<div class="text-center">
  <ButtonGroup selectable mandatory bind:value={value1}>
    <Button>Left</Button>
    <Button>Center</Button>
    <Button>Right</Button>
    <Button>Justify</Button>
  </ButtonGroup>
  <br /> Value: {value1}
</div>
<br />
<div class="text-center">
  <ButtonGroup selectable multiple mandatory bind:value={value2}>
    <Button>Left</Button>
    <Button>Center</Button>
    <Button>Right</Button>
    <Button>Justify</Button>
  </ButtonGroup>
  <br /> Value: {value2}
</div>

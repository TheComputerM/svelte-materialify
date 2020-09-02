<script>
  import { ButtonGroup, Button } from 'svelte-materialify/src';

  let value;
</script>

<div class="text-center">
  <ButtonGroup selectable bind:value>
    <Button>Left</Button>
    <Button active>Center</Button>
    <Button>Right</Button>
    <Button>Justify</Button>
  </ButtonGroup>
  <br /> Value: {value}
</div>

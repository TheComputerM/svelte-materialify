<script>
  import { ButtonGroup, ButtonGroupItem } from 'svelte-materialify/src';

  let value;
</script>

<div class="text-center">
  <ButtonGroup multiple activeClass="primary-color" bind:value>
    <ButtonGroupItem value="left">Left</ButtonGroupItem>
    <ButtonGroupItem value="center">Center</ButtonGroupItem>
    <ButtonGroupItem value="right">Right</ButtonGroupItem>
    <ButtonGroupItem value="justify">Justify</ButtonGroupItem>
  </ButtonGroup>
  <br />
  Value:
  {value}
</div>

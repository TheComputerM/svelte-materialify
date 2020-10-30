<script>
  import { ButtonGroup, ButtonGroupItem } from 'svelte-materialify/src';

  const values = [0, [0]];
</script>

<div class="text-center">
  <ButtonGroup mandatory activeClass="red white-text" bind:value={values[0]}>
    <ButtonGroupItem>Left</ButtonGroupItem>
    <ButtonGroupItem>Center</ButtonGroupItem>
    <ButtonGroupItem>Right</ButtonGroupItem>
    <ButtonGroupItem>Justify</ButtonGroupItem>
  </ButtonGroup>
  <br />
  Value:
  {values[0]}
</div>
<br />
<div class="text-center">
  <ButtonGroup multiple mandatory activeClass="blue white-text" bind:value={values[1]}>
    <ButtonGroupItem>Left</ButtonGroupItem>
    <ButtonGroupItem>Center</ButtonGroupItem>
    <ButtonGroupItem>Right</ButtonGroupItem>
    <ButtonGroupItem>Justify</ButtonGroupItem>
  </ButtonGroup>
  <br />
  Value:
  {values[1]}
</div>

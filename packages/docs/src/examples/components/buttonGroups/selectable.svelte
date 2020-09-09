<script>
  import { ButtonGroup, ButtonGroupItem } from 'svelte-materialify/src';

  let value = [1];
</script>

<div class="text-center">
  <ButtonGroup activeClass="primary-color" bind:value>
    <ButtonGroupItem>Left</ButtonGroupItem>
    <ButtonGroupItem>Center</ButtonGroupItem>
    <ButtonGroupItem>Right</ButtonGroupItem>
    <ButtonGroupItem>Justify</ButtonGroupItem>
  </ButtonGroup>
  <br /> Value: {value}
</div>

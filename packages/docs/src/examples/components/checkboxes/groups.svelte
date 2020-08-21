<script>
  import Checkbox from 'svelte-materialify/src/components/Checkbox';

  let group = ['2'];
</script>

<br />
<div class="d-flex justify-space-around">
  <Checkbox bind:group value="1">Value 1</Checkbox>
  <Checkbox bind:group value="2">Value 2</Checkbox>
  <Checkbox bind:group value="3">Value 3</Checkbox>
  <Checkbox bind:group value="4">Value 4</Checkbox>
</div>
<br />
<div class="text-center">Value: {group}</div>

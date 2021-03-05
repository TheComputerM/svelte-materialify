<script>
  import { Radio } from 'svelte-materialify/src';

  let group;
</script>

<div class="d-flex justify-space-around">
  <Radio bind:group value={1} color="red">red</Radio>
  <Radio bind:group value={2} color="secondary">secondary</Radio>
  <Radio bind:group value={3} color="success">success</Radio>
  <Radio bind:group value={4} color="blue">blue</Radio>
</div>

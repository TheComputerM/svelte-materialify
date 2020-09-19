<script>
  import Radio from 'svelte-materialify/src/components/Radio';

  let group = 2;
</script>

<div class="d-flex justify-space-around">
  <Radio bind:group value={1}>Value 1</Radio>
  <Radio bind:group value={2}>Value 2</Radio>
  <Radio bind:group value={3}>Value 3</Radio>
</div>
<br />
<div class="text-center">Value: {group}</div>

<script>
  import Radio from 'svelte-materialify/src/components/Radio';

  let group;
</script>

<div class="d-flex justify-space-around">
  <Radio bind:group value={1} activeClass="red-text">red</Radio>
  <Radio bind:group value={2} activeClass="secondary-text">secondary</Radio>
  <Radio bind:group value={3} activeClass="success-text">success</Radio>
  <Radio bind:group value={4} class="blue-text" activeClass="">
    blue
  </Radio>
</div>

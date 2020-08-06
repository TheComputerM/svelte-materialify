<script>
  import Gumshoe from 'gumshoejs';
  import {onMount} from "svelte";

  let values = ['a', 'b'];
  onMount(() => {
    // var spy = new Gumshoe('#james-the-spy li');
  })
</script>

<ul id="james-the-spy">
  {#each values as value}
    <li>{value}</li>
  {/each}
</ul>

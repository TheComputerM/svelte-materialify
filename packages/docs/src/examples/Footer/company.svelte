<script>
  import { Footer, Button } from 'svelte-materialify/src';

  const links = ['Home', 'About', 'Team', 'Services', 'Contact Us'];
</script>

<Footer padless class="indigo theme--dark justify-center flex-column">
  <div class="mt-2 mb-2">
    {#each links as link}
      <Button text rounded>{link}</Button>
    {/each}
  </div>
  <div class="indigo lighten-1 pa-2 text-center" style="width:100%">
    2020 -
    <b>Svelte Materialify</b>
  </div>
</Footer>

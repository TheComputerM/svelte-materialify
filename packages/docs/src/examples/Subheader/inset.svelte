<script>
  import { Subheader, ListItem, Icon } from 'svelte-materialify/src';
</script>

<div class="ml-auto mr-auto elevation-2 pa-2" style="width:400px">
  <Subheader inset>Subheader</Subheader>
  {#each Array(3) as _, i}
    <ListItem>
      <span slot="prepend">
        <Icon class="mdi mdi-label" />
      </span>
      List Item
      {i + 1}
    </ListItem>
  {/each}
</div>

<script>
  import { ListItemGroup, ListItem, Icon } from 'svelte-materialify/src';
  import { mdiHome, mdiStar, mdiAccount } from '@mdi/js';
</script>

<style>
  :global(.dash-border) {
    border: 1px dashed green;
  }
</style>

<div class="ml-auto mr-auto elevation-2" style="width:500px">
  <ListItemGroup activeClass="dash-border">
    <ListItem>
      <span slot="prepend">
        <Icon path={mdiHome} />
      </span>Item 1
    </ListItem>
    <ListItem>
      <span slot="prepend">
        <Icon path={mdiStar} />
      </span>Item 2
    </ListItem>
    <ListItem>
      <span slot="prepend">
        <Icon path={mdiAccount} />
      </span>Item 3
    </ListItem>
  </ListItemGroup>
</div>

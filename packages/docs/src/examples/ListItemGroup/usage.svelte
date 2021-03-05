<script>
  import { ListItemGroup, ListItem, Icon } from 'svelte-materialify/src';
  import { mdiHome, mdiStar, mdiAccount, mdiMagnify } from '@mdi/js';
</script>

<div class="ml-auto mr-auto elevation-2" style="width:500px">
  <ListItemGroup>
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
    <ListItem>
      <span slot="prepend">
        <Icon path={mdiMagnify} />
      </span>Item 4
    </ListItem>
  </ListItemGroup>
</div>

<script>
  import { List, ListItemGroup, ListItem, Subheader, Icon } from 'svelte-materialify/src';
  import { mdiAccount, mdiFlag, mdiHome } from '@mdi/js';
</script>

<div class="d-flex justify-center">
  <List disabled class="elevation-2" style="width:300px">
    <Subheader>Filter</Subheader>
    <ListItemGroup value="[1]">
      <ListItem>
        <span slot="prepend">
          <Icon path={mdiHome} />
        </span>
        Item 1
      </ListItem>
      <ListItem>
        <span slot="prepend">
          <Icon path={mdiAccount} />
        </span>
        Item 2
      </ListItem>
      <ListItem>
        <span slot="prepend">
          <Icon path={mdiFlag} />
        </span>
        Item 3
      </ListItem>
    </ListItemGroup>
  </List>
</div>

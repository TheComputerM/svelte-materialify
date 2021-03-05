<script>
  import {
    List,
    ListItemGroup,
    NavigationDrawer,
    ListItem,
    Avatar,
    Icon,
    Divider,
  } from 'svelte-materialify/src';
  import {
    mdiFolder,
    mdiAccountMultiple,
    mdiStar,
    mdiHistory,
    mdiCheckCircle,
    mdiUpload,
    mdiCloudUpload,
  } from '@mdi/js';

  const items = [
    { text: 'My Files', icon: mdiFolder },
    { text: 'Shared with me', icon: mdiAccountMultiple },
    { text: 'Starred', icon: mdiStar },
    { text: 'Recent', icon: mdiHistory },
    { text: 'Offline', icon: mdiCheckCircle },
    { text: 'Uploads', icon: mdiUpload },
    { text: 'Backups', icon: mdiCloudUpload },
  ];
</script>

<NavigationDrawer>
  <Avatar><img src="//picsum.photos/50" alt="profile" /></Avatar>
  <h4 class="text-h6 mb-2 mt-2">Mudit Somani</h4>
  <Divider />
  <List nav dense>
    <ListItemGroup>
      {#each items as item}
        <ListItem>
          <span slot="prepend">
            <Icon path={item.icon} />
          </span>
          {item.text}
        </ListItem>
      {/each}
    </ListItemGroup>
  </List>
</NavigationDrawer>

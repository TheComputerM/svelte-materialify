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

  const items = [
    { text: 'My Files', icon: 'mdi-folder' },
    { text: 'Shared with me', icon: 'mdi-account-multiple' },
    { text: 'Starred', icon: 'mdi-star' },
    { text: 'Recent', icon: 'mdi-history' },
    { text: 'Offline', icon: 'mdi-check-circle' },
    { text: 'Uploads', icon: 'mdi-upload' },
    { text: 'Backups', icon: 'mdi-cloud-upload' },
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
            <Icon class="mdi {item.icon}" />
          </span>
          {item.text}
        </ListItem>
      {/each}
    </ListItemGroup>
  </List>
</NavigationDrawer>

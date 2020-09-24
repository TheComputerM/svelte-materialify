<script>
  import {
    List,
    ListItem,
    Divider,
    Card,
    Subheader,
    Avatar,
  } from 'svelte-materialify/src';
</script>

<Card>
  <List>
    <Subheader>Today</Subheader>
    <ListItem>
      <div slot="prepend">
        <Avatar><img src="//picsum.photos/100?random=1" alt="Avatar" /></Avatar>
      </div>
      Study Group
      <span slot="subtitle"> <b>John Doe</b> - This is my message </span>
    </ListItem>
    <Divider inset />
    <ListItem>
      <div slot="prepend">
        <Avatar><img src="//picsum.photos/100?random=2" alt="Avatar" /></Avatar>
      </div>
      Summer
      <span slot="subtitle"> <b>Harshit</b> - Fun </span>
    </ListItem>
    <Divider inset />
    <ListItem>
      <div slot="prepend">
        <Avatar><img src="//picsum.photos/100?random=3" alt="Avatar" /></Avatar>
      </div>
      School
      <span slot="subtitle"> <b>Tyler</b> - Nerd </span>
    </ListItem>
  </List>
</Card>

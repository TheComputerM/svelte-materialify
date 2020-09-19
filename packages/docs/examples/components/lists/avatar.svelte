<script>
  import { List, ListItem, Subheader, Avatar, Icon } from 'svelte-materialify/src';

  const items = [
    { name: 'Simon' },
    { name: 'Rich', icon: true },
    { name: 'Ben' },
    { name: 'Tan Li Hau' },
  ];
</script>

<div class="d-flex justify-center">
  <List class="elevation-2" style="width:350px">
    <Subheader>Svelte</Subheader>
    {#each items as item, i}
      <ListItem>
        <span slot="prepend">
          {#if item.icon}
            <Icon class="mdi mdi-star pink-text" />
          {:else}
            <Icon class="mdi mdi-star-outline" />
          {/if}
        </span>
        {item.name}
        <span slot="append">
          <Avatar><img src="//picsum.photos/50?random={i}" alt="profile" /></Avatar>
        </span>
      </ListItem>
    {/each}
  </List>
</div>

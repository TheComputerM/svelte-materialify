<script>
  import { ListGroup, ListItem, Icon } from 'svelte-materialify/src';
  import { stores } from '@sapper/app';
  import { onDestroy } from 'svelte';

  import routes from '../helpers/routes';

  let activeLink;
  const { page } = stores();
  export let items = routes;
  export let depth = 0;
  export let visible = true;
  let offset = `${(depth + 1) * 32}px`;

  const unsubscribe = page.subscribe((value) => (activeLink = value));
  onDestroy(unsubscribe);

  function openCollapsedNavigation(parent) {
    parent.items.find((child) => {
      if (child.items) openCollapsedNavigation(child);
      if ((child.href || '') === activeLink || child.open) {
        parent.open = true;
        return true;
      }
      return false;
    });
  }

  if (depth === 0) {
    offset = false;
    items.forEach((i) => openCollapsedNavigation(i));
  }
</script>

<style>
  a {
    text-decoration: none;
  }
  :global(.s-icon.mdi-chevron-down) {
    will-change: transform;
    transition: transform 250ms ease-in-out;
  }
</style>

<ListGroup active={visible} {offset}>
  {#each items as item}
    {#if item.items}
      <ListItem dense on:click={() => (item.open = !item.open)}>
        <div slot="left">
          {#if item.icon}
            <Icon class="mdi mdi-{item.icon}" />
          {/if}
        </div>
        {item.text}
        <div slot="right">
          <Icon
            class="mdi mdi-chevron-down"
            style={item.open ? 'transform: rotateZ(180deg)' : ''} />
        </div>
      </ListItem>

      <svelte:self
        items={item.items}
        depth={depth + 1}
        bind:visible={item.open} />
    {:else}
      <a href={item.href}>
        <ListItem active={item.href.replace(/\//g, '') === activeLink}>
          <div slot="left">
            {#if item.icon}
              <Icon class="mdi mdi-{item.icon}" />
            {/if}
          </div>
          {item.text}
        </ListItem>
      </a>
    {/if}
  {/each}
</ListGroup>

<script>
  import { mdiChevronDown } from '@mdi/js';
  import { ListGroup, ListItem, Icon } from 'svelte-materialify/src';
  import { stores } from '@sapper/app';
  import { onDestroy } from 'svelte';

  import routes from '../routes';

  let activeLink;
  const { page } = stores();
  export let items = routes;
  export let depth = 0;
  export let visible = true;
  let offset = `${(depth + 1) * 28}px`;
  const escaped = (text = '') => text.replace(/\//g, '');

  const unsubscribe = page.subscribe(({ path }) => {
    activeLink = escaped(path);
  });

  onDestroy(unsubscribe);

  function openCollapsedNavigation(parent) {
    const activeParent = parent.items.find((child) => {
      if (child.items) openCollapsedNavigation(child);
      if (escaped(child.href) === activeLink || child.open) {
        parent.open = true;
        return true;
      }
      return false;
    });
    return activeParent;
  }

  if (depth === 0) {
    offset = false;
    items.find((i) => openCollapsedNavigation(i));
  }
</script>

<style>
  a {
    text-decoration: none;
  }
  :global(.s-list-item .s-icon.chevron) {
    will-change: transform;
    transition: transform 250ms ease-in-out;
  }
</style>

<ListGroup active={visible} {offset}>
  {#each items as item}
    {#if item.items}
      <ListItem dense on:click={() => (item.open = !item.open)}>
        <div slot="prepend">
          {#if item.icon}
            <Icon path={item.icon} />
          {/if}
        </div>
        {item.text}
        <div slot="append">
          <Icon path={mdiChevronDown} rotate={item.open ? 180 : 0} class="chevron" />
        </div>
      </ListItem>

      <svelte:self items={item.items} depth={depth + 1} bind:visible={item.open} />
    {:else}
      <a href={item.href} rel="prefetch">
        <ListItem active={item.href.replace(/\//g, '') === activeLink}>
          <div slot="prepend">
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

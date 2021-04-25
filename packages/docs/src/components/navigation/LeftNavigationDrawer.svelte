<svelte:options immutable={true} />

<script context="module">
  let activeDepth = -1;
</script>

<script>
  import { stores } from '@sapper/app';
  import { ListGroup, ListItem, Icon } from 'svelte-materialify/src';
  import { mdiChevronDown } from '@mdi/js';

  const { page } = stores();
  export let item;
  export let depth = 0;
  const offset = 1.5 ** depth * 54;

  function equals(browserPath, navItemPath) {
    return browserPath === navItemPath || `${browserPath}/` === navItemPath;
  }

  function expand(parent) {
    const found = parent.some((child) => {
      if (child.items) return expand(child.items);
      return equals($page.path, child.href);
    });
    if (found) activeDepth = depth;
    return found;
  }

  export let expanded = depth > activeDepth && expand(item.items);
</script>

<style>
</style>

<ListGroup class="secondary-text" eager {offset} bind:active={expanded}>
  <div slot="prepend">
    {#if item.icon}
      <Icon path={expanded ? item.openIcon : item.icon} />
    {/if}
  </div>
  <slot slot="activator">{item.text}</slot>
  <div slot="append">
    <Icon path={mdiChevronDown} rotate={expanded ? 180 : 0} />
  </div>
  {#each item.items as children}
    {#if children.items}
      <svelte:self item={children} depth={depth + 1} />
    {:else}
      <a href={children.href} sapper:prefetch>
        <ListItem active={equals($page.path, children.href)}>{children.text}</ListItem>
      </a>
    {/if}
  {/each}
</ListGroup>

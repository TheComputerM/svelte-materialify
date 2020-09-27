<script>
  import { stores } from '@sapper/app';
  import { ListGroup, ListItem, Icon } from 'svelte-materialify/src';

  const { page } = stores();
  export let item;
  export let depth = 0;
  const offset = 1.5 ** depth * 54;

  function expand(parent) {
    return parent.some((child) => {
      if (child.items) return expand(child.items);
      return $page.path === child.href;
    });
  }

  export let expanded = expand(item.items);

  function toggle() {
    expanded = !expanded;
  }
</script>

<style global>
  .nav-active-link {
    color: rgb(25, 118, 210) !important;
  }
  .nav-active-link .s-icon {
    color: inherit;
  }
</style>

<svelte:options immutable={true} />

<ListItem active={expanded} activeClass="nav-active-link" dense on:click={toggle}>
  <div slot="prepend">
    {#if item.icon}
      <Icon class="mdi mdi-{expanded ? item.openIcon : item.icon}" />
    {/if}
  </div>
  {item.text}
  <div slot="append">
    <Icon class="mdi mdi-chevron-down" rotate={expanded ? 180 : 0} />
  </div>
</ListItem>
<ListGroup eager {offset} active={expanded}>
  {#each item.items as children}
    {#if children.items}
      <svelte:self item={children} depth={depth + 1} />
    {:else}
      <a href={children.href} rel="prefetch">
        <ListItem active={children.href === $page.path}>{children.text}</ListItem>
      </a>
    {/if}
  {/each}
</ListGroup>

<script>
  import { slide } from "svelte/transition";
  import { ListGroup, ListItem, Button, Icon } from "svelte-materialify/src";
  import { stores } from "@sapper/app";

  import routes from "../helpers/routes";

  let activeLink;
  const { page } = stores();
  export let items = routes;
  export let depth = 0;
  export let visible = true;

  page.subscribe((value) => {
    activeLink = value.path.replace(/\//g, "");
  });

  if (depth === 0) {
    function openCollapsedNavigation(parent) {
      parent.items.find(function (child) {
        if (child.items) openCollapsedNavigation(child, activeLink);
        if (child.href?.replace(/\//g, "") === activeLink || child.open) {
          parent.open = true;
          return true;
        }
      });
    }
    items.find((i) => openCollapsedNavigation(i));
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

{#if visible}
  <div transition:slide={{ duration: 500 }}>
    <ListGroup offset={depth ? `${(depth + 1) * 32}px` : false}>
      {#each items as item}
        {#if item.items}
          <ListItem on:click={() => (item.open = !item.open)}>
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
  </div>
{/if}

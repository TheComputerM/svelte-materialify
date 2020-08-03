<script>
  import { slide } from "svelte/transition";
  import { ListGroup, ListItem, Button, Icon } from "svelte-materialify/src";
  import { stores } from "@sapper/app";

  export let items;
  export let depth = 1;
  export let hidden = false;
  export let offset = false;

  let active;
  const { page } = stores();
  let childListHidden = true;
  let childListToggle = () => childListHidden = !childListHidden

  page.subscribe((value) => (active = value.path.replace(/\//g, "")));
  $: isItemActive = (href = "") => {
    return href.replace(/\//g, "") === active;
  };
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

{#if !hidden}
  <div transition:slide style="padding-top:8px;">
    <ListGroup {offset}>
      {#each items as item}
        {#if item.items}
          <ListItem on:click={childListToggle}>
            <div slot="left">
              {#if item.icon}
                <Icon class="mdi mdi-{item.icon}" />
              {/if}
            </div>
            {item.text}
            <div slot="right">
              <Icon
                class="mdi mdi-chevron-down"
                style={childListHidden ? 'transform: rotateZ(180deg)' : ''} />
            </div>
          </ListItem>

          <svelte:self
            items={item.items}
            depth={depth + 1}
            bind:hidden={childListHidden}
            offset={`${((depth + 1) / 2) * 64}px`} />
        {:else}
          <a href={item.href}>
            <ListItem active={isItemActive(item.href)}>
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

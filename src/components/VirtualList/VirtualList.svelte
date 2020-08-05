<script>
  import { ListGroup, ListItem } from '../List';

  let classes = '';
  export let items = [];
  export let itemClasses = '';
  export const depth = 0;
  export let style = '';
  export let offsetFunction = (x) => `${(x + 1) * 28}px`;
  export { classes as class };
</script>

<ListGroup class={classes} {style} offset={offsetFunction(depth)}>
  {#each items as item}
    <slot {item}>
      <ListItem class={itemClasses}>
        {item.text}
        <div slot="subtitle">{item.subtitle || ''}</div>
      </ListItem>
    </slot>
    {#if item.items}
      <svelte:self items={item.items} depth={depth + 1} />
    {/if}
  {/each}
</ListGroup>

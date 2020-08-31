<script>
  import { ListGroup, ListItem } from '../List';

  let klass = '';
  export let active = true;
  export let items = [];
  export let itemClasses = '';
  export const depth = 0;
  export let style = '';
  export let offsetFunction = (x) => `${(x + 1) * 28}px`;
  export { klass as class };
</script>

<ListGroup class={klass} {active} {style} offset={offsetFunction(depth)}>
  {#each items as item}
    <slot {item}>
      <ListItem class={itemClasses}>
        {item.text}
        <div slot="subtitle">{item.subtitle || ''}</div>
      </ListItem>
    </slot>
    {#if item.items}
      <svelte:self items={item.items} depth={depth + 1} active={item.active} />
    {/if}
  {/each}
</ListGroup>

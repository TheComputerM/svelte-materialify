<script context="module">
  const DOWN_ICON = 'M7,10L12,15L17,10H7Z';
</script>

<script>
  import TextField from '../TextField';
  import Menu from '../Menu';
  import { ListItemGroup, ListItem } from '../List';
  import Chip from '../Chip';
  import Checkbox from '../Checkbox';
  import Icon from '../Icon';

  export let active = false;
  export let value = [];
  export let items = [];
  export let filled = false;
  export let outlined = false;
  export let solo = false;
  export let dense = false;
  export let placeholder = null;
  export let hint = '';
  export let multiple = false;
  export let max = Infinity;
  export let chips = false;
  export let disabled = null;
</script>

<style lang="scss" src="./Select.scss" global>
</style>

<div class="s-select" class:disabled class:chips>
  <Menu offsetY={false} bind:active {disabled} closeOnClick={!multiple}>
    <span slot="activator">
      <TextField
        {filled}
        {outlined}
        {solo}
        {dense}
        {disabled}
        value={value.join(', ')}
        {placeholder}
        {hint}
        readonly>
        <span slot="prepend-outer">
          <slot name="prepend" />
        </span>
        <slot />
        <div slot="content">
          {#if chips}
            <span class="s-select__chips">
              {#each value as v}
                <Chip>{v}</Chip>
              {/each}
            </span>
          {/if}
        </div>
        <span slot="append">
          <Icon path={DOWN_ICON} rotate={active ? 180 : 0} />
        </span>
        <span slot="append-outer">
          <slot name="append" />
        </span>
      </TextField>
    </span>
    <ListItemGroup bind:value {multiple} {max}>
      {#each items as item}
        <slot name="item" {item}>
          <ListItem {dense} value={item.value}>
            <span slot="left">
              {#if multiple}
                <Checkbox checked={value.includes(item.value)} />
              {/if}
            </span>
            {item.name}
          </ListItem>
        </slot>
      {/each}
    </ListItemGroup>
  </Menu>
</div>

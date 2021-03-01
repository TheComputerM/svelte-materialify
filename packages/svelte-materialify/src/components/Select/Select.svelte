<script>
  import { createEventDispatcher } from 'svelte';
  import TextField from '../TextField';
  import Menu from '../Menu';
  import { ListItemGroup, ListItem } from '../List';
  import Chip from '../Chip';
  import Checkbox from '../Checkbox';
  import Icon from '../Icon';
  import DOWN_ICON from '../../internal/Icons/down';

  let klass = '';
  export { klass as class };
  export let active = false;
  export let value = [];
  export let items = [];
  export let filled = false;
  export let outlined = false;
  export let solo = false;
  export let dense = false;
  export let placeholder = null;
  export let hint = '';
  export let mandatory = false;
  export let multiple = false;
  export let max = Infinity;
  export let chips = false;
  export let disabled = null;
  export let closeOnClick = !multiple;
  export let format = (val) => (Array.isArray(val) ? val.join(', ') : val);
  const dispatch = createEventDispatcher();
  $: dispatch('change', value);
</script>

<style lang="scss" src="./Select.scss" global>
</style>

<div class="s-select {klass}" class:disabled class:chips>
  <Menu offsetY={false} bind:active {disabled} {closeOnClick}>
    <span slot="activator">
      <TextField
        {filled}
        {outlined}
        {solo}
        {dense}
        {disabled}
        value={format(value)}
        {placeholder}
        {hint}
        readonly>
        <slot slot="prepend-outer" name="prepend-outer" />

        <slot />
        <div slot="content">
          {#if chips}
            <span class="s-select__chips">
              {#each Array.isArray(value) ? value : [value] as v}
                <Chip>{v}</Chip>
              {/each}
            </span>
          {/if}
        </div>
        <span slot="append">
          <Icon path={DOWN_ICON} rotate={active ? 180 : 0} />
        </span>
        <slot slot="append-outer" name="append-outer" />
      </TextField>
    </span>
    <ListItemGroup bind:value {mandatory} {multiple} {max}>
      {#each items as item}
        <slot name="item" {item}>
          <ListItem {dense} value={item.value}>
            <span slot="prepend">
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

<script>
  import routes from '@/util/routes';
  import SearchIndex from './Search.worker';
  import { Menu, TextField, Icon } from 'svelte-materialify/src';
  import { onMount } from 'svelte';

  let index = null;
  let items = [];
  onMount(() => {
    index = new SearchIndex();
    index.postMessage(['build', routes]);
    index.onmessage = ({ data }) => {
      items = data;
    };
  });

  function search({ target }) {
    index.postMessage(['search', target.value]);
  }
</script>

<style lang="scss">
  .search-item {
    display: block;
    width: 100%;
    padding: 8px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: currentColor;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease-in-out;
    }

    &:hover::before {
      opacity: 0.12;
    }
  }

  .search-item__subtitle {
    color: var(--theme-text-secondary);
    font-size: 12px;
    font-family: 'Fira Code', Consolas, monospace;
    display: block;
  }
</style>

<Menu style="width:100%" closeOnClickOutside={false}>
  <div slot="activator">
    <TextField
      class="pt-0 ma-0"
      color="black"
      placeholder="Search"
      solo
      dense
      on:input={search}>
      <span slot="prepend">
        <Icon class="mdi mdi-magnify" />
      </span>
    </TextField>
  </div>
  <div>
    {#each items as item}
      <a href={item.href} class="search-item" tabindex="0">
        <span class="font-weight-medium">{item.text}</span>
        <span class="search-item__subtitle"> {item.href} </span>
      </a>
    {/each}
  </div>
</Menu>

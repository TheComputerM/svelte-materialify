<script>
  import { onMount, tick } from 'svelte';
  import { markdown } from '@/util/stores';
  import { hashURL } from '../../util/stores';

  let items = [];
  const depths = { H2: 'pl-3', H3: 'pl-6', H4: 'pl-8' };
  onMount(() => {
    async function refresh() {
      const basename = `${window.location.origin + window.location.pathname}#`;
      items = [];
      document
        .querySelectorAll('.markdown-container .heading:not(h1)')
        .forEach((node) => {
          items.push({
            text: node.textContent,
            class: depths[node.tagName],
            href: basename + node.id,
          });
        });
      items = items;
      await tick();
    }

    const unsubscribe = markdown.subscribe((loaded) => {
      if (loaded) refresh();
    });

    return () => {
      unsubscribe();
    };
  });
</script>

<style>
  ul {
    list-style-type: none;
  }

  li a {
    color: inherit;
  }

  li {
    color: var(--theme-text-disabled);
    border-left: 2px solid rgba(160, 160, 160, 0.5);
  }

  li.active {
    color: #1867c0;
    border-left-color: inherit;
  }
</style>

<h5 class="mb-3 mt-6">Contents</h5>
<ul id="toc" class="pl-4">
  {#each items as item}
    <li class="{item.class} pt-1 pb-1 text-body-2" class:active={item.href === $hashURL}>
      <a href={item.href}>{item.text}</a>
    </li>
  {/each}
</ul>

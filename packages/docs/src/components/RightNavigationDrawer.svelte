<script>
  import Gumshoe from 'gumshoejs';
  import { onMount, afterUpdate, tick } from 'svelte';
  import { markdownLoaded } from '../helpers/stores';

  let links = [];
  const depths = { H2: 3, H3: 6, H4: 8 };
  onMount(() => {
    const spy = new Gumshoe('#toc a', {
      navClass: 'active',
      offset: 128,
      events: false,
    });
    markdownLoaded.subscribe(async (loaded) => {
      if (loaded) {
        links = [];
        const basepath = `${window.location.origin + window.location.pathname}#`;
        document.querySelectorAll('.markdown-container h2,h3').forEach((heading) => {
          links.push({
            text: heading.textContent,
            href: basepath + heading.id,
            padding: `pl-${depths[heading.tagName]}`,
          });
        });
        links = links;
        await tick();
        spy.setup();
      }
    });
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
<ul id="toc" class="pl-4" aria-hidden="true">
  {#each links as link}
    <li class="{link.padding} pt-1 pb-1 text-body-2">
      <a href={link.href}>{link.text}</a>
    </li>
  {/each}
</ul>

<script>
  import Gumshoe from 'gumshoejs';
  import { onMount, tick } from 'svelte';

  let links = [];
  onMount(async () => {
    if (document.querySelector('.markdown-container')) {
      let basepath = window.location.origin + window.location.pathname + '#';
      document.querySelectorAll('.markdown-container h2,h3').forEach((heading) => {
        links.push({
          text: heading.textContent,
          href: basepath + heading.id,
          padding: heading.tagName === 'H2' ? 'pl-3' : 'pl-6',
        });
      });
      links = links;
      await tick();
      let spy = new Gumshoe('#toc a', {
        navClass: 'active',
        offset: 128,
        events: false,
      });
    }
  });
</script>

<style>
  ul {
    list-style-type: none;
  }

  li a {color: inherit}

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

<script context="module">
  import Markup from './Markup.svelte';
  import Example from './Example.svelte';
  import Alert from './Alert.svelte';

  export { Markup, Alert, Example };
</script>

<script>
  import { markdown } from '@/util/stores';
  import links from '@/util/links';
  import Meta from '../Meta.svelte';
  import RelatedPages from './RelatedPages.svelte';
  import { Divider, Icon } from 'svelte-materialify/src';
  import { onMount, onDestroy, tick } from 'svelte';
  import { mdiOpenInNew } from '@mdi/js';
  import { hashURL } from '../../util/stores';

  export let title;
  export let description;
  export let keywords;
  export let related = null;
  let container;

  onMount(() => {
    const visible = [];
    container.querySelectorAll('.heading a').forEach((a) => {
      if (!a.hash) return;
      a.href = window.location.origin + window.location.pathname + a.hash;
    });

    const headingElements = [].slice.call(container.querySelectorAll('.heading:not(h1)'));
    const headings = headingElements.map((h) => h.id);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const id = e.target.id;
          if (e.isIntersecting) {
            // eslint-disable-next-line no-unused-expressions
            headings.indexOf(id) < headings.indexOf(visible[0]) ?
              visible.unshift(id) :
              visible.push(id);
          } else {
            const visiblePosition = visible.indexOf(id);
            if (visiblePosition > -1) visible.splice(visiblePosition, 1);
          }
        });
        const hash = visible[0];
        if (hash) {
          const oldURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
          const newURL = `${oldURL}#${hash}`;
          window.history.replaceState({ oldUrl: oldURL }, null, newURL);
          // eslint-disable-next-line no-unused-vars
          $hashURL = newURL;
        }
      },
      { threshold: [1] },
    );

    headingElements.forEach((el) => {
      io.observe(el);
    });

    // Cheap trick to set true on initial load
    markdown.update((x) => !x);
    return () => io.disconnect();
  });

  onDestroy(async () => {
    await tick();
    markdown.set(true);
  });
</script>

<style global>
  h1 + p {
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }
  .heading {
    position: relative;
  }
  .heading > a {
    position: absolute;
    top: 0;
    left: -0.7em;
    opacity: 0;
  }
  .heading:hover > a {
    opacity: 1;
  }
  .app-link {
    font-weight: 500;
  }
  .app-link > span {
    margin-left: 2px;
  }
  .markdown-container > section section {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
</style>

<Meta title="{title} | Svelte Materialify" {description} {keywords} />

<section class="markdown-container pa-4 pa-sm-6 pa-md-8">
  <div bind:this={container}>
    <slot />
  </div>
  {#if related}
    <RelatedPages {related} />
  {/if}
  <br /><br />
  <Divider />
  <div class="mt-8 d-flex justify-space-between blue-grey-text text-darken-1">
    <div class="d-flex">
      <a
        class="app-link d-flex justify-center align-center"
        rel="noopener"
        target="_blank"
        href="{links.docs}/src/routes">
        Edit This Page on GitHub
        <Icon path={mdiOpenInNew} size="16px" style="color: currentColor" class="ml-1" />
      </a>
    </div>
    <span> <b>Last Updated</b>: CURRENT_DATE </span>
  </div>
</section>

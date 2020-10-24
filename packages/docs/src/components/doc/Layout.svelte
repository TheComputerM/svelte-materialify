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
  import { Divider } from 'svelte-materialify/src';
  import { onMount, onDestroy, tick } from 'svelte';

  onMount(() => {
    document.querySelectorAll('.markdown-container .heading a').forEach((a) => {
      if (!a.hash || !document.querySelectorAll(a.hash).length) return;
      a.href = window.location.origin + window.location.pathname + a.hash;
      a.setAttribute('aria-hidden', true);
      a.setAttribute('tabindex', -1);
    });
    // Cheap trick to set true on initial load
    markdown.update((x) => !x);
  });

  onDestroy(async () => {
    await tick();
    markdown.set(true);
  });

  export let title = '';
  export let related = null;
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
    left: -1em;
    font-size: 0.75em;
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

<Meta title={`${title} | Svelte Materialify`} />

<section class="markdown-container pa-4 pa-sm-6 pa-md-8">
  <slot />
  {#if related}
    <RelatedPages {related} />
  {/if}
  <br /><br />
  <Divider />
  <div class="mt-8 d-flex justify-space-between blue-grey-text text-darken-1">
    <span>
      <b>Edit This Page on</b>
      <a class="app-link" rel="noopener" target="_blank" href="{links.docs}/src/routes">
        GitHub
        <span> <i class="mdi mdi-open-in-new" /> </span>
      </a>
    </span>
    <span> <b>Last Updated</b>: CURRENT_DATE </span>
  </div>
</section>

<script context="module">
  import CodeBlock from './CodeBlock.svelte';
  import { markdown } from '../stores';
  import Meta from '@shared/Meta.svelte';
  import ReadyForMore from './ReadyForMore.svelte';
  import { Row, Divider } from 'svelte-materialify/src';

  export { CodeBlock };
</script>

<script>
  import { stores } from '@sapper/app';
  import { onMount, onDestroy, tick } from 'svelte';

  const { page } = stores();

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
  .markdown-container h1 + p {
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }
  .markdown-container .heading {
    position: relative;
  }
  .markdown-container .heading > a {
    position: absolute;
    top: 0;
    left: -1em;
    font-size: 0.75em;
    opacity: 0;
  }
  .markdown-container .heading:hover > a {
    opacity: 1;
  }

  .markdown-container .app-link {
    font-weight: 500;
  }
  .markdown-container .app-link::after {
    content: '\F03CC';
    font: normal normal normal 24px/1 'Material Design Icons';
    margin-left: 4px;
    font-size: inherit;
  }
  .markdown-container > section section {
    margin-bottom: 3rem;
  }
</style>

<Meta title={`${title} | Svelte Materialify`} />

<section class="markdown-container pa-4 pa-sm-6 pa-md-8">
  <slot />
  {#if related}
    <section>
      <h2 class="text-h4 mb-3">Ready For More?</h2>
      <p>
        Continue to learn more about svelte materialify with content selected by the
        creator.
      </p>
      <Row class="justify-space-between">
        {#each related as item}
          <ReadyForMore item={Object.entries(item)} />
        {/each}
      </Row>
    </section>
  {/if}
  <br /><br />
  <Divider />
  <div class="mt-8 d-flex justify-space-between blue-grey-text text-darken-1">
    <span>
      <b>Edit This Page on</b>
      <a
        class="app-link"
        rel="noopener"
        href="https://github.com/TheComputerM/svelte-materialify/tree/master/site/src/routes{$page.path}.svx">
        GitHub
      </a>
    </span>
    <span class="text-body-2"> <b>Last Updated:</b> CURRENT_DATE </span>
  </div>
</section>

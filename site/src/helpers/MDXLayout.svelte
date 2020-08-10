<script context="module">
  import CodeBlock from './CodeBlock.svelte';
  export { CodeBlock };
</script>

<script>
  import { stores } from '@sapper/app';
  import { Row } from 'svelte-materialify/src';
  import ReadyForMore from './ReadyForMore.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    document.querySelectorAll('a').forEach((a) => {
      if (!a.hash || !document.querySelectorAll(a.hash).length) return;
      a.href = a.href = window.location.origin + window.location.pathname + a.hash
      a.setAttribute('aria-hidden', true);
      a.setAttribute('tabindex', -1);
    });
  });

  const { page } = stores();

  export let title = '';
  export let related = null;
</script>

<style global>
  .markdown-container h1 + p {
    font-size: 1.25rem;
    font-weight: 300;
  }
  .markdown-container .heading {
    position: relative;
  }
  .markdown-container .heading > a {
    bottom: 0;
    left: 0;
    top: 0;
    right: 0;
    display: inline-block;
    margin-left: -1.75rem;
    position: absolute;
    font-size: 1.5rem;
    vertical-align: middle;
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
</style>

<svelte:head>
  <title>{title} | Svelte Materialify</title>
</svelte:head>

<section class="markdown-container pa-4 pa-sm-6 pa-md-8">
  <slot />
  {#if related}
    <h2 id="ready-for-more" class="heading text-h4 mb-3">
      <a href="#ready-for-more" aria-hidden="true">
        <i class="mdi mdi-pound" />
      </a>
      Ready For More?
    </h2>
    <Row class="justify-space-between">
      {#each related as item}
        <ReadyForMore
          href={Object.values(item)[0]}
          name={Object.keys(item)[0]} />
      {/each}
    </Row>
  {/if}
  <div class="mt-16 d-flex justify-space-between blue-grey-text text-darken-1">
    <span>
      <b>Edit This Page on</b>
      <a
        href="https://github.com/TheComputerM/svelte-materialify/tree/master/site/src/routes{$page.path}">
        GitHub
      </a>
    </span>
    <span class="text-body-2">
      <b>Last Updated:</b>
      __CurrentDateAndTime__
    </span>
  </div>
</section>

<script context="module">
  import { theme } from '@/util/stores';
  import links from '@/util/links';
  import Prism from 'prismjs';
</script>

<script>
  import { slide } from 'svelte/transition';
  import { Icon, Button } from 'svelte-materialify/src';

  export let file = '';
  export let style = null;

  let component;
  let code;
  import(
    /* webpackChunkName: "examples" */
    /* webpackMode: "lazy-once" */
    `../../examples/${file}.svelte`
  ).then(({ default: data }) => {
    component = data;
  });

  import(
    /* webpackChunkName: "examples-source" */
    /* webpackMode: "lazy-once" */
    `!raw-loader!../../examples/${file}.svelte`
  ).then(({ default: data }) => {
    code = Prism.highlight(data, Prism.languages.html, 'html');
  });

  $: colorInvertable = $theme === 'light';
  let codeVisible = false;
  let codeThemeDark = false;
</script>

<style>
  .example {
    margin-bottom: 36px;
    border-radius: 4px;
    border: thin solid var(--theme-dividers);
  }
  .example-toolbar {
    border-bottom: thin solid var(--theme-dividers);
  }
</style>

<svelte:options immutable={true} />

<div class="example">
  <div class="example-toolbar text-right pa-1">
    {#if colorInvertable}
      <Button
        fab
        icon
        size="small"
        aria-label="invert color"
        on:click={() => (codeThemeDark = !codeThemeDark)}>
        <Icon class="mdi mdi-invert-colors" />
      </Button>
    {/if}
    <a
      href="{links.docs}/src/examples/{file}.svelte"
      aria-label="GitHub"
      rel="noopener noreferrer"
      target="_blank">
      <Button fab icon size="small" aria-label="GitHub" class="text--primary">
        <Icon class="mdi mdi-github" />
      </Button>
    </a>
    <Button
      fab
      icon
      size="small"
      aria-label="Show Code"
      on:click={() => (codeVisible = !codeVisible)}>
      <Icon class="mdi mdi-code-tags" />
    </Button>
  </div>
  {#if codeVisible}
    <pre transition:slide={{ duration: 250 }} class="language-html ma-0">
      <code
        class="language-html">
        {@html code}
      </code>
    </pre>
  {/if}
  <div class="pa-2" class:theme--dark={codeThemeDark} {style}>
    <svelte:component this={component} />
  </div>
</div>

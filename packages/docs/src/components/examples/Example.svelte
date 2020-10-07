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
  ).then((data) => {
    component = data.default;
  });

  import(
    /* webpackChunkName: "examples-source" */
    /* webpackMode: "lazy-once" */
    `!raw-loader!../../examples/${file}.svelte`
  ).then((data) => {
    code = Prism.highlight(data.default, Prism.languages.html, 'html');
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
    background-color: var(--theme-app-bar);
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
    <div transition:slide={{ duration: 250 }}>
      <pre class="language-html">
        <code
          class="language-html">
          {@html code}
        </code>
      </pre>
    </div>
  {/if}
  <div class="pa-2" class:theme--dark={codeThemeDark} {style}>
    <svelte:component this={component} />
  </div>
</div>

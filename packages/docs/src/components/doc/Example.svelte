<script>
  import { theme } from '@/util/stores';
  import links from '@/util/links';
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import { Icon, Button } from 'svelte-materialify/src';

  export let file = '';
  export let style = null;

  let component;
  let source = '';
  const [dir, name] = file.split('/');
  onMount(() => {
    import(`../../examples/${dir}/${name}.svelte`).then((data) => {
      component = data.default;
      source = data.source;
    });
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
        {@html source}
      </code>
    </pre>
  {/if}
  <div class="pa-2" class:theme--dark={codeThemeDark} {style}>
    <svelte:component this={component} />
  </div>
</div>

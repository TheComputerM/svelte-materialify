<script>
  import { onDestroy } from 'svelte';
  import { slide } from 'svelte/transition';
  import { Icon, Button } from 'svelte-materialify/src';
  import { theme } from '../helpers/stores';

  export let code;
  export let component;

  let codeVisible = false;
  let colorInvertable = false;
  let isComponentDark = false;
  const unsubscribe = theme.subscribe((value) => {
    colorInvertable = value === 'light';
    isComponentDark = colorInvertable ? isComponentDark : false;
  });
  onDestroy(unsubscribe);

  const codeContent = `<pre class=language-html><code class=language-html>${code.code}</code></pre>`;
</script>

<style>
  .component-example {
    margin-bottom: 36px;
    border-radius: 4px;
    border: thin solid var(--theme-dividers);
  }

  .component-example :first-child {
    background-color: var(--theme-app-bar);
  }
</style>

<div class="component-example">
  <div class="text-right pa-1">
    {#if colorInvertable}
      <Button fab icon size="small" on:click={() => (isComponentDark = !isComponentDark)}>
        <Icon class="mdi mdi-invert-colors" />
      </Button>
    {/if}
    <a
      href="https://github.com/TheComputerM/svelte-materialify/tree/master/packages/docs/{code.path}"
      rel="noopener noreferrer"
      target="_blank">
      <Button fab icon size="small" class="text--primary">
        <Icon class="mdi mdi-github" />
      </Button>
    </a>
    <Button fab icon size="small" on:click={() => (codeVisible = !codeVisible)}>
      <Icon class="mdi mdi-code-tags" />
    </Button>
  </div>
  {#if codeVisible}
    <div transition:slide={{ duration: 250 }}>
      {@html codeContent}
    </div>
  {/if}
  <div class="pa-2 {isComponentDark ? 'theme--dark' : ''}">
    <svelte:component this={component} />
  </div>
</div>

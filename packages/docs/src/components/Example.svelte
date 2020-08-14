<script>
  import { onDestroy } from 'svelte';
  import { slide } from 'svelte/transition';
  import { Icon, Button, Divider } from 'svelte-materialify/src';
  import { theme } from '../helpers/stores';

  export let content;
  export let component;

  let code = false;
  let colorInvertable = false;
  let dark = false;
  const unsubscribe = theme.subscribe((value) => {
    colorInvertable = value === 'light';
    dark = colorInvertable ? dark : false;
  });
  onDestroy(unsubscribe);

  const codeContent = `<pre class=language-html><code class=language-html>${content.code}</code></pre>`;
</script>

<style>
  .example {
    margin-bottom: 36px;
    border-radius: 4px;
    border: thin solid var(--theme-dividers);
  }
</style>

<div class="example">
  <div class="text-right pa-1">
    {#if colorInvertable}
      <Button fab icon size="small" on:click={() => (dark = !dark)}>
        <Icon class="mdi mdi-invert-colors" />
      </Button>
    {/if}
    <a
      href="https://github.com/TheComputerM/svelte-materialify/tree/master/packages/docs/{content.path}"
      rel="noopener noreferrer"
      target="_blank">
      <Button fab icon size="small" class="text--primary">
        <Icon class="mdi mdi-github" />
      </Button>
    </a>
    <Button fab icon size="small" on:click={() => (code = !code)}>
      <Icon class="mdi mdi-code-tags" />
    </Button>
  </div>
  {#if code}
    <div transition:slide={{ duration: 250 }}>
      {@html codeContent}
    </div>
  {/if}
  <Divider />
  <div class="pa-2 {dark ? 'theme--dark' : ''}">
    <svelte:component this={component} />
  </div>
</div>

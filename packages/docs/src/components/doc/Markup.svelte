<svelte:options immutable={true} />

<script>
  import Clipboard from 'clipboard';
  import { Button, Icon } from 'svelte-materialify/src';
  import { mdiContentCopy } from '@mdi/js';

  export let lang = '';
  function copy(node) {
    const toCopy = node.querySelector('pre').textContent;
    const clipboard = new Clipboard(node.querySelector('.s-btn'), {
      text: () => toCopy,
    });
    return {
      destroy() {
        clipboard.destroy();
      },
    };
  }
</script>

<style lang="scss">
  .code-block {
    position: relative;
    :global {
      .s-btn {
        right: 0.5rem;
        top: 0.5rem;
        z-index: 1;
        .s-btn__content {
          opacity: 0.7;
          transition: opacity 250ms;
        }
      }
    }
    &:hover {
      :global(.s-btn .s-btn__content) {
        opacity: 1;
      }
    }
  }

  span {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    text-transform: uppercase;
    color: var(--theme-text-secondary);
    font-size: 0.7rem;
    font-weight: 700;
    font-family: monospace;
    user-select: none;
  }
</style>

<div class="code-block" use:copy>
  <pre
    class="language-{lang}">
    <code
      class="language-{lang}">
      <slot />
    </code>
  </pre>
  <Button fab depressed size="small" style="position:absolute" aria-label="Copy">
    <Icon size="20px" path={mdiContentCopy} />
  </Button>
  <span aria-hidden="true">{lang}</span>
</div>

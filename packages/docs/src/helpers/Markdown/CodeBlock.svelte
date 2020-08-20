<script context="module">
  const aliases = { js: ['javascript'], sh: ['bash', 'shell'], ts: ['typescript'] };
</script>

<script>
  import { Button, Icon } from 'svelte-materialify/src';

  export let lang = '';
  Object.keys(aliases).forEach((alias) => {
    if (aliases[alias].includes(lang)) lang = alias;
  });

  function copy(node) {
    const toCopy = node.querySelector('pre').textContent;
    const clipboard = new ClipboardJS(node.querySelector('.s-btn'), {
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
    right: 1.15rem;
    bottom: 0.75rem;
    text-transform: uppercase;
    color: var(--theme-text-secondary);
    font-size: 0.7rem;
    font-weight: 700;
    font-family: monospace;
    user-select: none;
  }
</style>

<div class="code-block" use:copy>
  <slot />
  <Button fab depressed size="small" style="position:absolute" aria-label="Copy">
    <Icon size="20px" class="mdi mdi-content-copy" />
  </Button>
  <span aria-hidden="true">{lang}</span>
</div>

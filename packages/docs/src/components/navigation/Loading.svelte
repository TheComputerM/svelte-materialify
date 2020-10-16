<script>
  import { markdown } from '@/util/stores';
  import { ProgressCircular } from 'svelte-materialify/src';
</script>

<style>
  .loading {
    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    background-color: var(--theme-surface);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

{#if !$markdown}
  <div class="loading">
    <ProgressCircular indeterminate size="75" width="5" color="primary" />
  </div>
{/if}

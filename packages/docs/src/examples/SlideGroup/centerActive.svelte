<script>
  import { SlideGroup, SlideItem, Ripple } from 'svelte-materialify/src';
</script>

<style>
  div {
    width: 150px;
    height: 200px;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--theme-dividers);
  }
</style>

<SlideGroup centerActive activeClass="white-text">
  {#each Array(15) as _, i}
    <SlideItem let:active>
      <div class="rounded" class:primary-color={active} use:Ripple>{i + 1}</div>
    </SlideItem>
  {/each}
</SlideGroup>

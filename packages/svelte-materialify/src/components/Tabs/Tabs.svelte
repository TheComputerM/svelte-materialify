<script context="module">
  export const TABS = {};
</script>

<script>
  import SlideGroup from '../SlideGroup';
  import Window from '../Window';
  import { onMount, setContext } from 'svelte';

  let sliderElement;
  let windowComponent;
  const tabs = [];

  let klass = '';
  export { klass as class };
  export let value = 0;
  export let centerActive = false;
  export let showArrows = true;
  export let fixedTabs = false;
  export let grow = false;
  export let centered = false;
  export let right = false;
  export let icons = false;
  export let slider = true;
  export let sliderClass = '';
  export let ripple = {};
  export let vertical = false;

  setContext(TABS, {
    ripple,
    registerTab: (tab) => {
      tabs.push(tab);
    },
  });

  function moveSlider({ detail }) {
    if (slider) {
      const activeTab = tabs[detail];
      if (vertical) {
        sliderElement.style.top = `${activeTab.offsetTop}px`;
        sliderElement.style.height = `${activeTab.offsetHeight}px`;
      } else {
        sliderElement.style.left = `${activeTab.offsetLeft}px`;
        sliderElement.style.width = `${activeTab.offsetWidth}px`;
      }
    }
    windowComponent.set(value);
  }

  onMount(() => {
    moveSlider({ detail: value });
  });
</script>

<style lang="scss" src="./Tabs.scss" global>
</style>

<div class="s-tabs" role="tablist" class:vertical>
  <div
    class="s-tabs-bar {klass}"
    role="tablist"
    class:fixed-tabs={fixedTabs}
    class:grow
    class:centered
    class:right
    class:icons>
    <SlideGroup
      bind:value
      mandatory
      {centerActive}
      {showArrows}
      on:change={moveSlider}
      on:change>
      <slot name="tabs" />
      {#if slider}
        <div class="s-tab-slider {sliderClass}" bind:this={sliderElement} />
      {/if}
    </SlideGroup>
  </div>
  <Window bind:this={windowComponent}>
    <slot />
  </Window>
</div>

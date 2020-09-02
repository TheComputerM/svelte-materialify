<script context="module">
  const closeIcon =
    'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z';
</script>

<script>
  import Ripple from '../../actions/Ripple';
  import Icon from '../Icon';
  import { createEventDispatcher } from 'svelte';

  // Classes to add to chip.
  let klass = '';
  export { klass as class };

  // Determines whether the chip is visible or not.
  export let active = true;

  // Selected state
  export let selected = false;

  /**
   * Specifies the size of chip.
   * @type {x-small|small|default|large|x-large}
   */
  export let size = 'default';
  export let outlined = false;
  export let pill = false;
  export let link = false;
  export let label = false;
  export let close = false;

  const dispatch = createEventDispatcher();

  function onClose(e) {
    active = false;
    dispatch('close', e);
  }
</script>

<style lang="scss" src="./Chip.scss">

</style>

{#if active}
  <span
    class="s-chip {klass} size-{size}"
    use:Ripple={link}
    class:outlined
    class:pill
    class:link
    class:label
    class:selected
    on:click>
    <slot />
    {#if close}
      <div class="s-chip__close" on:click={onClose}>
        <slot name="close-icon">
          <Icon path={closeIcon} />
        </slot>
      </div>
    {/if}
  </span>
{/if}

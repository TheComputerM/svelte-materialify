<script>
  import Ripple from '../../actions/Ripple';
  import Icon from '../Icon';
  import closeIcon from '../../internal/Icons/close';
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

<style lang="scss" src="./Chip.scss" global>
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

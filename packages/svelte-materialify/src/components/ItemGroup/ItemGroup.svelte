<script context="module">
  export const ITEM_GROUP = {};
</script>

<script>
  import { setContext, createEventDispatcher, onDestroy } from 'svelte';
  import { writable } from 'svelte/store';

  let klass = '';
  export { klass as class };
  export let activeClass = '';
  export let value = [];
  export let multiple = false;
  export let mandatory = false;
  export let max = Infinity;
  export let role = null;
  export let style = null;

  const dispatch = createEventDispatcher();
  const valueStore = writable(value);
  $: valueStore.set(value);
  $: dispatch('change', value);

  let startIndex = -1;
  setContext(ITEM_GROUP, {
    select: (val) => {
      if (multiple) {
        if (value.includes(val)) {
          if (!mandatory || value.length > 1) {
            value.splice(value.indexOf(val), 1);
            value = value;
          }
        } else if (value.length < max) value = [...value, val];
      } else if (value === val) {
        if (!mandatory) value = null;
      } else value = val;
    },
    register: (setValue) => {
      const u = valueStore.subscribe((val) => {
        setValue(multiple ? val : [val]);
      });
      onDestroy(u);
    },
    index: () => {
      startIndex += 1;
      return startIndex;
    },
    activeClass,
  });
</script>

<style lang="scss" src="./ItemGroup.scss" global>
</style>

<div class="s-item-group {klass}" {role} {style}>
  <slot />
</div>

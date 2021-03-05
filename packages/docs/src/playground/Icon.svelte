<script>
  import Playground from '@/components/doc/Playground.svelte';
  import { Icon } from 'svelte-materialify/src';
  import { mdiPlus } from '@mdi/js';

  const controls = {
    size: { type: 'slider' },
    icon: { type: 'text' },
    color: { type: 'select', items: ['red', 'green', 'blue', 'indigo', 'purple'] },
  };

  let values = {
    size: 24,
    icon: mdiPlus,
    color: [],
  };
</script>

<Playground {controls} bind:values>
  <Icon size={values.size} path={values.icon} class="{values.color}-text" />
</Playground>

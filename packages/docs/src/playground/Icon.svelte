<script>
  import Playground from '@/components/doc/Playground.svelte';
  import { Icon } from 'svelte-materialify/src';

  const controls = {
    size: { type: 'slider' },
    icon: { type: 'text' },
    color: { type: 'select', items: ['red', 'green', 'blue', 'indigo', 'purple'] },
  };

  let values = {
    size: 24,
    icon: 'plus',
    color: [],
  };
</script>

<Playground {controls} bind:values>
  <Icon size={values.size} class="mdi mdi-{values.icon} {values.color}-text" />
</Playground>

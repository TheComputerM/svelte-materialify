<script>
  import Playground from '@/components/doc/Playground.svelte';
  import { Icon } from 'svelte-materialify/src';
  import { mdiPlus, mdiMagnet, mdiAccount, mdiViewDashboard } from '@mdi/js';

  const items = [{ mdiPlus }, { mdiMagnet }, { mdiAccount }, { mdiViewDashboard }].map(
    (mdi) => {
      return { name: Object.keys(mdi)[0], value: Object.values(mdi)[0] };
    },
  );

  const controls = {
    size: { type: 'slider' },
    icon: {
      type: 'select',
      items,
      format: (val) => items.find((i) => i.value == val).name,
    },
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

<script>
  import Playground from '@/components/doc/Playground.svelte';
  import { AppBar, Button, Icon } from 'svelte-materialify/src';
  import { mdiMenu, mdiMagnify } from '@mdi/js';

  const variants = ['dense', 'prominent', 'flat'];
  const controls = {
    collapsed: { type: 'switch' },
    color: {
      type: 'select',
      items: ['primary', 'secondary', 'success', 'error', 'info'],
    },
  };

  const formatVariant = (v) => Object.fromEntries(v.map((i) => [i, true]));

  let values = {
    variants: [],
    collapsed: false,
    color: [],
  };
</script>

<Playground {variants} {controls} bind:values>
  <AppBar
    class="{values.color[0]}-color"
    collapsed={values.collapsed}
    {...formatVariant(values.variants)}>
    <span slot="icon">
      <Button text fab>
        <Icon path={mdiMenu} />
      </Button>
    </span>
    <span slot="title"> Title </span>
    <div style="flex-grow:1" />
    <Button text fab>
      <Icon path={mdiMagnify} />
    </Button>
  </AppBar>
</Playground>

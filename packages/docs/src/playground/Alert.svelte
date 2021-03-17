<script>
  import Playground from '@/components/doc/Playground.svelte';
  import { Alert, Icon } from 'svelte-materialify/src';
  import { mdiHome } from '@mdi/js';

  const variants = ['dense', 'outlined', 'text', 'tile'];

  const controls = {
    dismissible: { type: 'switch' },
    visible: { type: 'switch' },
    icon: { type: 'switch' },
    coloredBorder: { type: 'switch' },
    border: {
      type: 'select',
      items: ['left', 'top', 'right', 'bottom'],
    },
    color: {
      type: 'select',
      items: ['primary', 'secondary', 'success', 'error', 'info'],
    },
  };

  const formatVariant = (v) => Object.fromEntries(v.map((i) => [i, true]));
  const textColor = (v) => v.some((i) => /^(outlined|text)/.test(i));

  let values = {
    variants: [],
    dismissible: false,
    visible: true,
    icon: false,
    coloredBorder: false,
    border: controls.border.items[0],
    color: controls.color.items[0],
  };

  $: console.log(values.border);
</script>

<Playground {variants} {controls} bind:values>
  <Alert
    class="{values.color}-{textColor(values.variants) ? 'text' : 'color'}"
    dismissible={values.dismissible}
    bind:visible={values.visible}
    border={values.border}
    coloredBorder={values.coloredBorder}
    {...formatVariant(values.variants)}>
    <span slot="icon">
      {#if values.icon}
        <Icon path={mdiHome} />
      {/if}
    </span>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis itaque excepturi suscipit
    possimus blanditiis, illum libero sequi a deleniti sapiente.
  </Alert>
</Playground>

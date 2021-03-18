<script>
  import Playground from '@/components/doc/Playground.svelte';
  import { Chip, Avatar, Icon } from 'svelte-materialify/src';
  import { mdiPlus, mdiMagnet, mdiAccount, mdiViewDashboard } from '@mdi/js';

  const variants = ['label', 'link', 'outlined', 'pill'];

  const items = [
    { mdiPlus },
    { mdiMagnet },
    { mdiAccount },
    { mdiViewDashboard },
  ].map((mdi) => ({ name: Object.keys(mdi)[0], value: Object.values(mdi)[0] }));

  const controls = {
    close: { type: 'switch' },
    active: { type: 'switch' },
    avatar: { type: 'switch' },
    icon: {
      type: 'select',
      items,
      format: (val) => items.find((i) => i.value == val).name, // eslint-disable-line eqeqeq
    },
    size: {
      type: 'select',
      items: ['x-small', 'small', 'default', 'large', 'x-large'],
    },
  };

  const formatVariant = (v) => Object.fromEntries(v.map((i) => [i, true]));

  let values = {
    variants: [],
    close: false,
    active: true,
    avatar: false,
    icon: items[0].value,
    size: 'default',
  };
</script>

<Playground {controls} {variants} bind:values>
  <Chip
    size={values.size}
    close={values.close}
    bind:active={values.active}
    {...formatVariant(values.variants)}>
    {#if values.avatar}
      <Avatar class="primary-color">
        <Icon path={values.icon} />
      </Avatar>
    {/if}
    <span> Chip Component </span>
  </Chip>
</Playground>

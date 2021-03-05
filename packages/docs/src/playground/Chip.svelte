<script>
  import Playground from '@/components/doc/Playground.svelte';
  import { Chip, Avatar, Icon } from 'svelte-materialify/src';
  import { mdiAccountCircle } from '@mdi/js';

  const variants = ['label', 'link', 'outlined', 'pill'];

  const controls = {
    close: { type: 'switch' },
    active: { type: 'switch' },
    avatar: { type: 'switch' },
    icon: { type: 'text' },
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
    icon: mdiAccountCircle,
    size: ['default'],
  };
</script>

<Playground {controls} {variants} bind:values>
  <Chip
    size={values.size[0]}
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

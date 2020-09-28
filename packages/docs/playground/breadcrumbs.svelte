<script>
  import Playground from '@shared/Playground.svelte';
  import { Breadcrumbs } from 'svelte-materialify/src';

  const controls = {
    large: { type: 'switch' },
    divider: {
      type: 'select',
      items: ['/', '>', ':', '\\'],
      mandatory: true,
    },
  };

  let values = {
    large: false,
    divider: ['/'],
  };

  const items = [
    { text: 'Dashboard', href: '#' },
    { text: 'Link 1', href: '#' },
    { text: 'Link 2', disabled: true },
  ];
</script>

<Playground {controls} bind:values>
  <Breadcrumbs large={values.large} {items} divider={values.divider[0]} />
</Playground>

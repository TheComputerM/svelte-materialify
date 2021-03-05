<script>
  import Breadcrumbs from 'svelte-materialify/src/components/Breadcrumbs';
  import Icon from 'svelte-materialify/src/components/Icon';
  import { mdiArrowRightBold } from '@mdi/js';

  const items = [
    { text: 'Dashboard', href: '/components/breadcrumbs/' },
    { text: 'Link 1', href: '/components/breadcrumbs/' },
    { text: 'Link 2', disabled: true },
  ];
</script>

<Breadcrumbs {items}>
  <div slot="divider">-</div>
</Breadcrumbs>

<Breadcrumbs {items}>
  <div slot="divider">
    <Icon path={mdiArrowRightBold} />
  </div>
</Breadcrumbs>

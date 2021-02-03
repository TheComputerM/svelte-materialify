<script>
  import { Breadcrumbs, Icon } from 'svelte-materialify';

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
    <Icon class="mdi mdi-arrow-right-bold" />
  </div>
</Breadcrumbs>

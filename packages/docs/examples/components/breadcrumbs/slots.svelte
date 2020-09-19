<script>
  import Breadcrumbs from 'svelte-materialify/src/components/Breadcrumbs';

  const items = [
    { text: 'Dashboard', href: '/components/breadcrumbs/' },
    { text: 'Link 1', href: '/components/breadcrumbs/' },
    { text: 'Link 2', disabled: true },
  ];
</script>

<Breadcrumbs {items} let:item>
  {#if item.href}
    <a class="s-breadcrumb-item" href={item.href} class:disabled={item.disabled}>
      {item.text.toUpperCase()}
    </a>
  {:else}
    <span class="s-breadcrumb-item" class:disabled={item.disabled}>
      {item.text.toUpperCase()}
    </span>
  {/if}
</Breadcrumbs>

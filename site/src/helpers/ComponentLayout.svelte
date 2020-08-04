<script>
  export let title;

  import { Breadcrumbs } from "svelte-materialify/src";
</script>

<svelte:head>
  {title} - Svelte Materialify
</svelte:head>

<Breadcrumbs
  items={[{ text: 'Components', href: '/components/' }, { text: title, disabled: true }]} />

<h1>{title}</h1>

<slot />

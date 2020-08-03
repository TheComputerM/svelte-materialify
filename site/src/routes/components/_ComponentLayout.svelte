<script>
  export let title;

  import { Breadcrumbs } from "svelte-materialify/src";
</script>

<Breadcrumbs
  items={[{ text: 'Components', href: '/components/' }, { text: title, disabled: true }]} />

<h1>{title}</h1>

<slot />

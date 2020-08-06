<script>
  export let title;
</script>

<svelte:head>
  <title>{title} component | Svelte Materialify</title>
</svelte:head>

<section class="pa-4 pa-sm-6 pa-md-8">
  <h1 class="text-h3 mb-3">{title}</h1>
  <slot />
</section>

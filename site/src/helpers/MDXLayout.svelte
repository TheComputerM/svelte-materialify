<script>
  export let name;
  export let title = '';
</script>

<style global>
  h1 + p {
    font-size: 1.25rem;
    font-weight: 300;
  }
</style>

<svelte:head>
  <title>{title} | Svelte Materialify</title>
</svelte:head>

<section class="pa-4 pa-sm-6 pa-md-8">
  <h1 class="text-h3 mb-3">{name}</h1>
  <slot />
</section>

<script>
  export let title;
</script>

<svelte:options immutable={true} />

<svelte:head>
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta property="og:title" content={title} />
  <meta property="twitter:title" content={title} />
</svelte:head>

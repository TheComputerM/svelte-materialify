<script>
  export let title;
  export let description;
  export let keywords;
</script>

<svelte:options immutable={true} />

<svelte:head>
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta property="og:title" content={title} />
  <meta property="twitter:title" content={title} />

  <meta name="description" content={description} />

  <meta name="keywords" content={keywords} />

  <meta property="og:type" content="website" />
  <meta property="og:description" content={description} />
  <meta
    property="og:image"
    content="https://github.com/TheComputerM/svelte-materialify/blob/master/logo/banner.png?raw=true" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:description" content={description} />
  <meta
    property="twitter:image"
    content="https://github.com/TheComputerM/svelte-materialify/blob/master/logo/banner.png?raw=true" />
</svelte:head>

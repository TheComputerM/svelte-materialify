<script>
  import { Row, Col, ListItem, Icon } from 'svelte-materialify/src';

  export let related;
  const items = related.map((x) => x.split('/'));

  function fmt(str) {
    return str
      .toLowerCase()
      .replace(/(?:^|[\s-/])\w/g, (x) => x.toUpperCase())
      .replace('-', '');
  }

  const icons = {
    components: 'view-dashboard-outline indigo-text',
    'getting-started': 'speedometer green-text',
    styles: 'palette-outline deep-purple-text',
    api: 'flask-empty-outline amber-text',
    actions: 'function indigo-text',
  };
</script>

<style>
  :global(.ready-for-more) {
    border: solid thin var(--theme-dividers);
  }
</style>

<svelte:options immutable={true} />

<section>
  <h2 class="text-h4 mb-3">Ready For More?</h2>
  <p>
    Continue to learn more about svelte materialify with content selected by the creator.
  </p>
  <Row class="justify-space-between">
    {#each items as [dir, page]}
      <Col cols="12" md="4">
        <a href="/{dir}/{page}/">
          <ListItem ripple class="rounded ready-for-more">
            <div slot="prepend">
              <Icon class="mdi mdi-{icons[dir]}" />
            </div>
            {fmt(page)}
            <span slot="subtitle">{fmt(dir)}</span>
          </ListItem>
        </a>
      </Col>
    {/each}
  </Row>
</section>

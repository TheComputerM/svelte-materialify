<svelte:options immutable={true} />

<script>
  import { Row, Col, ListItem, Icon } from 'svelte-materialify/src';
  import {
    mdiViewDashboardOutline,
    mdiSpeedometer,
    mdiPaletteOutline,
    mdiFlaskEmptyOutline,
    mdiFunction,
  } from '@mdi/js';

  export let related;
  const items = related.map((x) => x.split('/'));

  function fmt(str) {
    return str
      .toLowerCase()
      .replace(/(?:^|[\s-/])\w/g, (x) => x.toUpperCase())
      .replace('-', '');
  }

  const icons = {
    components: {
      path: mdiViewDashboardOutline,
      color: 'view-dashboard-outline indigo-text',
    },
    'getting-started': { path: mdiSpeedometer, color: 'speedometer green-text' },
    styles: { path: mdiPaletteOutline, color: 'palette-outline deep-purple-text' },
    api: { path: mdiFlaskEmptyOutline, color: 'flask-empty-outline amber-text' },
    actions: { path: mdiFunction, color: 'function indigo-text' },
  };
</script>

<style>
  :global(.ready-for-more) {
    border: solid thin var(--theme-dividers);
  }
</style>

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
              <Icon path={icons[dir].path} class={icons[dir].color} />
            </div>
            {fmt(page)}
            <span slot="subtitle">{fmt(dir)}</span>
          </ListItem>
        </a>
      </Col>
    {/each}
  </Row>
</section>

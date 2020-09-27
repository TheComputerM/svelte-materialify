<script>
  import { Col, ListItem, Icon } from 'svelte-materialify/src';

  export let item;

  const [name, href] = item[0];

  let icon = '';
  let subtitle = '';
  const checkIfHrefContains = (term) => href.includes(term);
  if (checkIfHrefContains('/components/')) {
    icon = 'view-dashboard-outline indigo-text';
    subtitle = 'Components';
  } else if (checkIfHrefContains('/getting-started/')) {
    icon = 'speedometer green-text';
    subtitle = 'Getting Started';
  } else if (checkIfHrefContains('/styles/')) {
    icon = 'palette-outline deep-purple-text';
    subtitle = 'Styles';
  } else if (checkIfHrefContains('/api/')) {
    icon = 'flask-empty-outline amber-text';
    subtitle = 'API';
  } else if (checkIfHrefContains('/actions/')) {
    icon = 'function indigo-text';
    subtitle = 'Actions';
  }
</script>

<style>
  :global(.ready-for-more) {
    border: solid thin var(--theme-dividers);
  }
</style>

<svelte:options immutable={true} />

<Col cols="12" md="4">
  <a {href}>
    <ListItem ripple class="rounded ready-for-more">
      <div slot="prepend">
        <Icon class="mdi mdi-{icon}" />
      </div>
      {name}
      <span slot="subtitle">{subtitle}</span>
    </ListItem>
  </a>
</Col>

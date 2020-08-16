<script>
  import { Col, ListItem, Icon } from 'svelte-materialify/src';
  import { theme } from '../stores';

  export let href;
  export let name;

  let icon = '';
  let subtitle = '';
  const checkIfHrefContains = (term) => href.includes(term);
  if (checkIfHrefContains('/components/')) {
    icon = 'view-dashboard indigo-text';
    subtitle = 'Components';
  } else if (checkIfHrefContains('/getting-started/')) {
    icon = 'speedometer green-text';
    subtitle = 'Getting Started';
  } else if (checkIfHrefContains('/styles/')) {
    icon = 'palette deep-purple-text';
    subtitle = 'Styles';
  } else if (checkIfHrefContains('/api/')) {
    icon = 'beaker amber-text';
    subtitle = 'API';
  }
</script>

<Col cols="12" md="4">
  <a {href}>
    <ListItem link class="grey {$theme === 'light' ? 'lighten-5' : 'darken-3'}">
      <div slot="left">
        <Icon class="mdi mdi-{icon}" />
      </div>
      {name}
      <span slot="subtitle">{subtitle}</span>
    </ListItem>
  </a>
</Col>

<script>
  import { Col, ListItem, Icon } from "svelte-materialify/src";
  export let href;
  export let name;

  let icon = "";
  let subtitle = "";
  const checkIfHrefContains = (term) => href.includes(term);
  if (checkIfHrefContains("/components/")) {
    icon = "view-dashboard indigo-text";
    subtitle = "Components";
  } else if (checkIfHrefContains("/getting-started/")) {
    icon = "speedometer green-text";
    subtitle = "Getting Started";
  } else if (checkIfHrefContains("/styles/")) {
    icon = "palette deep-purple-text";
    subtitle = "Styles";
  }
</script>

<Col cols="12" md="4">
  <a {href}>
    <ListItem link class="grey lighten-5">
      <div slot="left">
        <Icon class="mdi mdi-{icon}" />
      </div>
      {name}
      <p slot="subtitle">
        {subtitle}
      </p>
    </ListItem>
  </a>
</Col>

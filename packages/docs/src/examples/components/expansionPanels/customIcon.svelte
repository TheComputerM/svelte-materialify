<script>
  import {
    ExpansionPanels,
    ExpansionPanel,
    Icon,
  } from 'svelte-materialify/src';
</script>

<ExpansionPanels>
  <ExpansionPanel>
    <span slot="header">Item</span>
    <span slot="icon" let:active>
      <Icon
        class="mdi mdi-arrow-down-drop-circle-outline"
        rotate={active ? 180 : 0} />
    </span>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat amet
    natus obcaecati molestiae quas mollitia error modi atque aliquam esse.
  </ExpansionPanel>
  <ExpansionPanel>
    <span slot="header">Item</span>
    <span slot="icon" let:active>
      <Icon
        class="mdi mdi-arrow-down-drop-circle"
        rotate={active ? 180 : 0 } />
    </span>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat amet
    natus obcaecati molestiae quas mollitia error modi atque aliquam esse.
  </ExpansionPanel>
  <ExpansionPanel>
    <span slot="header">Item</span>
    <span slot="icon" let:active>
      <Icon class="mdi mdi-menu-down" rotate={active ? 180 : 0} />
    </span>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat amet
    natus obcaecati molestiae quas mollitia error modi atque aliquam esse.
  </ExpansionPanel>
  <ExpansionPanel>
    <span slot="header">Item</span>
    <span slot="icon">
      <Icon class="mdi mdi-arrow-up-down" />
    </span>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat amet
    natus obcaecati molestiae quas mollitia error modi atque aliquam esse.
  </ExpansionPanel>
</ExpansionPanels>

<script>
  import { ExpansionPanels, ExpansionPanel, Icon } from 'svelte-materialify/src';
  import {
    mdiArrowDownDropCircleOutline,
    mdiArrowDownDropCircle,
    mdiMenuDown,
    mdiArrowUpDown,
  } from '@mdi/js';
</script>

<ExpansionPanels>
  <ExpansionPanel>
    <span slot="header">Item</span>
    <span slot="icon" let:active>
      <Icon path={mdiArrowDownDropCircleOutline} rotate={active ? 180 : 0} />
    </span>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat amet natus obcaecati
    molestiae quas mollitia error modi atque aliquam esse.
  </ExpansionPanel>
  <ExpansionPanel>
    <span slot="header">Item</span>
    <span slot="icon" let:active>
      <Icon path={mdiArrowDownDropCircle} rotate={active ? 180 : 0} />
    </span>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat amet natus obcaecati
    molestiae quas mollitia error modi atque aliquam esse.
  </ExpansionPanel>
  <ExpansionPanel>
    <span slot="header">Item</span>
    <span slot="icon" let:active>
      <Icon path={mdiMenuDown} rotate={active ? 180 : 0} />
    </span>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat amet natus obcaecati
    molestiae quas mollitia error modi atque aliquam esse.
  </ExpansionPanel>
  <ExpansionPanel>
    <span slot="header">Item</span>
    <span slot="icon">
      <Icon path={mdiArrowUpDown} />
    </span>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat amet natus obcaecati
    molestiae quas mollitia error modi atque aliquam esse.
  </ExpansionPanel>
</ExpansionPanels>

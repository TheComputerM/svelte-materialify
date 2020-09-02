<script>
  import ExpansionPanels, {
    ExpansionPanel,
  } from 'svelte-materialify/src/components/ExpansionPanels';

  let value = [1];
</script>

<p class="text-center">Value: [{value}]</p>
<ExpansionPanels multiple bind:value>
  <ExpansionPanel>
    <span slot="header">Item</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
    amet natus obcaecati molestiae quas mollitia error modi atque aliquam esse.
  </ExpansionPanel>
  <ExpansionPanel>
    <span slot="header">Item</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
    amet natus obcaecati molestiae quas mollitia error modi atque aliquam esse.
  </ExpansionPanel>
  <ExpansionPanel>
    <span slot="header">Item</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
    amet natus obcaecati molestiae quas mollitia error modi atque aliquam esse.
  </ExpansionPanel>
  <ExpansionPanel>
    <span slot="header">Item</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
    amet natus obcaecati molestiae quas mollitia error modi atque aliquam esse.
  </ExpansionPanel>
</ExpansionPanels>

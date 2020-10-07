<script>
  import { ExpansionPanels, ExpansionPanel, Checkbox } from 'svelte-materialify/src';

  let disabled = true;
</script>

<Checkbox bind:checked={disabled}>Disabled</Checkbox>
<br />
<ExpansionPanels {disabled}>
  <ExpansionPanel>
    <span slot="header">Item</span>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat amet natus
    obcaecati molestiae quas mollitia error modi atque aliquam esse.
  </ExpansionPanel>
  <ExpansionPanel>
    <span slot="header">Item</span>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat amet natus
    obcaecati molestiae quas mollitia error modi atque aliquam esse.
  </ExpansionPanel>
  <ExpansionPanel>
    <span slot="header">Item</span>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat amet natus
    obcaecati molestiae quas mollitia error modi atque aliquam esse.
  </ExpansionPanel>
</ExpansionPanels>

<script>
  import ExpansionPanels, {
    ExpansionPanel,
  } from 'svelte-materialify/src/components/ExpansionPanels';

  let value = [1];
  let about = { index: '', active: '' };
  function onChange(e) {
    about = e.detail;
  }
</script>

<p class="text-center">Value: [{value}]</p>
<p class="text-center">Index: <b>{about.index}</b>, Active: <b>{about.active}</b></p>

<ExpansionPanels on:change={onChange} bind:value>
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
  <ExpansionPanel disabled>
    <span slot="header">Disabled</span>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat amet natus
    obcaecati molestiae quas mollitia error modi atque aliquam esse.
  </ExpansionPanel>
  <ExpansionPanel>
    <span slot="header">Item</span>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat amet natus
    obcaecati molestiae quas mollitia error modi atque aliquam esse.
  </ExpansionPanel>
</ExpansionPanels>

<script>
  import ExpansionPanels, {
    ExpansionPanel,
  } from 'svelte-materialify/src/components/ExpansionPanels';

  import Button from 'svelte-materialify/src/components/Button';

  let value = [2];

  function toggle(n) {
    if (value.includes(n)) {
      value.splice(value.indexOf(n), 1);
    } else {
      value.push(n);
    }
    value = value;
  }
</script>

<div class="text-center">
  <Button on:click={() => toggle(0)}>Toggle Index 0</Button>
  <Button on:click={() => toggle(1)}>Toggle Index 1</Button>
  <Button on:click={() => toggle(2)}>Toggle Index 2</Button>
</div>
<br />
<ExpansionPanels multiple bind:value>
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

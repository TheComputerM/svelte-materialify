<script>
  import { Button, Tooltip, Icon } from 'svelte-materialify/src';
</script>

<div class="d-flex justify-space-around align-center">
  <Tooltip bottom>
    <Button>Button</Button>
    <span slot="tip">Tooltip</span>
  </Tooltip>

  <Tooltip bottom>
    <Icon class="mdi mdi-home" />
    <span slot="tip">Tooltip</span>
  </Tooltip>

  <Tooltip bottom>
    <span>This text has a tooltip</span>
    <span slot="tip">Tooltip</span>
  </Tooltip>
</div>

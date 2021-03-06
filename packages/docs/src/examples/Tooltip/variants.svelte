<script>
  import { Button, Tooltip, Icon } from 'svelte-materialify/src';
  import { mdiHome } from '@mdi/js';
</script>

<div class="d-flex justify-space-around align-center">
  <Tooltip bottom>
    <Button>Button</Button>
    <span slot="tip">Tooltip</span>
  </Tooltip>

  <Tooltip bottom>
    <Icon path={mdiHome} />
    <span slot="tip">Tooltip</span>
  </Tooltip>

  <Tooltip bottom>
    <span>This text has a tooltip</span>
    <span slot="tip">Tooltip</span>
  </Tooltip>
</div>

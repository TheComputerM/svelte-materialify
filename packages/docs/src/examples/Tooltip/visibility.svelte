<script>
  import { Row, Col, Button, Icon, Tooltip } from 'svelte-materialify/src';
  import { mdiCart } from '@mdi/js';

  let show = false;
</script>

<Row class="text-center">
  <Col cols={12}>
    <Button on:click={() => (show = !show)}>Toggle</Button>
  </Col>
  <Col cols={12} class="mt-12">
    <Tooltip top bind:active={show}>
      <Icon path={mdiCart} />
      <span slot="tip">Programmatic tooltip</span>
    </Tooltip>
  </Col>
</Row>

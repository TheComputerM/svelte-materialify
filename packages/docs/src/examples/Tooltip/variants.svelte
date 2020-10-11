<script>
  import { Row, Col, Button, Tooltip, Icon } from 'svelte-materialify/src';
</script>

<Row class="text-center align-center justify-space-around">
  <Col>
    <Tooltip bottom>
      <Button>Button</Button>
      <span slot="tip">Tooltip</span>
    </Tooltip>
  </Col>
  <Col>
    <Tooltip bottom>
      <Icon class="mdi mdi-home" />
      <span slot="tip">Tooltip</span>
    </Tooltip>
  </Col>
  <Col>
    <Tooltip bottom>
      <span>This text has a tooltip</span>
      <span slot="tip">Tooltip</span>
    </Tooltip>
  </Col>
</Row>

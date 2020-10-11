<script>
  import { Row, Col, Button, Tooltip } from 'svelte-materialify/src';
</script>

<Row class="text-center align-center justify-space-around">
  <Col>
    <Tooltip left>
      <Button>Left</Button>
      <span slot="tip">Left tooltip</span>
    </Tooltip>
  </Col>
  <Col>
    <Tooltip top>
      <Button>Top</Button>
      <span slot="tip">Top tooltip</span>
    </Tooltip>
  </Col>
  <Col>
    <Tooltip bottom>
      <Button>Bottom</Button>
      <span slot="tip">Bottom tooltip</span>
    </Tooltip>
  </Col>
  <Col>
    <Tooltip right>
      <Button>Right</Button>
      <span slot="tip">Right tooltip</span>
    </Tooltip>
  </Col>
</Row>

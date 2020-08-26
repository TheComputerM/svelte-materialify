<script>
  import TextField from 'svelte-materialify/src/components/TextField';
  import { Row, Col } from 'svelte-materialify/src/components/Grid';
</script>

<Row>
  <Col>
    <TextField dense filled>Filled</TextField>
  </Col>
  <Col>
    <TextField dense outlined>Outlined</TextField>
  </Col>
  <Col>
    <TextField dense solo placeholder="Solo" />
  </Col>
</Row>

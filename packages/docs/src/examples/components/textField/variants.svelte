<script>
  import { Row, Col, TextField } from 'svelte-materialify/src';
</script>

<Row>
  <Col>
    <TextField>Regular</TextField>
    <TextField filled>Filled</TextField>
    <TextField outlined>Outlined</TextField>
    <TextField solo placeholder="Solo" />
  </Col>
  <Col>
    <TextField placeholder="Placeholder">Regular</TextField>
    <TextField placeholder="Placeholder" filled>Filled</TextField>
    <TextField placeholder="Placeholder" outlined>Outlined</TextField>
    <TextField placeholder="Placeholder" solo />
  </Col>
</Row>

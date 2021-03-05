<script>
  import { TextField, Row, Col } from 'svelte-materialify/src';
</script>

<Row>
  <Col>
    <TextField dense filled>Filled</TextField>
    <br />
    <TextField dense>Regular</TextField>
    <br />
    <TextField dense rounded filled>Filled</TextField>
  </Col>
  <Col>
    <TextField dense outlined>Outlined</TextField>
    <br />
    <TextField dense solo placeholder="Solo" />
    <br />
    <TextField dense rounded outlined>Outlined</TextField>
  </Col>
</Row>

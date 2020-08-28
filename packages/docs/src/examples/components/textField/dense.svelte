<script>
  import TextField from 'svelte-materialify/src/components/TextField';
  import { Row, Col } from 'svelte-materialify/src/components/Grid';
</script>

<Row>
  <Col>
    <TextField dense filled>Filled</TextField>
    <TextField dense>Regular</TextField>
    <TextField dense rounded filled>Filled</TextField>
  </Col>
  <Col>
    <TextField dense outlined>Outlined</TextField>
    <TextField dense solo placeholder="Solo" />
    <TextField dense rounded outlined>Outlined</TextField>
  </Col>
</Row>

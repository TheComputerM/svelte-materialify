<script>
  import TextField from 'svelte-materialify/src/components/TextField';
  import { Row, Col } from 'svelte-materialify/src/components/Grid';

  const rules = [(v) => v.length <= 20 || 'Max 20 characters'];
</script>

<Row>
  <Col>
    <TextField clearable counter={20} {rules}>Regular</TextField>
    <br />
    <TextField clearable filled counter={20} {rules}>Filled</TextField>
  </Col>
  <Col>
    <TextField clearable outlined counter={20} {rules}>Outlined</TextField>
    <br />
    <TextField clearable solo counter={20} {rules} />
  </Col>
</Row>

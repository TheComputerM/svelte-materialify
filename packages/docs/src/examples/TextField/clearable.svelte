<script>
  import { TextField, Row, Col } from 'svelte-materialify/src';

  const value = 'Hello';
</script>

<Row>
  <Col>
    <TextField clearable {value}>Regular</TextField>
    <br />
    <TextField clearable filled {value}>Filled</TextField>
  </Col>
  <Col>
    <TextField clearable outlined {value}>Outlined</TextField>
    <br />
    <TextField clearable solo {value} />
  </Col>
</Row>

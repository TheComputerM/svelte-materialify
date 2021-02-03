<script>
  import { TextField, Row, Col } from 'svelte-materialify';

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

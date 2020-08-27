<script>
  import TextField from 'svelte-materialify/src/components/TextField';
  import { Row, Col } from 'svelte-materialify/src/components/Grid';

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

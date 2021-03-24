<script>
  import { NumberField, Row, Col } from 'svelte-materialify/src';

  const value = 42;
</script>

<Row>
  <Col>
    <NumberField clearable {value}>Regular</NumberField>
    <br />
    <NumberField clearable filled {value}>Filled</NumberField>
  </Col>
  <Col>
    <NumberField clearable outlined {value}>Outlined</NumberField>
    <br />
    <NumberField clearable solo {value} />
  </Col>
</Row>

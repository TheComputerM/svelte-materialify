<script>
  import { Row, Col, Select } from 'svelte-materialify/src';

  const items = ['foo', 'bar', 'fizz', 'buzz'];
</script>

<Row>
  <Col>
    <Select {items}>Regular</Select>
    <Select filled {items}>Filled</Select>
  </Col>
  <Col>
    <Select solo {items} placeholder="Solo" />
    <Select outlined {items}>Outlined</Select>
  </Col>
</Row>

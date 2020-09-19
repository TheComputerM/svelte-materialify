<script>
  import { Row, Col, Select } from 'svelte-materialify/src';

  const items = [
    { name: 'Foo', value: 'foo' },
    { name: 'Bar', value: 'bar' },
    { name: 'Fizz', value: 'fizz' },
    { name: 'Buzz', value: 'buzz' },
  ];
</script>

<Row>
  <Col>
    <Select multiple {items}>Regular</Select>
    <Select multiple filled {items}>Filled</Select>
  </Col>
  <Col>
    <Select multiple solo {items} placeholder="Solo" />
    <Select multiple outlined {items}>Outlined</Select>
  </Col>
</Row>

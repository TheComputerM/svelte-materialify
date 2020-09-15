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
    <Select {items}>Regular</Select>
    <Select filled {items}>Filled</Select>
  </Col>
  <Col>
    <Select solo {items} placeholder="Solo" />
    <Select outlined {items}>Outlined</Select>
  </Col>
</Row>

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
    <Select disabled {items}>Regular</Select>
    <Select disabled filled {items}>Filled</Select>
  </Col>
  <Col>
    <Select disabled solo {items} placeholder="Solo" />
    <Select disabled outlined {items}>Outlined</Select>
  </Col>
</Row>

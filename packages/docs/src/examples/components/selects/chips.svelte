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
    <Select chips {items}>Regular</Select>
    <Select chips filled {items}>Filled</Select>
  </Col>
  <Col>
    <Select chips multiple {items}>Multiple</Select>
    <Select chips outlined {items}>Outlined</Select>
  </Col>
</Row>

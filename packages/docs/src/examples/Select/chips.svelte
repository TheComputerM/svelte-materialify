<script>
  import { Row, Col, Select } from 'svelte-materialify/src';

  const items = [
    { name: 'Foo', value: 'foo' },
    { name: 'Bar', value: 'bar' },
    { name: 'Fizz', value: 'fizz' },
    { name: 'Buzz', value: 'buzz' },
  ];
  const items2 = ['foo', 'bar', 'fizz', 'buzz'];
</script>

<Row>
  <Col>
    <Select chips {items}>Regular</Select>
    <Select chips filled {items}>Filled</Select>
  </Col>
  <Col>
    <Select chips multiple items={items}>Multiple</Select>
    <Select chips multiple outlined items={items2}>Multiple Outlined</Select>
  </Col>
</Row>

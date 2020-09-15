<script>
  import { Row, Col, Select, Icon } from 'svelte-materialify/src';

  const items = [
    { name: 'Foo', value: 'foo' },
    { name: 'Bar', value: 'bar' },
    { name: 'Fizz', value: 'fizz' },
    { name: 'Buzz', value: 'buzz' },
  ];
</script>

<Row>
  <Col>
    <Select {items}>
      <span slot="prepend">
        <Icon class="mdi mdi-home" />
      </span> Regular
    </Select>
  </Col>
  <Col>
    <Select {items}>
      Regular <span slot="append">
        <Icon class="mdi mdi-home" />
      </span>
    </Select>
  </Col>
</Row>

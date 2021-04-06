<script>
  import { Row, Select } from 'svelte-materialify/src';

  const items = [
    { name: 'Foo!', value: 'foo' },
    { name: 'Bar!', value: 'bar' },
    { name: 'Fizz!', value: 'fizz' },
    { name: 'Buzz!', value: 'buzz' },
  ];
  let value;
</script>

<Row noGutters class="mt-2">
  <Select {items} bind:value>Regular</Select>
  <p>chosen value: {value}</p>
</Row>

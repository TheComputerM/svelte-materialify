<script>
  import { Row, Col, NumberField } from 'svelte-materialify/src';

  const rules = [
    (value) => {
      if (value !== 42) return "That's not the meaning of life!";
      return true;
    },
  ];
</script>

<Row>
  <Col>
    <NumberField {rules} filled>Custom Rules</NumberField>
  </Col>
</Row>

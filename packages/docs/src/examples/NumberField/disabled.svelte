<script>
  import { NumberField, Row, Col } from 'svelte-materialify/src';
</script>

<Row>
  <Col>
    <NumberField disabled value="Hello">Regular</NumberField>
    <NumberField disabled filled value="Hello">Filled</NumberField>
    <NumberField disabled outlined value="Hello">Outlined</NumberField>
    <NumberField disabled solo value="Hello" />
  </Col>
  <Col>
    <NumberField readonly value="Hello">Regular</NumberField>
    <NumberField readonly filled value="Hello">Filled</NumberField>
    <NumberField readonly outlined value="Hello">Outlined</NumberField>
    <NumberField readonly solo value="Hello" />
  </Col>
</Row>

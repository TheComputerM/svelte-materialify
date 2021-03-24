<script>
  import { Row, Col, NumberField } from 'svelte-materialify/src';
</script>

<Row>
  <Col>
    <NumberField class="mb-6" min={3} value={3}>min=3</NumberField>
    <NumberField class="mb-6" max={3} value={3}>max=3</NumberField>
  </Col>
  <Col>
    <NumberField class="mb-6" step={10}>step=10</NumberField>
    <NumberField class="mb-6" step={10} value={3}>step=1.5 min=3 max=6</NumberField>
  </Col>
</Row>

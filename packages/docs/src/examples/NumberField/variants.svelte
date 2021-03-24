<script>
  import { Row, Col, NumberField } from 'svelte-materialify/src';
</script>

<Row>
  <Col>
    <NumberField>Regular</NumberField>
    <NumberField filled>Filled</NumberField>
    <NumberField outlined>Outlined</NumberField>
    <NumberField solo placeholder="Solo" />
  </Col>
  <Col>
    <NumberField placeholder="Placeholder">Regular</NumberField>
    <NumberField placeholder="Placeholder" filled>Filled</NumberField>
    <NumberField placeholder="Placeholder" outlined>Outlined</NumberField>
    <NumberField placeholder="Placeholder" solo />
  </Col>
</Row>

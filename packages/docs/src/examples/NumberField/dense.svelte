<script>
  import { NumberField, Row, Col } from 'svelte-materialify/src';
</script>

<Row>
  <Col>
    <NumberField dense filled>Filled</NumberField>
    <br />
    <NumberField dense>Regular</NumberField>
    <br />
    <NumberField dense rounded filled>Filled</NumberField>
  </Col>
  <Col>
    <NumberField dense outlined>Outlined</NumberField>
    <br />
    <NumberField dense solo placeholder="Solo" />
    <br />
    <NumberField dense rounded outlined>Outlined</NumberField>
  </Col>
</Row>

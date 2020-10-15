<script>
  import { Row, Col } from 'svelte-materialify/src';
</script>

<Row noGutters>
  <Col cols={4}>
    <div class="pa-2">.col-4</div>
  </Col>
  <Col cols={4} offset={4}>
    <div class="pa-2">.col-4.offset-4</div>
  </Col>
</Row>
<br />
<Row noGutters>
  <Col cols={4} offset={6} offset_md={4}>
    <div class="pa-2">.col-4.offset-6.offset-md-4</div>
  </Col>
</Row>

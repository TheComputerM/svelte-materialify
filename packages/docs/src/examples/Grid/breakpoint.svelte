<script>
  import { Row, Col } from 'svelte-materialify/src';
</script>

<Row noGutters>
  <Col>
    <div class="pa-2">Equal Width</div>
  </Col>
  <Col>
    <div class="pa-2">Equal Width</div>
  </Col>
</Row>
<br />
<Row noGutters>
  <Col cols={12} sm={6} md={8}>
    <div class="pa-2">.col-12.col-sm-6.col-md-8</div>
  </Col>
  <Col cols={12} sm={6} md={4}>
    <div class="pa-2">.col-12.col-sm-6.col-md-4</div>
  </Col>
</Row>

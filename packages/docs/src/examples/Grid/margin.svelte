<script>
  import { Row, Col } from 'svelte-materialify/src';
</script>

<Row noGutters>
  <Col md={4}>
    <div class="pa-2">.col-md-4</div>
  </Col>
  <Col class="ml-auto" md={4}>
    <div class="pa-2">.col-md-4.ml-auto</div>
  </Col>
</Row>

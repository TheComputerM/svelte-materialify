<script>
  import { Row, Col, Select } from 'svelte-materialify/src';

  const directions = ['a', 't', 'b', 'l', 'r'].map((i) => ({ value: i, name: i }));

  const spacers = Array.from({ length: 17 }, (val, i) => i.toString()).map((i) => ({
    value: i,
    name: i,
  }));

  let pD = ['a'];
  let p = ['6'];

  let mD = ['a'];
  let m = ['2'];
</script>

<div class="pa-4">
  <Row>
    <Col class="d-flex" cols={12} sm={6}>
      <Select bind:value={pD} items={directions}>
        <b slot="prepend"> p </b>
        Padding
      </Select>
      <Select bind:value={p} items={spacers}><b slot="prepend"> - </b> Size</Select>
    </Col>
    <Col class="d-flex" cols={12} sm={6}>
      <Select bind:value={mD} items={directions}><b slot="prepend"> m </b> Margin</Select>
      <Select bind:value={m} items={spacers}><b slot="prepend"> - </b> Size</Select>
    </Col>
  </Row>
  <div class="orange lighten-3" style="content-visibility:auto">
    <div class="elevation-4 m{mD}-{m}">
      <div class="light-green lighten-3 p{pD}-{p}">
        <div class="white text-center pt-6 pb-6">
          Use the controls above to try out the different spacing helpers.
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  import { Row, Col, Select } from 'svelte-materialify/src';

  const directions = ['a', 't'].map((i) => ({ value: i, name: i }));

  const spacers = Array.from({ length: 17 }, (val, i) => i.toString()).map((i) => ({
    value: i,
    name: i,
  }));

  let paddingDirection = ['a'];
  let padding = ['6'];

  let marginDirection = ['a'];
  let margin = ['6'];
</script>

<div class="pa-4">
  <Row>
    <Col class="d-flex" cols={12} sm={6}>
      <Select bind:value={paddingDirection} items={directions}>
        <b slot="prepend"> p </b>
        Padding
      </Select>
      <Select bind:value={padding} items={spacers}><b slot="prepend"> - </b> Size</Select>
    </Col>
    <Col class="d-flex" cols={12} sm={6}>
      <Select bind:value={marginDirection} items={directions}>
        <b slot="prepend"> m </b>
        Margin
      </Select>
      <Select bind:value={margin} items={spacers}><b slot="prepend"> - </b> Size</Select>
    </Col>
  </Row>
  <div class="orange lighten-3">
    <div class="elevation-4 m{marginDirection}-{margin}">
      <div class="light-green lighten-3 p{paddingDirection}-{padding}">
        <div class="white text-center pt-6 pb-6">
          Use the controls above to try out the different spacing helpers.
        </div>
      </div>
    </div>
  </div>
</div>

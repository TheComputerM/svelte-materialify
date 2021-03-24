<script>
  import { NumberField, Row, Col, Icon } from 'svelte-materialify/src';
  import { mdiHome } from '@mdi/js';
</script>

<Row>
  <Col>
    <NumberField>
      <div slot="prepend-outer">
        <Icon path={mdiHome} />
      </div>
      Prepend Outer
    </NumberField>
    <br />
    <NumberField>
      <div slot="prepend">
        <Icon path={mdiHome} />
      </div>
      Prepend
    </NumberField>
    <br />
    <NumberField>
      <div slot="append-outer">
        <Icon path={mdiHome} />
      </div>
      Append Outer
    </NumberField>
    <br />
    <NumberField>
      <div slot="append">
        <Icon path={mdiHome} />
      </div>
      Append
    </NumberField>
    <br />
    <NumberField filled>
      <div slot="prepend-outer">
        <Icon path={mdiHome} />
      </div>
      Prepend Outer
    </NumberField>
    <br />
    <NumberField filled>
      <div slot="prepend">
        <Icon path={mdiHome} />
      </div>
      Prepend
    </NumberField>
    <br />
    <NumberField filled>
      <div slot="append-outer">
        <Icon path={mdiHome} />
      </div>
      Append Outer
    </NumberField>
    <br />
    <NumberField filled>
      <div slot="append">
        <Icon path={mdiHome} />
      </div>
      Append
    </NumberField>
  </Col>
  <Col>
    <NumberField solo placeholder="Prepend Outer">
      <div slot="prepend-outer">
        <Icon path={mdiHome} />
      </div>
    </NumberField>
    <br />
    <NumberField solo placeholder="Prepend">
      <div slot="prepend">
        <Icon path={mdiHome} />
      </div>
    </NumberField>
    <br />
    <NumberField solo placeholder="Append Outer">
      <div slot="append-outer">
        <Icon path={mdiHome} />
      </div>
    </NumberField>
    <br />
    <NumberField solo placeholder="Append">
      <div slot="append">
        <Icon path={mdiHome} />
      </div>
    </NumberField>
    <br />
    <NumberField outlined>
      <div slot="prepend-outer">
        <Icon path={mdiHome} />
      </div>
      Prepend Outer
    </NumberField>
    <br />
    <NumberField outlined>
      <div slot="prepend">
        <Icon path={mdiHome} />
      </div>
      Prepend
    </NumberField>
    <br />
    <NumberField outlined>
      <div slot="append-outer">
        <Icon path={mdiHome} />
      </div>
      Append Outer
    </NumberField>
    <br />
    <NumberField outlined>
      <div slot="append">
        <Icon path={mdiHome} />
      </div>
      Append
    </NumberField>
  </Col>
</Row>

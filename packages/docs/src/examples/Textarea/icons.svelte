<script>
  import Textarea from 'svelte-materialify/src/components/Textarea';
  import { Row, Col } from 'svelte-materialify/src/components/Grid';
  import Icon from 'svelte-materialify/src/components/Icon';
  import { mdiHome } from '@mdi/js';
</script>

<Row>
  <Col>
    <Textarea>
      <div slot="prepend-outer">
        <Icon path={mdiHome} />
      </div>
      Prepend Outer
    </Textarea>
    <Textarea>
      <div slot="prepend">
        <Icon path={mdiHome} />
      </div>
      Prepend
    </Textarea>
    <Textarea>
      <div slot="append-outer">
        <Icon path={mdiHome} />
      </div>
      Append Outer
    </Textarea>
    <Textarea>
      <div slot="append">
        <Icon path={mdiHome} />
      </div>
      Append
    </Textarea>
    <Textarea filled>
      <div slot="prepend-outer">
        <Icon path={mdiHome} />
      </div>
      Prepend Outer
    </Textarea>
    <Textarea filled>
      <div slot="prepend">
        <Icon path={mdiHome} />
      </div>
      Prepend
    </Textarea>
    <Textarea filled>
      <div slot="append-outer">
        <Icon path={mdiHome} />
      </div>
      Append Outer
    </Textarea>
    <Textarea filled>
      <div slot="append">
        <Icon path={mdiHome} />
      </div>
      Append
    </Textarea>
  </Col>
  <Col>
    <Textarea solo placeholder="Prepend Outer">
      <div slot="prepend-outer">
        <Icon path={mdiHome} />
      </div>
    </Textarea>
    <Textarea solo placeholder="Prepend">
      <div slot="prepend">
        <Icon path={mdiHome} />
      </div>
    </Textarea>
    <Textarea solo placeholder="Append Outer">
      <div slot="append-outer">
        <Icon path={mdiHome} />
      </div>
    </Textarea>
    <Textarea solo placeholder="Append">
      <div slot="append">
        <Icon path={mdiHome} />
      </div>
    </Textarea>
    <Textarea outlined>
      <div slot="prepend-outer">
        <Icon path={mdiHome} />
      </div>
      Prepend Outer
    </Textarea>
    <Textarea outlined>
      <div slot="prepend">
        <Icon path={mdiHome} />
      </div>
      Prepend
    </Textarea>
    <Textarea outlined>
      <div slot="append-outer">
        <Icon path={mdiHome} />
      </div>
      Append Outer
    </Textarea>
    <Textarea outlined>
      <div slot="append">
        <Icon path={mdiHome} />
      </div>
      Append
    </Textarea>
  </Col>
</Row>

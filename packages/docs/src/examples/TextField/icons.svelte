<script>
  import { TextField, Row, Col, Icon } from 'svelte-materialify';
</script>

<Row>
  <Col>
    <TextField>
      <div slot="prepend-outer">
        <Icon class="mdi mdi-home" />
      </div>
      Prepend Outer
    </TextField>
    <br />
    <TextField>
      <div slot="prepend">
        <Icon class="mdi mdi-home" />
      </div>
      Prepend
    </TextField>
    <br />
    <TextField>
      <div slot="append-outer">
        <Icon class="mdi mdi-home" />
      </div>
      Append Outer
    </TextField>
    <br />
    <TextField>
      <div slot="append">
        <Icon class="mdi mdi-home" />
      </div>
      Append
    </TextField>
    <br />
    <TextField filled>
      <div slot="prepend-outer">
        <Icon class="mdi mdi-home" />
      </div>
      Prepend Outer
    </TextField>
    <br />
    <TextField filled>
      <div slot="prepend">
        <Icon class="mdi mdi-home" />
      </div>
      Prepend
    </TextField>
    <br />
    <TextField filled>
      <div slot="append-outer">
        <Icon class="mdi mdi-home" />
      </div>
      Append Outer
    </TextField>
    <br />
    <TextField filled>
      <div slot="append">
        <Icon class="mdi mdi-home" />
      </div>
      Append
    </TextField>
  </Col>
  <Col>
    <TextField solo placeholder="Prepend Outer">
      <div slot="prepend-outer">
        <Icon class="mdi mdi-home" />
      </div>
    </TextField>
    <br />
    <TextField solo placeholder="Prepend">
      <div slot="prepend">
        <Icon class="mdi mdi-home" />
      </div>
    </TextField>
    <br />
    <TextField solo placeholder="Append Outer">
      <div slot="append-outer">
        <Icon class="mdi mdi-home" />
      </div>
    </TextField>
    <br />
    <TextField solo placeholder="Append">
      <div slot="append">
        <Icon class="mdi mdi-home" />
      </div>
    </TextField>
    <br />
    <TextField outlined>
      <div slot="prepend-outer">
        <Icon class="mdi mdi-home" />
      </div>
      Prepend Outer
    </TextField>
    <br />
    <TextField outlined>
      <div slot="prepend">
        <Icon class="mdi mdi-home" />
      </div>
      Prepend
    </TextField>
    <br />
    <TextField outlined>
      <div slot="append-outer">
        <Icon class="mdi mdi-home" />
      </div>
      Append Outer
    </TextField>
    <br />
    <TextField outlined>
      <div slot="append">
        <Icon class="mdi mdi-home" />
      </div>
      Append
    </TextField>
  </Col>
</Row>

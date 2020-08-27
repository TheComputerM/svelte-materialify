<script>
  import TextField from "svelte-materialify/src/components/TextField";
  import { Row, Col } from "svelte-materialify/src/components/Grid";
</script>

<Row>
  <Col>
    <TextField disabled value="Hello">Regular</TextField>
    <br />
    <TextField disabled filled value="Hello">Filled</TextField>
    <br />
    <TextField disabled outlined value="Hello">Outlined</TextField>
    <br />
    <TextField disabled solo value="Hello" />
  </Col>
  <Col>
    <TextField readonly value="Hello">Regular</TextField>
    <br />
    <TextField readonly filled value="Hello">Filled</TextField>
    <br />
    <TextField readonly outlined value="Hello">Outlined</TextField>
    <br />
    <TextField readonly solo value="Hello" />
  </Col>
</Row>

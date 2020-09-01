<script>
  import {
    Button,
    Dialog,
    Card,
    CardTitle,
    CardText,
    CardActions,
    TextField,
    Row,
    Col,
  } from 'svelte-materialify/src';

  let active = false;

  function open() {
    active = true;
  }
  function close() {
    active = false;
  }
</script>

<div class="text-center">
  <Button on:click={open}>Open Dialog</Button>
</div>

<Dialog fullscreen bind:active>
  <Card>
    <CardTitle>
      <h4>Form</h4>
    </CardTitle>
    <CardText>
      <Row>
        <Col cols="6">
          <TextField>First Name</TextField>
        </Col>
        <Col cols="6">
          <TextField>Last Name</TextField>
        </Col>
        <Col cols="12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            excepturi obcaecati adipisci doloribus eius fugiat. Optio porro
            totam nemo aspernatur possimus? Sapiente adipisci perspiciatis rerum
            illum laboriosam reprehenderit ea tenetur fuga? Aut eaque possimus
            nostrum nihil rerum ea illum qui quae. Animi veritatis culpa enim
            alias ad soluta et libero.
          </p>
        </Col>
        <Col cols="4">
          <TextField filled>Country</TextField>
        </Col>
        <Col cols="4">
          <TextField outlined>State</TextField>
        </Col>
        <Col cols="4">
          <TextField solo placeholder="City" />
        </Col>
      </Row>
    </CardText>
    <CardActions class="justify-end">
      <Button on:click={close} text>Save</Button>
      <Button on:click={close} text class="red-text">Close</Button>
    </CardActions>
  </Card>
</Dialog>

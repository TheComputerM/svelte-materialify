<script>
  import {
    Button,
    Dialog,
    Card,
    CardTitle,
    CardText,
    CardActions,
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

<Dialog persistent bind:active>
  <Card>
    <CardTitle>Do you Agree?</CardTitle>
    <CardText>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia deleniti natus
      dolore, rerum hic beatae officiis at ea sequi labore.
    </CardText>
    <CardActions>
      <Button on:click={close} text>Yes</Button>
      <Button on:click={close} text class="red-text">Yes (but in red).</Button>
    </CardActions>
  </Card>
</Dialog>

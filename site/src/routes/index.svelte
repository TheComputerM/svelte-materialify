<script>
  import { Button, Icon, Alert } from "svelte-materialify/src/";
</script>

<svelte:head>
  <title>Svelte Materialify</title>
</svelte:head>

<h1>Great success!</h1>
<Button>Button</Button>
<Button text>Button</Button>
<Button outlined>Button</Button>
<Button icon><Icon>cloud</Icon></Button>
<br><br>
<Alert class="info-color white-text" border="left" icon="check" dismissible>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, rerum
  eveniet. Commodi, perferendis. Molestiae itaque quia accusantium optio iure,
  quod temporibus vel deleniti, nesciunt nemo dolor, illum perspiciatis adipisci
  exercitationem.
</Alert>

<Alert class="error-text" coloredBorder text border="bottom" icon="error">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, rerum
  eveniet. Commodi, perferendis. Molestiae itaque quia accusantium optio iure,
  quod temporibus vel deleniti, nesciunt nemo dolor, illum perspiciatis adipisci
  exercitationem.
</Alert>

<Alert class="success-text" dense outlined tile border="right" dismissible>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, rerum
  eveniet. Commodi, perferendis. Molestiae itaque quia accusantium optio iure,
  quod temporibus vel deleniti, nesciunt nemo dolor, illum perspiciatis adipisci
  exercitationem.
</Alert>

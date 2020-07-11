<script>
  import { Button, Icon, Divider, Alert, Avatar } from "svelte-materialify/src/";
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
<Divider />
<br>
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

<Avatar class="blue white-text text-h6">MS</Avatar>
<Avatar class="indigo"><Icon class="white-text">account_circle</Icon></Avatar>
<Avatar tile class="grey lighten-2 elevation-6">HS</Avatar>

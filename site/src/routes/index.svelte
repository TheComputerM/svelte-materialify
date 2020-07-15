<script>
  import {
    Button,
    Icon,
    Divider,
    Alert,
    Avatar,
    AppBar,
    ProgressLinear,
    ProgressCircular,
  } from "svelte-materialify/src/";
  let test = true;
</script>

<svelte:head>
  <title>Svelte Materialify</title>
</svelte:head>

<h1>Great success!</h1>
<AppBar>
  <div slot="left">
    <Button fab depressed>
      <Icon>cloud</Icon>
    </Button>
  </div>
  <span slot="title">Svelte Materialify</span>
  <div slot="right">
    <Button>Hello</Button>
    <Button fab depressed>
      <Icon>phone</Icon>
    </Button>
  </div>
</AppBar>
<br />
<Divider />
<br />
<AppBar prominent>
  <div slot="left">
    <Button fab depressed>
      <Icon>cloud</Icon>
    </Button>
  </div>
  <span slot="title">Svelte Materialify</span>
  <div slot="right">
    <Button fab depressed>
      <Icon>phone</Icon>
    </Button>
  </div>
</AppBar>
<br />
<br />
<Button>Button</Button>
<Button class="primary-color">Button</Button>
<Button text class="primary-text">Button</Button>
<Button outlined class="primary-color primary-text">Button</Button>
<Button class="red white-text">Red</Button>
<Button class="blue lighten-4">Blue</Button>
<Button outlined class="green-text green">Green</Button>
<Button icon>
  <Icon>cloud</Icon>
</Button>
<br />
<br />
<Divider />
<br />
<Alert class="info-text" border="left" dismissible coloredBorder>
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
<Avatar class="indigo">
  <Icon class="white-text">account_circle</Icon>
</Avatar>
<Avatar tile class="grey lighten-2 elevation-6">HS</Avatar>
<br />
<br />
<Button
  on:click={() => {
    test = !test;
  }}>
  Click Me
</Button>
<ProgressLinear buffer="80" value="20" stream />
<br />
<ProgressLinear
  active={test}
  height="8px"
  buffer="80"
  value="20"
  stream
  color="red"
  backgroundColor="pink"
  backgroundOpacity="0.5"
  reversed />
<br />
<ProgressLinear indeterminate />
<br />
<ProgressCircular indeterminate />
<Button>
  <ProgressCircular size=24 value=30 />
</Button>
<Divider></Divider>
<br><br>

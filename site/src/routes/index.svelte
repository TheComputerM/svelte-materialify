<script>
  import * as S from "svelte-materialify/src/";
  import { fade } from "svelte/transition";
import ListGroup from "../../../src/components/List/ListGroup.svelte";
  let test = true;
  function toggle() {
    test = !test;
  }
</script>

<svelte:head>
  <title>Svelte Materialify</title>
</svelte:head>
<br />
<h1 class="text-center">In Progress</h1>
<br />
<S.Divider />
<br />
<h2>App Bars</h2>
<br />
<S.AppBar>
  <div slot="left">
    <S.Button fab depressed>
      <S.Icon>cloud</S.Icon>
    </S.Button>
  </div>
  <span slot="title">Svelte Materialify</span>
  <div slot="right">
    <S.Button>Hello</S.Button>
    <S.Button fab depressed>
      <S.Icon>phone</S.Icon>
    </S.Button>
  </div>
</S.AppBar>
<br />
<S.AppBar prominent>
  <div slot="left">
    <S.Button fab depressed>
      <S.Icon>cloud</S.Icon>
    </S.Button>
  </div>
  <span slot="title">Svelte Materialify</span>
  <div slot="right">
    <S.Button fab depressed>
      <S.Icon>phone</S.Icon>
    </S.Button>
  </div>
</S.AppBar>
<br />
<h2>Buttons</h2>
<br />
<S.Button>Button</S.Button>
<S.Button class="primary-color">Button</S.Button>
<S.Button text class="primary-text">Button</S.Button>
<S.Button outlined class="primary-color primary-text">Button</S.Button>
<S.Button class="red white-text">Red</S.Button>
<S.Button class="blue lighten-4">Blue</S.Button>
<S.Button outlined class="green-text green">Green</S.Button>
<S.Button icon>
  <S.Icon>cloud</S.Icon>
</S.Button>
<br />
<br />
<h2>Alerts</h2>
<br />
<S.Alert class="info-text" border="left" dismissible coloredBorder>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, rerum
  eveniet. Commodi, perferendis. Molestiae itaque quia accusantium optio iure,
  quod temporibus vel deleniti, nesciunt nemo dolor, illum perspiciatis adipisci
  exercitationem.
</S.Alert>

<S.Alert class="error-text" coloredBorder text border="bottom" icon="error">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, rerum
  eveniet. Commodi, perferendis. Molestiae itaque quia accusantium optio iure,
  quod temporibus vel deleniti, nesciunt nemo dolor, illum perspiciatis adipisci
  exercitationem.
</S.Alert>

<S.Alert class="success-text" dense outlined tile border="right" dismissible>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, rerum
  eveniet. Commodi, perferendis. Molestiae itaque quia accusantium optio iure,
  quod temporibus vel deleniti, nesciunt nemo dolor, illum perspiciatis adipisci
  exercitationem.
</S.Alert>
<br />
<h2>Avatars</h2>
<br />
<S.Avatar class="blue white-text text-h6">MS</S.Avatar>
<S.Avatar class="indigo">
  <S.Icon class="white-text">account_circle</S.Icon>
</S.Avatar>
<S.Avatar tile class="grey lighten-2 elevation-6">HS</S.Avatar>
<br />
<h2>Progress</h2>
<br />
<S.Button on:click={toggle}>Click Me</S.Button>
<S.ProgressLinear buffer="80" value="20" stream />
<br />
<S.ProgressLinear
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
<S.ProgressLinear indeterminate />
<br />
<S.ProgressCircular indeterminate />
<S.Button>
  <S.ProgressCircular size="24" value="30" />
</S.Button>
<S.Divider />
<br />
<br />

<h2>Breadcrumbs</h2>
<S.Breadcrumbs
  items={[{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3', disabled: true }]} />

<h2>Cards</h2>
<div class="d-flex justify-space-around">
  <S.Card style="width: 300px">
    <S.CardTitle>Card Title</S.CardTitle>
    <S.CardSubtitle>Card Subtitle</S.CardSubtitle>
    <S.CardText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id dolor
      eveniet, quos corporis vero.
    </S.CardText>
    <S.CardActions>
      <S.Button>Hello</S.Button>
    </S.CardActions>
  </S.Card>
  <S.Card style="width: 300px">
    <S.ProgressLinear indeterminate />
    <S.CardTitle>Card Title</S.CardTitle>
    <S.CardSubtitle>Card Subtitle</S.CardSubtitle>
    <S.CardText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id dolor
      eveniet, quos corporis vero.
    </S.CardText>
    <S.CardActions>
      <S.Button>Hello</S.Button>
    </S.CardActions>
  </S.Card>
  <S.Card disabled style="width: 300px">
    <S.ProgressLinear indeterminate />
    <S.CardTitle>Card Title</S.CardTitle>
    <S.CardSubtitle>Card Subtitle</S.CardSubtitle>
    <S.CardText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id dolor
      eveniet, quos corporis vero.
    </S.CardText>
    <S.CardActions>
      <S.Button>Hello</S.Button>
    </S.CardActions>
  </S.Card>
</div>

<br />
<h2>Overlay</h2>
<br />
<S.Button on:click={toggle}>Toggle</S.Button>
{#if !test}
  <div transition:fade>
    <S.Overlay>
      <S.Button fab on:click={toggle}>
        <S.Icon>close</S.Icon>
      </S.Button>
    </S.Overlay>
  </div>
{/if}

<br />
<h2>List</h2>
<br />
<S.List>
  <S.Subheader>LIST ITEMS</S.Subheader>
  <S.ListGroup class="primary-text">
    <S.ListItem active>
      <div slot="left">
        <S.Icon>cloud</S.Icon>
      </div>
      Item 1
    </S.ListItem>
    <S.ListItem ripple={{ active: false }}>
      Item 2
      <div slot="right">
        <S.Avatar class="red">H</S.Avatar>
      </div>
    </S.ListItem>
    <S.ListItem>
      <div slot="left">
        <S.Icon>home</S.Icon>
      </div>
      Item 3
      <p slot="subtitle">Lorem ipsum dolor sit amet.</p>
      <div slot="right">
        <S.Button icon>
          <S.Icon>star</S.Icon>
        </S.Button>
      </div>
    </S.ListItem>
  </S.ListGroup>
</S.List>

<S.List dense>
  <S.Subheader>LIST ITEMS</S.Subheader>
  <S.ListGroup class="primary-text">
    <S.ListItem active>Item 1</S.ListItem>
    <S.ListItem ripple={{ active: false }}>Item 2</S.ListItem>
    <S.ListItem>
      <div slot="left">
        <S.Icon>home</S.Icon>
      </div>
      Item 3
      <p slot="subtitle">Lorem ipsum dolor sit amet.</p>
      <div slot="right">
        <S.Button icon>
          <S.Icon>star</S.Icon>
        </S.Button>
      </div>
    </S.ListItem>
  </S.ListGroup>
</S.List>

<S.List>
  <S.ListGroup>
    <S.ListItem>Item 1</S.ListItem>
    <S.ListGroup>
      <S.ListItem>Item 2</S.ListItem>
    </S.ListGroup>
  </S.ListGroup>
</S.List>

<br />
<h2>Navigation Drawer</h2>
<br />
<S.Card>
  <S.NavigationDrawer>
    <div slot="prepend">
      <S.ListItem>
        <h6>Application</h6>
        <p slot="subtitle">Lorem, ipsum dolor.</p>
      </S.ListItem>
      <S.Divider />
    </div>
    <S.List nav>
      <S.ListGroup>
        <S.ListItem>
          <div slot="left">
            <S.Icon>home</S.Icon>
          </div>
          Item 1
        </S.ListItem>
        <S.ListItem>
          <div slot="left">
            <S.Icon>cloud</S.Icon>
          </div>
          Item 2
        </S.ListItem>
        <S.ListItem>
          <div slot="left">
            <S.Icon>cloud</S.Icon>
          </div>
          Item 3
        </S.ListItem>
      </S.ListGroup>
    </S.List>
  </S.NavigationDrawer>
</S.Card>

<br />
<h2>Grid</h2>
<br />
<S.Container>
  <S.Row>
    <S.Col class="red lighten-4" sm="6" md="4" cols="12">Column 1</S.Col>
    <S.Col class="green lighten-4" sm="6" md="4" cols="12">Column 2</S.Col>
    <S.Col class="blue lighten-4" sm="6" md="4" cols="12">Column 3</S.Col>
  </S.Row>
</S.Container>

<script>
  import {
    Card,
    CardTitle,
    CardSubtitle,
    CardActions,
    Button,
    Row,
    Col,
  } from 'svelte-materialify/src';

  const songs = [
    { name: 'Tuba Angel', author: 'Иοκτцяηаι', color: 'blue' },
    { name: 'Tuba Mech', author: 'Noah Giesler', color: 'red' },
    { name: 'Tuba Archmage', author: 'Noah Giesler', color: 'green' },
  ];
</script>

<div class="d-flex justify-center mt-4 mb-4">
  <div class="rounded elevation-2 theme--dark pa-4" style="flex-grow:1;max-width:400px;">
    {#each songs as song, i}
      <Card class={song.color}>
        <Row>
          <Col cols={8}>
            <CardTitle>{song.name}</CardTitle>
            <CardSubtitle>{song.author}</CardSubtitle>
            <CardActions>
              <Button text>Play</Button>
            </CardActions>
          </Col>
          <Col cols={4}><img src="//picsum.photos/100?random={i}" alt="cover" /></Col>
        </Row>
      </Card>
      <br />
    {/each}
  </div>
</div>

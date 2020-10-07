<script>
  import {
    Container,
    Radio,
    TextField,
    Slider,
    Button,
    Jump,
  } from 'svelte-materialify/src';

  const defaults = {
    number: 500,
    selector: '#target',
    element: 'Div',
  };

  let div;

  let target = 'number';
  $: targetValue = target === 'element' ? div : defaults[target];
  let duration = 500;
  let offset = -52;
</script>

<Container>
  <p class="text-h5">Target</p>
  <div class="d-flex justify-space-between">
    <Radio value="number" bind:group={target}>Number</Radio>
    <Radio value="selector" bind:group={target}>Selector</Radio>
    <Radio value="element" bind:group={target}>DOMElement</Radio>
  </div>
  <br />
  <TextField bind:value={defaults[target]} readonly={target === 'element'}>
    {target}
  </TextField>
  <br />
  <p class="text-h5">Options</p>
  <br />
  <Slider bind:value={duration} max={1000} thumb>Duration</Slider>
  <Slider bind:value={offset} min={-250} max={250} thumb>Offset</Slider>
  <br />
  <span use:Jump={{ target: targetValue, duration, offset }}>
    <Button block class="primary-color">Scroll</Button>
  </span>
</Container>
<div style="height:400px" />
<div class="pa-4" bind:this={div} id="target">
  <p class="text--secondary">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi commodi earum tenetur.
    Asperiores dolorem placeat ab nobis iusto culpa, autem molestias molestiae quidem
    pariatur. Debitis beatae expedita nam facere perspiciatis. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Repellendus ducimus cupiditate rerum officiis
    consequuntur laborum doloremque quaerat ipsa voluptates, nobis nam quis nulla ullam at
    corporis, similique ratione quasi illo! Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Modi commodi earum tenetur. Asperiores dolorem placeat ab nobis
    iusto culpa, autem molestias molestiae quidem pariatur. Debitis beatae expedita nam
    facere perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repellendus ducimus cupiditate rerum officiis consequuntur laborum doloremque quaerat
    ipsa voluptates, nobis nam quis nulla ullam at corporis, similique ratione quasi illo!
  </p>
</div>

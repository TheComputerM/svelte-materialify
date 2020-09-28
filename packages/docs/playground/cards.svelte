<script>
  import Playground from '@shared/Playground.svelte';
  import {
    Card,
    CardTitle,
    CardText,
    CardSubtitle,
    CardActions,
    Button,
  } from 'svelte-materialify/src';

  const variants = ['outlined', 'shaped', 'tile', 'flat', 'raised', 'hover'];

  const controls = {
    loading: { type: 'switch' },
    disabled: { type: 'switch' },
  };

  const formatVariant = (v) => Object.fromEntries(v.map((i) => [i, true]));

  let values = {
    variants: [],
    loading: false,
    disabled: false,
  };
</script>

<Playground {controls} {variants} bind:values>
  <div class="pa-4 mt-6 mb-6">
    <Card
      disabled={values.disabled}
      loading={values.loading}
      {...formatVariant(values.variants)}>
      <CardTitle>Card Title</CardTitle>
      <CardSubtitle>Subtitle Text</CardSubtitle>
      <CardText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem
        repellat voluptatum nostrum! Reprehenderit temporibus modi perspiciatis
        perferendis totam placeat vitae omnis ipsa quibusdam animi?
      </CardText>
      <CardActions>
        <Button class="blue-text" text>Action 1</Button>
        <Button class="blue-text" text>Action 2</Button>
      </CardActions>
    </Card>
  </div>
</Playground>

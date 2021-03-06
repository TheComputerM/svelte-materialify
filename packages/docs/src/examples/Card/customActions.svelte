<script>
  import {
    Card,
    CardTitle,
    CardSubtitle,
    CardActions,
    Button,
    Icon,
    Divider,
  } from 'svelte-materialify/src';
  import { slide } from 'svelte/transition';
  import { mdiChevronDown } from '@mdi/js';

  let active = false;
  function toggle() {
    active = !active;
  }
</script>

<div class="d-flex justify-center mt-4 mb-4">
  <Card style="max-width:350px;">
    <img src="//picsum.photos/350" alt="background" />
    <CardTitle>Top western road trips</CardTitle>
    <CardSubtitle>1,000 miles of wonder</CardSubtitle>
    <CardActions>
      <Button text>Button</Button>
      <Button text fab size="small" class="ml-auto" on:click={toggle}>
        <Icon path={mdiChevronDown} rotate={active ? 180 : 0} />
      </Button>
    </CardActions>
    {#if active}
      <div transition:slide>
        <Divider />
        <div class="pl-4 pr-4 pt-2 pb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem,
          asperiores dolores, doloremque ea atque suscipit dolore, ut adipisci amet
          possimus dicta at voluptas consequatur!
        </div>
      </div>
    {/if}
  </Card>
</div>

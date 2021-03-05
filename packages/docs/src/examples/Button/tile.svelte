<script>
  import Button from 'svelte-materialify/src/components/Button';
  import Icon from 'svelte-materialify/src/components/Icon';
  import { mdiPen } from '@mdi/js';
</script>

<div class="text-center">
  <Button tile class="indigo white-text">
    <Icon path={mdiPen} class="mr-3" />
    Tile
  </Button>
</div>

<script>
  import Button from 'svelte-materialify/src/components/Button';
  import Icon from 'svelte-materialify/src/components/Icon';
  import { mdiHome, mdiAlert, mdiPen, mdiCloud } from '@mdi/js';
</script>

<div class="text-center">
  <Button fab>
    <Icon path={mdiHome} />
  </Button>
  <Button fab class="red white-text">
    <Icon path={mdiAlert} />
  </Button>
  <Button fab size="small" class="green white-text">
    <Icon path={mdiPen} />
  </Button>
  <Button fab size="large" class="blue white-text">
    <Icon path={mdiCloud} />
  </Button>
</div>

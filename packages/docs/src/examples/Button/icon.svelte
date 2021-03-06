<script>
  import Button from 'svelte-materialify/src/components/Button';
  import Icon from 'svelte-materialify/src/components/Icon';
  import { mdiHeart, mdiStar, mdiThumbUp, mdiCancel } from '@mdi/js';
</script>

<div class="d-flex flex-column flex-sm-row justify-space-around">
  <Button icon class="pink-text">
    <Icon path={mdiHeart} />
  </Button>
  <Button icon class="indigo-text">
    <Icon path={mdiStar} />
  </Button>
  <Button icon class="green-text">
    <Icon path={mdiThumbUp} />
  </Button>
  <Button icon disabled>
    <Icon path={mdiCancel} />
  </Button>
</div>

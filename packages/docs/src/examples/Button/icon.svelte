<script>
  import { Button, Icon } from 'svelte-materialify';
</script>

<div class="d-flex flex-column flex-sm-row justify-space-around">
  <Button icon class="pink-text">
    <Icon class="mdi mdi-heart" />
  </Button>
  <Button icon class="indigo-text">
    <Icon class="mdi mdi-star" />
  </Button>
  <Button icon class="green-text">
    <Icon class="mdi mdi-thumb-up" />
  </Button>
  <Button icon disabled>
    <Icon class="mdi mdi-cancel" />
  </Button>
</div>

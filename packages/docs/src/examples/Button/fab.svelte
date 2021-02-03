<script>
  import { Button, Icon } from 'svelte-materialify';
</script>

<div class="text-center">
  <Button fab>
    <Icon class="mdi mdi-home" />
  </Button>
  <Button fab class="red white-text">
    <Icon class="mdi mdi-alert" />
  </Button>
  <Button fab size="small" class="green white-text">
    <Icon class="mdi mdi-pen" />
  </Button>
  <Button fab size="large" class="blue white-text">
    <Icon class="mdi mdi-cloud" />
  </Button>
</div>

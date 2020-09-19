<script>
  import { Icon, Badge, Button } from 'svelte-materialify/src';

  let value = 1;
</script>

<div class="d-flex pt-4 pb-4 justify-space-around align-center">
  <Button
    class="success-color"
    on:click={() => {
      value += 1;
    }}>
    Notify
  </Button>
  <Button
    class="error-color"
    on:click={() => {
      value = 0;
    }}>
    Clear Notifications
  </Button>
  <Badge class="primary-color" active={value !== 0} {value}>
    <Icon class="mdi mdi-home" />
  </Badge>
</div>

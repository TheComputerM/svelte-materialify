<script>
  import { Icon, Badge } from 'svelte-materialify/src';
</script>

<div class="d-flex pt-4 pb-4 justify-space-around">
  <Badge class="success-color" value={2}>
    <Icon class="mdi mdi-home" />
  </Badge>
  <Badge class="primary-color" dot left>
    <Icon class="mdi mdi-account" />
  </Badge>
</div>

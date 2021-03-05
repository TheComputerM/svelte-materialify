<script>
  import { Icon, Badge } from 'svelte-materialify/src';
  import { mdiHome, mdiAccount } from '@mdi/js';
</script>

<div class="d-flex pt-4 pb-4 justify-space-around">
  <Badge class="success-color" value={2}>
    <Icon path={mdiHome} />
  </Badge>
  <Badge class="primary-color" dot left>
    <Icon path={mdiAccount} />
  </Badge>
</div>

<script>
  import { Icon } from 'svelte-materialify/src';
  import { mdiAccount, mdiHome } from '@mdi/js';
  import { faAward, faCamera } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="d-flex justify-space-between">
  <Icon disabled path={mdiHome} />
  <Icon disabled class="blue-text" path={mdiAccount} />
  <Icon
    disabled
    path={faAward.icon[4]}
    viewWidth={faAward.icon[0]}
    viewHeight={faAward.icon[1]} />
  <Icon
    disabled
    class="orange-text"
    path={faCamera.icon[4]}
    viewWidth={faCamera.icon[0]}
    viewHeight={faCamera.icon[1]} />
</div>

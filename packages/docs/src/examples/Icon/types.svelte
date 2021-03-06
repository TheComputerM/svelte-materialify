<script>
  import { Icon } from 'svelte-materialify/src';
  import { mdiHome, mdiRefresh } from '@mdi/js';
  import { faAward, faCamera } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="d-flex justify-space-between">
  <Icon path={mdiHome} />
  <Icon spin path={mdiRefresh} />
  <Icon path={faAward.icon[4]} viewWidth={faAward.icon[0]} viewHeight={faAward.icon[1]} />
  <Icon
    path={faCamera.icon[4]}
    viewWidth={faCamera.icon[0]}
    viewHeight={faCamera.icon[1]} />
</div>
<br />
<div class="d-flex justify-space-between">
  <Icon size="32px" path={mdiHome} />
  <Icon size="32px" spin path={mdiRefresh} />
  <Icon
    size="32px"
    path={faAward.icon[4]}
    viewWidth={faAward.icon[0]}
    viewHeight={faAward.icon[1]} />
  <Icon
    size="32px"
    path={faCamera.icon[4]}
    viewWidth={faCamera.icon[0]}
    viewHeight={faCamera.icon[1]} />
</div>

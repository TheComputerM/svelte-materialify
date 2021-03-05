<script>
  import { Chip, Icon, Avatar } from 'svelte-materialify/src/';
  import { mdiAccount, mdiStar, mdiAndroidMessages, mdiDelete } from '@mdi/js';
</script>

<div class="d-flex justify-center">
  <Chip class="ma-2">
    <Icon path={mdiAccount} />
    <span>Mudit</span>
  </Chip>
  <Chip class="ma-2 primary-color">
    <span>Premium</span>
    <Icon path={mdiStar} />
  </Chip>
  <Chip class="ma-2 green white-text">
    <Avatar class="green darken-2">1</Avatar>
    <span>Messages</span>
    <Icon path={mdiAndroidMessages} />
  </Chip>
  <Chip class="ma-2 teal white-text" close><span>Confirmed</span></Chip>
  <Chip class="ma-2 teal white-text" close>
    <div slot="close-icon">
      <Icon path={mdiDelete} />
    </div>
    <span>Confirmed</span>
  </Chip>
</div>

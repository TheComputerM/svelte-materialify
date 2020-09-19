<script>
  import { Chip, Icon, Avatar } from 'svelte-materialify/src/';
</script>

<div class="d-flex justify-center">
  <Chip class="ma-2">
    <Icon class="mdi mdi-account" />
    <span>Mudit</span>
  </Chip>
  <Chip class="ma-2 primary-color">
    <span>Premium</span>
    <Icon class="mdi mdi-star" />
  </Chip>
  <Chip class="ma-2 green white-text">
    <Avatar class="green darken-2">1</Avatar>
    <span>Messages</span>
    <Icon class="mdi mdi-android-messages" />
  </Chip>
  <Chip class="ma-2 teal white-text" close><span>Confirmed</span></Chip>
  <Chip class="ma-2 teal white-text" close>
    <div slot="close-icon">
      <Icon class="mdi mdi-delete" />
    </div>
    <span>Confirmed</span>
  </Chip>
</div>

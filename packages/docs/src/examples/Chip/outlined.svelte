<script>
  import { Chip, Icon } from 'svelte-materialify';
</script>

<div class="d-flex justify-center">
  <Chip outlined class="ma-2">Default</Chip>
  <Chip outlined class="ma-2 primary-text">
    <Icon class="mdi mdi-account" />
    <span>Primary</span>
  </Chip>
  <Chip outlined class="ma-2 secondary-text">Secondary</Chip>
  <Chip outlined class="ma-2 red-text">Red</Chip>
  <Chip outlined close class="ma-2 green-text">Green</Chip>
</div>

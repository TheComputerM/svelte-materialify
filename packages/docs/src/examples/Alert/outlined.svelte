<script>
  import { Alert, Icon } from 'svelte-materialify';
</script>

<Alert class="success-text" outlined>
  <div slot="icon">
    <Icon class="mdi mdi-check" />
  </div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam ad iure
  harum iste ea numquam quo accusamus blanditiis in.
</Alert>

<Alert class="primary-text" outlined>
  <div slot="icon">
    <Icon class="mdi mdi-thumb-up" />
  </div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam ad iure
  harum iste ea numquam quo accusamus blanditiis in.
</Alert>

<Alert class="error-text" outlined>
  <div slot="icon">
    <Icon class="mdi mdi-alert" />
  </div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam ad iure
  harum iste ea numquam quo accusamus blanditiis in.
</Alert>

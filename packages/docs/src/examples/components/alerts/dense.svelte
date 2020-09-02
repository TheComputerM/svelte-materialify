<script>
  import Alert from 'svelte-materialify/src/components/Alert';
  import Icon from 'svelte-materialify/src/components/Icon';
</script>

<Alert class="success-color" dense>
  <div slot="icon">
    <Icon class="mdi mdi-check" />
  </div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam ad iure harum iste ea
  numquam quo accusamus blanditiis in.
</Alert>

<Alert class="primary-color" dense>
  <div slot="icon">
    <Icon class="mdi mdi-thumb-up" />
  </div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam ad iure harum iste ea
  numquam quo accusamus blanditiis in.
</Alert>

<Alert class="error-text" dense outlined>
  <div slot="icon">
    <Icon class="mdi mdi-alert" />
  </div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam ad iure harum iste ea
  numquam quo accusamus blanditiis in.
</Alert>

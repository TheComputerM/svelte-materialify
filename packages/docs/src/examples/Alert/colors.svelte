<script>
  import Alert from 'svelte-materialify/src/components/Alert';
  import Icon from 'svelte-materialify/src/components/Icon';
  import { mdiCheck, mdiThumbUp, mdiAlert } from '@mdi/js';
</script>

<Alert class="success-color">
  <div slot="icon">
    <Icon path={mdiCheck} />
  </div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam ad iure harum
  iste ea numquam quo accusamus blanditiis in.
</Alert>

<Alert class="primary-color">
  <div slot="icon">
    <Icon path={mdiThumbUp} />
  </div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam ad iure harum
  iste ea numquam quo accusamus blanditiis in.
</Alert>

<Alert class="error-color">
  <div slot="icon">
    <Icon path={mdiAlert} />
  </div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam ad iure harum
  iste ea numquam quo accusamus blanditiis in.
</Alert>

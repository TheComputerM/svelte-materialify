<script>
  import Alert from 'svelte-materialify/src/components/Alert';
  import Icon from 'svelte-materialify/src/components/Icon';
  import { mdiThumbUp, mdiAlert, mdiFire } from '@mdi/js';
</script>

<Alert class="success-text" text>
  <h5>Lorem Ipsum</h5>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam ad iure harum
  iste ea numquam quo accusamus blanditiis in.
</Alert>

<Alert class="primary-text" text border="left">
  <div slot="icon">
    <Icon path={mdiThumbUp} />
  </div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam ad iure harum
  iste ea numquam quo accusamus blanditiis in.
</Alert>

<Alert class="info-text" text outlined>
  <div slot="icon">
    <Icon path={mdiFire} />
  </div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam ad iure harum
  iste ea numquam quo accusamus blanditiis in.
</Alert>

<Alert class="error-text" text dense>
  <div slot="icon">
    <Icon path={mdiAlert} />
  </div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aperiam ad iure harum
  iste ea numquam quo accusamus blanditiis in.
</Alert>

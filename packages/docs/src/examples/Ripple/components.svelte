<script>
  import { Button } from 'svelte-materialify/src';
</script>

<div>
  <Button>With Default Ripple</Button>
  <Button ripple={false}>With No Ripple</Button>
  <Button ripple={{ centered: true }}>With Center Ripple</Button>
  <Button text ripple={{ color: '#ff0000' }}>With Red Ripple</Button>
</div>

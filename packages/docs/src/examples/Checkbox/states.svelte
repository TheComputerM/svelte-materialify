<script>
  import { Checkbox } from 'svelte-materialify';
</script>

<Checkbox checked>On</Checkbox>
<Checkbox checked={false}>Off</Checkbox>
<Checkbox disabled>Disabled</Checkbox>
<Checkbox disabled checked>Disabled On</Checkbox>
<Checkbox indeterminate>Indeterminate</Checkbox>

<script>
  import Checkbox from 'svelte-materialify/src/components/Checkbox';
</script>

<Checkbox activeClass="red-text">Red when active.</Checkbox>
<Checkbox class="blue-text" activeClass="blue-text">Always blue.</Checkbox>
<br />
<div class="d-flex justify-space-between">
  <Checkbox checked activeClass="secondary-text">secondary</Checkbox>
  <Checkbox checked activeClass="error-text">error</Checkbox>
  <Checkbox checked activeClass="success-text">success</Checkbox>
</div>

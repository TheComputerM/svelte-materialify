<script>
  import Switch from 'svelte-materialify/src/components/Switch';
</script>

<Switch activeClass="red-text">Red when active.</Switch>
<Switch class="blue-text" activeClass="blue-text">Always blue.</Switch>
<br />
<div class="d-flex justify-space-between">
  <Switch checked activeClass="secondary-text">secondary</Switch>
  <Switch checked activeClass="error-text">error</Switch>
  <Switch checked activeClass="success-text">success</Switch>
</div>

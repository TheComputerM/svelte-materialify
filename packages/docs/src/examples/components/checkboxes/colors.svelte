<script>
  import Checkbox from 'svelte-materialify/src/components/Checkbox';
</script>

<Checkbox activeClass="red-text">Red when active.</Checkbox>
<Checkbox class="blue-text" activeClass="blue-text">Always blue.</Checkbox>
<Checkbox class="green-text" activeClass="green-text">
  <span class="text--primary">Always green, but not the text.</span>
</Checkbox>
<Checkbox class="cyan-text" activeClass="indigo-text">
  Cyan to indigo.
</Checkbox>

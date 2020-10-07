<script>
  import { Snackbar } from 'svelte-materialify/src';
</script>

<div style="height:300px;position:relative;">
  <Snackbar absolute top left tile>Tile</Snackbar>
  <Snackbar absolute top right outlined>Outlined</Snackbar>
  <Snackbar absolute center text>Text</Snackbar>
  <Snackbar absolute bottom left rounded>Rounded</Snackbar>
  <Snackbar absolute bottom right>Normal</Snackbar>
</div>

<script>
  import Nav from '../components/Nav.svelte';
  import {MaterialApp} from "svelte-materialify/src/";

	export let segment;
</script>

<Nav {segment}/>

<MaterialApp>
	<slot></slot>
</MaterialApp>

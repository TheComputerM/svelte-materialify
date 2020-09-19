<script>
  import { AppBar, Divider, Button } from 'svelte-materialify/src';
</script>

<AppBar>
  <span slot="title"> Title </span>
  <Divider vertical inset class="ml-4" />
  <Button text>Home</Button>
  <div style="flex-grow:1" />
  <Button text>News</Button>
  <Divider vertical />
  <Button text>Blog</Button>
  <Divider vertical />
  <Button text>Contact Us</Button>
</AppBar>

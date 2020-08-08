<script>
  export let AppBar;
</script>

<AppBar>
  <h1 slot="title" data-testid="title">Title</h1>
  <p slot="icon" data-testid="icon">X</p>
  AppBar Content
  <div slot="extension" data-testid="extension">
    Extension
  </div>
</AppBar>

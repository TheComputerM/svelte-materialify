<script>
  import Button from 'svelte-materialify/src/components/Button';
  import Icon from 'svelte-materialify/src/components/Icon';
</script>

<div class="text-center">
  <Button size="x-small" class="red white-text">x-small</Button>
  <Button size="small" class="green white-text">small</Button>
  <Button size="default" class="blue white-text">default</Button>
  <Button size="large" class="orange white-text">large</Button>
  <Button size="x-large" class="indigo white-text">x-large</Button>
</div>
<br />
<div class="text-center">
  <Button fab size="x-small" class="red white-text">
    <Icon size="16px" class="mdi mdi-pen" />
  </Button>
  <Button fab size="small" class="green white-text">
    <Icon class="mdi mdi-pen" />
  </Button>
  <Button fab size="default" class="blue white-text">
    <Icon class="mdi mdi-pen" />
  </Button>
  <Button fab size="large" class="orange white-text">
    <Icon class="mdi mdi-pen" />
  </Button>
  <Button fab size="x-large" class="indigo white-text">
    <Icon size="28px" class="mdi mdi-pen" />
  </Button>
</div>

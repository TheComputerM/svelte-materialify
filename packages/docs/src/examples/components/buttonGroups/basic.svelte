<script>
  import { ButtonGroup, Button, Icon } from 'svelte-materialify/src';
</script>

<div class="d-flex justify-space-between">
  <div>
    <h6>Basic</h6>
    <ButtonGroup>
      <Button>Left</Button>
      <Button>Center</Button>
      <Button>Right</Button>
      <Button>Justify</Button>
    </ButtonGroup>
  </div>

  <div>
    <h6>Borderless</h6>
    <ButtonGroup borderless>
      <Button class="primary-color">Left</Button>
      <Button class="primary-color">Center</Button>
      <Button class="primary-color">Right</Button>
      <Button class="primary-color">Justify</Button>
    </ButtonGroup>
  </div>
</div>
<br />
<div class="d-flex justify-space-between">
  <div>
    <h6>Elevated</h6>
    <ButtonGroup elevated>
      <Button>Left</Button>
      <Button>Center</Button>
      <Button>Right</Button>
      <Button>Justify</Button>
    </ButtonGroup>
  </div>

  <div>
    <h6>Tile</h6>
    <ButtonGroup tile>
      <Button>Left</Button>
      <Button>Center</Button>
      <Button>Right</Button>
      <Button>Justify</Button>
    </ButtonGroup>
  </div>
</div>
<br />
<div class="d-flex justify-space-between">
  <div>
    <h6>Rounded</h6>
    <ButtonGroup rounded>
      <Button>Left</Button>
      <Button>Center</Button>
      <Button>Right</Button>
      <Button>Justify</Button>
    </ButtonGroup>
  </div>

  <div>
    <h6>Icon</h6>
    <ButtonGroup>
      <Button>
        <Icon class="mdi mdi-format-align-left" />
      </Button>
      <Button>
        <Icon class="mdi mdi-format-align-center" />
      </Button>
      <Button>
        <Icon class="mdi mdi-format-align-right" />
      </Button>
      <Button>
        <Icon class="mdi mdi-format-align-justify" />
      </Button>
    </ButtonGroup>
  </div>
</div>

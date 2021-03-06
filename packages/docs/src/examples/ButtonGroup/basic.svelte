<script>
  import { ButtonGroup, ButtonGroupItem, Icon } from 'svelte-materialify/src';
  import {
    mdiFormatAlignLeft,
    mdiFormatAlignCenter,
    mdiFormatAlignRight,
    mdiFormatAlignJustify,
  } from '@mdi/js';
</script>

<div class="d-flex justify-space-between">
  <div>
    <h6>Basic</h6>
    <ButtonGroup>
      <ButtonGroupItem>Left</ButtonGroupItem>
      <ButtonGroupItem>Center</ButtonGroupItem>
      <ButtonGroupItem>Right</ButtonGroupItem>
      <ButtonGroupItem>Justify</ButtonGroupItem>
    </ButtonGroup>
  </div>

  <div>
    <h6>Borderless</h6>
    <ButtonGroup borderless>
      <ButtonGroupItem>Left</ButtonGroupItem>
      <ButtonGroupItem>Center</ButtonGroupItem>
      <ButtonGroupItem>Right</ButtonGroupItem>
      <ButtonGroupItem>Justify</ButtonGroupItem>
    </ButtonGroup>
  </div>
</div>
<br />
<div class="d-flex justify-space-between">
  <div>
    <h6>Elevated</h6>
    <ButtonGroup elevated>
      <ButtonGroupItem>Left</ButtonGroupItem>
      <ButtonGroupItem>Center</ButtonGroupItem>
      <ButtonGroupItem>Right</ButtonGroupItem>
      <ButtonGroupItem>Justify</ButtonGroupItem>
    </ButtonGroup>
  </div>

  <div>
    <h6>Tile</h6>
    <ButtonGroup tile>
      <ButtonGroupItem>Left</ButtonGroupItem>
      <ButtonGroupItem>Center</ButtonGroupItem>
      <ButtonGroupItem>Right</ButtonGroupItem>
      <ButtonGroupItem>Justify</ButtonGroupItem>
    </ButtonGroup>
  </div>
</div>
<br />
<div class="d-flex justify-space-between">
  <div>
    <h6>Rounded</h6>
    <ButtonGroup rounded>
      <ButtonGroupItem>Left</ButtonGroupItem>
      <ButtonGroupItem>Center</ButtonGroupItem>
      <ButtonGroupItem>Right</ButtonGroupItem>
      <ButtonGroupItem>Justify</ButtonGroupItem>
    </ButtonGroup>
  </div>

  <div>
    <h6>Icon</h6>
    <ButtonGroup>
      <ButtonGroupItem>
        <Icon path={mdiFormatAlignLeft} />
      </ButtonGroupItem>
      <ButtonGroupItem>
        <Icon path={mdiFormatAlignCenter} />
      </ButtonGroupItem>
      <ButtonGroupItem>
        <Icon path={mdiFormatAlignRight} />
      </ButtonGroupItem>
      <ButtonGroupItem>
        <Icon path={mdiFormatAlignJustify} />
      </ButtonGroupItem>
    </ButtonGroup>
  </div>
</div>

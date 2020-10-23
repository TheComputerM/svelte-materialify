<script>
  import {
    Row,
    Col,
    Button,
    Switch,
    Slider,
    Select,
    TextField,
    Icon,
    SlideGroup,
    SlideItem,
    Ripple,
    ListItem,
  } from 'svelte-materialify/src';

  export let values;
  export let controls;
  export let block = false;
  export let variants = false;
  export let cols = 8;

  let theme = 'light';
  function toggleTheme() {
    if (theme === 'light') theme = 'dark';
    else theme = 'light';
  }
</script>

<style>
  .playground {
    border: thin solid var(--theme-dividers);
  }

  .playground__toolbar {
    display: flex;
    background-color: var(--theme-app-bar);
    align-items: center;
    height: 44px;
  }

  .playground__content {
    padding: 6px;
    min-height: 100px;
    height: calc(100% - 44px);
    width: 100%;
    position: relative;
  }

  .playground__content:not(.block) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="playground rounded">
  <Row noGutters>
    <Col md={cols} cols="12">
      <div class="playground__toolbar">
        {#if variants}
          <SlideGroup bind:value={values.variants} multiple>
            {#each variants as variant}
              <SlideItem value={variant} let:active>
                <button
                  class="s-btn depressed tile text size-large"
                  class:primary-text={active}
                  class:active
                  use:Ripple>
                  <span class="s-btn__content"> {variant} </span>
                </button>
              </SlideItem>
            {/each}
          </SlideGroup>
        {/if}
      </div>
      <div class="playground__content theme--{theme}" class:block>
        <slot />
      </div>
    </Col>
    <Col md={12 - cols} cols="12">
      <div class="playground__toolbar justify-space-between pl-2 pr-2">
        <div class="text-h6">Options</div>
        <Button icon on:click={toggleTheme}>
          <Icon class="mdi mdi-invert mdi-invert-colors" />
        </Button>
      </div>
      <div class="pa-2">
        {#each Object.keys(controls) as label}
          <div class="mb-2" />
          {#if controls[label].type === 'switch'}
            <Switch bind:checked={values[label]}>
              <span class="text--secondary">{label}</span>
            </Switch>
          {:else if controls[label].type === 'slider'}
            <Slider bind:value={values[label]}>{label}</Slider>
          {:else if controls[label].type === 'select'}
            <Select
              class="mt-4"
              mandatory={controls[label].mandatory}
              bind:value={values[label]}
              items={controls[label].items}>
              {label}
              <div slot="item" let:item>
                <ListItem value={item}>{item}</ListItem>
              </div>
            </Select>
          {:else if controls[label].type === 'text'}
            <TextField bind:value={values[label]} class="mt-4">{label}</TextField>
          {/if}
        {/each}
      </div>
    </Col>
  </Row>
</div>

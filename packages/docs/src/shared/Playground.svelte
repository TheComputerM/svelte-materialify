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
  }

  .playground__content {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="playground rounded">
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
    <div style="margin-left:auto">
      <Button icon on:click={toggleTheme}>
        <Icon class="mdi mdi-invert mdi-invert-colors" />
      </Button>
    </div>
  </div>
  <Row noGutters>
    <Col {cols}>
      <div class="playground__content theme--{theme}">
        <slot />
      </div>
    </Col>
    <Col cols={12 - cols} class="pa-2">
      <h6 class="mb-3">Options</h6>
      {#each Object.keys(controls) as label}
        {#if controls[label].type === 'switch'}
          <Switch bind:checked={values[label]}>{label}</Switch>
        {:else if controls[label].type === 'slider'}
          <Slider bind:value={values[label]}>{label}</Slider>
        {:else if controls[label].type === 'select'}
          <Select bind:value={values[label]} items={controls[label].items}>
            {label}
            <div slot="item" let:item>
              <ListItem value={item}>{item}</ListItem>
            </div>
          </Select>
        {:else if controls[label].type === 'text'}
          <TextField bind:value={values[label]}>{label}</TextField>
        {/if}
      {/each}
    </Col>
  </Row>
</div>

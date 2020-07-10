<script>
  import ripplet from "../../actions/Ripple/ripplet";

  import Button from "../Button/Button.svelte";
  import Icon from "../Icon/Icon.svelte";

  let classes = "";
  export let visible = true;
  export let icon = false;
  export let closeIcon = "cancel";
  export let dense = false;
  export let outlined = false;
  export let text = false;
  export let tile = false;
  export let dismissible = false;
  export let border = false;
  export let coloredBorder = false;
  export { classes as class };

  export function dismiss() {
    visible = false;
  }
</script>

<style lang="scss" src="./index.scss">

</style>

{#if visible}
  <div
    role="alert"
    class="s-alert {classes}"
    class:dense
    class:outlined
    class:text
    class:tile>
    <div class="wrapper">
      {#if icon}
        <Icon class="mr-4 test">{icon}</Icon>
      {/if}
      <div class="content">
        <slot />
      </div>
      {#if dismissible}
        <Button icon ripple={{ appendTo: 'parent' }} on:click={dismiss}>
          <Icon>{closeIcon}</Icon>
        </Button>
      {/if}
      {#if border}
        <div
          class="alert-border border-{border}"
          class:colored={coloredBorder} />
      {/if}
    </div>
  </div>
{/if}

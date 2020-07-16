<script>
  export let divider = "/";
  export let large = false;
  export let items = [];

  let defaults = {
    disabled: false,
    href: "",
    link: true,
    text: "",
    class: "",
    props: {},
  };

  items = items.map((x) => Object.assign({}, defaults, x));
</script>

<style lang="scss" src="./index.scss">

</style>

<ul class="s-breadcrumbs" class:large>
  {#each items as item, i}
    {#if i !== 0}
      <li class="divider">
        {divider}
        <slot name="divider" />
      </li>
    {/if}
    <li>
      <slot {item}>
        {#if item.link}
          <a
            href={item.href}
            class="breadcrumb-item {item.class}"
            class:disabled={item.disabled}
            {...item.props}>
            {item.text}
          </a>
        {:else}
          <span
            class="breadcrumb-item {items.class}"
            class:disabled={item.disabled}
            {...item.props}>
            {item.text}
          </span>
        {/if}
      </slot>
    </li>
  {/each}
</ul>

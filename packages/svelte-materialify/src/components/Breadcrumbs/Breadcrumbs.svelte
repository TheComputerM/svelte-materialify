<script>
  // Classes to add to breadcrumb.
  let klass = '';
  export { klass as class };

  // Make the breadcrumb large
  export let large = false;

  // Array of objects for each breadcrumb
  export let items = [];

  const defaults = {
    disabled: false,
    href: '',
    text: '',
    class: '',
    props: {},
  };

  items = items.map((x) => ({ ...defaults, ...x }));
</script>

<style lang="scss" src="./Breadcrumbs.scss" global>
</style>

<ul class="s-breadcrumbs {klass}" class:large>
  {#each items as item, i}
    {#if i !== 0}
      <li class="divider">
        <!-- The slot used for divider -->
        <slot name="divider">/</slot>
      </li>
    {/if}
    <li>
      <slot {item}>
        {#if item.href}
          <a
            href={item.href}
            class="s-breadcrumb-item {item.class}"
            class:disabled={item.disabled}
            {...item.props}>
            {item.text}
          </a>
        {:else}
          <span
            class="s-breadcrumb-item {items.class}"
            class:disabled={item.disabled}
            {...item.props}>
            {item.text}
          </span>
        {/if}
      </slot>
    </li>
  {/each}
</ul>

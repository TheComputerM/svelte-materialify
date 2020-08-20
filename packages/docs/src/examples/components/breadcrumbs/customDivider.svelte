<script>
  import Breadcrumbs from "svelte-materialify/src/components/Breadcrumbs";
  import Icon from "svelte-materialify/src/components/Icon";

  let items = [
    { text: "Dashboard", href: "/components/breadcrumbs/" },
    { text: "Link 1", href: "/components/breadcrumbs/" },
    { text: "Link 2", disabled: true },
  ];
</script>

<Breadcrumbs {items}>
  <div slot="divider">-</div>
</Breadcrumbs>

<Breadcrumbs {items}>
  <div slot="divider">
    <Icon class="mdi mdi-arrow-right-bold" />
  </div>
</Breadcrumbs>

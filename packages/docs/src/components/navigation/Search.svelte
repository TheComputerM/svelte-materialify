<script>
  import routes from '@/util/routes';
  import SearchIndex from 'js-worker-search';
  import { TextField, Icon } from 'svelte-materialify/src';
  import { onMount } from 'svelte';

  let worker = null;
  onMount(() => {
    worker = new SearchIndex('text');
    function build(links) {
      links.forEach((link) => {
        if (link.text !== 'API') {
          if (link.items) build(link.items);
          else {
            worker.indexDocument(link.text, link.href);
          }
        }
      });
    }
    build(routes);
  });
</script>

<TextField class="pt-0 ma-0" style="max-width:450px" placeholder="Search" solo dense>
  <span slot="prepend">
    <Icon class="mdi mdi-magnify" />
  </span>
</TextField>

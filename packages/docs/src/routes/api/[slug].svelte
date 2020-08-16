<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`api/${params.slug}.json`);
    const doc = await res.json();
    if (res.status === 200) {
      return { doc, name: params.slug };
    } else {
      this.error(res.status, doc.message);
    }
  }
</script>

<script>
  import API from "../../components/API.svelte";
  import Layout from '../../helpers/Markdown/MDXLayout.svelte';

  export let doc;
  export let name;
</script>

<Layout title={name + ' API'}>
  <h1 class='text-h3 mb-6'>{name}</h1>
  <API {doc} />
</Layout>

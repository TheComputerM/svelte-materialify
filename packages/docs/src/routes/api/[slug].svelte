<script context="module">
  // eslint disable consistent-return
  export async function preload({ params }) {
    const res = await this.fetch(`api/${params.slug}.json`);
    const doc = await res.json();
    if (res.status === 200) {
      return { doc, name: params.slug };
    }
    this.error(res.status, doc.message);
    return { doc: '', name: '' };
  }
</script>

<script>
  import API from '../../components/API.svelte';
  import Layout from '../../helpers/Markdown/MDXLayout.svelte';

  export let doc;
  export let name;
</script>

<style global>
  section {
    margin-bottom: 48px;
  }
</style>

<Layout title={`${name} API`}>
  <h1 class='text-h3 mb-6'>{name} API</h1>
  <API {doc} />
</Layout>

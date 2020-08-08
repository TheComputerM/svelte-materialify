<script context="module">
  import {a, h2} from "./defaults";
  export { a, h2 };
</script>

<script>
  import { stores } from "@sapper/app";
  import { Row } from "svelte-materialify/src";
  import ReadyForMore from "./ReadyForMore.svelte";

  const { page } = stores();

  export let name;
  export let title = "";
  export let related = null;
</script>

<style global>
  h1 + p {
    font-size: 1.25rem;
    font-weight: 300;
  }
</style>

<svelte:head>
  <title>{title} | Svelte Materialify</title>
</svelte:head>

<section class="pa-4 pa-sm-6 pa-md-8">
  <h1 class="text-h3 mb-3">{name}</h1>
  <slot />
  {#if related}
    <h2>Ready For More?</h2>
    <Row class="justify-space-between">
      {#each related as item}
        <ReadyForMore
          href={Object.values(item)[0]}
          name={Object.keys(item)[0]} />
      {/each}
    </Row>
  {/if}
  <div class="mt-16 d-flex justify-space-between blue-grey-text text-darken-1">
    <p>
      <b>Edit This Page on</b>
      <a
        href="https://github.com/TheComputerM/svelte-materialify/tree/master/site/src/routes{$page.path}">
        GitHub
      </a>
    </p>
    <p class="text-body-2">
      <b>Last Updated:</b>
      __CurrentDateAndTime__
    </p>
  </div>
</section>

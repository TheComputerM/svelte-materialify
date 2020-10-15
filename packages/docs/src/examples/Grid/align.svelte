<script>
  import { Row, Col } from 'svelte-materialify/src';

  const alignments = ['start', 'center', 'end'];
</script>

<style>
  .container {
    padding: 8px;
    margin-bottom: 12px;
    background-color: var(--theme-app-bar);
  }
</style>

{#each alignments as align}
  <div class="container">
    <Row class="align-{align}" noGutters style="height:150px">
      <Col>
        <div class="pa-2">One of Three</div>
      </Col>
      <Col>
        <div class="pa-2">One of Three</div>
      </Col>
      <Col>
        <div class="pa-2">One of Three</div>
      </Col>
    </Row>
  </div>
{/each}

<div class="container">
  <Row noGutters style="height:150px">
    {#each alignments as align}
      <Col class="align-self-{align}">
        <div class="pa-2">One of Three</div>
      </Col>
    {/each}
  </Row>
</div>

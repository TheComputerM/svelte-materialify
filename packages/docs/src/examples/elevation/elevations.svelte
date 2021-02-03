<script>
  import { Row, Col } from 'svelte-materialify';
</script>

<Row class="pa-4">
  <!-- just iterating through 0 to 24 -->
  {#each Array(25) as _, n}
    <Col class="pa-12 ma-4 elevation-{n}">{n}</Col>
  {/each}
</Row>

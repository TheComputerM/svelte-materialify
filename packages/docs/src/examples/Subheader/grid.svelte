<script>
  import { Subheader, Button, Icon, Row, Col } from 'svelte-materialify/src';
</script>

<div class="ml-auto mr-auto elevation-3 rounded pa-3" style="width:400px">
  <div class="d-flex align-center">
    <Button fab text>
      <Icon class="mdi mdi-arrow-left" />
    </Button>
    <span class="text-h6 ml-4"> Albums </span>
    <div style="flex-grow:1" />
    <Button fab text>
      <Icon class="mdi mdi-magnify" />
    </Button>
  </div>
  <Subheader>May</Subheader>
  <Row>
    {#each Array(6) as _, i}
      <Col cols={4}>
        <img
          src="https://randomuser.me/api/portraits/men/{i}.jpg"
          alt="profile"
          height="100%"
          width="100%" />
      </Col>
    {/each}
  </Row>
  <Subheader>June</Subheader>
  <Row>
    {#each Array(6) as _, i}
      <Col cols={4}>
        <img
          src="https://randomuser.me/api/portraits/men/{i + 10}.jpg"
          alt="profile"
          height="100%"
          width="100%" />
      </Col>
    {/each}
  </Row>
</div>

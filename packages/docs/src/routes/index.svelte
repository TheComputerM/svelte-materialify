<script context="module">
  export function preload() {
    this.fetch('sitemap.xml');
  }
</script>

<script>
  import {
    Container,
    Button,
    Icon,
    Row,
    Col,
    Table,
    Footer,
  } from 'svelte-materialify/src';
</script>

<style lang="scss">
  .title {
    font-size: 1.25rem;
    font-weight: 300;
  }

  #home {
    background-image: linear-gradient(135deg, #6e45e2 0%, #88d3ce 100%);
    a {
      margin: 4px;
      flex-grow: 1;

      :global(.s-btn) {
        width: 100%;
      }
    }
    img {
      width: 192px;
    }
  }

  .footer-links > a {
    opacity: 0.8;
    margin: 8px;
    &:hover {
      opacity: 1;
    }
  }
</style>

<svelte:head>
  <title>Svelte Material Design Component Framework - Svelte Materialify</title>
</svelte:head>

<div class="theme--dark" id="home">
  <Container class="pt-6 pb-6">
    <Row>
      <Col class="d-flex justify-center flex-column" md="7">
        <h1 class="mb-4">Svelte <br /> Materialify</h1>
        <p class="mb-3 title grey-text text-lighten-4">
          Svelte Materialify is a Svelte UI Library with beautifully handcrafted Material
          Components. No design skills required — everything you need to create amazing
          applications is at your fingertips.
        </p>
        <div class="d-flex flex-wrap">
          <a href="/getting-started/installation/" class="blue-text text-darken-2">
            <Button size="x-large" class="white elevation-4">
              <Icon class="mdi mdi-speedometer mr-3" />
              Get Started
            </Button>
          </a>
          <a href="#why-svelte-materialify" class="white-text">
            <Button depressed outlined size="x-large">Why?</Button>
          </a>
          <a
            href="https://github.com/TheComputerM/svelte-materialify"
            target="_blank"
            class="black-text"
            rel="noopener">
            <Button depressed size="x-large" class="white">
              <Icon class="mdi mdi-github mr-3" />
              GitHub
            </Button>
          </a>
        </div>
      </Col>
      <Col class="d-flex justify-center align-center flex-column" md="5">
        <img src="svelte-logo.png" alt="Svelte" />
        <Icon size="64px" class="mdi mdi-plus mt-4 mb-4" />
        <img src="logo-192.png" alt="Svelte Materialify" />
      </Col>
    </Row>
  </Container>
</div>
<br />
<Container class="text-center mt-6 pa-4">
  <h2 class="text-h4 mb-2" id="why-svelte-materialify">Why Svelte Materialify</h2>
  <p class="title">
    Building applications with Svelte has never been easier. Supercharge your development
    process with all of the tools you need to succeed.
  </p>
  <div class="elevation-5 pb-1">
    <h3 class="text-h5 pt-3 pb-3">Svelte Framework Comparison 2020</h3>
    <Table class="text-left">
      <thead>
        <tr>
          <th>Features</th>
          <th>Svelte Materialify</th>
          <th>Svelte Material UI</th>
          <th>Smelte</th>
          <th>Svelte MUI</th>
          <th>Sveltestrap</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Customisable Components</td>
          <td>50+</td>
          <td>25+</td>
          <td>20+</td>
          <td>15+</td>
          <td>50+</td>
        </tr>
        <tr>
          <td>Full Accessibility Support</td>
          <td>
            <Icon class="mdi mdi-check-bold success-text" />
          </td>
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>Server Side Rendering support</td>
          <td>
            <Icon class="mdi mdi-check-bold success-text" />
          </td>
          <td>
            <Icon class="mdi mdi-check-bold success-text" />
          </td>
          <td>
            <Icon class="mdi mdi-check-bold success-text" />
          </td>
          <td>
            <Icon class="mdi mdi-check-bold success-text" />
          </td>
          <td>
            <Icon class="mdi mdi-check-bold success-text" />
          </td>
        </tr>
        <tr>
          <td>Long Term Support</td>
          <td>
            <Icon class="mdi mdi-check-bold success-text" />
          </td>
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>Custom Themes</td>
          <td>
            <Icon class="mdi mdi-check-bold success-text" />
          </td>
          <td />
          <td>
            <Icon class="mdi mdi-check-bold success-text" />
          </td>
          <td>
            <Icon class="mdi mdi-check-bold success-text" />
          </td>
          <td />
        </tr>
        <tr>
          <td>Updates*</td>
          <td>Weekly</td>
          <td>Bi-Monthly</td>
          <td>Monthly</td>
          <td>Bi-Monthly</td>
          <td>Bi-Monthly</td>
        </tr>
        <tr>
          <td>RTL Support</td>
          <td>Planned</td>
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>Business and Enterprise support</td>
          <td>Planned</td>
          <td />
          <td />
          <td />
          <td />
        </tr>
      </tbody>
    </Table>
    <p
      class="text-center font-italic text-subtitle-2 grey-text mt-2"
      aria-disabled="true">
      * Based on average commit frequency as of September 2020
    </p>
  </div>
</Container>

<Footer class="theme--dark">
  <div class="pa-4 text-center" style="width: 100%">
    <img src="logo-192.png" alt="Svelte Materialify" width="128px" />
    <div class="footer-links">
      <a
        href="https://github.com/TheComputerM/svelte-materialify"
        aria-label="GitHub"
        target="_blank"
        rel="noopener">
        <Icon class="mdi mdi-github" />
      </a>
      <a
        href="https://twitter.com/TheComputerM"
        aria-label="Twitter"
        target="_blank"
        rel="noopener">
        <Icon class="mdi mdi-twitter" />
      </a>
    </div>
    <div class="mt-2">
      <span class="text-body-2">
        Released under the
        <a href="https://opensource.org/licenses/MIT" rel="noopener"> MIT License </a>
      </span>
      <p class="mt-1">Copyright © 2020 Mudit Somani</p>
    </div>
  </div>
</Footer>

<script>
  import { Tabs, Tab, Window, WindowItem, AppBar } from 'svelte-materialify/src';

  let value = 0;
</script>

<AppBar>
  <span slot="title"> Title </span>
  <div slot="extension">
    <Tabs class="green-text" bind:value fixedTabs>
      <div slot="tabs">
        <Tab>Item 1</Tab>
        <Tab>Item 2</Tab>
        <Tab>Item 3</Tab>
      </div>
    </Tabs>
  </div>
</AppBar>

<Window {value} class="ma-4">
  <WindowItem>
    <h4>Item 1</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, diam et
      elementum gravida, arcu mi fermentum nibh, vel dapibus ligula orci non est. Morbi
      commodo sagittis finibus. Maecenas in volutpat massa. Nullam vulputate metus velit,
      quis interdum elit imperdiet ut. Suspendisse et sagittis erat, euismod vulputate
      enim. Etiam feugiat sit amet justo vitae commodo.
    </p>
  </WindowItem>
  <WindowItem>
    <h4>Item 2</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, diam et
      elementum gravida, arcu mi fermentum nibh, vel dapibus ligula orci non est. Morbi
      commodo sagittis finibus. Maecenas in volutpat massa. Nullam vulputate metus velit,
      quis interdum elit imperdiet ut. Suspendisse et sagittis erat, euismod vulputate
      enim. Etiam feugiat sit amet justo vitae commodo.
    </p>
  </WindowItem>
  <WindowItem>
    <h4>Item 3</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, diam et
      elementum gravida, arcu mi fermentum nibh, vel dapibus ligula orci non est. Morbi
      commodo sagittis finibus. Maecenas in volutpat massa. Nullam vulputate metus velit,
      quis interdum elit imperdiet ut. Suspendisse et sagittis erat, euismod vulputate
      enim. Etiam feugiat sit amet justo vitae commodo.
    </p>
  </WindowItem>
</Window>

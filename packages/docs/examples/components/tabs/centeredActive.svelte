<script>
  import { Tabs, Tab, TabContent } from 'svelte-materialify/src';
</script>

<Tabs centerActive>
  <div slot="tabs">
    {#each Array(20) as _, i}
      <Tab>Item {i + 1}</Tab>
    {/each}
  </div>

  {#each Array(20) as _, i}
    <TabContent>
      <br />
      Item Content
      {i + 1}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, diam et
        elementum gravida, arcu mi fermentum nibh, vel dapibus ligula orci non est. Morbi
        commodo sagittis finibus. Maecenas in volutpat massa. Nullam vulputate metus
        velit, quis interdum elit imperdiet ut. Suspendisse et sagittis erat, euismod
        vulputate enim. Etiam feugiat sit amet justo vitae commodo.
      </p>
    </TabContent>
  {/each}
</Tabs>

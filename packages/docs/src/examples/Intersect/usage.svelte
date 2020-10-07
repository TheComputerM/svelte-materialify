<script>
  import { Intersect } from 'svelte-materialify/src';

  let isIntersecting = false;
  function intersect({ detail }) {
    isIntersecting = detail.intersectionRatio >= 0.5;
  }
</script>

<div class="text-center">{isIntersecting}</div>
<div style="max-height:250px;overflow:auto;">
  <div class="pa-2 d-flex justify-center align-center" style="height:1000px;">
    <div
      class="pa-4 elevation-2"
      use:Intersect={{ threshold: [0, 0.5, 1] }}
      on:intersect={intersect}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat iusto perspiciatis
      vero maxime quam ex possimus, unde earum, enim odio tempore. Facilis fuga similique
      corrupti distinctio nesciunt earum exercitationem, tempore quibusdam pariatur esse
      iure? Debitis magni ratione eius, quisquam asperiores, officia nam adipisci a, cum
      vero quos. Ratione, quae dignissimos!
    </div>
  </div>
</div>

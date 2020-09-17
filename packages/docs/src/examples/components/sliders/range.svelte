<script>
  import { Slider } from 'svelte-materialify/src';
</script>

<Slider value={[10, 20]} thumb={[false, true]} persistentThumb>Range</Slider>

<Slider value={[10, 20, 40, 60]} connect={[false, true, false, true, false]}>
  Range
</Slider>

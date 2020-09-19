<script>
  import { Slider, Subheader } from 'svelte-materialify/src';

  let value = 50;

  const emojis = ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍'];
  const customThumb = (v) => emojis[Math.min(Math.floor(v / 10), 9)];
</script>

<Subheader>Show thumb when using slider</Subheader>
<Slider thumb bind:value />
<br />
<Subheader>Always show thumb label</Subheader>
<Slider thumb persistentThumb bind:value />
<br />
<Subheader>Custom thumb label</Subheader>
<Slider thumb={customThumb} persistentThumb bind:value />
<br />
<Subheader>Vertical</Subheader>
<Slider vertical thumb bind:value />

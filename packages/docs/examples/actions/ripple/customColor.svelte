<script>
  import { Ripple } from 'svelte-materialify/src';
  import Colors from 'svelte-materialify/src/utils/colors';

  const colors = ['red', 'green', 'blue', 'purple', 'yellow', 'orange'];
</script>

{#each colors as color}
  <div class="pa-3" use:Ripple={{ color: Colors[color].base, opacity: 0.3 }}>
    Item with '{color}' color ripple.
  </div>
{/each}

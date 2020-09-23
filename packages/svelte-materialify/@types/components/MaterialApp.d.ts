import { SvelteComponent } from 'svelte';

declare class MaterialApp extends SvelteComponent {
  $$prop_def: {
    theme?: string;
  } & Record<string, any>;
}

export default MaterialApp;

import { SvelteComponent } from 'svelte';

declare class Overlay extends SvelteComponent {
  $$prop_def: {
    class?: string;
    active?: boolean;
    opacity?: number;
    color?: string;
    index?: number;
    absolute?: boolean;
    fadeOptions?: any;
    style?: string;
  } & Record<string, any>;
}

export default Overlay;

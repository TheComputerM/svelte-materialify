import { SvelteComponent } from 'svelte';
import { TransitionConfig } from 'svelte/transition';

declare class MaterialApp extends SvelteComponent {
  $$prop_def: {
    class?: string;
    width?: string;
    active?: boolean;
    fixed?: boolean;
    absolute?: boolean;
    right?: boolean;
    mini?: boolean;
    clipped?: boolean;
    noBorder?: boolean;
    miniWidth?: string;
    clippedHeight?: string;
    transition?: (node: Element, options: Record<string, any>) => TransitionConfig; // Svelte transition???
    transitionOpts?: Record<string, any>;
    style?: string;
  } & Record<string, any>;
}

export default MaterialApp;

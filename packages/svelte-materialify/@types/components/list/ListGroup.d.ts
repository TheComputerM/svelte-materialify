import { SvelteComponent } from 'svelte';
import { TransitionConfig } from 'svelte/transition';

declare class ListGroup extends SvelteComponent {
  $$prop_def: {
    class?: string;
    active?: boolean;
    eager?: boolean;
    transition?: (node: Element, options: Record<string, any>) => TransitionConfig; // Svelte transition???
    transitionOpts?: Record<string, any>;
    offset?: boolean;
    disabled?: boolean;
    ripple?: any;
    style?: string;
  } & Record<string, any>;
}

export default ListGroup;

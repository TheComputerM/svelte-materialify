import { SvelteComponent } from 'svelte';

declare class AppBar extends SvelteComponent {
  $$prop_def: {
    class?: string;
    height?: string;
    tile?: boolean;
    flat?: boolean;
    dense?: boolean;
    prominent?: boolean;
    fixed?: boolean;
    absolute?: boolean;
    collapsed?: boolean;
    style?: string;
  } & Record<string, any>;
}

export default AppBar;

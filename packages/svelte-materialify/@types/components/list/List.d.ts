import { SvelteComponent } from 'svelte';

declare class List extends SvelteComponent {
  $$prop_def: {
    class?: string;
    dense?: boolean;
    disabled?: boolean;
    flat?: boolean;
    rounded?: boolean;
    nav?: boolean;
    outlined?: boolean;
    style?: string;
  } & Record<string, any>;
}

export default List;

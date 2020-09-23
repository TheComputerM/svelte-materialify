import { SvelteComponent } from 'svelte';

declare class ListItem extends SvelteComponent {
  $$prop_def: {
    class?: string;
    activeClass?: string;
    active?: boolean;
    value?: any;
    dense?: boolean;
    disabled?: boolean;
    selectable?: boolean;
    ripple?: any;
  } & Record<string, any>;
}

export default ListItem;

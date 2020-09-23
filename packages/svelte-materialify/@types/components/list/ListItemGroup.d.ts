import { SvelteComponent } from 'svelte';

declare class ListItemGroup extends SvelteComponent {
  $$prop_def: {
    class?: string;
    value?: any;
    multiple?: boolean;
    mandatory?: boolean;
    max?: number;
    style?: string;
  } & Record<string, any>;
}

export default ListItemGroup;

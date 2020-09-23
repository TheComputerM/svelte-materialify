import { SvelteComponent } from 'svelte';

declare class Icon extends SvelteComponent {
  $$prop_def: {
    class?: string;
    size?: string;
    rotate?: number;
    spin?: boolean;
    disabled?: boolean;
    path?: any;
    label?: any;
    style?: string;
  } & Record<string, any>;
}

export default Icon;

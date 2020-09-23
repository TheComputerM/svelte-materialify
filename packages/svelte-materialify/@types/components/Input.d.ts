import { SvelteComponent } from 'svelte';

declare class Input extends SvelteComponent {
  $$prop_def: {
    class?: string;
    value?: any;
    color?: string;
    dense?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    counter?: boolean;
    hint?: string;
    messages?: string[];
    messagesCount?: number;
    error?: boolean;
  } & Record<string, any>;
}

export default Input;

import { SvelteComponent } from 'svelte';

declare class TextField extends SvelteComponent {
  $$prop_def: {
    // Value of the text input.
    value?: string;
    // The color of the input when active.
    color?: string;
    // Changes the variant of the input to filled.
    filled?: boolean;
    // Changes the variant of the input to solo.
    solo?: boolean;
    // Changes the variant of the input to outlined.
    outlined?: boolean;
    // Removes any shadow from the input.
    flat?: boolean;
    // Reduces the input height.
    dense?: boolean;
    // Adds a border radius to the input.
    rounded?: boolean;
    // Add input clear functionality.
    clearable?: boolean;
    // Puts input in readonly state.
    readonly?: boolean;
    // Disable the input.
    disabled?: boolean;
    // The input placeholder content.
    placeholder?: string;
    // Hint text.
    hint?: string;
    /**
     * Creates counter for input length.
     * @type {number}
     */
    counter?: number;
    /**
     * An array of functions which take input value as arguement and return error message.
     * @type {Array}
     */
    rules: ((value) => string | false)[];
    // Delays validation till blur.
    validateOnBlur: boolean;
    // Error state of the input.
    error: boolean;
    // Id of the text input.
    id?: string;
  } & Record<string, any>;
}

export default TextField;

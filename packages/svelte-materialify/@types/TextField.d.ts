import { SvelteComponent } from './shared';

interface TextFieldProps {
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
  // Creates counter for input length.
  counter?: number;
  // An array of functions which take input value as arguement and return error message.
  rules?: ((value) => string | true)[];
  // Delays validation till blur.
  validateOnBlur?: boolean;
  // Error state of the input.
  error?: boolean;
  // Id of the text input.
  id?: string;
}

declare class TextField extends SvelteComponent<TextFieldProps> {}

export default TextField;

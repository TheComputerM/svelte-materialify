import { SvelteComponent } from './shared';

interface TextFieldProps {
  /** Classes to add to text field wrapper. */
  class?: string;
  /** Value of the text field. */
  value?: string;
  /** Color class of the text field when active. */
  color?: string;
  /** Whether text field is the `filled` material design variant. */
  filled?: boolean;
  /** Whether text field is outlined by elevation. */
  solo?: boolean;
  /** Whether text field is the `outlined` material design variant. */
  outlined?: boolean;
  /** Whether text field do not have elevation. */
  flat?: boolean;
  /** Whether text field height is reduced. */
  dense?: boolean;
  /** Whether text field has rounded corners. */
  rounded?: boolean;
  /** Whether text field has a clear button. */
  clearable?: boolean;
  /** Whether text field is read-only. */
  readonly?: boolean;
  /** Whether text field is disabled. */
  disabled?: boolean;
  /** Placeholder content for text field. */
  placeholder?: string;
  /** Hint text. */
  hint?: string;
  /** Display a counter set to a desired input length. */
  counter?: number;
  /** Error messages to display. */
  messages?: string[];
  /**
   * A list of validator functions that take the text field value and return an error
   * message, or `true` otherwise.
   */
  rules?: ((value: string) => string | true)[];
  /** Number of error messages to display. Defaults to one. */
  errorCount?: number;
  /** Whether to delay validation until blur. */
  validateOnBlur?: boolean;
  /** Whether text field has error. */
  error?: boolean;
  /** Whether text field has `success` class. */
  success?: boolean;
  /** Id of the text field. Defaults to a random uid. */
  id?: string;
  /** Styles to add to text field wrapper. */
  style?: string;
  /** Reference to text field element in the DOM. */
  inputElement?: Element;
}

declare class TextField extends SvelteComponent<TextFieldProps> {}

export default TextField;

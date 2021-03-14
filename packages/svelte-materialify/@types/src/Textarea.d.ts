import { SvelteComponent } from './shared';

interface TextareaProps {
  /** Value of the textarea. */
  value?: string | number | string[];
  /** Color class of the textarea when active. */
  color?: string;
  /** Whether textarea is the `filled` material design variant. */
  filled?: boolean;
  /** Whether textarea is outlined by elevation. */
  solo?: boolean;
  /** Whether textarea is the `outlined` material design variant. */
  outlined?: boolean;
  /** Whether textarea do not have elevation. */
  flat?: boolean;
  /** Whether textarea has rounded corners. */
  rounded?: boolean;
  /** Whether textarea has a clear button. */
  clearable?: boolean;
  /** Whether textarea is read-only. */
  readonly?: boolean;
  /** Number of initial textarea lines. Defaults to 5. */
  rows?: number;
  /** Whether textarea is allowed to grow with the text. */
  autogrow?: boolean;
  /** Whether textarea is not allowed to grow with the text. */
  noResize?: boolean;
  /** Whether textarea is disabled. */
  disabled?: boolean;
  /** Placeholder content for textarea. */
  placeholder?: string;
  /** Hint text. */
  hint?: string;
  /** Display a counter set to a desired input length. */
  counter?: number;
  /**
   * A list of validator functions that take the textarea value and return an error
   * message, or `true` otherwise.
   */
  rules?: ((value: string | number | string[]) => string | true)[];
  /** Number of error messages to display. Defaults to one. */
  errorCount?: number;
  /** Error messages to display. */
  messages?: string[];
  /** Whether to delay validation until blur. */
  validateOnBlur?: boolean;
  /** Whether textarea has error. */
  error?: boolean;
  /** Whether textarea wrapper has `success` class. */
  success?: boolean;
  /** Id of the textarea. Defaults to a random uid. */
  id?: string;
  /** Styles to add to textarea wrapper. */
  style?: string;
  /** Reference to textarea element in the DOM. */
  textarea?: Element;
}

declare class Textarea extends SvelteComponent<TextareaProps> { }

export default Textarea;

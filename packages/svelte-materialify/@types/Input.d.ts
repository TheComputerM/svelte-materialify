import { SvelteComponent } from './shared';

export interface InputProps {
  /** classes added to the input */
  class?: string;
  /** value of the input */
  value?: any;
  /** color of the input */
  color?: string;
  /** makes the input dense */
  dense?: boolean;
  /** makes the input readonly */
  readonly?: boolean;
  /** disables the input */
  disabled?: boolean;
  /**  */
  counter?: boolean | number;
  hint?: string;
  messages?: string[];
  messagesCount?: number;
  error?: boolean;
}

declare class Input extends SvelteComponent<InputProps> {}

export default Input;

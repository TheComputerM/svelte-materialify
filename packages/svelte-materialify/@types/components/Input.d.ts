import { LocalSvelteComponent } from '../shared';

interface InputProps {
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
}

declare class Input extends LocalSvelteComponent<InputProps> {}

export default Input;

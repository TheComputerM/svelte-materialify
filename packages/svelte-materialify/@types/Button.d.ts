import { SvelteComponent } from './shared';
import { RippleOptions } from './Ripple';

interface ButtonProps {
  fab?: boolean;
  icon?: boolean;
  block?: boolean;
  size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large';
  tile?: boolean;
  text?: boolean;
  depressed?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  active?: boolean;
  activeClass?: string;
  type?: 'button' | 'reset' | 'submit';
  ripple?: RippleOptions;
  style?: string;
}

declare class Button extends SvelteComponent<ButtonProps> {}

export default Button;

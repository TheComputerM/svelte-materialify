import { LocalSvelteComponent } from '../shared';

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
  ripple?: any;
  style?: string;
}

declare class Button extends LocalSvelteComponent<ButtonProps> {}

export default Button;

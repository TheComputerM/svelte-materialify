import { SvelteComponent } from './shared';
import { RippleOptions } from './Ripple';

interface ButtonProps {
  /** classes added to the button */
  class?: string;
  /** designates the button as a floating-action-button */
  fab?: boolean;
  /** designates the button as icon */
  icon?: boolean;
  /** makes button take 100% of the space */
  block?: boolean;
  /** determines the size of the button */
  size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large';
  /** removes the border radius if true */
  tile?: boolean;
  /** makes the background transparent */
  text?: boolean;
  /** removes the button box shadow. */
  depressed?: boolean;
  /** makes the background transparent and applies a thin border */
  outlined?: boolean;
  /** applies a large border radius on the button */
  rounded?: boolean;
  /** removes the ability to click or target the component */
  disabled?: boolean;
  /** makes the button active */
  active?: boolean;
  /** class to add to button when active */
  activeClass?: string;
  /** specifies the type of button */
  type?: 'button' | 'reset' | 'submit';
  /** options for the ripple action */
  ripple?: RippleOptions;
  /** styles added to the button */
  style?: string;
}

declare class Button extends SvelteComponent<ButtonProps> {}

export default Button;

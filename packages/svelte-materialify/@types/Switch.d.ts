import { SvelteComponent } from './shared';

export interface SwitchProps {
  /** Classes to add to switch wrapper. */
  class?: string;
  /** Color class of the switch when active. */
  color?: string;
  /** Value of the switch. */
  value?: string | number;
  /** Bind switch to a group. */
  group?: string[] | number[];
  /** Whether the switch is on. */
  checked?: boolean;
  /** Whether switch thumb is inside the switch track. */
  inset?: boolean;
  /** Whether switch height is reduced. */
  dense?: boolean;
  /** Whether switch is disabled. */
  disabled?: boolean;
  /** Id of the switch. Defaults to a random uid. */
  id?: string;
  /** Styles to add to switch wrapper. */
  style?: string;
  /** Reference to switch input element in the DOM. */
  inputElement?: Element;
}

declare class Switch extends SvelteComponent<SwitchProps> { }

export default Switch;

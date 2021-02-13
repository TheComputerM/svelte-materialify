import { SvelteComponent } from './shared';

export interface RadioProps<T extends string | number | string[] = string[]> {
  /** Classes to add to radio wrapper. */
  class?: string;
  /** Color of the radio when active. */
  color?: string;
  /** Disables the radio. */
  disabled?: boolean;
  /** Bind radio to a group. */
  group?: T;
  /** Value of the radio. */
  value?: T;
  /** Id of the radio. */
  id?: string;
  /** Styles to add to radio wrapper. */
  style?: string;
  /** DOM reference to radio input element. */
  inputElement?: Element;
}

declare class Radio extends SvelteComponent<RadioProps> {}

export default Radio;

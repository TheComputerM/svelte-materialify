import { SvelteComponent } from './shared';

interface SelectProps<T extends number[] | string[] = string[]> {
  /** Classes to add to select wrapper. */
  class?: string;
  /** Whether select is opened. */
  active?: string;
  /** Value of the select. */
  value?: T;
  /** List of items to select from. */
  items?: { name: string | number, value: string | number }[];
  /** Whether select is the `filled` material design variant. */
  filled?: boolean;
  /** Whether select is the `outlined` material design variant. */
  outlined?: boolean;
  /** Whether select is outlined by elevation. */
  solo?: boolean;
  /** Whether select's height is reduced. */
  dense?: boolean;
  /** Placeholder content for select. */
  placeholder?: string;
  /** Hint text. */
  hint?: string;
  /** Whether at least one item must be selected. */
  mandatory?: boolean;
  /** Whether you can select multiple options. */
  multiple?: boolean;
  /** Maximum number of selectable options. Defaults to unlimited. */
  max?: number;
  /** Whether selected options appear as chips. */
  chips?: boolean;
  /** Whether select is disabled. */
  disabled?: boolean;
  /**
   * Whether select closes on selection. Defaults to `true` on single select and `false`
   * on multiple select.
   */
  closeOnClick?: boolean;
  /** Convert the selected value for the underlying text field. */
  format?: (value: string | number | string[] | number[]) => string | number;
}

declare class Select extends SvelteComponent<SelectProps> { }

export default Select;

import { SvelteComponent } from './shared';

interface SelectItem { name: string | number, value: string | number }

interface SelectProps {
  /** Classes to add to select wrapper. */
  class?: string;
  /** Whether select is opened. */
  active?: boolean;
  /**
   * Value of the select.
   * If multiple is true, this will be an array; otherwise a single value.
   */
  value?: number[] | string[] | number | string | null;
  /** List of items to select from. */
  items?: SelectItem[];
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
  /** Whether the select list has to be filterable. */
  filterable?: boolean;
  /** Style to add to filter of the select list. */
  filterStyle?: string;
  /** Function to apply for filtering the select list: allowed values are 
   * 'startsWith', 'endsWith', 'contains' and 'exact'. Default to `null` when 
   * select is not filterable. */
  filterMode?: string | null;
  /** Value of the filter input. */
  filterValue?: string;
  /** Class to add to the select list div. */
  itemsPanelClass?: string;
  /**
   * Whether select closes on selection. Defaults to `true` on single select and `false`
   * on multiple select or when select is filterable.
   */
  closeOnClick?: boolean;
  /** Convert the selected value for the underlying text field. */
  format?: (value: string | number | string[] | number[]) => string | number;
}

declare class Select extends SvelteComponent<SelectProps> {
  $$slot_def: {
    item?: SelectItem,
  };
}

export default Select;

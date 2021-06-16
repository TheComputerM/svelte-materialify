import { SvelteComponent } from './shared';

interface TableProps {
  /** dense reduces standard gutter */
  dense?: boolean;
  /** Make the header be sticky and remain visible through scrolling */
  fixedHeader?: boolean;
  /** classes added to the table */
  class?: string;
  /** styles added to the table */
  style?: string;
}

declare class Table extends SvelteComponent<TableProps> {}

export default Table;

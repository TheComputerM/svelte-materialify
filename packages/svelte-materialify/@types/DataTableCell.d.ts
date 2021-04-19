import { SvelteComponent } from './shared';

interface DataTableCellProps {
  /** classes added to the table cell */
  class?: string;
  /** whether the cell contains numeric values */
  numeric?: boolean;
}

declare class DataTableCell extends SvelteComponent<DataTableCellProps> {}

export default DataTableCell;

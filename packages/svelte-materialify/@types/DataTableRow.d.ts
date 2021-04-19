import { SvelteComponent } from './shared';

interface DataTableRowProps {
  /** classes added to the table row */
  class?: string;
}

declare class DataTableRow extends SvelteComponent<DataTableRowProps> {}

export default DataTableRow;

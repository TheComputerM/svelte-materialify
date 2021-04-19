import { SvelteComponent } from './shared';

interface DataTableProps {
  /** classes added to the table */
  class?: string;
}

declare class DataTable extends SvelteComponent<DataTableProps> {}

export default DataTable;

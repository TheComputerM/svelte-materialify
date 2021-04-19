import { SvelteComponent } from './shared';

interface DataTableBodyProps {
  /** classes added to the table body */
  class?: string;
}

declare class DataTableBody extends SvelteComponent<DataTableBodyProps> {}

export default DataTableBody;

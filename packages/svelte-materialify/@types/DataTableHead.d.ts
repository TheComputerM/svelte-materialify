import { SvelteComponent } from './shared';

interface DataTableHeadProps {
  /** classes added to the table head */
  class?: string;
}

declare class DataTableHead extends SvelteComponent<DataTableHeadProps> {}

export default DataTableHead;

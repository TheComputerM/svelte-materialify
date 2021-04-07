import { SvelteComponent } from './shared';

interface DataTableCellProps {
  numeric?: boolean;
}

declare class DataTableCell extends SvelteComponent<DataTableCellProps> {}

export default DataTableCell;

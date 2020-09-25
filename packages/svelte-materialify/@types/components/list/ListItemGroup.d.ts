import { LocalSvelteComponent } from '../../shared';

interface ListItemGroupProps {
  value?: any;
  multiple?: boolean;
  mandatory?: boolean;
  max?: number;
  style?: string;
}

declare class ListItemGroup extends LocalSvelteComponent<ListItemGroupProps> {}

export default ListItemGroup;

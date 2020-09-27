import { SvelteComponent } from './shared';

interface ListItemGroupProps {
  value?: any;
  multiple?: boolean;
  mandatory?: boolean;
  max?: number;
  style?: string;
}

declare class ListItemGroup extends SvelteComponent<ListItemGroupProps> {}

export default ListItemGroup;

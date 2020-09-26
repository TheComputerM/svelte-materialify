import { LocalSvelteComponent } from '../../shared';

interface ListItemProps {
  class?: string;
  activeClass?: string;
  active?: boolean;
  value?: any;
  dense?: boolean;
  disabled?: boolean;
  selectable?: boolean;
  ripple?: any;
}

declare class ListItem extends LocalSvelteComponent<ListItemProps> {}

export default ListItem;

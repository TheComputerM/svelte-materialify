import { SvelteComponent } from './shared';
import { RippleOptions } from './Ripple';

interface ListItemProps {
  class?: string;
  activeClass?: string;
  active?: boolean;
  value?: any;
  dense?: boolean;
  disabled?: boolean;
  selectable?: boolean;
  ripple?: RippleOptions;
  style?: string;
}

declare class ListItem extends SvelteComponent<ListItemProps> {}

export default ListItem;

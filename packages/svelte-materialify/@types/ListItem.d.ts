import { SvelteComponent } from './shared';
import { RippleOptions } from './Ripple';

interface ListItemProps {
  /** classes added to the listitem */
  class?: string;
  /** classes added when active */
  activeClass?: string;
  /** specify active state */
  active?: boolean;
  /** value to use in ListItemGroup */
  value?: any;
  /** makes the listitem dense */
  dense?: boolean;
  /** disables the listitem */
  disabled?: boolean;
  /** makes text selectable if true */
  selectable?: boolean;
  /** there is no word wrap */
  multiline?: boolean;
  /** options for the ripple action */
  ripple?: RippleOptions;
  /** styles added to listitem */
  style?: string;
}

declare class ListItem extends SvelteComponent<ListItemProps> {}

export default ListItem;

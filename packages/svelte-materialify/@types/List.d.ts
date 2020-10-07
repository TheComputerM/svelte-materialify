import { SvelteComponent } from './shared';
import { RippleOptions } from './Ripple';
import { ItemGroupProps } from './ItemGroup';
import { TransitionConfig } from 'svelte/transition';

interface ListProps {
  /** classes added to the list */
  class?: string;
  /** reduces padding og list items */
  dense?: boolean;
  /** disables the list */
  disabled?: boolean;
  /** removes box shadow from the list */
  flat?: boolean;
  /** adds border radius to the list */
  rounded?: boolean;
  /** makes the list items navigation style */
  nav?: boolean;
  /** adds a thin outline to the list */
  outlined?: boolean;
  /** styles to add to the list */
  style?: string;
}

declare class List extends SvelteComponent<ListProps> {}

export default List;

interface ListGroupProps {
  /** classes added to the listgroup */
  class?: string;
  /** toggle the active state */
  active?: boolean;
  /** will force the components content to render on mount */
  eager?: boolean;
  /** transition when open or close */
  transition?: (node: Element, options: any) => TransitionConfig;
  /** options for transiton */
  transitionOpts?: any;
  /** offset of the listgroup */
  offset?: boolean | string | number;
  /** disables the listgroup */
  disabled?: boolean;
  /** options for the ripple action */
  ripple?: RippleOptions;
  /** styles added to the listgroup */
  style?: string;
}

declare class ListGroup extends SvelteComponent<ListGroupProps> {}

export { ListGroup };

interface ListItemGroupProps extends ItemGroupProps {}

declare class ListItemGroup extends SvelteComponent<ListItemGroupProps> {}

export { ListItemGroup };

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

export { ListItem };

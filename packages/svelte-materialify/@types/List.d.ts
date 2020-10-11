import { SvelteComponent } from './shared';

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

import { SvelteComponent } from './shared';

interface MenuProps {
  /** Classes to add to menu. */
  class?: string;
  /** The menu's active state. */
  active?: boolean;
  /** Makes the menu appear where the mouse was clicked. */
  absolute?: boolean;
  /** The transition function for the menu. */
  transition?: any;
  /** Options for the transition when menu opens. */
  inOpts?: any;
  /** Options for the transition when menu closes. */
  outOpts?: any;
  /** Offsets the menu on x-axis when true. */
  offsetX?: boolean;
  /** Offsets the menu on y-axis when true. */
  offsetY?: boolean;
  /** Offsets the menu on x-axis by some value. */
  nudgeX?: number;
  /** Offsets the menu on y-axis by some value. */
  nudgeY?: number;
  /** Designates whether menu should open on activator click. */
  openOnClick?: boolean;
  /** Designates whether menu should open and close on activator hover. */
  hover?: boolean;
  /** Designates if menu should close on outside-activator click. */
  closeOnClickOutside?: boolean;
  /** Designates if menu should close when its content is clicked. */
  closeOnClick?: boolean;
  /** Aligns the component with respect to its bottom. */
  bottom?: boolean;
  /** Aligns the component with respect to its right. */
  right?: boolean;
  /** Removes the border radius. */
  tile?: boolean;
  /** Disables the menu. */
  disabled?: boolean;
  /** The z-index of the menu */
  index?: number;
  /** Styles for the menu. */
  style?: string;
}

declare class Menu extends SvelteComponent<MenuProps> {}

export default Menu;

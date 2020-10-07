import { SvelteComponent } from './shared';

interface AppBarProps {
  /** classes added to the appbar */
  class?: string;
  /** height of the appbar */
  height?: string | number;
  /** removes the border radius */
  tile?: boolean;
  /** removes the box shadow */
  flat?: boolean;
  /** reduces the height */
  dense?: boolean;
  /** increases the height */
  prominent?: boolean;
  /** makes the positon of the appbar fixed */
  fixed?: boolean;
  /** makes the positon of the appbar absolute */
  absolute?: boolean;
  /** collapses the appbar reducing its maximum width */
  collapsed?: boolean;
  /** styles added to the appbar */
  style?: string;
}

declare class AppBar extends SvelteComponent<AppBarProps> {}

export default AppBar;

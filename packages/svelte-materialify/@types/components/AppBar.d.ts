import { LocalSvelteComponent } from '../shared';

interface AppBarProps {
  height?: string;
  tile?: boolean;
  flat?: boolean;
  dense?: boolean;
  prominent?: boolean;
  fixed?: boolean;
  absolute?: boolean;
  collapsed?: boolean;
  style?: string;
}

declare class AppBar extends LocalSvelteComponent<AppBarProps> {}

export default AppBar;

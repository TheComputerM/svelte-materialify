import { LocalSvelteComponent } from '../shared';

interface NavigationDrawerProps {
  width?: string;
  active?: boolean;
  fixed?: boolean;
  absolute?: boolean;
  right?: boolean;
  mini?: boolean;
  clipped?: boolean;
  noBorder?: boolean;
  miniWidth?: string;
  clippedHeight?: string;
  transition?: any;
  transitionOpts?: Record<string, any>;
  style?: string;
}

declare class NavigationDrawer extends LocalSvelteComponent<NavigationDrawerProps> {}

export default NavigationDrawer;
